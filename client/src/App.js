import React,{useEffect,useState} from "react";
import "./App.css";

import { MyTheme } from "./utils/styles.jsx";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Snackbar, Button } from "@material-ui/core";
import Home from "./components/home.jsx";
import { SnackbarProvider } from "notistack";

require("typeface-lato");
function App() {
  const [theme, setTheme] =useState(0);
  const [reload, showReload] =useState(false);
  const [, setUpdate] =useState(0);

 useEffect(() => {
    const t = window.localStorage.getItem("theme");
    if (t != null) {
      setTheme(t);
    }

    const u = window.localStorage.getItem("update");
    if (u != null) {
      setUpdate(u);
      if (u == 1) {
        showReload(true);
      }
    }

    window.addEventListener("newContentAvailable", () => {
      showReload(true);
      window.localStorage.setItem("update", 1);
    });

  }, []);

  const changeTheme = (t) => {
    window.localStorage.setItem("theme", t);
    setTheme(t);
  };

  const handleSnackClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    caches.keys().then(function (names) {
      for (let name of names) caches.delete(name);
    });

    window.localStorage.setItem("update", 0);
    showReload(false);
    window.location.reload();

   
  };
  return (
    <MuiThemeProvider theme={MyTheme(theme)}>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={reload}
        autoHideDuration={120000}
        onClose={handleSnackClose}
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        message={
          <span id="message-id">
            {
              "New contents has been updated,click update to get the latest version!"
            }
          </span>
        }
        action={[
          <Button color="secondary" onClick={handleSnackClose}>
            Update
          </Button>,
        ]}
      />
      <SnackbarProvider
        preventDuplicate
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        maxSnack={2}
      >
        <Router>
          <Home changeTheme={changeTheme} />
        </Router>
      </SnackbarProvider>
    </MuiThemeProvider>
  );
}

export default App;
