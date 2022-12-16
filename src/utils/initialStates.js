import { v4 as uuid } from "uuid";

export const InputData = {
  Search_Type: {
    elementType: "select",
    elementConfig: {
      options: [
        { value: "type", displayValue: "type" },
        { value: "status", displayValue: "status " },
        // { value: "original_launch", displayValue: "original_launch" },
      ],
    },
    value: "type",
    validation: {},
    valid: true,
  },
  Search: {
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "Enter minimum 3 letters to Search",
    },
    value: "",
    validation: {
      required: true,
    },
    valid: true,
  },
};

export const initialLaneData = {
  name: "",
};

export const createLaneData = {
  name: "Create New Lane",
  id: uuid(),
};
