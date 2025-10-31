import React from 'react'
import Post from '../../../components/comman/Post/Post'
import { Stack } from '@mui/material'
const Repost = () => {
  return (
    <>
      <Stack flexDirection={"column"}
   alignItems={'center'}
   gap={2}
   mb={10}
   width={'800px'}
   mx={'auto'}
   justifyContent={"space-between"}
   >
    <Post/>

   </Stack>
    </>
  )
}

export default Repost
