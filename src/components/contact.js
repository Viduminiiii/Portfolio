import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="container-contact">
          <div className="contact-details">
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "40ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <h3 className="top-text">I'm always available for a chat</h3>
              <p>Drop me an email by filling out this form.</p>
              <TextField
                id="standard-basic"
                label="Name"
                variant="standard"
                fullWidth
              />
              <br />
              <br />
              {/* <Typography variant="h8">Email Address</Typography> */}
              <TextField
                id="standard-basic"
                label="Email Address"
                variant="standard"
                fullWidth
              />
              <br />
              <br />
              {/* <Typography variant="h8">Message</Typography> */}
              <TextField
                id="standard-multiline-flexible"
                label="Message"
                multiline
                maxRows={20}
                variant="standard"
                fullWidth
              />
              <Button variant="outlined" id="send-button">
                Send
              </Button>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
