import React, { useState } from 'react'
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  Grid,
  useTheme
} from '@material-ui/core'
import styles from './commonStyles'

export default function CookFlow () {
  const classes = styles(useTheme())
  const [pointer, setPointer] = useState(0)
  function Initial () {
    return (
      <Card className={classes.wrapper}>
        <CardHeader title='What do you want to cook?' />
        <CardContent>
          <Button
            color='secondary'
            variant='outlined'
            onClick={() => setPointer(1)}
          >
            Rice
          </Button>
          <Button
            color='secondary'
            variant='outlined'
            onClick={() => setPointer(1)}
          >
            Something else
          </Button>
        </CardContent>
      </Card>
    )
  }
  function Presets () {
    return (
      <Card className={classes.wrapper}>
        <CardHeader title='What do you want to cook?' />
        <CardContent>
          <Grid container direction='row' justify='center' alignItems='center'>
            <Grid item>
              <Card></Card>
            </Grid>
            <Grid item>
              <Card></Card>
            </Grid>
            <Grid item>
              <Card></Card>
            </Grid>
            <Grid item>
              <Card></Card>
            </Grid>
            <Grid item>
              <Card></Card>
            </Grid>
            <Grid item>
              <Card></Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    )
  }

  if (pointer === 0) {
    return <Initial />
  } else {
    return <Presets />
  }
}
