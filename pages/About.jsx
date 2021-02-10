// import { useState, useContext, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(({ breakpoints, spacing, palette }) => ({
  backgroundImgContainer: {
    position: "relative",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    textAlign: "center",
    maxWidth: 1600,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    [breakpoints.only("xs")]: {
      backgroundAttachment: "scroll",
    },
  },
  image1: {
    backgroundImage: `url('/bgImage1.png')`,
    [breakpoints.only("xs")]: {
      minHeight: "100vh",
    },
  },
  image2: {
    backgroundImage: `url('/bgImage2.jpg')`,
    [breakpoints.only("xs")]: {
      minHeight: "400px",
    },
  },
  image3: {
    backgroundImage: `url('/bgImage3.jpg')`,
    [breakpoints.only("xs")]: {
      minHeight: "400px",
    },
  },
  map: {
    height: "600px",
    width: "100%",
    maxWidth: "1280px",
    margin: "30px auto",
    borderRadius: "4px",
    [breakpoints.only("xs")]: {
      fontSize: "480px",
      height: "350px",
    },
  },
  content: {
    color: "#777",
    backgroundColor: "rgba(255,255,255)",
    textAlign: "center",
    padding: spacing(2, 1),
    textAlign: "justify",
  },
  primaryText: {
    color: "white",
    fontWeight: 600,
    textShadow: `-1px 2px 4px rgba(0,0,0,0.5),
    1px 2px 4px rgba(255,255,255,0.5),
    1px -2px 0 rgba(255,255,255,0.5),
    -1px -2px 0 rgba(255,255,255,0.5)`,
    [breakpoints.only("xs")]: {
      fontSize: "68px",
    },
  },
  paragraph: {
    [breakpoints.only("xs")]: {
      lineHeight: "1.3",
      fontSize: "0.9em",
    },
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <>
      <Container
        className={clsx(classes.backgroundImgContainer, classes.image1)}
      >
        <Typography variant="h1" className={classes.primaryText}>
          About Us
        </Typography>
      </Container>
      <div className={classes.content}>
        <Container>
          <Typography variant="body1" paragraph className={classes.paragraph}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
            provident est asperiores tempore quos delectus veniam harum hic
            dicta animi. Aliquam maiores aut minima perspiciatis, ratione
            tempore ut dolores labore sint asperiores, quisquam cum! Consectetur
            nisi error debitis excepturi officia maiores illum incidunt ipsa
            ipsum neque minima inventore, ea corrupti, quis possimus, esse sit
            adipisci! Vel placeat, sunt delectus officia harum reprehenderit
            praesentium ipsum iusto temporibus commodi nam fugit ut, deleniti
            magnam ullam voluptate modi, consectetur optio alias deserunt? Saepe
            odit minus magni aperiam dolores! Dolores quas possimus amet hic
            totam aut, qui culpa autem reiciendis optio repudiandae ducimus
            perferendis.
          </Typography>
        </Container>
      </div>
      <Container
        className={clsx(classes.backgroundImgContainer, classes.image2)}
      >
        <Typography variant="h1" className={classes.primaryText}>
          Our Work
        </Typography>
      </Container>
      <div className={classes.content}>
        <Container>
          <Typography variant="body1" paragraph className={classes.paragraph}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
            provident est asperiores tempore quos delectus veniam harum hic
            dicta animi. Aliquam maiores aut minima perspiciatis, ratione
            tempore ut dolores labore sint asperiores, quisquam cum! Consectetur
            nisi error debitis excepturi officia maiores illum incidunt ipsa
            ipsum neque minima inventore, ea corrupti, quis possimus, esse sit
            adipisci! Vel placeat, sunt delectus officia harum reprehenderit
            praesentium ipsum iusto temporibus commodi nam fugit ut, deleniti
            magnam ullam voluptate modi, consectetur optio alias deserunt? Saepe
            odit minus magni aperiam dolores! Dolores quas possimus amet hic
            totam aut, qui culpa autem reiciendis optio repudiandae ducimus
            perferendis.
          </Typography>
        </Container>
      </div>
      <Container
        className={clsx(classes.backgroundImgContainer, classes.image3)}
      >
        <Typography variant="h1" className={classes.primaryText}>
          Find Us
        </Typography>
      </Container>
      <div className={classes.content}>
        <Container>
          <Typography variant="body1" paragraph className={classes.paragraph}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
            provident est asperiores tempore quos delectus veniam harum hic
            dicta animi. Aliquam maiores aut minima perspiciatis, ratione
            tempore ut dolores labore sint asperiores, quisquam cum! Consectetur
            nisi error debitis excepturi officia maiores illum incidunt ipsa
            ipsum neque minima inventore, ea corrupti, quis possimus, esse sit
            adipisci! Vel placeat, sunt delectus officia harum reprehenderit
            praesentium ipsum iusto temporibus commodi nam fugit ut, deleniti
            magnam ullam voluptate modi, consectetur optio alias deserunt? Saepe
            odit minus magni aperiam dolores! Dolores quas possimus amet hic
            totam aut, qui culpa autem reiciendis optio repudiandae ducimus
            perferendis.
          </Typography>
        </Container>
        <Container maxWidth={false} disableGutters style={{ display: "flex" }}>
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1KiCpAhmHxz6aLV5pQEc_vw_6S4U"
            className={classes.map}
          ></iframe>
        </Container>
      </div>
    </>
  );
}
