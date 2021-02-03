import { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Link from "next/link";
// MUI Core
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Hidden from "@material-ui/core/Hidden";
// MUI Icons
import Home from "@material-ui/icons/HomeRounded";
import About from "@material-ui/icons/EmojiObjects";
import Services from "@material-ui/icons/FlightTakeoff";
import Clients from "@material-ui/icons/BusinessCenterRounded";
import Contact from "@material-ui/icons/Info";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(({ breakpoints, spacing, palette }) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    padding: "4px",
    zIndex: 1400,
    transition: `background-color 0.3s ease-in`,
    maxWidth: "1600px",
    marginRight: "50%",
    transform: `translateX(50%)`,
  },
  toolBar: {
    padding: spacing(1, 4),
    width: "100%",
    maxWidth: breakpoints.width("lg"),
    margin: "auto",
    [breakpoints.only("xs")]: {
      padding: spacing(1),
    },
  },
  brandImg: {
    transform: `translateY(-6px)`,
    marginRight: "4px",
    height: 40,
    width: 36,
  },
  title: {
    flexGrow: 1,
    fontSize: "32px",
    fontWeight: 600,
    letterSpacing: "-1px",
  },
  linkBtn: {
    "&:hover": {
      backgroundColor: `rgba(200, 200, 200, 0.15)`,
      transform: `scale(1.125)`,
      transition: `transform 0.1s ease-out`,
    },
    color: "white",
    fontWeight: 400,
    fontSize: "22px",
    padding: "10px 16px",
    display: "flex",
    alignItems: "center",
    marginLeft: spacing(2),
    [breakpoints.only("sm")]: {
      marginLeft: 4,
      padding: spacing(1),
      fontSize: "18px",
    },
  },
  startIcon: {
    marginRight: 6,
    [breakpoints.only("sm")]: {
      marginRight: 2,
    },
  },
  drawerPaper: {
    width: 240,
  },
  navList: {
    marginTop: 64,
  },
  listItem: {
    padding: spacing(2),
  },
  listItemIcon: {
    minWidth: spacing(7),
    color: palette.primary.main,
  },
}));

const container = {
  open: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
  closed: {
    opacity: 0,
    transition: {
      staggerChildren: 0.02,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
};

const listItem = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 30,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export default function NavBar() {
  const classes = useStyles();
  const { breakpoints } = useTheme();
  const { pathname } = useRouter();
  const [open, setDrawerOpen] = useState(false);
  var isMobile = useMediaQuery(breakpoints.only("xs"));

  const links = () => {
    const allLinks =
      pathname === "/"
        ? [
            { label: "Home", icon: <Home />, path: "/" },
            { label: "About", icon: <About />, path: "/About" },
            { label: "Contact", icon: <Contact />, path: "/Contact" },
          ]
        : [
            { label: "Home", icon: <Home />, path: "/" },
            { label: "About", icon: <About />, path: "/About" },
            { label: "Services", icon: <Services />, path: "/Services" },
            { label: "Clients", icon: <Clients />, path: "/Clients" },
            { label: "Contact", icon: <Contact />, path: "/Contact" },
          ];
    return allLinks.filter((link) => link.path !== pathname);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!open);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <img src="/logo.png" className={classes.brandImg} />
          <Typography variant="h6" className={classes.title}>
            KingShipping
          </Typography>
          {isMobile ? (
            <IconButton onClick={toggleDrawer}>
              <MenuIcon style={{ color: "white" }} />
            </IconButton>
          ) : (
            links().map((link) => (
              <Link href={link.path} key={link.label + "-nav"}>
                <Button
                  startIcon={link.icon}
                  className={classes.linkBtn}
                  classes={{ startIcon: classes.startIcon }}
                  className={classes.linkBtn}
                >
                  {link.label}
                </Button>
              </Link>
            ))
          )}
        </Toolbar>
      </AppBar>
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={"left"}
          open={open}
          onClose={toggleDrawer}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
          transitionDuration={{
            enter: 250,
            exit: 700,
          }}
        >
          <div>
            <List
              className={classes.navList}
              component={motion.ul}
              variants={container}
              initial={false}
              animate={open ? "open" : "closed"}
            >
              {links().map(({ label, path, icon }) => (
                <Link href={path} key={"key-" + label}>
                  <ListItem
                    button
                    divider
                    className={classes.listItem}
                    component={motion.li}
                    variants={listItem}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    key={"nav-" + label}
                    onClick={toggleDrawer}
                  >
                    <ListItemIcon classes={{ root: classes.listItemIcon }}>
                      {icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={label}
                      secondary={"secondaryLabel"}
                      className={classes.listItemLabel}
                    />
                  </ListItem>
                </Link>
              ))}
            </List>
          </div>
        </Drawer>
      </Hidden>
    </div>
  );
}
