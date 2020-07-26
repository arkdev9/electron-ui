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

function SomethingPreset () {
  const context = useContext(CookerContext)
  return (
    <Grid item>
      <Button
        variant='outlined'
        color='secondary'
        disabled={context.flowSelected}
        onClick={() => {
          context.setFlow('warm')
        }}
      >
        Warm (Example)
      </Button>
    </Grid>
  )
}

export default {
  milk: {
    img: '/assets/cooktop/baby-bottle.png',
    text: 'Milk',
    component: <MilkPreset />
  },
  soup: {
    img: '/assets/cooktop/hotspring.png',
    text: 'Soup',
    component: <SoupPreset />
  },
  meat: {
    img: '/assets/cooktop/meat.png',
    text: 'Meat',
    component: <MeatPreset />
  },
  something: {
    img: '/assets/cooktop/spa.png',
    text: 'Something',
    component: <SomethingPreset />
  }
}
