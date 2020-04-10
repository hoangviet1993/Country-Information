import { 
  createMuiTheme,
} from '@material-ui/core';
// tslint:disable-next-line: no-submodule-imports
import { blueGrey, grey } from '@material-ui/core/colors';

export const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: blueGrey[800],
    },
    type: 'dark',
  },
  typography: {
    "fontFamily": "Nunito Sans, sans-serif",
  },
});

darkTheme.typography.h5 = {
  fontSize: '1.0rem',
  [darkTheme.breakpoints.up('sm')]: {
    fontSize: '1.2rem',
  },
};

export const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: grey[50],
    },
    type: 'light',
  },
  typography: {
    "fontFamily": "Nunito Sans, sans-serif",
  },
});

lightTheme.typography.h5 = {
  fontSize: '1.0rem',
  [lightTheme.breakpoints.up('sm')]: {
    fontSize: '1.2rem',
  },
};
