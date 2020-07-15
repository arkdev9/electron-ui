import React from 'react'
import { useParams } from 'react-router-dom'

import { Typography, Box, Button, Grid, withStyles } from '@material-ui/core'

import recipes from '../data/recipes.json'
import theme from '../config/theme'

const PulledGridItem = withStyles(theme => ({
  root: {
    width: '40%',
    transform: 'translateY(-50%)',
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2)
  }
}))(Grid)

function getRecipe (recipeId) {
  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].id === recipeId) {
      return recipes[i]
    }
  }
  return false
}

export default function Recipe () {
  const recipeId = useParams().recipeId
  const recipe = getRecipe(recipeId)

  if (recipe) {
    return (
      <>
        <Box
          width={theme.constants.windowWidth}
          height={theme.constants.windowHeight * 0.4}
          overflow='hidden'
        >
          <img
            src={recipe.src}
            alt={recipe.name}
            // Centers the image within Box
            // TODO: Only needed if image is wider than longer
            style={{
              width: '100%'
              // transform: 'translateY(-50%)',
              // marginTop: '50%'
            }}
          />
        </Box>
        <Box width='100%'>
          <Grid container direction='row' justify='center' alignItems='center'>
            <PulledGridItem item>
              <Button
                variant='contained'
                color='secondary'
                style={{ width: '100%' }}
              >
                Cook Now
              </Button>
            </PulledGridItem>
            <PulledGridItem item>
              <Button
                variant='contained'
                color='secondary'
                style={{ width: '100%' }}
              >
                Schedule Dish
              </Button>
            </PulledGridItem>
          </Grid>
        </Box>
        <Typography variant='h5' align='center'>
          {recipe.name}
        </Typography>
      </>
    )
  } else {
    return <Typography variant='h2'>404</Typography>
  }
}
