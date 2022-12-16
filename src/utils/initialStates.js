
export const InputData = {
  Search_Type: {
    elementType: "select",
    elementConfig: {
      options: [
        { value: "type", displayValue: "type" },
        { value: "status", displayValue: "status " },
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
