import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import {
  Typography,
  Box,
  Grid,
  makeStyles,
  useTheme,
  Divider,
  Button
} from '@material-ui/core'
import { Schedule, Star } from '@material-ui/icons'

import recipes from '../data/recipes.json'

const styles = makeStyles(theme => ({
  progressSquare: {
    marginTop: theme.spacing(2),
    borderRadius: theme.spacing(1),
    width: 40,
    height: 40
  },
  contentBox: {
    padding: theme.spacing(2)
  },
  statsContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  statsBox: {
    padding: theme.spacing(1),
    border: '1px solid black',
    borderRadius: theme.spacing(1),
    margin: theme.spacing(1),
    textAlign: 'center'
  },
  ingredientImagesContainer: {
    marginTop: theme.spacing(2)
  },
  ingredientImg: {
    width: 40,
    height: 40,
    marginLeft: '50%',
    transform: 'translateX(-50%)'
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

function RecipeDetails (props) {
  const classes = styles(useTheme())
  return (
    <>
      <Typography variant='h4'>{props.recipe.name}</Typography>
      <Typography variant='subtitle1'>By {props.recipe.creator}</Typography>
      {/* TODO: Tags  */}
      <Grid
        container
        direction='row'
        justify='space-evenly'
        alignItems='flex-start'
        className={classes.statsContainer}
      >
        <Grid item className={classes.statsBox}>
          <Schedule />
          <Typography variant='subtitle2'>Hands-on Time</Typography>
          <Divider />
          <Typography>20 min</Typography>
        </Grid>
        <Grid item className={classes.statsBox}>
          <Schedule />
          <Typography variant='subtitle2'>Machine Time</Typography>
          <Divider />
          <Typography>60 min</Typography>
        </Grid>
        <Grid item className={classes.statsBox}>
          <Star />
          <Typography variant='subtitle2'>User Rating</Typography>
          <Divider />
          <Typography>4.5</Typography>
        </Grid>
      </Grid>
    </>
  )
}

function Ingredients (props) {
  const classes = styles(useTheme())
  return (
    <>
      <Box mt={3} mb={3}>
        <Typography variant='h5'>Ingredients</Typography>
        <Grid
          container
          direction='row'
          justify='space-evenly'
          alignItems='flex-start'
          className={classes.ingredientImagesContainer}
        >
          <Grid item>
            <img
              className={classes.ingredientImg}
              src='/assets/ingredients/onion.png'
              alt='Onion'
            />
            <Typography>Onion</Typography>
          </Grid>
          <Grid item>
            <img
              className={classes.ingredientImg}
              src='/assets/ingredients/paneer.png'
              alt='Paneer'
            />
            <Typography>Paneer</Typography>
          </Grid>
          <Grid item>
            <img
              className={classes.ingredientImg}
              src='/assets/ingredients/cinnamon.png'
              alt='Cinnamon'
            />
            <Typography>Cinnamon</Typography>
          </Grid>
          <Grid item>
            <img
              className={classes.ingredientImg}
              src='/assets/ingredients/tomatoes.png'
              alt='Tomatoes'
            />
            <Typography>Tomatoes</Typography>
          </Grid>
          <Grid item>
            <img
              className={classes.ingredientImg}
              src='/assets/ingredients/lettuce.png'
              alt='Tomatoes'
            />
            <Typography>Lettuce</Typography>
          </Grid>
        </Grid>
      </Box>
      <Grid
        container
        direction='row'
        justify='space-evenly'
        alignItems='center'
      >
        <Button
          onClick={props.handleStep}
          variant='contained'
          color='secondary'
        >
          Cook
        </Button>
        <Button
          onClick={props.handleStep}
          variant='contained'
          color='secondary'
        >
          Schedule
        </Button>
      </Grid>
    </>
  )
}

function Servings (props) {
  const [selectedSize, selectSize] = useState(0)
  function handleClick (size) {
    selectSize(size)
    props.handleStep()
  }
  return (
    <Box mt={5}>
      <Typography variant='h5'>Servings</Typography>
      <Box mt={3}>
        <Grid
          container
          direction='row'
          justify='flex-start'
          alignItems='center'
          spacing={2}
        >
          {[1, 2, 3, 4, 5, 6].map(size => (
            <Grid item key={size}>
              <Button
                color='secondary'
                variant={size === selectedSize ? 'contained' : 'outlined'}
                style={{ width: '30px' }}
                onClick={() => handleClick(size)}
                disabled={selectedSize !== 0}
              >
                {size}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

function SelectPeople (props) {
  const [selectedPeople, selectPerson] = useState({})
  function addPerson (person) {
    const people = selectedPeople
    people[person] = !people[person]
    selectPerson(people)
    console.log(people)
  }
  return (
    <Box mt={3} mb={3}>
      <Typography variant='h5'>Select Family Members</Typography>
      <Grid
        container
        direction='row'
        justify='flex-start'
        alignItems='center'
        spacing={2}
      >
        {['Thor', 'Ragnar', 'Loki'].map(person => (
          <Grid item key={person}>
            <Button
              color='secondary'
              variant={selectedPeople[person] ? 'contained' : 'outlined'}
              style={{ width: '30px' }}
              onClick={() => addPerson(person)}
            >
              {person}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default function Recipe () {
  const classes = styles(useTheme())
  const recipe = getRecipe(useParams().recipeId)
  const [progress, setProgress] = useState(0)
  const [progressSquares, setProgressSquares] = useState(
    new Array(5).fill(false)
  )

  function handleStep () {
    // TODO: Move the step
    if (progress !== progressSquares.length) {
      const squares = progressSquares
      squares[progress] = true
      setProgressSquares(squares)
      setProgress(progress + 1)
    }
  }

  if (recipe) {
    return (
      <Grid
        container
        direction='row'
        justify='flex-start'
        alignItems='flex-start'
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
        <Grid item md={4}>
          2
        </Grid>
        <Grid item md={7} className={classes.contentBox}>
          <RecipeDetails recipe={recipe} handleStep={handleStep} />
          {/* Either show the initial Ingredients, or show selected serving size (or option to select) */}
          {progress ? (
            <Servings handleStep={handleStep} />
          ) : (
            <Ingredients handleStep={handleStep} />
          )}
          {progress === 2 && <SelectPeople />}
        </Grid>
      </Grid>
    )
  } else {
    return <Typography variant='h2'>404</Typography>
  }
}
