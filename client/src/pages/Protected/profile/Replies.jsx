import { useMediaQuery } from '@mui/material'

import React from 'react'

const Replies = () => {

 const _700 = useMediaQuery("(min-width:700px)");
  return (
       
 <>
   <Stack
   flexDirection={"column"}
   gap={2}
   width={_700 ? "800px":"90%"}
   mx={"auto"}>
    {/* Replies content goes here */}
    <Comments/>
   </Stack>
 </>
  )
}

export default Replies
