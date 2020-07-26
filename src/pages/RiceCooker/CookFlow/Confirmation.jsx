import React, { useContext } from 'react'
import { CardContent, Typography, Button, Grid } from '@material-ui/core'
import FlowContext from './FlowContext'

export default function Confirmation () {
  const context = useContext(FlowContext)

  return (
    <CardContent>
      <Typography variant='body1'>
        Make sure all materials are in the vessel. Place the vessel inside the
        cooker and close the lid.
      </Typography>
      <Grid container justify='center' alignItems='center'>
        <Grid item style={{ width: '100%' }}>
          <Button
            variant='outlined'
            onClick={() => {
              context.moveFlow('start')
            }}
            color='secondary'
          >
            Start
          </Button>
        </Grid>
        <Grid item style={{ width: '100%' }}>
          <Button
            variant='outlined'
            onClick={() => {
              context.moveFlow('schedule')
            }}
          >
            Schedule
          </Button>
        </Grid>
      </Grid>
    </CardContent>
  )
}
