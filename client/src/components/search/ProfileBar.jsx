import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'

const ProfileBar = () => {
  return (
  <>
  <Stack flexDirection={"row"} justifyContent={"space-between"}
  px={1}
  py={2}
  mx={'auto'}
  boxShadow={"5px 5px 5px gray"}
  width={"90%"}
  borderRadius={"15px"}
  sx={{":hover":{cursor:"pointer"}}}
  >
    <Stack flexDirection={'row'}gap={2}>
        <Avatar src="AJ" alt=""/>
        <Stack flexDirection={'column'} gap={0.6}>
            <Typography variant="h6" fontWeight={"bold"} fontSize={"1rem"}>
                AJ
            </Typography>
            <Typography variant="body2" color={"gray"} fontSize={"0.8rem"}>
                @aj123
            </Typography>
            </Stack>
    </Stack>
    <Button size="medium" sx={{border:"1px solid blue", color:"blue", textTransform:"none"}}>Follow</Button>
  </Stack>
  </>
  )
}

export default ProfileBar
