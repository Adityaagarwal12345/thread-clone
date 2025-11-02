const express=require('express');
const {signin}=require("./controllers/user-controller")
const router=express.Router();

router.get('/test', (req, res) => {
  res.send('Route working fine 🚀');
});

router.post('/signin',signin);


module.exports=router;