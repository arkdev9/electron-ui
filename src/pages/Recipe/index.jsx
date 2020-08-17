import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import { Typography, Box, Grid, useTheme } from '@material-ui/core'

import recipes from '../../data/recipes.json'
import styles from './styles'
import Ingredients from './Ingredients'
import Prep from './Prep'
import LiveView from './LiveView'
import {
  RecipeDetails,
  IngredientsImages,
  Servings,
  SelectPeople
} from './Details'

export function getRecipe (recipeId) {
  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].id === recipeId) {
      return recipes[i]
    }
  }
  return false
}

export default function Recipe () {
  const classes = styles(useTheme())
  const recipe = getRecipe(useParams().recipeId)
  const [progress, setProgress] = useState(0)
  const [progressSquares, setProgressSquares] = useState(
    new Array(5).fill(false)
  )
  console.log(progress)

  function handleStep () {
    // TODO: Move the step
    if (progress !== progressSquares.length) {
      const squares = progressSquares
      squares[progress] = true
      setProgressSquares(squares)
      setProgress(progress + 1)
    }
  }

  let viewPort
  if (progress < 3) {
    viewPort = (
      <Grid
        container
        direction='row'
        justify='flex-start'
        alignItems='flex-start'
      >
        <Grid item md={4}>
          2
        </Grid>
        <Grid item md={7} className={classes.contentBox}>
          <RecipeDetails recipe={recipe} handleStep={handleStep} />
          {/* Either show the initial Ingredients, or show selected serving size (or option to select) */}
          {progress ? (
            <Servings handleStep={handleStep} />
          ) : (
            <IngredientsImages handleStep={handleStep} />
          )}
          {progress === 2 && (
            <SelectPeople recipe={recipe} handleStep={handleStep} />
          )}
        </Grid>
      </Grid>
    )
  } else if (progress === 3) {
    viewPort = (
      <Grid item md={11}>
        <Ingredients handleStep={handleStep} />
      </Grid>
    )
  } else if (progress === 4) {
    viewPort = <Prep handleStep={handleStep} />
  } else {
    viewPort = <LiveView />
  }

  if (recipe) {
    return (
      <Grid
        container
        direction='row'
        justify='flex-start'
        alignItems='flex-start'
        style={{ height: '100%' }}
      >
        <Grid item md={1}>
          <Grid
            container
            direction='column'
            justify='flex-start'
            alignItems='center'
          >
            {progressSquares.map((completed, i) => (
              <Grid item key={i}>
                <Box
                  className={classes.progressSquare}
                  bgcolor={completed ? 'green' : 'red'}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item md={11} style={{ height: '100%' }}>
          {viewPort}
        </Grid>
      </Grid>
    )
  } else {
    return <Typography variant='h2'>404</Typography>
  }
}
