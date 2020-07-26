import React, { useState, useContext } from 'react'

import {
  Button,
  Card,
  CardHeader,
  CardContent,
  useTheme,
  makeStyles
} from '@material-ui/core'

import RicePresets from './RicePresets'
import NeededMaterials from './NeededMaterials'
import Confirmation from './Confirmation'

import CookerContext from '../CookerContext'
import FlowContext from './FlowContext'

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

  const [pointer, setPointer] = useState(0)
  const [selectedPreset, selectPreset] = useState(null)

  function moveFlow (preset) {
    if (pointer === 2) {
      // Confirmed, start the timer
      setPointer(3)
    } else if (pointer === 1) {
      if (!preset) {
        setPointer(0)
        selectPreset(null)
      } else {
        selectPreset(preset)
        setPointer(2)
      }
    }
  }

  // Default slide
  function Initial () {
    return (
      <>
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
      </>
    )
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
              context.setFlow(false)
              console.log('Something')
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

  if (pointer === 0) {
    return Wrapper(<Initial />)
  } else if (pointer === 1) {
    return Wrapper(<RicePresets />)
  } else if (pointer === 2) {
    return Wrapper(<NeededMaterials selectedPreset={selectedPreset} />)
  } else if (pointer === 3) {
    return Wrapper(<Confirmation />)
  }
}
