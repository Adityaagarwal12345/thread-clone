import React from 'react'
import{Menu, MenuItem} from "@mui/material"
import {useDispatch,useSelector} from "react-redux"
import { toggleMainMenu } from '../../redux/slice'  
import { toggleMyMenu } from '../../redux/slice'  
const MyMenu = () => {
    const {anchorE2}=useSelector((state)=>state.service); 
    const dispatch=useDispatch();

    const handleClose=()=>{
      dispatch(toggleMainMenu(null));
    };
    const handleDeletePost=()=>{};
  return (
    <div>
      <Menu 
      onchorEl={"anchorE2"}
      open={anchorE2 !==null?true:false}
      onClose={handleClose}
      anchorOrigin={{vertical:"bottom",horizontal:"right"}}
      transformOrigin={{vertical:"top",horizontal:"right"}}
      >
        <MenuItem onClick={handleDeletePost}>Delete</MenuItem>
      </Menu>
    </div>
  )
}

export default MyMenu
