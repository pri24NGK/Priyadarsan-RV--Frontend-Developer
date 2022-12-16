import React from "react";
import { ImCross } from "react-icons/im";
import classes from "./Modal.module.css";

export const Modal = (props) => {
  return (
    <div className={classes.Modal}>
      <div className="relative">
        <ImCross
          className="absolute top-0 right-0 cursor-pointer"
          onClick={props.modalClose}
        />
      </div>
      {props.children}
    </div>
  );
};

export default Modal;
