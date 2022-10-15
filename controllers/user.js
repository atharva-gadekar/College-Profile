const User = require("../models/user");
const Tag = require("../models/tags");
const College = require("../models/college");

async function editDetails(req, res) {
  if (!req.authenticated) {
    return res.status(403).json({ error: "Unauthorized" });
  }
  let links = req.body.linkUrl,
    linknames = req.body.linkname,
    linkStatus = req.body.private,
    hasMd = req.body.showMd,
    course = req.body.course,
    courseLength = req.body.courseLength,
    admissionYear = req.body.admissionYear,
    tags = req.body.tags,
    md = req.files.md,
    profile = req.files.profile,
    banner = req.files.banner;
  let user = req.user;
  if (md) {
    user.Md = md.location;
  }
  if (profile) {
    user.profile = profile.location;
  }
  if (banner) {
    user.banner = profile.banner;
  }
  user.hasMd = hasMd;
  user.course = course;
  user.courseLength = courseLength;
  user.admissionYear = admissionYear;
  if (typeof links === typeof "") {
    user.links = [
      {
        name: linknames,
        url: links,
        private: Boolean(linkStatus),
      },
    ];
  } else {
    user.links = [];
    for (let i = 0; i < links.length; i++) {
      user.links.push({
        name: linknames[i],
        url: links[i],
        private: Boolean(linkStatus[i]),
      });
    }
  }
  if (typeof tags === typeof "") {
    let tag = await Tag.findOne({
      name: tags,
    });
    user.tags = [tag._id];
  } else {
    user.tags = [];
    for (let i = 0; i < tags.length; i++) {
      let tag = await Tag.findOne({
        name: tags,
      });
      user.tags.push(tag._id);
    }
  }
  try {
    await user.save();
    return res.status(201).json(user);
  } catch (e) {
    return res.status(400).json({ error: e });
  }
}

async function getUser(req, res) {
  let currUser = null;
  if (req.authenticated) {
    currUser = req.user;
  }
  const username = req.params.username;
  let user = await User.findOne({ username: username })
    .populate("college")
    .select("-friends -friendRequests -hash -salt");
  let isfriend = false;
  if (
    (currUser && user.friends.includes(currUser._id)) ||
    currUser._id === user._id
  ) {
    isfriend = true;
  }
  if (!isfriend) {
    for (let i = 0; i < user.links.length; i++) {
      if (user.links[i].private) {
        delete user.links[i];
        i--;
      }
    }
  }
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ error: "User not found" });
  }
}

async function getFriends(req, res) {
  const username = req.params.username;
  let userdet = await User.findOne({ username: username })
    .populate({
      path: "friends",
      select: "-links -hasMd -Md -friendRequests -hash -salt",
    })
    .select("-links -hasMd -Md -friendRequests -hash -salt")
    .values();
  if (userdet) {
    res.status(200).json(userdet);
  } else {
    res.status(404).json({ error: "Friend not Found" });
  }
}

async function newFriendRequest(req, res) {
  if (!req.authenticated) {
    return res.status(403).json({ error: "Unauthorized" });
  }
  let user = req.user;
  const username = req.params.username;
  let fuser = User.findOne({ username: username });
  if (!fuser) {
    return res.status(404).json({ error: "User not found" });
  }
  if (user.friends.includes(fuser._id)) {
    return res.status(400).json({ error: "Already friends" });
  }
  if (user.friendRequests.includes(fuser._id)) {
    return res.status(400).json({ error: "Already friend Request sent" });
  }
  user.friendRequests.push(fuser._id);
  await user.save();
  return res.status(201).json(user);
}

async function acceptRequest(req, res) {
  if (!req.authenticated) {
    return res.status(403).json({ error: "Unauthorized" });
  }
  let user = req.user;
  const username = req.params.username;
  let fuser = User.findOne({ username: username });
  if (!fuser) {
    return res.status(404).json({ error: "User not found" });
  }
  if (user.friends.includes(fuser._id)) {
    return res.status(400).json({ error: "Already friends" });
  }
  if (user.friendRequests.includes(fuser._id) === false) {
    return res.status(400).json({ error: "No such friend Request sent" });
  }
  user.friends.push(fuser._id);
  user.friendRequests.remove(fuser._id);
  await user.save();
  return res.status.json(user);
}

async function rejectRequest(req, res) {
  if (!req.authenticated) {
    return res.status(403).json({ error: "Unauthorized" });
  }
  let user = req.user;
  const username = req.params.username;
  let fuser = User.findOne({ username: username });
  if (!fuser) {
    return res.status(404).json({ error: "User not found" });
  }
  if (user.friends.includes(fuser._id)) {
    return res.status(400).json({ error: "Already friends" });
  }
  if (user.friendRequests.includes(fuser._id) === false) {
    return res.status(400).json({ error: "No such friend Request sent" });
  }
  user.friendRequests.remove(fuser._id);
  await user.save();
  return res.status.json(user);
}

async function removeFriend(req, res) {
  if (!req.authenticated) {
    return res.status(403).json({ error: "Unauthorized" });
  }
  let user = req.user;
  const username = req.params.username;
  let fuser = User.findOne({ username: username });
  if (!fuser) {
    return res.status(404).json({ error: "User not found" });
  }
  if (user.friends.includes(fuser._id) === false) {
    return res.status(400).json({ error: "User not friend" });
  }
  user.friends.remove(fuser._id);
  await user.save();
  return res.status(200).json(user);
}

async function searchUser(req, res) {
  let name = req.query.name,
    college = req.query.college,
    year = req.query.year,
    tag = req.query.tag;
  let query = {
    $text: {
      $search: name,
      $caseSensitive: false,
    },
  };
  if (college && college !== "") {
    let college = College.findOne({ name: college });
    if (college) {
      query["college"] = college._id;
    }
  }
  if (year && year !== "") {
    query["admissionYear"] = Number(year);
  }
  if (tag && tag !== "") {
    let tag = Tag.findOne({ name: tag });
    if (tag) {
      query["tag"] = tag._id;
    }
  }
}
module.exports = {
  editDetails: editDetails,
  getUser: getUser,
  newFriendRequest: newFriendRequest,
  acceptRequest: acceptRequest,
  rejectRequest: rejectRequest,
  searchUser: searchUser,
};
