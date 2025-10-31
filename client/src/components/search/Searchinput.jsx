import React from "react";
import TextField from "@mui/material/TextField";

const SearchInput = () => {
  return (
    <>
      <TextField
        sx={{
          width: "90%",
          maxWidth: "750px",
          bgcolor: "white",
          borderRadius: "30px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          px: 2,
          py: 1,
          my: 5,
          mx: "auto",
          "& .MuiOutlinedInput-root": {
            color: "black",
            "& fieldset": {
              border: "none",
            },
          },
        }}
      />
    </>
  );
};

export default SearchInput;
