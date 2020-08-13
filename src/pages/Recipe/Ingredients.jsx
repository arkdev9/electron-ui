import React from 'react'
import {
  Button,
  Grid,
  Box,
  makeStyles,
  Typography,
  Slider,
  useTheme
} from '@material-ui/core'

const styles = makeStyles(theme => ({
  ingredientsContainer: {
    marginTop: theme.spacing(2)
  },
  ingredientsImg: {
    width: '50%',
    height: '50%',
    marginLeft: '50%',
    transform: 'translateX(-50%)'
  }
}))

export default function (props) {
  // const recipe = props.recipe
  const classes = styles(useTheme())

  return (
    <>
      <Box p={2}>
        <Grid
          container
          direction='row'
          justify='space-between'
          alignItems='center'
        >
          <Grid item>
            <Typography variant='h4'>Ingredients Required</Typography>
          </Grid>
          <Grid item>
            <Button
              onClick={() => alert('edit')}
              variant='contained'
              color='secondary'
            >
              Edit
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          direction='row'
          justify='space-between'
          alignItems='flex-start'
          spacing={2}
          className={classes.ingredientsContainer}
        >
          {/* TODO: Required ingredients need to be loaded from recipe data */}
          {[
            'Chicken',
            'Onion',
            'Garlic',
            'Chicken',
            'Garlic',
            'Onion',
            'Garlic',
            'Chicken'
          ].map((ingredient, i) => (
            <Grid item key={i}>
              <Box height={180} width={180} p={2} border='1px dashed'>
                <img
                  src='/assets/ingredients/paneer.png'
                  alt='paneer'
                  className={classes.ingredientsImg}
                />
                <Typography align='center'>{ingredient}</Typography>
                <Slider
                  style={{ color: '#313131' }}
                  defaultValue={5}
                  step={1}
                  marks={[
                    { value: 1, label: 'S' },
                    { value: 10, label: 'L' }
                  ]}
                  min={1}
                  max={10}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box textAlign='center' width='100%' p={3}>
          <Button
            onClick={props.handleStep}
            variant='contained'
            color='secondary'
          >
            Next
          </Button>
        </Box>
      </Box>
    </>
  )
}
