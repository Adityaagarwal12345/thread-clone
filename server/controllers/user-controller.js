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



//theory of code 

//sign in name ka function banaya usme try catch block kiya agar shi hai tou try kro vrna catch kro
//ye teeno cheez mai req.body se manguga pow name or email 
// agar ue teenocheeze aarhi hai tou we checked ki hi phele se tou exist ni krta hai or krta hai tou we checked ki user tou phele se hi register  hai aap login kijiiye ]
//ab manlo agar user register nhi hai tou sabse phele uska pw hashed krenge using bcrypt librray ab error bhejdo agar ni ho rha tou 
//nya user banaya 
//store karaya result mai //ab result ni hua tou error or 
//user save tou ek toke  generate krrnege jsonweb token ki madad se isko hm 30 din ke liye store krdenge user ka 
//ab maaanlo token generate hogya tou hm cookies mai save krdenge
//agar hogya tou hm store krdenge 

exports.login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email||!password){
            res.status(400).json({
                msg:"Email and password are not valid"
            });
        }
        const userExists=await User.findOne({email})
        if(!userExists){
            return res.status(400).json({msg:"please signup first!"});
        }
        const checkpassword=await bcrypt.compare(password,userExists.password);
        if(!checkpassword){
            return res.status(400).json({msg:"Incorrect credential!"})
        }
        const accessToken =jwt.sign({token:userExists._id},process.jwt.env.JWT_SECRET,{expiresIn:'30d'}

        );
        if(!accessToken){
            return res.status(400).json({msg:"token not generated in login!"});
        }
        res.cookie('token',accessToken,{
            maxAge:1000 * 60* 60 *24*30,
            httpOnly:true,
            secure:true,
            sameSite:"none",
        })
        res.status(200).json({msg:"user logged in successfully!"});

    }catch(err){
        res.status(400).json({msg:"error in login!",err:err.message});
    }
};

//ab banayenge userdetails the hai na tou ab hmko krna hoga


exports.userDetails = async(req,res)=>{
    //params ka mtlb hota hai url mai data sent krna 
    //just like hm body mai sent krte hai vesi hm log ab url mai send krenge data
    try{
        const {id}=req.params
        if(!id){
            return res.status(4000).json({msg:"id is required!"});
        }
        //-password ka mtlb  pw ko mat select kro
        const user = await User.findById(id)
        .select('-password')
        .populate('followers')
        .populate({path:"threads",populate:[{path:"likes"},
            {path:'comments'},{path:'admin'}]
        })
        .populate({path:'replies',populate:{path:"admin"}}) 
        .populate({path:'reposts',populate:[{path:"likes"},{path:
            "comments" },{path:"admin"}]});
            res.status(200).json({msg:"User details fetched!",user});
    } catch(err){
        res.status(400).json({msg:"error in user details",err:err.message});
    }
};

 