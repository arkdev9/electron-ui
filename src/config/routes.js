import { Home, Recipes, Recipe, TasteProfile, InductionCooktop } from '../pages'

export default [
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
  // TODO: Figure out where this route is supposed to be
  {
    path: '/inductionCooktop',
    exact: true,
    component: InductionCooktop
  },
  {
    path: '',
    component: Home
  }
]

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
