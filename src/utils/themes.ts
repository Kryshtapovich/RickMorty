import { Color } from "./styles";

interface Theme {
  navbar: string;
  navbarIcon: {
    active: string;
    inactive: string;
  };
}

export const LightTheme: Theme = {
  navbar: Color.WHITE,
  navbarIcon: {
    active: Color.RED,
    inactive: Color.BLACK
  }
};

export const DarkTheme: Theme = {
  navbar: Color.BLACK,
  navbarIcon: {
    active: Color.CYAN,
    inactive: Color.WHITE
  }
};
