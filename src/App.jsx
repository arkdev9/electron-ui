import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Footer from './components/Footer'
import Home from './pages/Home'
import theme from './styles/theme'

// const MQTT_ADDRESS = 'ws://localhost:9000'

function App () {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        {/* <AppHeader  /> */}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/recipes' />
          <Route path='/recipes/:recipeId' />
          {/* <Route path='/recipes' component={Recipes} />
            <Route path='/recipe/:recipeId' component={Recipe} />
            <Route path='/weighingScale' component={WeighingScale} />
            <Route path='/inductionCooktop' component={InductionCooktop} />
            <Route path='/liquidStation' component={LiquidStation} />
            <Route path='/spiceRack' component={SpiceRack} />
            <Route path='/riceCooker' component={RiceCooker} />
            <Route path='/pantry' component={Pantry} />
            <Route path='/motorController' component={MotorController} />
            <Route path='/scheduler' component={Scheduler} />
            <Route
              path='/preCookPipeline/:recipeId'
              component={PreCookPipeline}
            />
            <Route path='/testRecipe' component={TestRecipe} /> */}
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  )
}

export default App
