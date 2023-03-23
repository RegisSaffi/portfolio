import React from "react";
import { Box, Typography, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  Facebook,
  Twitter,
  Instagram,
  GitHub,
  LinkedIn,
} from "@material-ui/icons";

const year = new Date().getFullYear();

const useStyles = makeStyles((theme) => ({
  foot: {
    height: "auto",
    width: "100%",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#183650",
    marginTop: 100,
    padding: 50,
    color: "white",
  },
}));

function Footer(props) {
  const classes = useStyles();
  return (
    <Box
      className={classes.foot}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Typography gutterBottom>I am social though!</Typography>

      <Box mt={3}>
        <IconButton
          onClick={() => window.open("https://github.com/RegisSaffi")}
        >
          <GitHub color="primary" />
        </IconButton>
        <IconButton
          onClick={() => window.open("https://www.facebook.com/regissaffi/")}
        >
          <Facebook color="primary" />
        </IconButton>
        <IconButton
          onClick={() => window.open("https://www.instagram.com/regissaffi/")}
        >
          <Instagram color="primary" />
        </IconButton>
        <IconButton
          onClick={() =>
            window.open("https://www.linkedin.com/in/regis-saffi/")
          }
        >
          <LinkedIn color="primary" />
        </IconButton>
        <IconButton
          onClick={() => window.open("https://www.twitter.com/regissaffi/")}
        >
          <Twitter color="primary" />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Footer;
