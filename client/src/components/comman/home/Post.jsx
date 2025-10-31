import { Typography, Stack } from '@mui/material'
import{IoIosMore} from'react-icons/io'
import React from 'react'
import PostOne from './post/PostOne'
import Posttwo from './post/Posttwo'

const Post = () => {
  return (<>
    <Stack
    flexdirection={'row'}justifyContent={'space-between'}
    borderBottom={"3px solid gray"}
    p={2}
    mx={'auto'}
    sx={{
        ":hover":{
            cursor:"pointer",
            boxShadow:'7px 7px 7px gray',   
        },
        transition:'all ease-in-out 0.3s',
    }}>
        <Stack flexDirection={'row'} gap={2}>
           <PostOne/>
           <Posttwo/>   
        </Stack>
        <Typography>
            This is my first post
        </Typography>
    </Stack>
    </>
  )
  
}

export default Post;
