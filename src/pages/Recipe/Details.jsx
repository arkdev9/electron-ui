import React, { useState } from 'react'
import {
  Button,
  Box,
  Grid,
  Typography,
  Divider,
  useTheme
} from '@material-ui/core'
import { Schedule, Star } from '@material-ui/icons'

import styles from './styles'
export function RecipeDetails (props) {
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

export function IngredientsImages (props) {
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

export function Servings (props) {
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

export function SelectPeople (props) {
  const [selectedPeople, selectPerson] = useState({})
  function addPerson (person) {
    const people = selectedPeople
    people[person] = !people[person]
    selectPerson(people)
    console.log(people)
  }

  function moveIt () {
    const finalSelection = []
    for (const person in selectedPeople) {
      if (selectedPeople[person]) {
        finalSelection.push(person)
      }
    }

    props.handleStep()
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

      <Button
        variant='contained'
        color='secondary'
        onClick={moveIt}
        style={{ marginTop: 16 }}
      >
        Next
      </Button>
    </Box>
  )
}
