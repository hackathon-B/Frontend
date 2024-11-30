import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000000',
      light: '#ffffff',
      dark: '#000000'
    },
    secondary: {
      main: '#dddddd',
      light: '#dddddd',
      dark: '#222222'
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff'
    }
  }
});

// ダークモードのテーマが必要な場合は、別のテーマとして定義
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#000000',
      light: '#ffffff',
      dark: '#000000'
    },
    secondary: {
      main: '#dddddd',
      light: '#dddddd',
      dark: '#222222'
    },
    background: {
      default: '#000000',
      paper: '#000000'
    }
  }
});