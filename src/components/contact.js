import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./contact.css";
import contact from "../Pics/contact2.png";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="container-contact">
          <div className="contact-details">
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "100%" },
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
              noValidate
              autoComplete="off"
            >
              <h3
                className="top-text"
                style={{ color: "#C80036", fontSize: "1.5rem" }}
              >
                Get in Touch!
              </h3>
              <p>Drop me an email by filling out this form.</p>
              <TextField
                required
                id="outlined-required"
                label="Name"
                fullWidth
                // defaultValue="Hello World"
              />
              <br />
              <TextField
                required
                id="outlined-required"
                label="Email Address"
                fullWidth
                // defaultValue="Hello World"
              />
              <br />
              <TextField
                id="outlined-multiline-flexible"
                label="Message"
                multiline
                maxRows={4}
                fullWidth
              />
              <div className="button-container">
                <Button variant="outlined" id="send-button">
                  Send
                </Button>
              </div>
            </Box>
          </div>
          <div style={{display:"flex", justifyContent:"center", alignContent:"center"}}>
            <img
              src={contact}
              alt="Contact page"
              className="contact-img"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
