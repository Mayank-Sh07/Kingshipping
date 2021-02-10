// import { useState, useContext, useEffect } from "react";
import clsx from "clsx";
import { makeStyles, fade } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Ship from "@material-ui/icons/DirectionsBoat";
import Flight from "@material-ui/icons/Flight";
import Clearence from "@material-ui/icons/DoneAll";
import Warehouse from "@material-ui/icons/Store";
import Transport from "@material-ui/icons/LocalShipping";
import Ancillary from "@material-ui/icons/SupervisedUserCircle";

const useStyles = makeStyles(({ breakpoints, spacing, palette }) => ({
  servicesPageContainer: {
    backgroundColor: "white",
    marginTop: "96px",
  },
  servicesContainer: {
    [breakpoints.down("md")]: {
      padding: spacing(2, 5),
      margin: spacing(2, "auto"),
    },
    margin: spacing(4, "auto"),
  },
  serviceCard: {
    padding: spacing(4, 0),
    [breakpoints.down("md")]: {
      padding: spacing(2, 0),
    },
    border: `1px solid ${palette.primary.main}`,
  },
  serviceCardImg: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: spacing(1, 0),
    minHeight: "240px",
  },
  serviceCardSvg: {
    fontSize: "8.75em",
    marginBottom: "8px",
    [breakpoints.down("sm")]: {
      fontSize: "7.25em",
    },
  },
  serviceCardTitle: {
    fontWeight: 600,
    // margin: spacing(1, 0),
    color: "white",
    margin: "0 -0.4em",
    padding: "0.1em 0.4em",
    borderRadius: "0.8em 0.3em",
    background: "transparent",
    backgroundImage: `linear-gradient(
      to right,
      ${palette.primary.main},
      ${fade(palette.primary.main, 0.9)} 4%,
      ${fade(palette.primary.main, 0.5)}
    )`,
    WebkitBoxDecorationBreak: "clone",
    boxDecorationBreak: "clone",
  },
  serviceCardDescription: {
    display: "flex",
    alignItems: "center",
    padding: spacing(1, 10),
    color: "#777",
    [breakpoints.down("sm")]: {
      padding: spacing(1, 8),
    },
    [breakpoints.only("xs")]: {
      padding: spacing(1, 4),
      fontSize: "0.8em",
      lineHeight: "1.35",
    },
  },
  leftAligned: {
    textAlign: "justify",
    [breakpoints.up("sm")]: {
      paddingLeft: 0,
    },
  },
  rightAligned: {
    textAlign: "justify",
    [breakpoints.up("sm")]: {
      paddingRight: 0,
    },
  },
  shiftLeft: {
    [breakpoints.up("md")]: {
      transform: `translateX(-24px)`,
    },
  },
  shiftRight: {
    [breakpoints.up("md")]: {
      transform: `translateX(24px)`,
    },
  },
}));

export default function Services() {
  const classes = useStyles();
  const servicesData = [
    {
      icon: <Ship className={classes.serviceCardSvg} />,
      direction: "row",
      title: "Sea Freight",
      cardClass: clsx(classes.serviceCard, classes.shiftLeft),
      textClass: clsx(classes.serviceCardDescription, classes.leftAligned),
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi ea
    dignissimos repellendus inventore! Iure unde, excepturi magni vel
    doloribus dolor nihil voluptatem expedita sed voluptas nisi optio
    ex pariatur aliquam sequi veniam perferendis eveniet, saepe eius,
    possimus architecto! Sequi iure culpa rem nobis, voluptates
    tempore repellendus ipsam, tenetur et laudantium provident
    suscipit, consectetur ratione mollitia sapiente unde beatae
    eveniet facilis?`,
    },
    {
      icon: <Flight className={classes.serviceCardSvg} />,
      direction: "row-reverse",
      title: "Air Freight",
      cardClass: clsx(classes.serviceCard, classes.shiftRight),
      textClass: clsx(classes.serviceCardDescription, classes.rightAligned),
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi ea
    dignissimos repellendus inventore! Iure unde, excepturi magni vel
    doloribus dolor nihil voluptatem expedita sed voluptas nisi optio
    ex pariatur aliquam sequi veniam perferendis eveniet, saepe eius,
    possimus architecto! Sequi iure culpa rem nobis, voluptates
    tempore repellendus ipsam, tenetur et laudantium provident
    suscipit, consectetur ratione mollitia sapiente unde beatae
    eveniet facilis?`,
    },
    {
      icon: <Clearence className={classes.serviceCardSvg} />,
      direction: "row",
      title: "Customs Clearence",
      cardClass: clsx(classes.serviceCard, classes.shiftLeft),
      textClass: clsx(classes.serviceCardDescription, classes.leftAligned),
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi ea
    dignissimos repellendus inventore! Iure unde, excepturi magni vel
    doloribus dolor nihil voluptatem expedita sed voluptas nisi optio
    ex pariatur aliquam sequi veniam perferendis eveniet, saepe eius,
    possimus architecto! Sequi iure culpa rem nobis, voluptates
    tempore repellendus ipsam, tenetur et laudantium provident
    suscipit, consectetur ratione mollitia sapiente unde beatae
    eveniet facilis?`,
    },
    {
      icon: <Warehouse className={classes.serviceCardSvg} />,
      direction: "row-reverse",
      title: "Warehousing",
      cardClass: clsx(classes.serviceCard, classes.shiftRight),
      textClass: clsx(classes.serviceCardDescription, classes.rightAligned),
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi ea
    dignissimos repellendus inventore! Iure unde, excepturi magni vel
    doloribus dolor nihil voluptatem expedita sed voluptas nisi optio
    ex pariatur aliquam sequi veniam perferendis eveniet, saepe eius,
    possimus architecto! Sequi iure culpa rem nobis, voluptates
    tempore repellendus ipsam, tenetur et laudantium provident
    suscipit, consectetur ratione mollitia sapiente unde beatae
    eveniet facilis?`,
    },
    {
      icon: <Transport className={classes.serviceCardSvg} />,
      direction: "row",
      title: "Transportation",
      cardClass: clsx(classes.serviceCard, classes.shiftLeft),
      textClass: clsx(classes.serviceCardDescription, classes.leftAligned),
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi ea
    dignissimos repellendus inventore! Iure unde, excepturi magni vel
    doloribus dolor nihil voluptatem expedita sed voluptas nisi optio
    ex pariatur aliquam sequi veniam perferendis eveniet, saepe eius,
    possimus architecto! Sequi iure culpa rem nobis, voluptates
    tempore repellendus ipsam, tenetur et laudantium provident
    suscipit, consectetur ratione mollitia sapiente unde beatae
    eveniet facilis?`,
    },
    {
      icon: <Ancillary className={classes.serviceCardSvg} />,
      direction: "row-reverse",
      title: "Ancillary",
      cardClass: clsx(classes.serviceCard, classes.shiftRight),
      textClass: clsx(classes.serviceCardDescription, classes.rightAligned),
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi ea
    dignissimos repellendus inventore! Iure unde, excepturi magni vel
    doloribus dolor nihil voluptatem expedita sed voluptas nisi optio
    ex pariatur aliquam sequi veniam perferendis eveniet, saepe eius,
    possimus architecto! Sequi iure culpa rem nobis, voluptates
    tempore repellendus ipsam, tenetur et laudantium provident
    suscipit, consectetur ratione mollitia sapiente unde beatae
    eveniet facilis?`,
    },
  ];
  return (
    <Container
      maxWidth={false}
      disableGutters
      className={classes.servicesPageContainer}
    >
      {servicesData.map((service) => (
        <Container
          className={classes.servicesContainer}
          maxWidth={"md"}
          key={service.title}
        >
          <Paper className={service.cardClass} elevation={6}>
            <Grid container direction={service.direction}>
              <Grid item xs={12} sm={4} className={classes.serviceCardImg}>
                {service.icon}
                <Typography
                  variant="body1"
                  className={classes.serviceCardTitle}
                >
                  {service.title}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8} className={service.textClass}>
                {service.description}
              </Grid>
            </Grid>
          </Paper>
        </Container>
      ))}
    </Container>
  );
}
