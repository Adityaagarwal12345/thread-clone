import { Typography } from '@mui/material';
import { Stack,TextField,Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'; 
import { useMediaQuery } from '@mui/material';
import React from 'react'  
import { useSgninMutation } from '../redux/service';
//signinuser is a function and signinuserdata is the data returned from the function
const Register = () => {
    const _700 = useMediaQuery("(min-width:300px)");//resposniveness manlo agar ui 700 px se kam hai tou kuch ni hoga
    const [signinUser,signinUserData] = useSgninMutation();

    const [login,setLogin]=useState(false);
    const [userName,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
//implementing use state hook for toggle login and register form
    const toggleLogin=()=>{
        setLogin((pre)=>!pre);
    }; 
     const handleLogin=()=>{
        const data={
            email,
            password
        };
        console.log(data);
    };
     const handleRegister=()=>{
         const data={
            userName,
            email,
            password
        };
        await signinUser(data);
    };

    useEffect(()=>{
        if(signinUserData.isSuccess){
        console.log("user registered successfully");
    }
},[signinUserData.isSuccess]);//ye check krega ki signin data true hai tou ye log krega vrna kuch ni hoga or if its logs and its refresh the log will disappear

  return <>
  <Stack width={'100%'}
    height={'100vh'}    
    flexDirection={'row'}       
    justifyContent={'center'}   
    alignItems={'center'}   
    sx={_700 ?{
        backgroundImage:`url('/images/register-bg.jpg')`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
    }
: null
}
    >
         <Stack
         flexDirection={'column'}
         width={_700 ? '40%':'90%'}
         gap={3}
         p={5}
         mt={_700 ? 20 : 0}
         borderRadius={5}
         boxShadow={'7px 7px 7px gray'}>
            <Typography variant="h5" 
            textAlign={'center'} 
            fontSize={_700 ? '1.5rem':'1rem'}

            fontWeight={'bold'}>
                {login ? "Login  with email":"register with email"}
            </Typography>
            {
                login ?null:(
                    <TextField 
                    label="Full Name" 
                    variant="outlined" 
                    placehoder="Enter your userName..."fullWidth
                    onChange={(e)=>setUsername(e.target.value)}
                     />       
                )}

            <TextField label="Email" 
            variant="outlined" 
            placeholder="Enter your email"
            onChange={(e)=>setEmail(e.target.value)}/>

            <TextField label="Password"
            placeholder='type your password'
             type="password" 
             variant="outlined"
             onChange={(e)=>setPassword(e.target.value)} 
             />     
            <Button variant="contained" color="primary" fullWidth
            size="large"
            width={'100%'}>
                {login ? "Login":"Register"}
            </Button>
            <Typography 
            variant="subtutle2" 
            fontSize={_700 ? "1.3rem":"1rem"}
            textAlign={'center'}>
                {login ? "Don't have an account? " : "Already have an account? "}
                <span className="login-link" onClick={toggleLogin}>{" "}
                    {login ? "Register":"Login"}
                </span>
            </Typography>   

         </Stack>
    
    
    
     </Stack>
  </>
}

export default Register;
