import { useReducer, createContext } from "react";

const initialState = {
  menuToggle: false,
};

export const contentCreate = createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return {
        menuToggle: !state.menuToggle,
      };

    default:
      return state;
  }
};

export const DataProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <contentCreate.Provider value={{ state, dispatch }}>
      {props.children}
    </contentCreate.Provider>
  );
};
