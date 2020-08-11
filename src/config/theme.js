import { createMuiTheme } from '@material-ui/core'

export const spacing = 8
export const windowWidth = 1024
export const windowHeight = 600
/**
 * @param {} themeRoot Need to specify paletteType in themeRoot. e.g. `getTheme({paletteType: 'light'})`
 */
export default function getTheme (themeRoot) {
  return createMuiTheme({
    spacing: spacing,
    palette: {
      type: themeRoot.paletteType,
      background: {
        default: themeRoot.paletteType === 'light' ? '#fff' : '#313131'
      },
      primary: {
        main: '#FFFFFF'
        // secondary: '#FF5800'
      },
      secondary: {
        main: '#313131',
        light: '#707070'
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
          marginTop: `${spacing * 1}px`,
          marginBottom: `${spacing * 1}px`
        }
      },
      MuiPaper: {
        rounded: {
          borderRadius: '0px'
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
