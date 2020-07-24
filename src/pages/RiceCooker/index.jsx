import React, { useState } from 'react'
import {
  Card,
  CardHeader,
  Button,
  CardContent,
  useTheme
} from '@material-ui/core'

import styles from './commonStyles'
import CookFlow from './CookFlow'
import CookerContext from './CookerContext'

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

  return (
    <CookerContext.Provider
      value={{
        currentSlide: <WhatDo clickHandler={clickHandler} />
      }}
    >
      {currentSlide}
    </CookerContext.Provider>
  )
}
