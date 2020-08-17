import React from 'react'
import { Typography, Box, Grid, Card, CardMedia } from '@material-ui/core'

export default function () {
  return (
    <Box p={2}>
      <Typography>Spice Mixes</Typography>
      <Grid
        container
        direction='row'
        justify='space-evenly'
        alignItems='center'
      >
        {['salt', 'cinnamon', 'pepper'].map()}
        <Grid item>
          <Card>
            <CardMedia
              src='/assets/spices/spicebox.png'
              alt='spicebox'
              style={{ width: '40px' }}
            />
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}
