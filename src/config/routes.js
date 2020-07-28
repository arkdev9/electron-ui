import {
  Home,
  Recipes,
  Recipe,
  InductionCooktop,
  RiceCooker,
  Dashboard
} from '../pages'

const paths = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/recipes',
    exact: true,
    component: Recipes
  },
  {
    path: '/recipes/:recipeId',
    component: Recipe
  },
  {
    path: '/inductionCooktop',
    exact: true,
    component: InductionCooktop
  },
  {
    path: '/riceCooker',
    exact: true,
    component: RiceCooker
  },
  {
    path: '/dev',
    component: Dashboard
  }
]

// **NOTE: This path should always be at the end
paths.push({
  path: '',
  component: Home
})

export default paths

/* <Route path='/recipes' component={Recipes} />
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
  <Route path='/testRecipe' component={TestRecipe} /> */