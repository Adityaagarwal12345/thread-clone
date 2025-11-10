import { Avatar,Menu,MenuItem,Stack, Typography } from "@mui/material";
import {IoIoMore} from'react-icons/io';
import { useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";  
import { use, useState } from "react";
const Comments=()=>{
     const { darkMode } = useSelector((state) => state.service);
    const _700=useMediaQuery("(min-width:700px)");
    
    const [anchorEl,setAnchorEl]=useState(null);

    const handleDeleteComment=()=>{}
    const handleClose=()=>{
        setAnchorEl(null);
    }
    return (<>
        <Stack flexDirection={"column"}
        gap={2}
        
        justifyContent={"space-between"}
        px={2}
        pb={4}
        borderBottom={"1px solid gray"}
        mx={"auto"}
        width={'90%'}
        >
            <Stack flexDirection={"row"}

        alignItems={"center"}
        
        gap={_700 ? 2:1}>
            <Avatar/>
            <Stack flexDirection={'column'}>
                <Typography variant="h6" fontWeight={"bold"}
                fontsize={"0.9rem"}>aditya agd</Typography>
                 <Typography variant="subtitle2" 
                fontsize={"0.9rem"}>aditya agd</Typography>
            </Stack>
            </Stack>
            <Stack flexDirection={'row'} gap={1}
            alignItems={'center'}
            color={darkMode?"white":"GrayText"}
            fontSize={"0.8rem"}>
                <p>24min</p>
                <IoIosMore size={_700 ?28:20}
                onClick={(e)=>setAnchorEl(e.currentTarget)}/>
            </Stack>
        </Stack>
        <Menu 
        achorEl={""}
        open={anchorEl !==null?true:false}
        onClose={handleClose}
        anchorOrigin={{vertical:"bottom",horizontal:"right"}}
        transformOrigin={{vertical:"top",horizontal:"right"}}>
        <MenuItem onClick={handleDeleteComment}>Delete</MenuItem>
        </Menu>
        </> 
    );
};
export default Comments;