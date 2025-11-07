import { Avatar, Stack } from '@mui/material'
import { useMediaQuery } from "@mui/material";  
import React from 'react'

const PostOne = () => {
    const _700 = useMediaQuery("(min-width:700px)");
  return (
   <>
   <Stack flexDirection={"column"}
   alignItems={'center'}
   justifyContent={"space-between"}
   >
    <Badge overlap="circular"
    anchorOrigin={{vertical:"bottom",horizontal:"right"}}
    badgeContent={
        <Avatar alt="AJ"
        src="" sx={{
            width:_700 ?20:14,
            height:_700?20:14,
            bgcolor:'green',
            position:'relative',
            right:_700 ?4:0,
            bottom:_700 ?4:0
        }}
    >
      {" "}
      +{" "}
      </Avatar>
    }
    >
        <Avatar alt="AJ" src="" sx={{
            width:_700 ?100:70,
            height:_700?100:70,
        }}/>        
    </Badge>
    <Stack flexDirection={"column"}
    alignItems={"center"}
    gap={_700 ?1:0.5}
    mt={1}
    >
        <h3 style={{margin:0,fontSize:_700 ?"1.2rem":"0.9rem"}}>aditya agd</h3>
        <p style={{margin:0,color:"gray",fontSize:_700 ?"1rem":"0.8rem"}}>@adityaagd</p>
    </Stack>
   </Stack>
   </>
  )
}

export default PostOne
