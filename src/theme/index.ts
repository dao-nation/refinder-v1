import { PaletteOptions, createTheme, css } from '@mui/material/styles';

export type AllowedTheme = NonNullable<PaletteOptions['mode']>;
export const DEFAULT_THEME: AllowedTheme = 'light';

// export const lightTheme = createTheme({
//   palette: {
//     primary: { main: '#9EDDBC' },
//     secondary: { main: '#2a48f3' },
//     mode: 'light',
//   },
// });

export const darkTheme = createTheme({
  palette: {
    // #7D9A78
    primary: { main: '#7D9A78', light: '#9EDDBC', contrastText: '#00000' },
    secondary: { main: '#9EDDBC', contrastText: '#0000' },
    mode: 'light',
  },
});

export const globalStyles = css`
  :root {
    body {
      baclground-color: #fff;
      color: #121212;
    }
  }

  [data-theme='light'] {
    body {
      background-color: #ffff;
      color: #0000;
    }
  }
`;
