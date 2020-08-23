/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';

export const RouteContext = createContext();

const RouteContextProvider = (props) => {
  const [navChoice, setNavChoice] = useState(0);
  const [selectedSubMenuItem, setSelectedSubMenuItem] = useState(0);

  const handleSetNavChoice = (choice) => {
    setNavChoice(choice);
  };

  const handleSetSelectedSubMenuItem = (choice) => {
    setSelectedSubMenuItem(choice);
  };

  return (
    <RouteContext.Provider
      value={{
        navChoice,
        handleSetNavChoice,
        selectedSubMenuItem,
        handleSetSelectedSubMenuItem,
      }}
    >
      {props.children}
    </RouteContext.Provider>
  );
};

export default RouteContextProvider;
