// import { useState, useContext, useEffect } from 'react'
import Head from "next/head";
import { motion } from "framer-motion";
import { makeStyles, fade } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
// MUI ICONS
import Services from "@material-ui/icons/FlightTakeoff";
import Clients from "@material-ui/icons/BusinessCenterRounded";
import Mail from "@material-ui/icons/Mail";
import Phone from "@material-ui/icons/Phone";
import WhatsApp from "@material-ui/icons/WhatsApp";

const useStyles = makeStyles(({ breakpoints, spacing, palette }) => ({
  heroContainer: {
    height: "100vh",
    width: "100%",
    backgroundImage: 'url("/background.jpg")',
    backgroundSize: "cover",
    backgroundPosition: `75% 50%`,
    backgroundRepeat: "no-repeat",
    position: "relative",
  },
  hero: {
    position: "absolute",
    left: "5%",
    top: "21%",
    [breakpoints.up("lg")]: {
      left: "10%",
    },
  },
  tag: {
    fontWeight: "600",
    letterSpacing: "-2px",
    lineHeight: "97%",
    color: "white",
    textShadow: `-1px 1px 2px rgba(255,255,255,0.225),
    1px 1px 2px rgba(255,255,255,0.225),
    1px -1px 0 rgba(255,255,255,0.225),
    -1px -1px 0 rgba(255,255,255,0.225)`,
    [breakpoints.only("md")]: {
      fontSize: "64px",
    },
    [breakpoints.only("sm")]: {
      fontSize: "55px",
    },
    [breakpoints.only("xs")]: {
      fontSize: "32px",
    },
  },
  btnContainer: {
    marginTop: spacing(8),
    marginLeft: "2px",
    [breakpoints.only("xs")]: {
      marginTop: spacing(6),
    },
  },
  navBtn: {
    "&:hover": {
      backgroundColor: fade(palette.primary.main, 0.95),
      transform: `scale(1.15)`,
      transition: `transform 0.1s ease-out`,
    },
    fontWeight: 400,
    [breakpoints.up("sm")]: {
      fontSize: "22px",
      padding: "10px 16px",
      marginRight: spacing(2),
    },
    display: "flex",
    alignItems: "center",
    color: "white",
    borderRadius: "6px",
    backgroundColor: fade(palette.primary.main, 0.85),
    [breakpoints.only("xs")]: {
      marginRight: spacing(1),
      padding: "8px 12px",
    },
  },
  contacts: {
    maxWidth: 300,
    padding: spacing(1),
    position: "absolute",
    bottom: "10%",
    left: "5%",
    [breakpoints.up("lg")]: {
      left: "10%",
    },
    [breakpoints.up("sm")]: {
      bottom: "5%",
    },
    [breakpoints.only("xs")]: {
      bottom: "12px",
      maxWidth: 200,
    },
  },
  contactIcon: {
    backgroundColor: fade(palette.common.white, 0.2),
    border: `0.07em solid white`,
    color: palette.primary.main,
    padding: spacing(2),
    [breakpoints.only("xs")]: {
      padding: spacing(1),
      color: "white",
    },
    "&:hover": {
      transform: `scale(1.15)`,
      transition: `transform 0.1s ease-out`,
      color: palette.primary.main,
      backgroundColor: palette.common.white,
    },
  },
}));

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.4,
      when: "beforeChildren",
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

export default function index() {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>KingShipping | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container
        maxWidth={false}
        className={classes.heroContainer}
        component={motion.div}
        exit={{ opacity: 0 }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className={classes.hero}>
          <Typography
            variant="h2"
            className={classes.tag}
            component={motion.h2}
            variants={item}
          >
            Clearing and Forwarding,
            <br />
            It's what we do Best.
          </Typography>
          <Grid
            container
            justify="flex-start"
            alignItems="center"
            className={classes.btnContainer}
          >
            <Grid item component={motion.div} variants={item}>
              <Button
                startIcon={<Services />}
                className={classes.navBtn}
                variant="contained"
                size="small"
              >
                Services
              </Button>
            </Grid>
            <Grid item component={motion.div} variants={item}>
              <Button
                startIcon={<Clients />}
                className={classes.navBtn}
                variant="contained"
                size="small"
              >
                Clients
              </Button>
            </Grid>
          </Grid>
        </div>
        <Grid container className={classes.contacts}>
          <Grid item xs={4} component={motion.div} variants={item}>
            <IconButton className={classes.contactIcon}>
              <Mail />
            </IconButton>
          </Grid>
          <Grid item xs={4} component={motion.div} variants={item}>
            <IconButton className={classes.contactIcon}>
              <Phone />
            </IconButton>
          </Grid>
          <Grid item xs={4} component={motion.div} variants={item}>
            <IconButton className={classes.contactIcon}>
              <WhatsApp />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth={false}>
        <Typography variant="h1"> Welcome Welcome Welcome Welcome </Typography>
      </Container>
    </>
  );
}
