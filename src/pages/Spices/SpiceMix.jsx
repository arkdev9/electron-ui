import React, { useState } from 'react'
import {
  Box,
  Button,
  Grid,
  Typography,
  makeStyles,
  useTheme
} from '@material-ui/core'

const styles = makeStyles(theme => ({
  ingredientsImg: {
    width: '50%',
    height: '50%',
    marginLeft: '50%',
    transform: 'translateX(-50%)'
  }
}))

export default function SpiceMix (props) {
  const [spices, setSpices] = useState([
    'Fennel Seeds',
    'Mustard Seeds',
    'Red Chilli Stuff'
  ])
  const classes = styles(useTheme())
  return (
    <Grid
      container
      direction='row'
      justify='flex-start'
      alignItems='flex-start'
    >
      <Grid item md={4}>
        <Typography align='center'>{props.mix.name}</Typography>
        <img
          src='/assets/spices/spicebox-main.png'
          alt='spicebox'
          style={{
            marginTop: '16px',
            width: '60%',
            marginLeft: '50%',
            transform: 'translateX(-50%)'
          }}
        />
      </Grid>
      <Grid item md={8}>
        <Grid
          container
          direction='row'
          justify='space-between'
          alignItems='flex-start'
        >
          {spices.map(spice => (
            <Grid key={spice} item md={4}>
              <Box width={180} p={2} border='1px dashed'>
                <Typography align='center'>{spice}</Typography>
                <img
                  src='/assets/spices/spicebox-green.png'
                  alt='paneer'
                  className={classes.ingredientsImg}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box>
          <Button
            variant='outlined'
            color='secondary'
            style={{ width: '45%', margin: '1.25%' }}
          >
            Edit
          </Button>
          <Button
            variant='contained'
            color='secondary'
            style={{ width: '45%', margin: '1.25%' }}
          >
            Dispense
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
}
