import React from 'react'
import { Dialog, Typography } from '@mui/material';
import { useMediaQuery } from '@mui/material'
import {  Box } from '@mui/system';
import { RxCross2 } from 'react-icons/rx';
import {FaImages} from "react-icons/fa";
import { useState } from 'react';
const AddPost = () => {

    const _700 = useMediaQuery("(min-width:700px)");
    const _500 = useMediaQuery("(min-width:500px)");
    const _300 = useMediaQuery("(min-width:300px)");

    const [text,setText]=useState();
    const [media,setMedia]=useState();
    const mediaRef=useRef();
    
    const handleClose = ()=>{}
    const handleMediaRef=()=>{
        mediaRef.current.click();
    }
    //this function check when we click post the page will automatically post the data
        const handlePost=()=>{}
  return (
    <div>
      <Dialog open={true}
       onClose={handleClose}
        fullWidth fullScreen={_700 ? false:true}>
         <Box position={'absolute'} 
         top={20} 
         right={20} 
         onclick={handleClose}>
            <RxCross2 size={_300 ?30:20} className="image-icon" />
         </Box>
         <DialogTitle textAlign={"center"} mb={5}>
            New Thread 
         </DialogTitle>
         <DialogContent>
           <Stack flexDirection={"row"} gap={2} mb={5}>
            <Avatar src="" alt=""/>
            <Stack>
                <Typography
                variant={_500 ? "h5":"h6"}
                fontWeight={"bold"}
                fontSize={_300 ? "1.2rem":"1rem"}>  
                    aditya agd
                </Typography>
               <textarea  cols={_500 ? 40:25}
                rows={2}
                className="text1"
                placeholder="Start a Thread..."
                autoFocus 
                onChange={(e)=> setText(e.target.value)}/>   
                {
                    media ? (    
                <img src={ URL.createObjectURL(media)}
                 alt=""
                 if="url-img" 
                 width={_500?300:_300?200:100}
                 height={_500?300:_300?200:100}
                />
                    ):null
                }
                <FaImages 
                 size={28}
                 className="image-icon"
                 onClick={handleMediaRef}
                />
                <input 
                 type ="file" 
                 accept="image/*" 
                 className="file-input"
                 ref={mediaRef}
                 onChange={(e)=>setMedia(e.target.files[0])}
                 />  

            </Stack>
           </Stack>
           <Stack flexDirection={'row'}
           justifyContent={'space-between'}
           alignItems={"center"}>
            <Typography variant="h6"
            fontsize={"1rem"}
            color={"gray"}>
            </Typography>
            <Button size="large"
             sx={{bgcolor:"GrayText"
            ,color:'white',
             borderRadius:"10px",
            ":hover":{bgcolor:'gray'
            ,cursor:'pointer'}
            }}
            onClick={handlePost}
            >
                POST
            </Button>
           </Stack>
         </DialogContent>
        </Dialog>
    </div>
  )
}

export default AddPost;
//using dialog from mui it helps to create modal
//open is used to show dialogue
//handle cross basically we used to close the window through cross symbol