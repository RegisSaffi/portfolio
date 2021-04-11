import React, { useState, useRef, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Container from "@material-ui/core/Container";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import makeCarousel from "react-reveal/makeCarousel";
import { useSnackbar } from "notistack";

import { Fade, Slide } from "react-reveal";

import MyPhoto from "./images/me.jpeg";
import ProgressiveImage from "react-progressive-image-loading";
import { useTheme } from "@material-ui/core/styles";

import {
  Box,
  Grid,
  Typography,
  Paper,
  Button,
  IconButton,
  TextField,
  CardActionArea,
  Tooltip,
  Menu,
  MenuItem,
  CircularProgress,
  Chip,
} from "@material-ui/core";
import {
  Card,
  CardContent,
  CardActions,
  Avatar,
  useMediaQuery,
  Slide as MuiSlide,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,

} from "@material-ui/core";
import {
  Twitter,
  RadioButtonCheckedRounded,
  ChevronLeftRounded,
  ChevronRightRounded,
  FormatQuoteRounded,
  KeyboardArrowUpRounded,
  CloseRounded,
  LinkedIn,
  Instagram,
  GitHub,
  Facebook,
  ArrowForwardIosRounded,
  EmailRounded,
  AndroidRounded,
  Apple,
  DesktopMacRounded,
  BrightnessHighRounded,
  Brightness4Rounded,
  LanguageRounded,
  AppsRounded,
  MoreHorizRounded,
  PaletteRounded,
  PhoneIphoneRounded,
  CodeRounded,
  KeyboardArrowDownRounded,
  Done,
} from "@material-ui/icons";

import Footer from "./footer.jsx";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}




const Transition = React.forwardRef(function Transition(props, ref) {
  return <MuiSlide direction="up" ref={ref} {...props} />;
});

const useStyles2 = makeStyles((theme) => ({
  root: {
    borderRadius: 15,
  },
  reg: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    color: "white",
    textTransform: "capitalize",
    borderRadius: 25,
    // border:"1px solid #00000000"
  },
  reg2: {
    textTransform: "capitalize",
    borderRadius: 25,
  },
  tabs: {
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  icon: {
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  icon2: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  ln: {
    height: 4,
    width: 30,
    backgroundColor: theme.palette.text.secondary,
    marginRight: 10,
    borderRadius: 7,
  },
  ln2: {
    height: 4,
    width: 70,
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    marginRight: 10,
    display: "block",
    marginTop: 2,
    borderRadius: 7,
    // [theme.breakpoints.down("xs")]: {
    //   display: "none",
    // },
  },

  media: {
    height: 200,
  },
  btn: {
    textTransform: "capitalize",
  },
  btn2: {
    textTransform: "capitalize",
    border: "dashed grey 1px",
  },
  btn3: {
    textTransform: "capitalize",
    borderRadius: 25,
    marginLeft: 10,
    marginTop: 10,
  },
  paper: {
    padding: 15,
  },
  title: {
    flexGrow: 1,
  },
  menu: {
    display: "none",
    marginRight: 16,
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },

  green: {
    height: 60,
    width: 60,
    background: theme.palette.primary.main,
  },
  test: {
    color: "#fff",
  },
  slider: {
    position: "relative",
  },
}));

var projects = [

  {
    name: "Baza",
    title:
      "AI powered personal assistant app habit tracker, story telling, jokes, trivia games and more in interactive conversational UI.",
    description:
      "This is my personal project that i work on to keep learning, it has many features which helped me to learn everything i know now, I started working on this project since i started learning programming on my own, i could implement every feature i wanted based on what i am learning currently, i changed the UI, name,color palette like million times and am still workinhg on it.",
    platforms: ["android", "ios",],
    links: {
      playstore:
        "https://play.google.com/store/apps/details?id=com.baza.engine",
      appstore: "",
      web: "https://getbaza.web.app",
    },
    
    technologies: [
      "Flutter",
      "Dart",
      "Python",
      "Flask",
      "NodeJS",
      "Firestore",
      "Cloud functions",
      "Dialogflow",
      "Xcode",
      "Android Studio",
    ],
    screens: {
      type: "mobile",
      light: {
        normal: "/images/projects/baza.png",
        tiny: "/images/projects/tiny/baza.png",
      },
      dark: {
        normal: "/images/projects/baza_dark.png",
        tiny: "/images/projects/tiny/baza_dark.png",
      },
    },
  },

  {
    name: "Bohoka",
    title: "Audio streaming app for spilitual contents.",
    description:
      "This is a music streaming app that i created for someone, it can play music by streaming or offline when audios are downloaded, it also have a videos section to play videos from youtube channel and it is available on both Android and iOS.",
    platforms: ["android", "ios"],
    links: 
      {
        playstore: "https://play.google.com/store/apps/details?id=com.bohoka",
        appstore: "https://apps.apple.com/us/app/bohoka/id1475340626",
      },
    technologies: [
      "Flutter",
      "Dart",
      "Firebase FCM",
      "Xcode",
      "Android Studio",
    ],
    screens: {
      type: "mobile",
      light: {
        normal: "/images/projects/bohoka.png",
        tiny: "/images/projects/tiny/bohoka.png",
      },
      dark: {
        normal: "/images/projects/bohoka_dark.png",
        tiny: "/images/projects/tiny/bohoka_dark.png",
      },
    },
  },
  {
    name: "SekaLive",
    title: "Comedy videos streaming app for SekaLive comedians.",
    description:
      "This application is for comedy store group based in Rwanda, it has a lot of their performance videos in many categories and it is available for both Android and iOS.",
    platforms: ["android", "ios"],
    links: 
      {
        playstore:
          "https://play.google.com/store/apps/details?id=com.sekalive.sekalive",
        appstore: "https://apps.apple.com/rw/app/sekalive/id1547233783",
      },
    technologies: ["Flutter", "Dart", "Youtube", "Xcode", "Android Studio"],
    screens: {
      type: "mobile",
      light: {
        normal: "/images/projects/seka.png",
        tiny: "/images/projects/tiny/seka.png",
      },
      dark: {
        normal: "/images/projects/seka_dark.png",
        tiny: "/images/projects/tiny/seka_dark.png",
      },
    },
  },
  
  {
    name: "Issine",
    title: "E-store application for buying,selling and delivery.",
    description:
      "This is e-store mobile application where you can buy stuff, it has everything from products display, carting, order tracking and delivery., It is available for both android and iOS.",
    platforms: ["android", "ios"],
    links: { playstore: "", appstore: "" },
    technologies: ["Flutter", "Dart", "Xcode", "Android Studio"],
    screens: {
      type: "mobile",
      light: {
        normal: "/images/projects/isiine.png",
        tiny: "/images/projects/tiny/isiine.png",
      },
      dark: {
        normal: "/images/projects/isiine_dark.png",
        tiny: "/images/projects/tiny/isiine_dark.png",
      },
    },
  },

  {
    name: "Kigali Arena",
    title: "Events tickets booking app for Kigali Arena",
    description:
      "This is events management application for Kigali Arena sports venue, It is available for Android,iOS and experimental web version, it includes everything from end user to admin for events management, I created both the mobile application frontend UI the backend, databases and payments.",
    platforms: ["android", "ios"],
    links: {
      playstore:
        "https://play.google.com/store/apps/details?id=com.centrika.kigaliarena",
      appstore: "",
    },
    technologies: [
      "Flutter",
      "Dart",
      "Flutter web",
      "Firebase auth",
      "Firestore",
      "Cloud functions",
      "NodeJS",
      "Xcode",
      "Android Studio",
    ],
    screens: {
      type: "mobile",
      light: {
        normal: "/images/projects/arena.png",
        tiny: "/images/projects/tiny/arena.png",
      },
      dark: {
        normal: "/images/projects/arena_dark.png",
        tiny: "/images/projects/tiny/arena_dark.png",
      },
    },
  },

  {
    name: "Igihe",
    title: "Igihe news mobile app for Igihe news publisher",
    description:
      "This is a mobile application for the most popular news publisher in Rwanda, It shows news in three(3) languages and it is available for both Android and iOS.",
    platforms: ["android", "ios"],
    links: { playstore: "", appstore: "" },
    technologies: ["Flutter", "Dart", "Xcode", "Android Studio"],
    screens: {
      type: "mobile",
      light: {
        normal: "/images/projects/igihe.png",
        tiny: "/images/projects/tiny/igihe.png",
      },
      dark: {
        normal: "/images/projects/igihe_dark.png",
        tiny: "/images/projects/tiny/igihe_dark.png",
      },
    },
  },
  {
    name: "LinkApp",
    title: "Social app for individual and group chats, stories and more.",
    description:
      "This is a social media app for businesses which let's you chat with either individual people or group chat, it also have products section where you can post and advertise your products as stories., It is available for Android platform only.",
    platforms: ["android"],
    links: {
      playstore:
        "https://play.google.com/store/apps/details?id=com.pentech.linkapp",
    },
    technologies: [
      "Java",
      "XML",
      "Firebase FCM",
      "Firebaase auth",
      "Firebase database",
      "Cloud functions",
      "NodeJS",
      "Android Studio",
    ],
    screens: {
      type: "mobile",
      light: {
        normal: "/images/projects/linkapp.png",
        tiny: "/images/projects/tiny/linkapp.png",
      },
      dark: {
        normal: "/images/projects/linkapp_dark.png",
        tiny: "/images/projects/tiny/linkapp_dark.png",
      },
    },
  },

];

var webprojects=[
  {
    name: "Baza web",
    title: "The web implementation of my personal assiatant app Baza",
    description: "Screenshots are coming soon",
    platforms: ["web"],
    links: { web: "" },
    technologies: ["Flutter", "Dart", "AnguralDart","Firestore","Flutter web"],
    screens: {
      type: "web",
      light: {
        normal: "/images/projects/window.svg",
        tiny: "/images/projects/window.svg",
      },
      dark: {
        normal: "/images/projects/window_dark.svg",
        tiny: "/images/projects/window_dark.svg",
      },
    },
  },
  {
    name: "SafariBus",
    title: "A transportation management platform in Rwanda",
    description: "Screenshots are coming soon",
    platforms: ["web"],
    links: { web: "" },

    technologies: ["ReactJS", "JavaScript", "Material-UI"],
    screens: {
      type: "web",
      light: {
        normal: "/images/projects/window.svg",
        tiny: "/images/projects/window.svg",
      },
      dark: {
        normal: "/images/projects/window_dark.svg",
        tiny: "/images/projects/window_dark.svg",
      },
    },
  },
  {
    name: "SafariBus booking",
    title: "Online bus tickets booking platform in Rwanda",
    description: "Screenshots are coming soon",
    platforms: ["web"],
    links: { web: "" },

    technologies: ["ReactJS", "JavaScript", "Material-UI"],
    screens: {
      type: "web",
      light: {
        normal: "/images/projects/window.svg",
        tiny: "/images/projects/window.svg",
      },
      dark: {
        normal: "/images/projects/window_dark.svg",
        tiny: "/images/projects/window_dark.svg",
      },
    },
  },
  {
    name: "Centrika website",
    title: "Centrika company portfolio website",
    description: "Screenshots are coming soon",
    platforms: ["web"],
    links: { web: "" },

    technologies: ["ReactJS", "JavaScript", "Material-UI"],
    screens: {
      type: "web",
      light: {
        normal: "/images/projects/window.svg",
        tiny: "/images/projects/window.svg",
      },
      dark: {
        normal: "/images/projects/window_dark.svg",
        tiny: "/images/projects/window_dark.svg",
      },
    },
  },
  {
    name: "Kigali Arena web",
    title: "A web implementation of Kigali Arena ticketing platform",
    description: "Screenshots are coming soon",
    technologies: ["Flutter", "Dart", "AnguralDart","Firestore","Flutter web"],
    platforms: ["web"],
    links: { web: "" },

    screens: {
      type: "web",
      light: {
        normal: "/images/projects/window.svg",
        tiny: "/images/projects/window.svg",
      },
      dark: {
        normal: "/images/projects/window_dark.svg",
        tiny: "/images/projects/window_dark.svg",
      },
    },
  },
  {
    name: "AnyPolls",
    title: "A hobby voting platform that i created for no reason",
    description: "Screenshots are coming soon",
    technologies: ["ReactJS", "NodeJS", "JavaScript", "Lodash", "Material-UI"],
    platforms: ["web"],
    links: { web: "" },
    screens: {
      type: "web",
      light: {
        normal: "/images/projects/window.svg",
        tiny: "/images/projects/window.svg",
      },
      dark: {
        normal: "/images/projects/window_dark.svg",
        tiny: "/images/projects/window_dark.svg",
      },
    },
  },
 
]

export default function LandingHome(props) {
  const classes = useStyles2();
  const theme = useTheme();
  const history = useHistory();

  const { changeTheme } = props;

  const CarouselUI = ({ position, total, handleClick, children }) => (
    <Box className={classes.slider}>
      {children}
      <CardActions>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width={1}
          pb={4}
        >
          <Box ml={2}>
            {" "}
            <Typography color="textSecondary">
              {position + 1}/{total}
            </Typography>{" "}
          </Box>

          <Box style={{ zIndex: 100 }}>
            <IconButton
              onClick={handleClick}
              data-position={position - 1}
              color="primary"
              disabled={position === 0}
            >
              <ChevronLeftRounded />
            </IconButton>
            <IconButton
              onClick={handleClick}
              data-position={position + 1}
              style={{ marginLeft: "auto" }}
              color="primary"
              disabled={position === total - 1}
            >
              <ChevronRightRounded />
            </IconButton>
          </Box>
        </Box>
      </CardActions>
    </Box>
  );

  const Carousel = makeCarousel(CarouselUI);

  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const welcomeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop - 70);

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const [quotes, setQuotes] = useState({
    loading: true,
    data: [],
    message: "Hang on a sec...",
  });

  const [message, setMessage] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [sending, setSending] = useState(false);

  const [currentTab, setCurrentTab] = useState(0);
  const [cat, setCat] = useState(0);

  const [offset, setOffset] = useState(0);
  const [selectedProjectIndex] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const [myProjects, setMyProjects] = useState(projects);
  const [webProjects, setWebProjects] = useState(webprojects);


  const [project, setProject] = useState({ open: false, data: {} });

  useEffect(() => {
    window.onscroll = function () {
      setOffset(window.pageYOffset);
    };

    getQuotes();
  }, []);

  const handleEmailChange = (e) => {
    if (e.target.value === "") {
      setEmail({ value: "", error: "Don't you have an email?" });
    } else {
      setEmail({ value: e.target.value, error: "" });
    }
  };

  const validEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleMessageChange = (e) => {
    if (e.target.value === "") {
      setMessage({ value: "", error: "Ooh, really... empty message?" });
    } else {
      setMessage({ value: e.target.value, error: "" });
    }
  };

  const handleSendClick = () => {
    if (email.value === "") {
      setEmail({ ...email, error: "Don't you have an email?" });
    } else if (!validEmail(email.value)) {
      setEmail({ ...email, error: "That doesn't look like a valid email.." });
    } else if (message.value === "") {
      setMessage({ ...message, error: "Ooh, really... empty message?" });
    } else if (message.value.length < 20) {
      setMessage({
        ...message,
        error: "Come on! Don't be boring,write something... not that one! ",
      });
    } else {
      sendQuery();
    }
  };

  const handleTabChange = (e, v) => {
    setCurrentTab(v);
    switch (v) {
      case -1:
        scrollToRef(welcomeRef);
        break;
      case 0:
        scrollToRef(aboutRef);
        break;
      case 1:
        scrollToRef(skillsRef);
        break;
      case 2:
        scrollToRef(projectsRef);
        break;
      case 3:
        scrollToRef(contactRef);
        break;
      default:
        scrollToRef(welcomeRef);
        break;
    }
  };

  const notify = (variant, msg, status) => {
    if (status == 401) {
      history.push("/", { expired: true });
    }
    enqueueSnackbar(msg, {
      variant: variant,
      action: (k) => (
        <IconButton
          onClick={() => {
            closeSnackbar(k);
          }}
          size="small"
        >
          <CloseRounded fontSize="small" />
        </IconButton>
      ),
    });
  };

  const filterProjects = (k) => {
    if (k == "all") {
      setMyProjects(projects);
      setWebProjects(webprojects)
    } else {
      var p = projects.filter((obj) => obj.platforms.includes(k));
      setMyProjects(p);
      if(k=="web"){
        setWebProjects(webprojects)
      }else{
        setWebProjects([])
   
      }
    }
  };

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }
  const getQuotes = () => {
    fetch("/api/quotes")
      .then((res) => res.json())
      .then(
        (result) => {
          var arr = shuffleArray(result);
          setQuotes({ loading: false, data: arr, message: "Success" });
        },
        () => {
          setQuotes({
            ...quotes,
            loading: false,
            data: [],
            message: "Failed to retrieve quotes",
          });
        }
      );
  };

  const sendQuery = () => {
    setSending(true);
    fetch("/api/query", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email.value, message: message.value }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setEmail({ value: "", error: "" });
          setMessage({ value: "", error: "" });
          setSending(false);
          notify("success", result.message);
        },
        () => {
          setSending(false);
          notify("error", "Oops,your message is not sent, try again later.");
        }
      );
  };

  const getPlatform = (p) => {
    switch (p) {
      case "android":
        return <AndroidRounded fontSize="small" color="secondary" />;
      case "ios":
        return <Apple fontSize="small" color="secondary" />;
      default:
        return <LanguageRounded fontSize="small" color="secondary" />;
    }
  };

  const getAppButton = (p, links) => {

    switch (p) {
      case "android":
        return (
          <Button
            color="primary"
            variant="outlined"
            className={classes.btn3}
            startIcon={<AndroidRounded />}
            onClick={() => {
              window.open(links.playstore);
            }}
            disabled={links.playstore == ""}
          >
            Play store
          </Button>
        );
      case "ios":
        return (
          <Button
            color="primary"
            variant="outlined"
            className={classes.btn3}
            startIcon={<Apple />}
            onClick={() => {
              window.open(links.appstore);
            }}
            disabled={links.appstore == ""}
          >
            App store
          </Button>
        );
      default:
        return (
          <Button
            color="primary"
            variant="outlined"
            className={classes.btn3}
            startIcon={<LanguageRounded />}
            onClick={() => {
              window.open(links.web);
            }}
            disabled={links.web == ""}
          >
            Web
          </Button>
        );
    }
  };

  
  return (
    <React.Fragment>
      <CssBaseline />

      <Menu
        id="my-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem
          selected={currentTab == 0}
          onClick={(e) => {
            handleTabChange(e, 0);
            setAnchorEl(null);
          }}
        >
          About me
        </MenuItem>
        <MenuItem
          selected={currentTab == 1}
          onClick={(e) => {
            handleTabChange(e, 1);
            setAnchorEl(null);
          }}
        >
          Skills
        </MenuItem>
        <MenuItem
          selected={currentTab == 2}
          onClick={(e) => {
            handleTabChange(e, 2);
            setAnchorEl(null);
          }}
        >
          Works
        </MenuItem>
        <MenuItem
          selected={currentTab == 3}
          onClick={(e) => {
            handleTabChange(e, 3);
            setAnchorEl(null);
          }}
        >
          Contact
        </MenuItem>
      </Menu>

      {/*   */}
      <Dialog
        open={project.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => {
          setProject({ open: false });
        }}
        aria-labelledby="Project dialog"
        aria-describedby="This is project dialog"
        maxWidth="md"
      >
        <DialogContent>
          <Grid container justifyContent='center'>
            <Grid item>
              <Box display="flex" width={1} justifyContent="center">
                {project?.data?.name != null && !fullScreen || project?.data?.screens?.type=='web'? (
                  <ProgressiveImage
                    key={theme.palette.type + cat + "456"}
                  
                    preview={
                      theme.palette.type == "light"
                        ? project?.data?.screens?.light?.tiny
                        : project?.data?.screens?.dark?.tiny
                    }
                    src={
                      theme.palette.type == "light"
                        ? project.data?.screens?.light?.normal
                        : project.data?.screens?.dark?.normal
                    }
                    transitionTime={900}
                    transitionFunction="ease"
                    render={(src, style) => (
                      <Box borderRadius={25}>
                        <img
                          loading="lazy"
                          src={src}
                          height={project?.data?.screens.type=='web'?"auto":"600"}
                          style={{width:project?.data?.screens.type=='web'?'60%':"auto"}}
                          alt={project?.data?.name}
                        />
                      </Box>
                    )}
                  />
                ) : (
                  <Box />
                )}
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Box
                display="flex"
                height={1}
                justifyContent="center"
                flexDirection="column"
              >
                <Typography variant="h3">{project?.data?.name}</Typography>
                <Box mt={1} mb={2}>
                  <Typography variant="h5" gutterBottom>
                    {project?.data?.title}
                  </Typography>
                </Box>
                <Fade>
                  <DialogContentText id="project-description">
                    {project?.data?.description}
                  </DialogContentText>
                </Fade>
                <Typography variant="h5" gutterBottom>
                  Technologies i used:
                </Typography>
                <Grid container spacing={1}>
                  {project?.data?.technologies?.map((t) => (
                    <Grid item>
                      <Chip
                        size="small"
                        deleteIcon={<Done />}
                        onDelete={() => {}}
                        label={t}
                      />
                    </Grid>
                  ))}
                </Grid>
                <Box mt={2}>
                  {project?.data?.platforms?.map((pr) =>
                    getAppButton(pr, project?.data?.links)
                  )}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setProject({ open: false });
            }}
            color="primary"
            endIcon={<KeyboardArrowDownRounded />}
          >
            Close this
          </Button>
        </DialogActions>
      </Dialog>

      <AppBar
        elevation={0}
        position="sticky"
        color={offset < 100 ? "transparent" : "inherit"}
        ref={welcomeRef}
      >
        <Toolbar>
          <div className="circle1" />
          <Avatar src={MyPhoto}></Avatar>
          <Box display="flex" flexGrow={1}></Box>

          {fullScreen ? (
            <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
              <MoreHorizRounded />
            </IconButton>
          ) : (
            <Box display="flex">
              <Button
                onClick={(e) => handleTabChange(e, 0)}
                variant="outlined"
                color="primary"
                className={currentTab == 0 ? classes.reg : classes.reg2}
              >
                About
              </Button>
              <Box mr={2} />
              <Button
                onClick={(e) => handleTabChange(e, 1)}
                variant="outlined"
                color="primary"
                className={currentTab == 1 ? classes.reg : classes.reg2}
              >
                Skills
              </Button>
              <Box mr={2} />
              <Button
                onClick={(e) => handleTabChange(e, 2)}
                variant="outlined"
                color="primary"
                className={currentTab == 2 ? classes.reg : classes.reg2}
              >
                Works
              </Button>
              <Box mr={2} />
              <Button
                onClick={(e) => handleTabChange(e, 3)}
                variant="outlined"
                color="primary"
                className={currentTab == 3 ? classes.reg : classes.reg2}
              >
                Contact
              </Button>
            </Box>
          )}
          <Box ml={1}>
            <IconButton
              color="inherit"
              onClick={() => changeTheme(theme.palette.type == "light" ? 1 : 0)}
            >
              {theme.palette.type == "dark" ? (
                <BrightnessHighRounded color="secondary" />
              ) : (
                <Brightness4Rounded color="secondary" />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <div class="circle2" />
   <Box mt={6} />
      <Container>
        <Grid container spacing={3} justify="center">
          <Grid item xs={12} sm={12} md={6}>
            <Box
              display="flex"
              flexDirection="column"
              width={1}
              height={1}
              justifyContent="center"
            >
              <Fade>
                <Typography variant="h5">Hi, I am</Typography>
              </Fade>

              <Fade>
                <Typography variant="h3" color="primary">
                  <b>Regis Imuduhe Safari</b>
                </Typography>
              </Fade>

              <div className={classes.ln2} />

              <Box mt={3}>
                <IconButton
                  onClick={() => window.open("https://github.com/RegisSaffi")}
                >
                  <GitHub color="primary" />
                </IconButton>
                <IconButton
                  onClick={() =>
                    window.open("https://www.facebook.com/regissaffi/")
                  }
                >
                  <Facebook color="primary" />
                </IconButton>
                <IconButton
                  onClick={() =>
                    window.open("https://www.instagram.com/regissaffi/")
                  }
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
                  onClick={() =>
                    window.open("https://www.twitter.com/regissaffi/")
                  }
                >
                  <Twitter color="primary" />
                </IconButton>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box
              display="flex"
              width={1}
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <Box>
                <Typography color="textSecondary" variant="h6">
                  Introduction
                </Typography>
                <div className={classes.ln} />
              </Box>
              <Box mt={2}>
                <Fade>
                  <Typography variant="h5">
                    A passionate mobile & web software developer based in
                    Kigali,Rwanda
                  </Typography>
                </Fade>
              </Box>
              <Box mt={2}>
                <Fade>
                  <Typography color="textSecondary">
                    By redefining UI/UX using top notch technologies like
                    Flutter for mobile and ReactJS, NodeJS for web frameworks
                    and delivering end-to-end highly optimized, beautiful and
                    performant software products.
                  </Typography>
                </Fade>
              </Box>
              <Box mt={2} display="flex" justifyContent="flex-start" width={1}>
                <Button
                  color="primary"
                  className={classes.btn}
                  endIcon={<ArrowForwardIosRounded />}
                  onClick={() => scrollToRef(aboutRef)}
                >
                  My story
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          mt={12}
          alignContent="center"
          width={1}
          flexDirection="column"
          ref={aboutRef}
        >
          <Box mb={2}>
         <Box
              border={3}
              borderColor="secondary.main"
              borderRadius={100}
              p={"4px"}
            >
             <Avatar
                src={MyPhoto}
                style={{ height: 160, width: 160 }}
              ></Avatar>
            </Box>
          </Box>
          <Box mb={2}>
            <Fade>
              {" "}
              <Typography variant="h4" noWrap>
                <b>Who's this guy?</b>
              </Typography>
            </Fade>
            <div className={classes.ln2} />
          </Box>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          mb={10}
          alignContent="center"
          width={1}
        >
          <Box width={!fullScreen ? 1 / 2 : 1}>
            <Fade>
              {" "}
              <Typography align="center">
                Call me Regis or RegisSaffi, I am a software
                developer, I live in Rwanda and I have serious passion for UI
                effects, animations and creating intuitive, dynamic front end
                user experiences, I do back end too!
              </Typography>
            </Fade>
          </Box>
        </Box>
      </Container>

      <Paper className={classes.paper} elevation={0} square>
        <Box mt={4} />
        <Container>
          <Grid container spacing={3} justify="center">
            <Grid item xs={12} sm={12} md={6}>
              <Box>
                <Typography color="textSecondary" variant="h6">
                  Queries
                </Typography>
                <div className={classes.ln} />
              </Box>
              <Box mt={2}>
                <Typography variant="h5">
                  Any type of query & discussion
                </Typography>
              </Box>
              <Box mt={2}>
                <Fade>
                  <Typography color="textSecondary">
                    I am social, i like discussions, so, feel free to DM me on
                    my personal email or social medias.
                  </Typography>
                </Fade>
              </Box>
              <Box mt={2} display="flex" justifyContent="flex-start" width={1}>
                <Button
                  color="primary"
                  style={{ textTransform: "lowercase" }}
                  startIcon={<EmailRounded />}
                  onClick={() => {
                    window.open("mailto:regissaffi@gmail.com");
                  }}
                >
                  regissaffi@gmail.com
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <Box>
                <Typography color="textSecondary" variant="h6">
                  Experince
                </Typography>
                <div className={classes.ln} />
              </Box>
              <Box mt={2}>
                <Fade>
                  <Typography variant="h5">
                    I am a great believer in luck, and I find the harder I work
                    the more I have of it.
                  </Typography>
                </Fade>
              </Box>

              <Grid container spacing={2} justify="space-between">
                <Grid item>
                  <Box display="flex" alignItems="center">
                    <Typography color="primary" variant="h2">
                      <b>
                        4<font size={12}>+</font>
                      </b>
                    </Typography>
                    <Box ml={2}>
                      <Typography color="textSecondary">Years</Typography>
                      <Typography color="textSecondary">
                        of experience
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item>
                  <Box display="flex" alignItems="center">
                    <Typography color="primary" variant="h2">
                      <b>
                        20<font size={12}>+</font>
                      </b>
                    </Typography>
                    <Box ml={2}>
                      <Typography color="textSecondary">Official</Typography>
                      <Typography color="textSecondary">Projects done</Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <Box mt={5} />
      </Paper>
      <Container>
        <Box mt={5} />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          ref={skillsRef}
        >
          <Box mb={3}>
            <Fade>
              {" "}
              <Typography variant="h4" noWrap>
                <b>Skills overview</b>
              </Typography>
            </Fade>
            <div className={classes.ln2} />
          </Box>
        </Box>
        <Grid container spacing={2} justify="center" alignContent="center">
          <Grid item xs={12} sm={4} md={4}>
            <CardContent>
              <Box display="flex" justifyContent="center" width={1} mb={2}>
                <Avatar className={classes.green}>
                  <PaletteRounded
                    fontSize="large"
                    style={{ color: theme.palette.common.white }}
                  />
                </Avatar>
              </Box>

              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                align="center"
                color="primary"
              >
                Front End
              </Typography>
              <Fade>
                <Typography
                  color="textSecondary"
                  component="p"
                  align="center"
                  gutterBottom
                >
                  3+ years into client side web applications development, some
                  of the technologies i use includes, HTML,CSS,JavaScript,
                  ReactJS,Material design, Responsive designs, Progressive web
                  apps...
                </Typography>
                <Box mt={2} />
                <Grid container spacing={1} justify="center">
                  {["ReactJS", "JavaScript", "HTML5", "CSS3", "PWA"].map(
                    (t) => (
                      <Grid item>
                        <Chip size="small" label={t} />
                      </Grid>
                    )
                  )}
                </Grid>
              </Fade>
            </CardContent>
          </Grid>

          <Grid item xs={12} sm={4} md={4}>
            <CardContent>
              <Box display="flex" justifyContent="center" width={1} mb={2}>
                <Avatar className={classes.green}>
                  <PhoneIphoneRounded
                    fontSize="large"
                    style={{ color: theme.palette.common.white }}
                  />
                </Avatar>
              </Box>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                color="primary"
                align="center"
              >
                Mobile
              </Typography>
              <Fade>
                <Typography
                  color="textSecondary"
                  component="p"
                  align="center"
                  gutterBottom
                >
                  4+ Years into native and Hybrid mobile applications
                  development, I am former native Android developer with Java
                  and XML, and now it's been 2 years into Hybrid Android and iOS
                  development with Flutter.
                </Typography>
                <Box mt={2} />
                <Grid container spacing={1} justify="center">
                  {["Flutter", "Android", "iOS", "Java", "Swift"].map((t) => (
                    <Grid item>
                      <Chip size="small" label={t} />
                    </Grid>
                  ))}
                </Grid>
              </Fade>
            </CardContent>
          </Grid>

          <Grid item xs={12} sm={4} md={4}>
            <CardContent>
              <Box display="flex" justifyContent="center" width={1} mb={2}>
                <Avatar className={classes.green}>
                  <CodeRounded
                    fontSize="large"
                    style={{ color: theme.palette.common.white }}
                  />
                </Avatar>
              </Box>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                color="primary"
                align="center"
              >
                Back End
              </Typography>
              <Fade>
                <Typography
                  align="center"
                  color="textSecondary"
                  component="p"
                  gutterBottom
                >
                  2+ years into back end development with NodeJS, Python and
                  PHP. I use Express for NodeJs and Flask for python, others
                  includes SQL,NoSQL databases such as MongoDB, MySQL and
                  Firebase Firestore.
                </Typography>
                <Box mt={2} />
                <Grid container spacing={1} justify="center">
                  {["NodeJS", "Express", "Python", "PHP"].map((t) => (
                    <Grid item>
                      <Chip size="small" label={t} />
                    </Grid>
                  ))}
                </Grid>
              </Fade>
            </CardContent>
          </Grid>
        </Grid>

        <Box mb={4} display="flex" justifyContent="center" ref={projectsRef}>
          <Box mt={4}>
            <Typography variant="h4" noWrap>
              <b>Some works</b>
            </Typography>
            <div className={classes.ln2} />
          </Box>
        </Box>
        <Box display="flex" justifyContent="center">
          <Box mr={1} ml={1}>
            <Paper
              style={{
                borderRadius: 100,
                height: 70,
                width: 70,
                backgroundColor: cat == 0 ? theme.palette.secondary.main : null,
              }}
              elevation={0}
            >
              <CardActionArea
                style={{
                  borderRadius: 100,
                  padding: 25,
                  height: 70,
                  width: 70,
                }}
                onClick={() => {
                  setCat(0);
                  filterProjects("all");
                }}
              >
                <AppsRounded
                  style={{
                    color: cat == 0 ? theme.palette.common.white : null,
                  }}
                />
              </CardActionArea>
            </Paper>
          </Box>

          <Box mr={1} ml={1}>
            <Paper
              style={{
                borderRadius: 100,
                height: 70,
                width: 70,
                backgroundColor: cat == 1 ? theme.palette.secondary.main : null,
              }}
              elevation={0}
            >
              <CardActionArea
                style={{
                  borderRadius: 100,
                  padding: 25,
                  height: 70,
                  width: 70,
                }}
                onClick={() => {
                  setCat(1);
                  filterProjects("android");
                }}
              >
                <AndroidRounded
                  style={{
                    color: cat == 1 ? theme.palette.common.white : null,
                  }}
                />
              </CardActionArea>
            </Paper>
          </Box>

          <Box mr={1} ml={1}>
            <Paper
              style={{
                borderRadius: 100,
                height: 70,
                width: 70,
                backgroundColor: cat == 2 ? theme.palette.secondary.main : null,
              }}
              elevation={0}
            >
              <CardActionArea
                style={{
                  borderRadius: 100,
                  padding: 25,
                  height: 70,
                  width: 70,
                }}
                onClick={() => {
                  setCat(2);
                  filterProjects("ios");
                }}
              >
                <Apple
                  style={{
                    color: cat == 2 ? theme.palette.common.white : null,
                  }}
                />
              </CardActionArea>
            </Paper>
          </Box>
          <Box mr={1} ml={1}>
            <Paper
              style={{
                borderRadius: 100,
                height: 70,
                width: 70,
                backgroundColor: cat == 3 ? theme.palette.secondary.main : null,
              }}
              elevation={0}
            >
              <CardActionArea
                style={{
                  borderRadius: 100,
                  padding: 25,
                  height: 70,
                  width: 70,
                }}
                onClick={() => {
                  setCat(3);
                  filterProjects("web");
                }}
              >
                <DesktopMacRounded
                  style={{
                    color: cat == 3 ? theme.palette.common.white : null,
                  }}
                />
              </CardActionArea>
            </Paper>
          </Box>
        </Box>
        <Box mt={7} />
        <Grid container spacing={3} alignContent="center" justify="center">
          {myProjects.map((p, i) => (
            
                <Grid item xs={p.screens.type=='web'?12:6} sm={"auto"}>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent='center'
                    flexDirection='column'
                   
                    height={1}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setProject({ open: true, data: p });
                    }}
                  >
                    <Box
                      height={1}
                      display="flex"
                      width={1}
                      justifyContent="center"
                      alignItems="center"
                      flexDirection="column"
                    >
                      <Box mb={-1} mt={2}>
                        <Paper
                          style={{ borderRadius: 25, padding: 6 }}
                          elevation={0}
                        >
                          <Box pr={2} pl={2}>
                            <Typography>
                              <b>{p.name}</b>
                            </Typography>
                          </Box>
                        </Paper>
                      </Box>
                      <Tooltip
                        title={
                          <Box>
                            <Typography variant="h5" gutterBottom>
                              <b>{p.name}</b>
                            </Typography>

                            <Typography variant="body2">{p.title}</Typography>
                          </Box>
                        }
                        placement="right"
                        arrow
                      >
                        <Box>
                          <ProgressiveImage
                            key={theme.palette.type + cat}
                            preview={
                              theme.palette.type == "light"
                                ? p.screens.light.tiny
                                : p.screens.dark.tiny
                            }
                            src={
                              theme.palette.type == "light"
                                ? p.screens.light.normal
                                : p.screens.dark.normal
                            }
                            transitionTime={900}
                            transitionFunction="ease"
                            render={(src, style) => (
                              <Box borderRadius={25}>
                                <img
                                  loading="lazy"
                                  src={src}
                                  height={fullScreen ? p.screens.type=='web'?220: 310 : p.screens.type=='web'?350: 400}
                                  style={style}
                                  alt={p.name}
                                />
                              </Box>
                            )}
                          />
                        </Box>
                      </Tooltip>
                    </Box>
                    <Box display="flex" justifyContent="center">
                    
                      {p.platforms.map((pr) => getPlatform(pr))}
                    </Box>
                    {selectedProjectIndex == i ? (
                      <Box
                        gridRow={1}
                        gridColumn={1}
                        borderRadius="0px 0px 20px 20px"
                        ml={3}
                        mr={3}
                        mb={1}
                      >
                        <Box
                          p={2}
                          display="flex"
                          alignItems="end"
                          justifyContent="center"
                        ></Box>
                      </Box>
                    ) : (
                      <></>
                    )}
                  </Box>
                </Grid>
              
          ))}
        </Grid>
        <Box mt={7} />
        <Grid container spacing={3} alignContent="center" justify="center">
          {webProjects.map((p, i) => (
            
                <Grid item xs={12} sm={6} md={4}>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent='center'
                    flexDirection='column'
                   
                    height={1}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setProject({ open: true, data: p });
                    }}
                  >
                    <Box
                      height={1}
                      display="flex"
                      width={1}
                      justifyContent="center"
                      alignItems="center"
                      flexDirection="column"
                    >
                      <Box mb={1} mt={2}>
                        <Paper
                          style={{ borderRadius: 25, padding: 6 }}
                          elevation={0}
                        >
                          <Box pr={2} pl={2}>
                            <Typography>
                              <b>{p.name}</b>
                            </Typography>
                          </Box>
                        </Paper>
                      </Box>
                      <Tooltip
                        title={
                          <Box>
                            <Typography variant="h5" gutterBottom>
                              <b>{p.name}</b>
                            </Typography>

                            <Typography variant="body2">{p.title}</Typography>
                          </Box>
                        }
                        placement="right"
                        arrow
                      >
                        <Box width={1} height={1}>
                          <ProgressiveImage
                            key={theme.palette.type + cat}
                            preview={
                              theme.palette.type == "light"
                                ? p.screens.light.tiny
                                : p.screens.dark.tiny
                            }
                            src={
                              theme.palette.type == "light"
                                ? p.screens.light.normal
                                : p.screens.dark.normal
                            }
                            transitionTime={900}
                            transitionFunction="ease"
                            render={(src, style) => (
                              <Box height={250} width={1} style={{backgroundImage:'url(\''+src+'\')',backgroundSize:'100%',backgroundRepeat:'no-repeat'}}>
                            
                              </Box>
                            )}
                          />
                        </Box>
                      </Tooltip>
                    </Box>
                    <Box display="flex" justifyContent="center">
                    
                      {p.platforms.map((pr) => getPlatform(pr))}
                    </Box>
                    {selectedProjectIndex == i ? (
                      <Box
                        gridRow={1}
                        gridColumn={1}
                        borderRadius="0px 0px 20px 20px"
                        ml={3}
                        mr={3}
                        mb={1}
                      >
                        <Box
                          p={2}
                          display="flex"
                          alignItems="end"
                          justifyContent="center"
                        ></Box>
                      </Box>
                    ) : (
                      <></>
                    )}
                  </Box>
                </Grid>
              
          ))}
        </Grid>

        <Box mt={10} />
        <Grid container spacing={3} justify="center">
          <Grid item xs={12} sm={12} md={5}>
            <Box
              bgcolor="secondary.main"
              width={1}
              height={1}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              borderRadius="borderRadius"
              alignItems="center"
              px={5}
              py={10}
            >
              <Box fontSize="42">
                <FormatQuoteRounded
                  color="primary"
                  fontSize="large"
                  style={{ color: theme.palette.common.white }}
                />
              </Box>
              <Fade>
                <Typography
                  variant="h2"
                  gutterBottom
                  color="initial"
                  className={classes.test}
                >
                  <b> Quotes </b>
                </Typography>
              </Fade>
              <Typography
                variant="h6"
                gutterBottom
                className={classes.test}
              ></Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <Box width={1} height={fullScreen ? 320 : 1}>
              {quotes.loading ? (
                <Paper style={{ height: "100%" }} elevation={0}>
                  <Box
                    height={1}
                    p={5}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <CircularProgress size={23} />
                    <Box ml={2} />
                    <Typography
                      color={
                        !quotes.loading && quotes.data.length == 0
                          ? "error"
                          : "secondary"
                      }
                    >
                      {quotes.message}
                    </Typography>
                  </Box>
                </Paper>
              ) : (
                <Card style={{ height: "100%" }} elevation={0}>
                  <CardContent>
                    {" "}
                    <Carousel defaultWait={15000}>
                      {quotes?.data.map((t) => (
                        <Slide left>
                          <Box
                            pt={12}
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="center"
                          >
                            <Typography
                              variant="body1"
                              color="textSecondary"
                              gutterBottom
                              align="center"
                            >
                              {t.quote}
                            </Typography>
                            <Typography>{t.author}</Typography>
                          </Box>
                        </Slide>
                      ))}
                    </Carousel>
                  </CardContent>
                </Card>
              )}
            </Box>
          </Grid>
        </Grid>

        <Box mt={10} />
        <Grid container spacing={3} justify="center">
          <Grid item xs={12} sm={12} md={5}>
            <Box
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
              width={1}
              ref={contactRef}
            >
              <Fade>
                <Typography variant="h4" gutterBottom>
                  <b>Wanna talk?</b>
                </Typography>
              </Fade>
            </Box>
            <Box display="flex" justifyContent="flex-start" mb={2} width={1}>
              <Box width={1}>
                <Fade>
                  <Typography gutterBottom variant="h6">
                    Feel free to request a meeting with me.
                  </Typography>
                </Fade>
              </Box>
            </Box>
            <Box display="flex" alignItems="flex-start" p={1}>
              <Box mt="3px" mr={2}>
                {" "}
                <RadioButtonCheckedRounded color="primary" fontSize="small" />
              </Box>
              <Fade>
                <Typography>
                  I like new ideas, ready to work on some cool projects.
                </Typography>
              </Fade>
            </Box>
            <Box display="flex" alignItems="flex-start" p={1}>
              <Box mt="3px" mr={2}>
                {" "}
                <RadioButtonCheckedRounded color="primary" fontSize="small" />
              </Box>
              <Fade>
                <Typography>
                  Am always learning, so any opportunity, I am in!
                </Typography>
              </Fade>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <Box mb={1}>
              <Fade>
                <Typography color="textSecondary" variant="h6">
                  DM me directly
                </Typography>
              </Fade>
              <div className={classes.ln} />
            </Box>
            <Box mb={2}>
              <TextField
                fullWidth
                variant="outlined"
                color="primary"
                label="Email"
                placeholder="Email address?"
                size="small"
                value={email.value}
                error={email.error != ""}
                helperText={email.error}
                onChange={handleEmailChange}
              />
            </Box>
            <Box mb={2}>
              <TextField
                fullWidth
                variant="outlined"
                color="primary"
                label="Message"
                placeholder="Any idea?"
                size="medium"
                rowsMax={7}
                rows={3}
                value={message.value}
                error={message.error != ""}
                helperText={message.error}
                onChange={handleMessageChange}
                multiline
              />
            </Box>

            <Box mt={2}>
              <Button
                disableElevation
                color="primary"
                variant="contained"
                fullWidth
                size="large"
                disabled={sending}
                className={classes.btn}
                onClick={handleSendClick}
              >
                {sending ? <CircularProgress size={23} /> : "Message"}
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Box mt={10} />

        <Box mt={5} />

        <Fade>
          {" "}
          <Box width={1} mb={5} justifyContent="center">
            <Typography variant="h5" gutterBottom align="center">
              <b>Thanks for scrolling</b>
            </Typography>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <Typography gutterBottom variant="h6" align="center">
                That's all folks :)
              </Typography>
            </Box>
          </Box>
        </Fade>
      </Container>
      <ScrollTop {...props}>
        <Fab
          color="secondary"
          size="small"
          elevation={0}
          aria-label="scroll back to top"
        >
          <KeyboardArrowUpRounded />
        </Fab>
      </ScrollTop>
      <Footer />
    </React.Fragment>
  );
}
