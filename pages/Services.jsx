import clsx from "clsx";
import { makeStyles, fade } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grow from "@material-ui/core/Grow";

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
  title: {
    margin: spacing(5, "auto"),
    fontWeight: 600,
    [breakpoints.down("xs")]: {
      fontSize: "52px",
    },
  },
  servicesContainer: {
    [breakpoints.down("md")]: {
      padding: spacing(2, 5),
      margin: spacing(2, "auto"),
    },
    margin: spacing(4, "auto"),
  },
  serviceCard: {
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
    padding: spacing(1, 0),
    color: "white",
    textAlign: "center",
    width: "100%",
    backgroundColor: palette.primary.main,
    fontSize: "28px",
    [breakpoints.down("xs")]: {
      fontSize: "20px",
    },
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
  borderLeft: {
    [breakpoints.up("md")]: {
      borderLeft: "6px solid",
    },
  },
  borderRight: {
    [breakpoints.up("md")]: {
      borderRight: "6px solid",
    },
  },
}));

export default function Services() {
  const classes = useStyles();
  const servicesData = [
    {
      icon: <Ship className={classes.serviceCardSvg} />,
      direction: "row",
      animateDirection: "right",
      timeout: 400,
      title: "Sea Freight Service",
      cardContainerClass: clsx(classes.servicesContainer, classes.borderRight),
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
      animateDirection: "left",
      timeout: 800,
      title: "Air Freight Service",
      cardContainerClass: clsx(classes.servicesContainer, classes.borderLeft),
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
      animateDirection: "right",
      timeout: 1200,
      title: "Customs Clearence",
      cardContainerClass: clsx(classes.servicesContainer, classes.borderRight),
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
      animateDirection: "left",
      timeout: 1600,
      title: "Warehousing Services",
      cardContainerClass: clsx(classes.servicesContainer, classes.borderLeft),
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
      animateDirection: "right",
      timeout: 2000,
      title: "Transportation Services",
      cardContainerClass: clsx(classes.servicesContainer, classes.borderRight),
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
      animateDirection: "left",
      timeout: 2400,
      title: "Ancillary Services",
      cardContainerClass: clsx(classes.servicesContainer, classes.borderLeft),
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
      <Typography variant="h2" align="center" className={classes.title}>
        Our Services
      </Typography>
      {servicesData.map((service) => (
        <Grow
          in={true}
          direction={service.animateDirection}
          timeout={service.timeout}
          key={service.title}
        >
          <Container className={service.cardContainerClass} maxWidth={"md"}>
            <Paper className={service.cardClass} elevation={6}>
              <Grid container direction={service.direction}>
                <Grid item xs={12}>
                  <Typography className={classes.serviceCardTitle}>
                    {service.title}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4} className={classes.serviceCardImg}>
                  {service.icon}
                </Grid>
                <Grid item xs={12} sm={8} className={service.textClass}>
                  {service.description}
                </Grid>
              </Grid>
            </Paper>
          </Container>
        </Grow>
      ))}
    </Container>
  );
}
