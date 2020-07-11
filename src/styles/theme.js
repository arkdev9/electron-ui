import { createMuiTheme } from '@material-ui/core'

export default createMuiTheme({
  palette: {
    primary: {
      main: '#FFFFFF'
    },
    secondary: {
      main: '#DDDDDD',
      secondary: '#FDFDFD'
    }
  },
  typography: {
    fontFamily: [
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
  }
})
