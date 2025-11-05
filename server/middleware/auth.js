const User = require("../models/user-model");
const jwt = require("jsonwebtoken");
//next is basically use dto move towards the next function
const auth = async(req,res,next)=>{
    try{

        const token = req.cookies.token|| req.header("Authorization")?.replace("Bearer ", "");
        console.log(token);
        if(!token){
            return res.status(400).json({msg:`no token in auth!`});
        }
        const decodedToken = jwt.verify(token,process.env.JWT_SECRET);
        console.log("decodedToken");
        if(!decodedToken){
            return res.status(400)
            .json({msg:"token not verified, Error"});
        }
        const user= await User.findById(decodedToken.token)
        .populate('followers')
        //.populate('threads')
        //.populate('replies')
        //.populate('reposts');


        
        if(!user){
            return res.status(400).json({msg:'no user found!'});
        }
        //.user ki jageh kuch bhi likh skte hai
        req.user=user;
        next();
    }
    catch(err){
        return res.status(400).json({msg:"error in auth!",err:err.message});
    }
};
module.exports=auth;