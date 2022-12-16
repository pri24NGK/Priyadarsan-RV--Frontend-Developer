import React from "react";

import classes from "./Backdrop.module.css";

const backdrop = (props) => (
  <div className={classes.Backdrop} onClick={props.modalClose}>
    {props.children}
  </div>
);

export default backdrop;
