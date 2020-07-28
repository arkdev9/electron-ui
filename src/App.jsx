import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Connector } from 'mqtt-react'
import { Box, Grid, ThemeProvider, CssBaseline } from '@material-ui/core'

import Navigation from './components/Navigation'

import getTheme from './config/theme'
import routes from './config/routes'

// const MQTT_ADDRESS = 'ws://localhost:9000'

function App () {
  const theme = getTheme({ paletteType: 'light' })
  return (
    <Connector mqttProps='ws://localhost:8083'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Grid
            container
            direction='row'
            justify='flex-start'
            alignItems='flex-start'
            style={{
              height: theme.constants.windowHeight
            }}
          >
            <Grid item style={{ height: '100%' }}>
              <Navigation />
            </Grid>
            <Grid
              item
              style={{
                height: '100%',
                width: `calc(100% - ${theme.constants.navWidth}px)`
              }}
            >
              <Box
                p={2}
                height={theme.constants.windowHeight}
                overflow='hidden'
              >
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
            </Grid>
          </Grid>
        </Router>
      </ThemeProvider>
    </Connector>
  )
}

export default App
