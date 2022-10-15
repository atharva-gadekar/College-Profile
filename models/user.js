const mongoose = require("mongoose");
const userschema = mongoose.Schema(
  {
    name: {
      type: String,
      text: true,
    },
    email: {
      type: String,
      text: true,
    },
    username: {
      type: String,
      unique: true,
    },
    college: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "College",
    },
    links: [
      {
        name: String,
        url: String,
        private: {
          type: Boolean,
          default: false,
        },
      },
    ],
    hasMd: Boolean,
    Md: String,
    profile: String,
    banner: {
      type: "String",
      default:
        "https://images.unsplash.com/photo-1508247967583-7d982ea01526?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9",
    },
    friends: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    admissionYear: Number,
    course: String,
    courseLength: Number,
    friendRequests: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    tags: [
      {
        type: mongoose.Schema.Type.ObjectId,
        ref: "Tag",
      },
    ],
    hash: String,
    salt: String,
  },
  { timestamps: true }
);
const User = mongoose.model("User", userschema);
module.exports = User;
