const User=require('../models/user-model');
const bcrypt = require("bcrypt");
const jwt=require("jsonwebtoken");
exports.signin=async (req,res) => {
    try{
        const {userName,email,password}=req.body;
        //agar user exist ni krta hoga tou error
        if(!userName||!email||!password){
            return res 
            .status(400)
            .json({msg:"useName ,email and password are required !"});
        }        
        //check using find one ki user exist hai ki nhi 
        const userExist = await User.findOne({email});
        if(userExist){
           return res
           .status(400)
           .json({msg:"User is already registered!please Login"});
        }
        //if not then we make a new user using hashed password 
        const hashedPassword=await bcrypt.hash(password,10);
        if(!hashedPassword){
          return res.status(400).json({msg:"Error in password hashing!"});   
        }

        //nya user banaya
        const user=new User({
            userName,
            email,
            password: hashedPassword,
        });
        
        //user save kiye ye hamne
        const result = await user.save();

        // agar result mano nhi chala tou 
        if(!result){
            return res.status(400).json({msg:"Error while saving user !"});
        }
        //ek token ko sign krdiya or usse accesstoken mai sign krdiya 
        const accessToken =jwt.sign({token:result._id},process.env.
            JWT_SECRET,{
                expiresIn:'30d'
            });
            if(!accessToken){
               return res.status(400).json({msg:"Error while generating token!"});
            }
            //ab token generate hogya hai tou usse token mai store kr dere hai
            res.cookie('token',accessToken,{
                maxAge:1000*60*60*24*30,
                httpOnly:true,
                sameSite:"none",
                secure:true,
            });
            
        res.status(201).json({msg:`user signed in sucessfully!hello ${result?.userName}`});
    }catch(err){
        res.status(400).json({msg:'error in signin !',err : err.message});
    }
};