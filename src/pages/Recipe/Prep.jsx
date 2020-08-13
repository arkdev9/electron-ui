import React, { useState } from 'react'
import {
  Grid,
  makeStyles,
  useTheme,
  Typography,
  Box,
  Button
} from '@material-ui/core'

const styles = makeStyles(theme => ({
  gridContainer: {
    height: '100%'
  },
  grayBox: {
    width: `calc(100% + ${theme.spacing(4)}px)`,
    height: `calc(100% + ${theme.spacing(4)}px)`,
    opacity: 0.5,
    background: 'black',
    marginTop: theme.spacing(-2),
    marginLeft: theme.spacing(-2)
  },
  prepBox: {
    width: '30%',
    height: '100%',
    // marginTop: '10%',
    padding: theme.spacing(2),
    border: '1px dashed black',
    background: 'white'
  },
  prepVideo: {
    marginTop: theme.spacing(5)
  },
  prepButtonGrid: {
    marginTop: theme.spacing(2)
  }
}))

export default function (props) {
  // Load initial ingredients from props
  const [ingredients, setIngredients] = useState(['Onion', 'Chicken', 'Paneer'])
  const [ingredientPointer, setIngredientPointer] = useState(0)
  const [prepStep, setPrepStep] = useState(0)
  const classes = styles(useTheme())

  function nextIngredient () {
    if (ingredientPointer === ingredients.length - 1) {
      props.handleStep()
    }
    setPrepStep(0)
    setIngredientPointer(ingredientPointer + 1)
  }

  return (
    <Box p={2} width='100%' height='100%' border='1px solid black'>
      <Grid
        container
        direction='column'
        justify='space-evenly'
        alignItems='center'
        className={classes.gridContainer}
      >
        {/* The progress bar */}
        <Grid item style={{ height: '20%', width: '100%' }}>
          <Grid
            container
            direction='row'
            justify='space-evenly'
            alignItems='center'
          >
            {ingredients.map((ingredient, i) => (
              <Grid item key={i}>
                <Box
                  height={40}
                  width={40}
                  bgcolor={i < ingredientPointer ? 'green' : 'red'}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        {/* The Prep boxes */}
        <Grid
          item
          className={classes.bottomGrid}
          style={{ height: '80%', background: 'gray' }}
        >
          <Grid
            container
            direction='row'
            justify='space-evenly'
            alignItems='center'
            style={{ height: '100%' }}
          >
            <Grid item className={classes.prepBox}>
              {prepStep !== 0 && <Box className={classes.grayBox} />}
              <Box marginTop={prepStep !== 0 && '-200%'}>
                <Typography variant='h4'>Preperation</Typography>
                <iframe
                  title='prep'
                  width='100%'
                  src='https://www.youtube.com/embed/c7yytbDsnCI'
                  frameBorder='0'
                  allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen={false}
                  className={classes.prepVideo}
                />
                <Typography>Some description of the process</Typography>
                <Grid
                  container
                  direction='row'
                  justify='space-evenly'
                  alignItems='center'
                  className={classes.prepButtonGrid}
                >
                  <Grid item>
                    <Button variant='contained' color='secondary'>
                      Skip
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant='contained'
                      color='secondary'
                      onClick={() => setPrepStep(1)}
                    >
                      Next
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item className={classes.prepBox}>
              {prepStep !== 1 && <Box className={classes.grayBox} />}
              <Box marginTop={prepStep !== 1 && '-200%'}>
                <Typography variant='h4'>Weigh</Typography>
                <Button
                  variant='contained'
                  color='secondary'
                  onClick={() => setPrepStep(2)}
                >
                  Continue
                </Button>
              </Box>
            </Grid>
            <Grid item className={classes.prepBox}>
              {prepStep !== 2 && <Box className={classes.grayBox} />}
              <Box marginTop={prepStep !== 2 && '-200%'}>
                <Typography variant='h4'>Load</Typography>
                <img
                  style={{
                    width: '80%',
                    marginTop: '8px',
                    marginLeft: '50%',
                    transform: 'translateX(-50%)'
                  }}
                  src='/assets/recipes/loader.png'
                  alt='Loader'
                />
                <Button
                  variant='contained'
                  color='secondary'
                  onClick={nextIngredient}
                >
                  Next
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}
