export const initialState = {
  username: "",
  firstname: "",
  lastname: "",
  password: "",
  confirmpassword: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    default:
      return state;
  }
};
