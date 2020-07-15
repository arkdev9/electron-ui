import { createMuiTheme } from '@material-ui/core'

export default createMuiTheme({
  palette: {
    primary: {
      main: '#FFFFFF'
      // secondary: '#FF5800'
    },
    secondary: {
      main: '#FF5800',
      secondary: '#FDFDFD'
    }
  },
  typography: {
    fontFamily: [
      'Poppins',
      '-apple-system',
      'Helvetica Neue',
      'Roboto',
      'Ubuntu',
      'sans-serif'
    ].join(',')
  },
  overrides: {
    MuiTypography: {
      root: {
        userSelect: 'none'
      }
    }
  },
  constants: {
    windowWidth: 480,
    windowHeight: 640
  }
})
