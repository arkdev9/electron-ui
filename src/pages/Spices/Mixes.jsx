import React, { useState } from 'react'
import { Box, Grid, Typography, makeStyles, useTheme } from '@material-ui/core'

import SpiceMix from './SpiceMix'

const styles = makeStyles(theme => ({
  ingredientsImg: {
    width: '50%',
    height: '50%',
    marginLeft: '50%',
    transform: 'translateX(-50%)'
  },
  amountButton: {
    width: '33%',
    minWidth: '0px !important'
  }
}))

export default function Mixes () {
  const [mixes, setMixes] = useState(
    new Array(4).fill({ name: 'Maggie Masala' })
  )
  const [mixSelected, selectMix] = useState(false)
  const classes = styles(useTheme())
  if (mixSelected) {
    console.log(mixSelected)
    return <SpiceMix mix={mixSelected} />
  } else {
    return (
      <Grid
        container
        direction='row'
        justify='space-between'
        alignItems='flex-start'
        spacing={2}
      >
        {mixes.map((spice, i) => (
          <Grid item key={i}>
            <Box width={180} p={2} border='1px dashed'>
              <Typography align='center'>{spice.name}</Typography>
              <img
                src='/assets/spices/spicebox-green.png'
                alt='paneer'
                className={classes.ingredientsImg}
                onClick={() => selectMix(spice)}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    )
  }
}
