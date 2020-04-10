import {
  Theme,
} from '@material-ui/core';

type SetTheme = (mode: Theme) => void;

export interface INavbarProp {
  currentThemeMode: Theme;
  setThemeMode: SetTheme;
}
