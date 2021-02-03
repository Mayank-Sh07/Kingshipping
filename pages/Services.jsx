import { useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ breakpoints, spacing, palette }) => ({}));

export default function Services() {
  const classes = useStyles();
  return (
    <>
      <h1>Services</h1>
    </>
  );
}
