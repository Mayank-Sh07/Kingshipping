import { AnimatePresence } from "framer-motion";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import NavBar from "../NavBar/NavBar";

const useStyles = makeStyles(({ palette }) => ({
  appContainer: {
    maxWidth: "1600px",
    margin: "auto",
    backgroundColor: palette.primary.dark,
  },
}));

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <Container maxWidth={false} disableGutters className={classes.appContainer}>
      <NavBar key={"Navbar"} />
      <AnimatePresence exitBeforeEnter>{children}</AnimatePresence>
    </Container>
  );
}
