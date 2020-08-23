import React, { createContext } from 'react';
import { useTheme } from '@material-ui/core/styles';

import useMediaQuery from '@material-ui/core/useMediaQuery';

export const ViewportContext = createContext();

const ViewportContextProvider = (props) => {
  const theme = useTheme();

  const viewportIsSmallOrBelow = useMediaQuery(theme.breakpoints.down('sm'));
  const viewportIsXs = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <ViewportContext.Provider
      value={{
        viewportIsXs,
        viewportIsSmallOrBelow,
      }}
    >
      {props.children}
    </ViewportContext.Provider>
  );
};

export default ViewportContextProvider;
