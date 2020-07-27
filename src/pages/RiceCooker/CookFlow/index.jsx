import React, { useState, useContext } from 'react'

import { Button, Card, useTheme, makeStyles } from '@material-ui/core'

import RicePresets from './RicePresets'
import NeededMaterials from './NeededMaterials'
import Confirmation from './Confirmation'

import CookerContext from '../CookerContext'
import FlowContext from './FlowContext'
import Schedule from './Schedule'

const styles = makeStyles(theme => ({
  wrapper: {
    margin: 'auto',
    marginTop: `${theme.spacing(5)}px`,
    width: '300px',
    '& .MuiButton-root': {
      marginTop: `${theme.spacing(1)}px`,
      width: '100%'
    }
  }
}))

export default function CookFlow () {
  const context = useContext(CookerContext)
  const classes = styles(useTheme())

  const [pointer, setPointer] = useState(1)
  const [selectedPreset, selectPreset] = useState(null)

  function moveFlow (body) {
    if (pointer === 3) {
      if (body === 'start') {
        // Start the cooking
      } else if (body === 'schedule') {
        // Handle schedule flow
      }
      setPointer(4)
    } else if (pointer === 2) {
      // Confirmed, start the timer
      setPointer(3)
    } else if (pointer === 1) {
      // Supposed to pick a preset
      selectPreset(body)
      setPointer(2)
    }
  }

  function Wrapper (inner) {
    return (
      <FlowContext.Provider
        value={{
          moveFlow
        }}
      >
        <Card className={classes.wrapper}>
          <Button
            onClick={() => {
              // Cancel this flow
              context.setFlow(null)
            }}
            variant='contained'
            color='secondary'
            style={{
              marginTop: 0,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0
            }}
          >
            Cancel
          </Button>
          {inner}
        </Card>
      </FlowContext.Provider>
    )
  }

  if (pointer === 1) {
    return Wrapper(<RicePresets />)
  } else if (pointer === 2) {
    return Wrapper(<NeededMaterials selectedPreset={selectedPreset} />)
  } else if (pointer === 3) {
    return Wrapper(<Confirmation />)
  } else if (pointer === 4) {
    return Wrapper(<Schedule />)
  }
}
