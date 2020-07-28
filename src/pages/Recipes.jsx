import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Box,
  Grid,
  Typography,
  makeStyles,
  useTheme,
  Card,
  CardMedia,
  CardContent
} from '@material-ui/core'

import recipesData from '../data/recipes.json'

const iconGridStyles = makeStyles({
  grid: {
    width: '100%',
    height: '100%',
    textAlign: 'center'
  },
  img: {
    width: '70%',
    height: '70%',
    margin: '15%'
  }
})

const recipeGridStyles = makeStyles(theme => ({
  grid: {
    flexWrap: 'nowrap',
    overflowX: 'auto',
    // Promote the list into its own layer on Chrome.
    // This costs memory but helps keeping high FPS.
    transform: 'translateZ(0)'
  },
  card: {
    marginTop: `${theme.spacing(2)}px`,
    width: 200,
    padding: `${theme.spacing(2)}px`,
    backgroundColor: 'transparent'
  },
  img: {
    height: 0,
    paddingTop: '125%',
    borderRadius: '5%'
  }
}))

const iconList = [
  { src: 'assets/icons/breakfast.svg', caption: 'Breakfast' },
  { src: 'assets/icons/lunch.svg', caption: 'Lunch' },
  { src: 'assets/icons/meal.svg', caption: 'Dinner' },
  { src: 'assets/icons/soup.svg', caption: 'Soup' },
  { src: 'assets/icons/rice.svg', caption: 'Rice' },
  { src: 'assets/icons/curry.svg', caption: 'Curry' }
]

export default function Recipes () {
  const [recipes, setRecipes] = useState({})
  const iconClasses = iconGridStyles(useTheme())
  const recipeClasses = recipeGridStyles(useTheme())

  // TODO: We need to implement this in such a way that
  // the recipes are loaded from an external source
  function getRecipes () {
    return recipesData
  }
  // TODO: Use `useEffect` to get Recipes instead of mapping
  // from getRecipes during render itself

  return (
    <Box m={2}>
      <Box mt={3} mb={5}>
        <Box mb={2}>
          <Typography variant='h5'>
            Let's cook something great today!
          </Typography>
        </Box>
        <Grid
          container
          direction='row'
          justify='flex-start'
          alignItems='center'
        >
          {iconList.map(icon => (
            <Box
              key={icon.caption}
              borderRadius='50%'
              border={1}
              height={52}
              width={52}
              m={1}
            >
              <Grid item className={iconClasses.grid}>
                <img
                  src={icon.src}
                  className={iconClasses.img}
                  alt={icon.caption}
                />
                <Typography variant='caption'>{icon.caption}</Typography>
              </Grid>
            </Box>
          ))}
        </Grid>
      </Box>
      <Box>
        <Typography variant='h5'>You may like</Typography>
        {/* TODO: Get rid of the scrollbar */}
        <Box mr={-4} ml={-4} mt={-2}>
          <Grid
            container
            direction='row'
            justify='flex-start'
            alignItems='center'
            className={recipeClasses.grid}
          >
            {getRecipes().map(recipe => (
              <Grid item key={recipe.id}>
                <Link to={`/recipes/${recipe.id}`}>
                  <Card className={recipeClasses.card} elevation={0}>
                    <CardMedia
                      image={recipe.src}
                      className={recipeClasses.img}
                    />
                    <CardContent align='center'>
                      <Typography variant='caption'>{recipe.name}</Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}
