import React from 'react'
import Post from '../../../components/comman/Post/Post'
import { Stack } from '@mui/material'
import { useMediaQuery } from '@mui/material'  
const Threads = () => {

    const _700 = useMediaQuery("(min-width:700px)");    
  return (
   <>
   <Stack flexDirection={"column"}
   alignItems={'center'}
   gap={2}
   mb={10}
   width={_700 ? "800px":"90%"  }
   mx={'auto'}
   justifyContent={"space-between"}
   >
    <Post/>

   </Stack>
   </>
  )
}

export default Threads
