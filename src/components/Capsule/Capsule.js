import React from "react";
import Classes from "./Capsule.module.css";

export const Capsule = (props) => {
  const { capsule } = props;
  /*
    capsule_id: "dragon1"
    capsule_serial: "C101"
    details: "Reentered after three weeks in orbit"
    landings: 1
    missions: [{name: 'COTS 1', flight: 7}]
    original_launch: "2010-12-08T15:43:00.000Z"
    original_launch_unix: 1291822980
    reuse_count: 0
    status: "retired"
    type: "Dragon 1.0"
    */
  return (
    <li
      key={capsule.capsule_serial}
      className={`py-4 border bg-white p-1 m-8  ${Classes.base}`}
      onClick={props.clickHandler}
    >
      {/* <img className="h-10 w-10 rounded-full" src={person.image} alt="" /> */}
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
