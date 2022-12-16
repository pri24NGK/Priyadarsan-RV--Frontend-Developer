import axios from "axios";
import * as actionTypes from "./ActionTypes";
import * as FeedBackActions from "../FeedBack/Index";

export const getCapsules = (payload, search = null) => {
  return {
    type: actionTypes.GET_CAPSULES,
    payload,
    search,
  };
};

export const showLoader = (payload) => {
  return {
    type: actionTypes.SHOW_LOADER,
    payload,
  };
};

export const getClick = () => {
  return {
    type: actionTypes.GET_CLICK,
  };
};

export const getCapsulesApi = () => {
  return (dispatch) => {
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
    axios
      .get("/capsules")
      .then((res) => {
        console.log(res.data);
        let updatedData = res.data.map((item) => {
          let data = {
            ...item,
            type: "Type: " + item.type,
            capsule_serial: "Serial: " + item.capsule_serial,
            details: "Details: " + (item.details || "unknown"),
            status: "Status: " + (item.status || "unknown"),
            original_launch:
              "Original_Launch: " +
              (item.original_launch
                ? new Date(item.original_launch).toDateString()
                : "unknown"),
          };
          return data;
        });
        dispatch(getCapsules(updatedData));
      })
      .catch((err) => console.error(err));
  };
};

export const getCapsuleApi = (id) => {
  return (dispatch) => {
    dispatch(showLoader(true));
    axios
      .get("/capsules/" + id)
      .then((res) => {
        console.log(res.data);
        let updatedData = {
          ...res.data,
          feedBackType: "GET_SINGLE_CAPSULE",
          type: "Type: " + res.data.type,
          capsule_serial: "Serial: " + res.data.capsule_serial,
          details: "Details: " + (res.data.details || "unknown"),
          status: "Status: " + (res.data.status || "unknown"),
          original_launch:
            "Original_Launch: " +
            (res.data.original_launch
              ? new Date(res.data.original_launch).toDateString()
              : "unknown"),
        };
        dispatch(FeedBackActions.FeedBackData(updatedData));
        dispatch(showLoader(false));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const searchData = (params, type) => {
  return (dispatch, getState) => {
    console.log(params, type);
    const capsules = [...getState().Landing.search_capsules];
    if (params.length >= 3) {
      let updatedCapsule = capsules.filter((capsule) => {
        let updatedCapsuleData =
          type === "status" ? capsule[type].split(" ")[1] : capsule[type];
        let convertParams = params.toLowerCase(),
          convertCapsuleData = updatedCapsuleData.toLowerCase();
        return convertCapsuleData.match(convertParams);
      });
      dispatch(getCapsules(updatedCapsule, true));
    } else {
      dispatch(getCapsules(capsules));
    }
  };
};

export const sortCapsules = (type, click) => {
  return (dispatch, getState) => {
    const capsules = [...getState().Landing.search_capsules];
    let sortedData = capsules.sort((a, b) => {
      console.log("sort", a.original_launch_unix, b.original_launch_unix);
      if (type === "original_launch") {
        if (click) {
          return a.original_launch_unix - b.original_launch_unix;
        } else {
          return b.original_launch_unix - a.original_launch_unix;
        }
      } else {
        return a-b;
      }
    });
    dispatch(getClick());

    dispatch(getCapsules(sortedData));
  };
};
