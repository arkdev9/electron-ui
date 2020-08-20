import React, { useState } from 'react'
import {
  Button,
  Grid,
  Box,
  Typography,
  makeStyles,
  useTheme,
  Dialog,
  Input
} from '@material-ui/core'

import Keyboard from 'react-simple-keyboard'
import 'react-simple-keyboard/build/css/index.css'

const styles = makeStyles(theme => ({
  ingredientsImg: {
    width: '50%',
    height: '50%',
    marginLeft: '50%',
    transform: 'translateX(-50%)'
  },
  amountButton: {
    width: '33%',
    minWidth: '0px !important'
  }
}))

export default function Spices () {
  const classes = styles(useTheme())
  const [dispense, toggleDispense] = useState(false)
  const [dialogOpen, toggleDialog] = useState(false)
  const [newSpice, setNewSpice] = useState('')
  const [spicesAmounts, setSpicesAmount] = useState(
    new Array(10).fill({ spice: 'Salt', amount: 1 })
  )

  function handleDispense () {
    if (!dispense) {
      toggleDispense(!dispense)
    } else {
      // Open Dialog
      toggleDialog(true)
    }
  }

  function onInput (input) {
    setNewSpice(input)
  }
  function onKey (key) {
    console.log(`Key pressed: ${key}`)
    if (key === '{enter}') {
      // Submit the name
      toggleDialog(false)
      toggleDispense(!dispense)
    }
  }

  return (
    <Box>
      <Grid
        container
        direction='row'
        justify='space-between'
        alignItems='flex-start'
        spacing={2}
      >
        {spicesAmounts.map((spice, i) => (
          <Grid item key={i}>
            <Box width={180} p={2} border='1px dashed'>
              <Typography align='center'>{spice.spice}</Typography>
              <img
                src='/assets/spices/spicebox.png'
                alt='paneer'
                className={classes.ingredientsImg}
              />
              {dispense ? (
                <Box width='100%'>
                  <Button
                    className={classes.amountButton}
                    variant='contained'
                    color='secondary'
                    onClick={() => {
                      setSpicesAmount([
                        ...spicesAmounts.slice(0, i),
                        {
                          spice: spicesAmounts[i].spice,
                          amount: spicesAmounts[i].amount - 1
                        },
                        ...spicesAmounts.slice(i + 1, spicesAmounts.length)
                      ])
                    }}
                  >
                    -
                  </Button>
                  <Button
                    className={classes.amountButton}
                    disabled
                    variant='outlined'
                    color='secondary'
                  >
                    {spice.amount}
                  </Button>
                  <Button
                    className={classes.amountButton}
                    variant='contained'
                    color='secondary'
                    onClick={() => {
                      setSpicesAmount([
                        ...spicesAmounts.slice(0, i),
                        {
                          spice: spicesAmounts[i].spice,
                          amount: spicesAmounts[i].amount + 1
                        },
                        ...spicesAmounts.slice(i + 1, spicesAmounts.length)
                      ])
                    }}
                  >
                    +
                  </Button>
                </Box>
              ) : (
                <Box>
                  <Typography align='center'>60%</Typography>
                </Box>
              )}
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box width='100%' m={3} textAlign='center'>
        <Button variant='contained' color='secondary' onClick={handleDispense}>
          Dispense
        </Button>
      </Box>
      <Dialog open={dialogOpen} fullWidth maxWidth={false}>
        <Box p={2}>
          <Typography>What do you want to save this spice mix as?</Typography>
          <Input value={newSpice} style={{ width: '100%' }} />
          <Keyboard onChange={onInput} onKeyPress={onKey} />
        </Box>
      </Dialog>
    </Box>
  )
}
