/* eslint-disable no-unused-vars */
import { createMuiTheme } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

const arcBlue = '#0b72b9';
const arcOrange = '#ffba60';
const arcGray = '#868686';

const breakpoints = createBreakpoints({});
// example use:  [breakpoints.down('sm')]: { ... }

const theme = createMuiTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange,
    },
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcOrange,
    },
  },
  typography: {
    tab: {
      color: 'white',
      fontFamily: 'Raleway',
      fontSize: '1rem',
      fontWeight: '700',
      textTransform: 'none',
    },
    estimate: {
      color: 'white',
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none',
    },
    h2: {
      color: arcBlue,
      fontFamily: 'Raleway',
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h3: {
      color: arcBlue,
      fontFamily: 'Pacifico',
      fontSize: '2.5rem',
    },
    h4: {
      color: arcBlue,
      fontFamily: 'Raleway',
      fontSize: '1.75rem',
      fontWeight: 700,
    },
    subtitle1: {
      color: arcGray,
      fontSize: '1.25rem',
      fontWeight: 400,
    },
    subtitle2: {
      color: 'white',
      fontSize: '1.25rem',
      fontWeight: 400,
    },
    body1: {
      color: arcGray,
      fontSize: '1.25rem',
      fontWeight: 400,
    },
    learnButton: {
      color: arcBlue,
      fontFamily: 'Roboto',
      fontWeight: 'bold',
      borderColor: arcBlue,
      borderRadius: 50,
      borderWidth: 2,
      textTransform: 'none',
    },
  },
});

export default theme;
