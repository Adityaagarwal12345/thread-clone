import { Menu } from '@mui/material'
import { Link } from 'react-router-dom';
import React from 'react'

const MainMenu = () => {
    const handleClose= ()=>{};
    const handleToggleTheme=()=>{};
    const handleLogout=()=>{};
  return (
    <div>
      <Menu anchorEl={''} open={true} onClose={handleClose} anchorOrigin={{vertical:'bottom',horizontal:'left'
       
      }} 
       transformOrigin={{Vertical:'top',horizontal:"right"}}>
        <MenuItem onClick={handleToggleTheme}>toggle theme</MenuItem>
        <Link to ={'/profile/threads/2'}></Link>
          <MenuItem >Logout</MenuItem>
       </Menu>
    </div>
  )
}

export default MainMenu
