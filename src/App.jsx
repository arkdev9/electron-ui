import React, { createContext, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Connector } from 'mqtt-react'
import { Box, ThemeProvider, CssBaseline } from '@material-ui/core'

import getTheme from './config/theme'
import routes from './config/routes'
import MasterControl from './overlays/MasterControl'

// const MQTT_ADDRESS = 'ws://localhost:9000'

const appDefaults = {
  loggedIn: true,
  username: 'Ana',
  theme: 'light',
  masterControl: false
}
export const AppContext = createContext({
  appState: appDefaults,
  toggleTheme: () => {},
  toggleMasterControl: () => {}
})

function App () {
  // TODO: Implement toggler

  // Single state object so we don't have to wrestle with
  // multiple state hooks. This though, means we will have to
  // handle the state separately for each key in it.
  const [appState, setAppState] = useState(appDefaults)
  const theme = getTheme({ paletteType: appState.theme })

  const toggleTheme = () => {
    setAppState({
      ...appState,
      theme: appState.theme === 'dark' ? 'light' : 'dark'
    })
  }
  const toggleMasterControl = () => {
    setAppState({
      ...appState,
      masterControl: !appState.masterControl
    })
  }

  return (
    <Connector mqttProps='ws://localhost:8083'>
      {/* Passing default values to provider hook */}
      <AppContext.Provider
        value={{ appState, toggleTheme, toggleMasterControl }}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <MasterControl />
            <Box height={theme.constants.windowHeight} overflow='hidden'>
              <Switch>
                {routes.map(route => (
                  <Route
                    key={route.path}
                    exact={route.exact}
                    path={route.path}
                    component={route.component}
                  />
                ))}
              </Switch>
            </Box>
          </Router>
        </ThemeProvider>
      </AppContext.Provider>
    </Connector>
  )
}

export default App
