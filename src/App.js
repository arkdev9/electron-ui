import React from 'react';
import { BrowserRouter as Router, withRouter,Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import { Grommet } from 'grommet';
import Home from './components/Home';
import Recipes from './components/Recipes';
import AppHeader from './components/AppHeader';
import Footer from './components/footer';
import InductionCooktop from './components/InductionCooktop';
import LiquidStation from './components/LiquidStation';
import SpiceRack from './components/SpiceRack';
import RiceCooker from './components/RiceCooker';
import WeighingScale from './components/WeighingScale';
import Pantry from  './components/Pantry';
import { Connector } from 'mqtt-react';
import MotorController from './components/MotorController';
import Recipe from './components/Recipe';
import AppFooter from './components/AppFooter';
import Scheduler from './components/Scheduler';

import { base } from "grommet/themes";
import { deepMerge } from "grommet/utils";

import myTheme from './config/myTheme';

import { Box, extendDefaultTheme } from "grommet";
import PreCookPipeline from './components/PreCookPipeline';

// extendDefaultTheme(
//   deepMerge(base, {
//     global: {
//       colors: {
//         brand: "red"
//       }
//     }
//   })
// );

const MQTT_ADDRESS = "ws://rpi4-002.local:9001"
// const MQTT_ADDRESS = "ws://localhost:9001"

function App() {
  return (
        <Grommet className="App" theme={myTheme} style={{backgroundColor: 'white'}}>
        {/* <Connector mqttProps="ws://localhost:9001"> */}
        <Connector mqttProps={MQTT_ADDRESS}>
          <Router>          
          {/* <AppHeader  /> */}
          <Switch>
            <Route path="/recipes" component={Recipes} />
            <Route path="/recipe/:recipeId" component={Recipe} />
            <Route path="/weighingScale" component={WeighingScale} />
            <Route path="/inductionCooktop" component={InductionCooktop}/>
            <Route path="/liquidStation" component={LiquidStation}/>
            <Route path="/spiceRack" component={SpiceRack}/>
            <Route path="/riceCooker" component={RiceCooker}/>
            <Route path="/pantry" component={Pantry}/>
            <Route path="/motorController" component={MotorController}/>
            <Route path="/scheduler" component={Scheduler}/>
            <Route path="/preCookPipeline/:recipeId" component={PreCookPipeline }/>
            <Route path="/" component={Home}/>
          </Switch>
          {/* <Footer/> */}
          <AppFooter/>
        </Router>
      </Connector>
      </Grommet>

  );
}

export default App