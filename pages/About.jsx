import { useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ breakpoints, spacing, palette }) => ({}));

export default function About() {
  const classes = useStyles();
  return (
    <>
      <h1>ABOUT</h1>
    </>
  );
}
