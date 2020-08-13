import React from 'react'

import { Box, Grid, Typography, Button } from '@material-ui/core'

export default function () {
  return (
    <Box p={2}>
      <Typography variant='h4'>Live view</Typography>
      <Grid
        container
        direction='row'
        justify='space-between'
        alignItems='flex-start'
      >
        <Grid item>
          <Typography>This is the video feed</Typography>
        </Grid>
        <Grid item>
          <Typography variant='h5'>Adding salt</Typography>
          <Typography>(2 medium sized)</Typography>
          <br />
          <Typography>Cut the tomatoes in half, yadadada</Typography>
          <Box mt={5}>
            <Button
              variant='contained'
              color='secondary'
              style={{ width: '100%' }}
            >
              Pause
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
