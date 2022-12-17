import { LandingReducer } from "./Reducer";
import * as actionTypes from "./ActionTypes";

describe("Landing reducer", () => {
  it("should return the initial state of the landing reducer", () => {
    expect(LandingReducer(undefined, {})).toEqual({
      capsules: [],
      search_capsules: [],
      loader: false,
      click: false,
    });
  });

  it("store the  capsule data", () => {
    expect(
      LandingReducer(
        {
          capsules: [],
          search_capsules: [],
          loader: false,
          click: false,
        },
        {
          type: actionTypes.GET_CAPSULES,
          payload: [
            {
              capsule_id: "dragon1",
              capsule_serial: "C101",
              details: "Reentered after three weeks in orbit",
              landings: 1,
              missions: [{ name: "COTS 1", flight: 7 }],
              original_launch: "2010-12-08T15:43:00.000Z",
              original_launch_unix: 1291822980,
              reuse_count: 0,
              status: "retired",
              type: "Dragon 1.0",
            },
          ],
        }
      )
    ).toEqual({
      capsules: [
        {
          capsule_id: "dragon1",
          capsule_serial: "C101",
          details: "Reentered after three weeks in orbit",
          landings: 1,
          missions: [{ name: "COTS 1", flight: 7 }],
          original_launch: "2010-12-08T15:43:00.000Z",
          original_launch_unix: 1291822980,
          reuse_count: 0,
          status: "retired",
          type: "Dragon 1.0",
        },
      ],
      search_capsules: [
        {
          capsule_id: "dragon1",
          capsule_serial: "C101",
          details: "Reentered after three weeks in orbit",
          landings: 1,
          missions: [{ name: "COTS 1", flight: 7 }],
          original_launch: "2010-12-08T15:43:00.000Z",
          original_launch_unix: 1291822980,
          reuse_count: 0,
          status: "retired",
          type: "Dragon 1.0",
        },
      ],
      loader: false,
      click: false,
    });
  });
  
});
