import React from "react";
import Classes from "./Capsule.module.css";

export const Capsule = (props) => {
  const { capsule } = props;
  return (
    <li
      key={capsule.capsule_serial}
      className={`py-4 border bg-white p-1 m-8  ${Classes.base}`}
      onClick={props.clickHandler}
    >
      <div className="ml-3">
        <p className="text-sm font-medium text-gray-900 p-0.5">
          {capsule.type}
        </p>
        <p className="text-sm font-medium text-gray-900 p-0.5">
          {capsule.capsule_serial}
        </p>
        <p className="text-sm text-gray-500 p-0.5">{capsule.status}</p>
        <p className="text-sm text-gray-500 p-0.5">{capsule.original_launch}</p>
        <p className="text-sm font-bold text-gray-500 p-0.5">SHOW_MORE</p>
      </div>
    </li>
  );
};
