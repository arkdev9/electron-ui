import React from 'react'
import { useParams } from 'react-router-dom'

import { Typography, Box, Button, Grid, makeStyles } from '@material-ui/core'

import recipes from '../data/recipes.json'
import theme from '../config/theme'

const styles = makeStyles(theme => ({
  columnItem: {
    width: '100%'
  },
  buttonGrid: {
    width: '100%',
    marginBottom: theme.spacing(2)
  },
  pulledItem: {
    width: '40%',
    marginRight: '5%',
    marginLeft: '5%'
  },
  forceFullHeight: {
    height: `${theme.constants.windowHeight}px`
  },
  img: {
    height: `${theme.constants.windowHeight}px`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  }
}))

function getRecipe (recipeId) {
  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].id === recipeId) {
      return recipes[i]
    }
  }
  return false
}

export default function Recipe () {
  const classes = styles(theme)
  const recipeId = useParams().recipeId
  const recipe = getRecipe(recipeId)

  if (recipe) {
    return (
      // **NOTE: Offset the Grid wrapper margin from Home component
      <Box m={-2} className={classes.forceFullHeight}>
        <Grid
          container
          direction='row'
          justify='center'
          alignItems='center'
          className={classes.forceFullHeight}
        >
          <Grid item md={5}>
            <Box
              overflow='hidden'
              className={classes.img}
              style={{ backgroundImage: `url(${recipe.src})` }}
            >
              <Grid
                container
                direction='column'
                justify='space-between'
                alignItems='center'
                className={classes.forceFullHeight}
              >
                <Grid item className={classes.columnItem}>
                  <Typography>Gonna be some nav stuff</Typography>
                </Grid>
                <Grid item className={classes.columnItem}>
                  <Grid
                    container
                    direction='row'
                    justify='center'
                    alignItems='center'
                    className={classes.buttonGrid}
                  >
                    <Grid item className={classes.pulledItem}>
                      <Button
                        variant='contained'
                        color='secondary'
                        style={{ width: '100%' }}
                      >
                        Cook Now
                      </Button>
                    </Grid>
                    <Grid item className={classes.pulledItem}>
                      <Button
                        variant='contained'
                        color='secondary'
                        style={{ width: '100%' }}
                      >
                        Schedule Dish
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item md={7}>
            <Typography variant='h4' align='center'>
              {recipe.name}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    )
  } else {
    return <Typography variant='h2'>404</Typography>
  }
}
