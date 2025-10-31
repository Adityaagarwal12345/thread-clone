import React from "react";
import { Stack, Avatar, Chip, Typography, Button } from "@mui/material";
import { FaInstagram } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const ProfileLayout = () => {
  return (
    <>
    <Stack
      flexDirection="column"
      gap={2}
      p={2}
      m={2}
      width="800px"
      mx="auto"
    >
      {/* Header Row */}
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        {/* Left side: name + info */}
        <Stack flexDirection="column" gap={1}>
          <Typography variant="h2" fontWeight="bold" fontSize="2rem">
            bismillah
          </Typography>

          <Stack flexDirection="row" alignItems="center" gap={1}>
            <Typography variant="h2" fontSize="1rem">
              100 posts
            </Typography>
            <Chip label="threads.net" size="small" sx={{ fontSize: "0.8rem" }} />
          </Stack>
        </Stack>

        {/* Right side: avatar */}
        <Avatar src="" alt="User Avatar" sx={{ width: 60, height: 60 }} />
      </Stack>

      {/* Bio */}
      <Typography variant="body1" fontSize="1rem">
        This is my profile bio
      </Typography>

      {/* Footer Row: followers + Instagram */}
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        gap={2}
      >
        <Typography variant="subtitle2" color="gray">
          19 followers
        </Typography>
        <FaInstagram size={20} />
      </Stack>

      {/* Follow Button */}
      <Button
        size="large"
        sx={{
          color: "black",
          bgcolor: "lightgray",
          fontWeight: "bold",
          "&:hover": {
            bgcolor: "gray",
            color: "white",
          },
        }}
      >
        Edit Profile
      </Button>
    <Stack flexDirection={'row'} justifyConetnt={'space-evenly'} gap={2}
    my={5} pb={2}
    borderBottom={'2px solid gray'} 
    fontSize={"1.2rem"}
    width={"800px"}
    mx={"auto"}>
        <Link to={'/profile/threads/1'} className="link">Threads</Link>
        <Link to={'/profile/replies/1'} className="link">Replies</Link>
        <Link to={'/profile/reposts/1'} className="link">Reposts</Link> 
    </Stack>
    </Stack>
    <Outlet />
    </>
  );
};

export default ProfileLayout;
