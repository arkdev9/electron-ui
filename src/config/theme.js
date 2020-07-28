import { createMuiTheme } from '@material-ui/core'

export const spacing = 8
export const windowWidth = 1024
export const windowHeight = 600
export default function getTheme (themeRoot) {
  return createMuiTheme({
    spacing: spacing,
    palette: {
      type: themeRoot.paletteType,
      background: {
        default: themeRoot.paletteType === 'light' ? '#fff' : '#111111'
      },
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
      },
      MuiDivider: {
        root: {
          width: '80%',
          marginLeft: '10%',
          marginTop: `${spacing * 2}px`
        }
      }
    },
    constants: {
      windowWidth,
      windowHeight,
      navWidth: 50
    }
  })
}
