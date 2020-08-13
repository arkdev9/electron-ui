import {
  Home,
  Recipes,
  Recipe,
  Dashboard,
  WeighScale,
  Ingredients
} from '../pages'

const paths = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/recipes/:recipeId/ingredients',
    component: Ingredients
  },
  {
    path: '/recipes/:recipeId',
    component: Recipe
  },
  {
    path: '/recipes',
    exact: true,
    component: Recipes
  },
  {
    path: '/weighScale',
    exact: true,
    component: WeighScale
  },
  {
    path: '/dev',
    component: Dashboard
  },
  // **NOTE: This path should always be at the end
  // paths.push()
  {
    path: '',
    component: Home
  }
]

export default paths
