import React from 'react'
import {Avatar, Stack, Typography} from '@mui/material';
const input = () => {
  return (
    <Stack 
    flexDirection={'row'}
    alignItems={'center'}
    width={'70%'}
    height={28}
    justifyContent={'space-between '}
    p={3}
    borderBottom={"2px solid lightgray"}
    my={5}
    mx={"auto"}
    >  
      <Stack flexDirection={'row'} alignItems={'center'} gap={2}>
        <Avatar src="" alt="AJ"/>
        <Typography color={'gray'}>start a thread</Typography>
      </Stack>
      <Button size="medium"
      sx={{
        bgcolor:'gray',
        color:'white',
        ":hover":{
          bgcolor:'black',cursor:'pointer'
        }
      }}>Post</Button>
    </Stack>
  )
}

export default input
