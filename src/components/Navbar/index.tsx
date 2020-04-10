import {
  AppBar,
  Box,
  Button,
  createStyles,
  Hidden,
  makeStyles,
  MuiThemeProvider,
  Theme,
  Toolbar,
  Typography,
} from '@material-ui/core';
// tslint:disable-next-line: no-submodule-imports
import Brightness2Icon from '@material-ui/icons/Brightness2';
import React from 'react';
import * as themes from '../../themes';
import * as types from '../../types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logoTextContainer: {
      flexGrow: 1,
      fontWeight: 700,
    },
    moonIcon: {
      borderRadius: '4px',
      boxSizing: 'content-box',
      margin: '4px',
      transform: 'rotate(145deg)'
    },
    themeSwitchButton: {
      textTransform: 'none',
    },
  })
);

function Navbar(props: types.INavbarProp) {

  function toggleTheme(): void {
    if (props.currentThemeMode === themes.darkTheme) {
      props.setThemeMode(themes.lightTheme);
    } else {
      props.setThemeMode(themes.darkTheme);
    }
  }

  const classes = useStyles();
  return (
    <MuiThemeProvider theme={props.currentThemeMode}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography
            className={classes.logoTextContainer}
            variant="h5"
          >
            <Box textAlign="left" m={1}>
              Where in the world?
        </Box>
          </Typography>
          <Hidden>
            <Button
              className={classes.themeSwitchButton}
              startIcon={
                <Brightness2Icon className={classes.moonIcon}/>
              }
              onClick={toggleTheme}
            >
              Dark Mode
        </Button>
          </Hidden>
        </Toolbar>
      </AppBar>
    </MuiThemeProvider>
  );
}

export default Navbar;