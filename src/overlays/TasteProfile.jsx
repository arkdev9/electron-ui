import React from 'react'
import { Typography, Box, Grid, Slider, withStyles } from '@material-ui/core'

import theme from '../config/theme'

const ProfileSlider = withStyles({
  root: {
    height: theme.spacing(1),
    width: '100%'
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: theme.spacing(-1)
  },
  active: {},
  valueLabel: {
    left: `calc(-50% + ${theme.spacing(0.5)}px)`
  },
  track: {
    height: theme.spacing(1),
    borderRadius: theme.spacing(0.5)
  },
  rail: {
    height: theme.spacing(1),
    borderRadius: theme.spacing(0.5)
  }
})(Slider)

export default function TasteProfile () {
  const profiles = ['Salt', 'Bitter', 'Sour', 'Sweet', 'Spice', 'Texture']
  return (
    // TODO: Clear and make scrollable
    <Box m={2}>
      <Typography align='center' variant='h5' color='secondary'>
        Taste Profile
      </Typography>
      <Grid
        container
        direction='column'
        justify='flex-start'
        alignItems='flex-start'
      >
        {profiles.map(profile => (
          <Grid item key={profile} style={{ width: '100%' }}>
            <Typography variant='h6'>{profile}</Typography>
            <ProfileSlider color='secondary' />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
