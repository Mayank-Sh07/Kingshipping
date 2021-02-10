// import { useState, useContext, useEffect } from 'react'
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import ReactCardCarousel from "react-card-carousel";
import { makeStyles, fade } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
// MUI ICONS
import Services from "@material-ui/icons/DirectionsBoat";
import Clients from "@material-ui/icons/CardTravel";
import Mail from "@material-ui/icons/Mail";
import Phone from "@material-ui/icons/Phone";
import WhatsApp from "@material-ui/icons/WhatsApp";
import MeticulousIcon from "@material-ui/icons/TuneRounded";
import ReliableIcon from "@material-ui/icons/AlarmOnRounded";
import ExperiencedIcon from "@material-ui/icons/BusinessCenter";

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
    top: "19%",
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
      fontSize: "56px",
    },
    [breakpoints.only("xs")]: {
      fontSize: "34px",
    },
  },
  tagSubtitle: {
    maxWidth: "660px",
    [breakpoints.only("md")]: {
      maxWidth: "580px",
    },
    [breakpoints.only("sm")]: {
      maxWidth: "490px",
    },
    [breakpoints.only("xs")]: {
      maxWidth: "260px",
      fontSize: "0.65em",
      lineHeight: "1.180",
    },
    lineHeight: "1.35",
    color: "rgb(230,230,230)",
  },
  btnContainer: {
    marginTop: spacing(5),
    marginLeft: "2px",
    [breakpoints.only("xs")]: {
      marginTop: spacing(2),
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
  paper: {
    borderRadius: "4px",
    transform: "translateY(-8px)",
    position: "relative",
    backgroundColor: palette.common.white,
    width: "98%",
  },
  contentContainer: {
    backgroundColor: "transparent",
    textAlign: "center",
    maxWidth: 1080,
    padding: spacing(4, 1),
  },
  title: {
    color: palette.common.black,
    paddingTop: spacing(8),
    marginBottom: spacing(2),
    fontSize: "4em",
    fontWeight: 600,
    [breakpoints.down("sm")]: {
      fontSize: "3em",
    },
    [breakpoints.only("xs")]: {
      paddingTop: spacing(6),
    },
  },
  sectionDescription: {
    color: "#808080",
    lineHeight: "1.4",
    [breakpoints.down("sm")]: {
      lineHeight: "1.315",
    },
    [breakpoints.only("xs")]: {
      fontSize: "18px",
    },
  },
  infoContainer: {
    paddingTop: spacing(6),
  },
  infoGrid: {
    padding: spacing(1),
  },
  infoCard: {
    padding: spacing(1),
    maxWidth: 350,
    margin: "auto",
  },
  infoIcon: {
    fontSize: "6em",
    margin: spacing(2, 0),
    color: palette.primary.dark,
  },
  infoTitle: {
    fontWeight: 600,
    margin: spacing(1, 0),
    color: palette.primary.main,
  },
  clientCarousel: {
    height: "350px",
    [breakpoints.up("md")]: {
      height: "500px",
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  cardStyle: {
    height: "280px",
    width: "220px",
    textAlign: "center",
    background: palette.primary.main,
    borderRadius: "8px",
    position: "relative",
    border: "1px solid",
    [breakpoints.up("md")]: {
      height: "410px",
      width: "320px",
    },
  },
  cardMedia: {
    height: "190px",
    [breakpoints.up("md")]: {
      height: "260px",
    },
    backgroundColor: "white",
    objectFit: "contain",
  },
  cardTitle: {
    color: "white",
    fontWeight: 600,
    [breakpoints.up("md")]: {
      fontSize: "24px",
    },
    [breakpoints.only("sm")]: {
      fontSize: "20px",
    },
    [breakpoints.only("xs")]: {
      fontSize: "16px",
    },
  },
  cardInfo: {
    color: "white",
    [breakpoints.only("xs")]: {
      lineHeight: "1.125",
      fontSize: "0.6em",
    },
  },
}));

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.2,
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
  const infoData = [
    {
      icon: <MeticulousIcon className={classes.infoIcon} />,
      title: "Meticulous",
      body:
        "  Lorem ipsum dolor sit, amet consectetur adipisicing elit.Dignissimos praesentium excepturi, facilis sed ex deleniti veniam dicta, nam doloremque autem facere ab, rem saepe.",
    },
    {
      icon: <ReliableIcon className={classes.infoIcon} />,
      title: "Reliable",
      body:
        "  Lorem ipsum dolor sit, amet consectetur adipisicing elit.Dignissimos praesentium excepturi, facilis sed ex deleniti veniam dicta, nam doloremque autem facere ab, rem saepe.",
    },
    {
      icon: <ExperiencedIcon className={classes.infoIcon} />,
      title: "Experienced",
      body:
        "  Lorem ipsum dolor sit, amet consectetur adipisicing elit.Dignissimos praesentium excepturi, facilis sed ex deleniti veniam dicta, nam doloremque autem facere ab, rem saepe.",
    },
  ];
  const cards = [
    {
      brand: "Zebronics",
      path: "/zebronicsLogo.png",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem quis modi cumque?",
    },
    {
      brand: "Johnson Lifts",
      path: "/johnsonLogo.png",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem quis modi cumque?",
    },
    {
      brand: "Aachi",
      path: "/aachiLogo.png",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem quis modi cumque?",
    },
    {
      brand: "Chennai Metro",
      path: "/chennaiMetroLogo.png",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem quis modi cumque?",
    },
    {
      brand: "Banglore Metro",
      path: "/nammaMetroLogo.jpg",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem quis modi cumque?",
    },
    {
      brand: "TVS Dynamic",
      path: "/tvsLogo.jpg",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem quis modi cumque?",
    },
    {
      brand: "Tsubaki",
      path: "/tsubakiLogo.jpg",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem quis modi cumque?",
    },
    {
      brand: "Takata",
      path: "/takataLogo.png",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem quis modi cumque?",
    },
  ];
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
            gutterBottom
            className={classes.tag}
            component={motion.h2}
            variants={item}
          >
            Lorem ipsum dolor sit amet
            <br />
            consectetur adipisicing
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            component={motion.h2}
            className={classes.tagSubtitle}
            variants={item}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            ad voluptates? Quod omnis dolore dignissimos nesciunt tempora odio.
          </Typography>
          <Grid
            container
            justify="flex-start"
            alignItems="center"
            className={classes.btnContainer}
          >
            <Grid item component={motion.div} variants={item}>
              <Link href={"/Services"}>
                <Button
                  startIcon={<Services />}
                  className={classes.navBtn}
                  variant="contained"
                  size="small"
                >
                  Services
                </Button>
              </Link>
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
            <a href="mailto: kuldeep1sharma@gmail.com">
              <IconButton className={classes.contactIcon}>
                <Mail />
              </IconButton>
            </a>
          </Grid>
          <Grid item xs={4} component={motion.div} variants={item}>
            <a href="tel:+919543934422">
              <IconButton className={classes.contactIcon}>
                <Phone />
              </IconButton>
            </a>
          </Grid>
          <Grid item xs={4} component={motion.div} variants={item}>
            <a
              href="https://api.whatsapp.com/send?phone=+919543934422&text=Hey+I%27m+interested+in+your+work"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton className={classes.contactIcon}>
                <WhatsApp />
              </IconButton>
            </a>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth={false} className={classes.paper}>
        <Container className={classes.contentContainer} disableGutters>
          <Typography className={classes.title} align="center">
            {"Welcome"}
          </Typography>
          <Typography
            paragraph
            align="center"
            className={classes.sectionDescription}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            unde voluptatibus sunt nesciunt quidem expedita assumenda, eum
            laborum itaque eaque velit dolorem voluptatum, exercitationem
            possimus quod corrupti. Quam, voluptatibus consequatur.. Tenetur
            unde voluptatibus sunt nesciunt quidem expedita assumenda, eum
            laborum itaque eaque velit dolorem voluptatum, exercitationem
            possimus quod corrupti. Quam, voluptatibus consequatur.
          </Typography>
          <Grid container justify="center" className={classes.infoContainer}>
            {infoData.map((info) => (
              <Grid
                item
                xs={12}
                sm={4}
                className={classes.infoGrid}
                key={info.title}
              >
                <Paper className={classes.infoCard} elevation={0}>
                  {info.icon}
                  <Typography variant="body1" className={classes.infoTitle}>
                    {info.title}
                  </Typography>
                  <Typography variant="caption" paragraph align="center">
                    {info.body}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <Typography className={classes.title} align="center">
            {"Our Clients"}
          </Typography>
          <Typography
            paragraph
            align="center"
            className={classes.sectionDescription}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            unde voluptatibus sunt nesciunt quidem expedita assumenda, eum
            laborum itaque eaque velit dolorem voluptatum, exercitationem
            possimus quod corrupti. Quam, voluptatibus consequatur.. Tenetur
            unde voluptatibus sunt nesciunt quidem expedita assumenda, eum
            laborum itaque eaque velit dolorem voluptatum, exercitationem
            possimus quod corrupti. Quam, voluptatibus consequatur.
          </Typography>
          <Container maxWidth="sm" className={classes.clientCarousel}>
            <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
              {cards.map((data) => (
                <Card className={classes.cardStyle} key={data.brand}>
                  <CardMedia className={classes.cardMedia} image={data.path} />
                  <CardContent>
                    <Typography gutterBottom className={classes.cardTitle}>
                      {data.brand}
                    </Typography>
                    <Typography
                      paragraph
                      className={classes.cardInfo}
                      variant="caption"
                    >
                      {data.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </ReactCardCarousel>
          </Container>
        </Container>
      </Container>
    </>
  );
}
