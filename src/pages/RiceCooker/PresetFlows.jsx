import React, { useContext } from 'react'
import { Button, Grid } from '@material-ui/core'
import CookerContext from './CookerContext'

// TODO: Can refactor this massively

function MilkPreset () {
  const context = useContext(CookerContext)
  return (
    <Grid item>
      <Button
        variant='outlined'
        color='secondary'
        disabled={context.flowSelected}
        onClick={() => {
          context.setFlow('boil')
        }}
      >
        Boil
      </Button>
    </Grid>
  )
}

function SoupPreset () {
  const context = useContext(CookerContext)
  return (
    <Grid item>
      <Button
        variant='outlined'
        color='secondary'
        disabled={context.flowSelected}
        onClick={() => {
          context.setFlow('boil')
        }}
      >
        Boil
      </Button>
    </Grid>
  )
}

function MeatPreset () {
  const context = useContext(CookerContext)
  return (
    <>
      <Grid item>
        <Button
          variant='outlined'
          color='secondary'
          disabled={context.flowSelected}
          onClick={() => {
            context.setFlow('cook')
          }}
        >
          Cook
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant='outlined'
          color='secondary'
          disabled={context.flowSelected}
          onClick={() => {
            context.setFlow('warm')
          }}
        >
          Warm
        </Button>
      </Grid>
    </>
  )
}

function RicePreset () {
  const context = useContext(CookerContext)
  return (
    <Grid item>
      <Button
        variant='outlined'
        color='secondary'
        disabled={context.flowSelected}
        onClick={() => {
          context.setFlow('cook')
        }}
      >
        Cook
      </Button>
    </Grid>
  )
}

export default {
  milk: {
    img: '/assets/common/milk.png',
    text: 'Milk',
    buttonGrid: <MilkPreset />
  },
  soup: {
    img: '/assets/common/hotspring.png',
    text: 'Soup',
    buttonGrid: <SoupPreset />
  },
  meat: {
    img: '/assets/common/meat.png',
    text: 'Meat',
    buttonGrid: <MeatPreset />
  },
  something: {
    img: '/assets/common/rice.png',
    text: 'Rice',
    buttonGrid: <RicePreset />
  }
}
