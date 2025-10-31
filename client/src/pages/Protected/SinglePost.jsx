import React from 'react'
import Post from '../../components/comman/Post/Post'
import Comments from '../../components/comman/Comments/Comments'
import { Stack } from '@mui/material'
import TextFeild from '../../components/comman/TextFeild/TextFeild'
import { useState } from 'react'
const SinglePost = () => {

    const [comment,setComment]=useState("");
  return (
   <>
   <Stack flexDirection={"column"}
   alignItems={'center'}
   gap={2}>
    <Post/>
    <Stack flexDirection={"column"}
     width={"80%"}
     mx={"auto"}
   gap={2}>
    <Comments/>
     </Stack>
    <TextFeild variant="outlined" autoFocus placeholder="comment here..."if="comment"
    sx={{width:'50%',mx:'auto',my:5,p:1}}
    onchange={(e)=>setComment(e.target.value)}/>
   </Stack>
   </>
  )
}

export default SinglePost
