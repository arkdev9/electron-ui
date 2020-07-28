import React from 'react'
import { Typography, CardContent } from '@material-ui/core'

export default function Schedule () {
  // TODO: If they try to cancel here, ask for confirmation.
  return (
    <CardContent>
      <Typography body='h5'>Can you smell what the Rock is cookin'!</Typography>
      <Typography body='body1'>{`Approximately ${5} minutes left`}</Typography>
    </CardContent>
  )
}
