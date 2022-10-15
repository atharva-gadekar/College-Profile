const College = require("../models/college");

async function newCollege(req, res){
    let name = req.body.name,
    domain = req.body.domain,
    coursenames = req.body.coursename,
    courselengths = req.body.courselength;

    if ((!name || name==="")||
        (!domain || domain==="")||
        (!coursenames || coursenames==="")||
        (!courselengths || courselengths==="")){
            return res.status(400).json({error: "Invalid Form Data"});
        }
    let newCollege=new College({
        name: name,
        domain: domain
    });
    if(typeof(coursenames)===typeof("")){
        newCollege.courses=[
            {
                name:coursenames,
                length:courselengths,
            }
        ]
    }else{
        newCollege.courses=[];
        for(let i=0;i<coursenames.length;i++){
            newCollege.courses.push({
                name:coursenames[i],
                length:courselengths[i],
            })
        }
    }
    try{
        await newCollege.save();
    }catch(e){
        return res.status(400).json({error: e.message});
    }
      return res.status(201).json(newCollege);
}

async function getAllColleges(req,res){
        let colleges=await College.find().values();
        return res.status(200).json({
            data:colleges,
        });
}
async function updateCollege(req,res){
    let college=req.user;
    let coursenames = req.body.coursename,
    courselengths = req.body.courselength;
    if (
    (!coursenames || coursenames==="")||
    (!courselengths || courselengths==="")){
        return res.status(400).json({error: "Invalid Form Data"})};
        if(typeof(coursenames)===typeof("")){
            college.courses=[
                {
                    name:coursenames,
                    length:courselengths,
                }
            ]
        }else{
            college.courses=[];
            for(let i=0;i<coursenames.length;i++){
                college.courses.push({
                    name:coursenames[i],
                    length:courselengths[i],
                })
            }
        }
        try{
            await college.save();
        }catch(e){
            return res.status(400).json({error: e});
        }
          return res.status(201).json(college);
}
async function getCollege(req,res){
    const id=req.params.id;
    const college=await College.findById(id).values();
    if(college){
        return res.status(200).json(college);
    }else{
        return res.status(404).json({error:"College not found"});
    }
}
module.exports={newCollege,updateCollege,getAllColleges};