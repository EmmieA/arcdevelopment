import React, { createContext } from 'react';
import { useTheme } from '@material-ui/core/styles';

import useMediaQuery from '@material-ui/core/useMediaQuery';

export const ViewportContext = createContext();

const ViewportContextProvider = (props) => {
  const theme = useTheme();

  const viewportIsXs = useMediaQuery(theme.breakpoints.down('xs'));
  const viewportIsSmallOrBelow = useMediaQuery(theme.breakpoints.down('sm'));
  const viewportIsMediumOrBelow = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <ViewportContext.Provider
      value={{
        viewportIsXs,
        viewportIsSmallOrBelow,
        viewportIsMediumOrBelow,
      }}
    >
      {props.children}
    </ViewportContext.Provider>
  );
};

export default ViewportContextProvider;
