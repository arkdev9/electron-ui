import React from 'react'
import { Box, Grid, ThemeProvider } from '@material-ui/core'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navigation from './components/Navigation'

import theme from './config/theme'
import routes from './config/routes'

// const MQTT_ADDRESS = 'ws://localhost:9000'

function App () {
  return (
    <ThemeProvider theme={theme}>
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
            <Box p={2}>
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
  )
}

export default App
