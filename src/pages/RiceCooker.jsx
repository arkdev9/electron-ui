import React, { useState } from 'react'
import {
  Card,
  CardHeader,
  Button,
  CardContent,
  makeStyles,
  useTheme
} from '@material-ui/core'

const styles = makeStyles(theme => ({
  wrapper: {
    width: '300px',
    '& .MuiButton-root': {
      marginTop: `${theme.spacing(1)}px`,
      width: '100%'
    }
  }
}))

function WhatDo (props) {
  const classes = styles(useTheme())
  return (
    <Card className={classes.wrapper}>
      <CardHeader title='What do you want to do?' />
      <CardContent>
        <Button
          color='secondary'
          variant='outlined'
          onClick={() => props.clickHandler('cook')}
        >
          Cook
        </Button>
        <Button
          color='secondary'
          variant='outlined'
          onClick={() => props.clickHandler('warm')}
        >
          Warm
        </Button>
      </CardContent>
    </Card>
  )
}

function CookFlow () {
  const classes = styles(useTheme())
  return (
    <Card className={classes.wrapper}>
      <CardHeader title='What do you want to cook?' />
      <CardContent>
        <Button color='secondary' variant='outlined'>
          Rice
        </Button>
        <Button color='secondary' variant='outlined'>
          Something else
        </Button>
      </CardContent>
    </Card>
  )
}
function WarmFlow () {
  const classes = styles(useTheme())
  return (
    <Card className={classes.wrapper}>
      <CardHeader title='Next thing to do' />
      <CardContent>
        <Button color='secondary' variant='outlined'>
          Next
        </Button>
        <Button color='secondary' variant='outlined'>
          Thing
        </Button>
      </CardContent>
    </Card>
  )
}

export default function RiceCooker () {
  const [currentSlide, setSlide] = useState(
    <WhatDo clickHandler={clickHandler} />
  )

  function clickHandler (action) {
    if (action === 'cook') {
      setSlide(<CookFlow />)
    } else if (action === 'warm') {
      setSlide(<WarmFlow />)
    } else {
      setSlide(<WhatDo />)
    }
  }

  return <>{currentSlide}</>
}
