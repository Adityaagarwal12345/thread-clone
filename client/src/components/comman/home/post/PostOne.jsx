import { Avatar } from '@mui/material'
import React from 'react'

const PostOne = () => {
  return (
   <>
   <Stack flexDirection={"column"}
   alignItems={'center'}
   justifyContent={"space-between"}
   >
    <Badge overlap="circular"
    anchorOrigin={{vertical:"bottom",horizontal:"right"}}
    badgeContent={
        <Avatar alt="+"
        src="" sx={{
            width:20,height:20,bgcolor:'green'}}/>
    }></Badge>
   </Stack>
   </>
  )
}

export default PostOne
