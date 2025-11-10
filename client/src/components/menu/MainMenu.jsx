import React from 'react';
import { Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMainMenu,toggleColorMode } from '../../redux/slice';

const MainMenu = () => {
  const { anchorEl } = useSelector((state) => state.service);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(toggleMainMenu(null));
  };

  const handleToggleTheme = () => {
    handleClose();
    dispatch(toggleColorMode());
  };

  const handleLogout = () => {
    // logic for logout
  };

  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <MenuItem onClick={handleToggleTheme}>Toggle Theme</MenuItem>
      <MenuItem component={Link} to="/profile/threads/2">
        Profile
      </MenuItem>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  );
};

export default MainMenu;
