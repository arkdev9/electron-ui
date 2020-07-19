import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Footer } from './components'

import theme from './config/theme'
import routes from './config/routes'

// const MQTT_ADDRESS = 'ws://localhost:9000'

function App () {
  return (
    <ThemeProvider theme={theme}>
      <Router>
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
        <Footer />
      </Router>
    </ThemeProvider>
  )
}

export default App
