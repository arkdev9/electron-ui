import React from 'react'
import {
  Card,
  CardHeader,
  withStyles,
  Button,
  CardContent
} from '@material-ui/core'
import theme from '../config/theme'
import { useState } from 'react'

const CardWrapper = withStyles({
  root: {
    width: '300px',
    '& .MuiButton-root': {
      marginTop: `${theme.spacing(1)}px`,
      width: '100%'
    }
  }
})(Card)

function WhatDo (props) {
  return (
    <CardWrapper>
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
    </CardWrapper>
  )
}

function CookFlow () {
  return (
    <CardWrapper>
      <CardHeader title='What do you want to cook?' />
      <CardContent>
        <Button color='secondary' variant='outlined'>
          Rice
        </Button>
        <Button color='secondary' variant='outlined'>
          Something else
        </Button>
      </CardContent>
    </CardWrapper>
  )
}
function WarmFlow () {
  return (
    <CardWrapper>
      <CardHeader title='Next thing to do' />
      <CardContent>
        <Button color='secondary' variant='outlined'>
          Next
        </Button>
        <Button color='secondary' variant='outlined'>
          Thing
        </Button>
      </CardContent>
    </CardWrapper>
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
