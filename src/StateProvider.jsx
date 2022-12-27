import React, { createContext, useContext, useReducer } from "react";

//preparing data layer
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
      {/* children refering to the <APP/> */}
    </StateContext.Provider>
  );
};

//hook that allows us to pull information from the data layer
export const useStateValue = () => useContext(StateContext);
