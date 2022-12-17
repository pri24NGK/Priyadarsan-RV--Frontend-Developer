import React from "react";
import "./FormControl.module.css";

export const FormControl = (props) => {
  let data = null;
  switch (props.type) {
    case "input": {
      data = (
        <React.Fragment>
          <input
            type={props.fieldType}
            name={props.name}
            onChange={props.changeHandler}
            placeholder={props.placeholder}
            value={props.value}
            id={props.name}
          />
        </React.Fragment>
      );
      break;
    }
    case "select": {
      data = (
        <select
          value={props.value}
          onChange={props.changeHandler}
          id={props.name}
        >
          {props.elementConfig.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    }
    default:
      break;
  }
  return data;
};
