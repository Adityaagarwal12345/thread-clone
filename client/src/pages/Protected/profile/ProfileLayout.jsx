import React from "react";
import { Stack, Avatar, Chip, Typography, Button } from "@mui/material";
import { FaInstagram } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

const ProfileLayout = () => {
    const _300 = useMediaQuery("(min-width:300px)");
    const _700 = useMediaQuery("(min-width:700px)"); 
    const _500 = useMediaQuery("(min-width:500px)");   


  return (
    <>
    <Stack
      flexDirection="column"
      gap={2}
      p={2}
      m={2}
      width={_700 ? "800px" : _500 ? "90%" : _300 ? "95%" : "100%"}
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
          <Typography variant="h2" fontWeight="bold" fontSize={_300 ? "1.5rem" : "1.2rem"}>
            bismillah
          </Typography>

          <Stack flexDirection="row" alignItems="center" gap={1}>
            <Typography variant="h2" fontSizee={_300 ? "1rem" : "0.8rem"} color="gray">
              100 posts
            </Typography>
            <Chip label="threads.net" size="small" sx={{ fontSize :_300 ?"0.8rem":"0.6rem"}} />
          </Stack>
        </Stack>

        {/* Right side: avatar */}
        <Avatar src="" alt="User Avatar" sx={{ width:_300 ?60:40, height: _300?60:40}} />
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
        <FaInstagram size={_300 ? 40:20} />
      </Stack>

      {/* Follow Button */}
      <Button
        size="large"
        sx={{
          color: "black",
          width:_700 ? "800px" : "90%",
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
    fontSize={_500 ? "1.2rem":_300 ? "1rem":"0.8rem"}
    width={_700 ?"800px" : _500 ? "90%":"95%"}
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
