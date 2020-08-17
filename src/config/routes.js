import { Home, Recipes, Recipe, Dashboard, WeighScale, Spices } from '../pages'

const paths = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/spices',
    component: Spices
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
