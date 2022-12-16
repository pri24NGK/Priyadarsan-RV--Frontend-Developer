import React, { useState } from "react";
import Classes from "./CapsuleDetails.module.css";

export const CapsuleDetails = (props) => {
  const [showExtraData, setShowExtraData] = useState(false);

  const { capsule } = props;
  return (
    <div>
      <p className="text-sm font-medium text-gray-900 p-0.5">{capsule.type}</p>
      <p className="text-sm font-medium text-gray-900 p-0.5">
        {capsule.capsule_serial}
      </p>
      <p className="text-base font-medium text-gray-900 font-medium p-0.5">
        {capsule.status}
      </p>
      <p className="text-base font-medium text-gray-900 p-0.5">
        {capsule.original_launch}
      </p>
      <p className="text-base font-medium text-gray-900 p-0.5">
        {capsule.details}
      </p>
      <div className="flex items-center">
        <p className="text-base font-medium text-gray-900 p-0.5">Landings:</p>
        <span className="text-base font-bold text-white bg-emerald-200 p-2 rounded-3xl">
          {capsule.landings}
        </span>
      </div>
      {capsule.missions.length > 0 && (
        <p
          className="text-base font-bold text-gray-900 p-0.5 cursor-pointer"
          onClick={() => setShowExtraData((data) => !data)}
        >
          Click {showExtraData ? "to Close" : " for Mission Details"}
        </p>
      )}
      <div className="flex items-center flex-wrap">
        {showExtraData &&
          capsule.missions &&
          capsule.missions.length > 0 &&
          capsule.missions.map((mission) => {
            return (
              <div
                className={`py-1 border rounded bg-gray-400 p-1 m-2 flex-col items-center ${Classes.badge}`}
              >
                <p className="text-base font-medium text-white ">
                  Name: {mission.name},
                </p>
                <p className="text-base font-medium text-white ">
                  Flight: {mission.flight}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};
