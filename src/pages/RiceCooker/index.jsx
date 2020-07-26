import React, { useState } from 'react'
import Cooktop from '../../components/Cooktop'
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Box,
  Divider,
  makeStyles
} from '@material-ui/core'

import presetFlows from './PresetFlows'
import flows from './Flows'

import theme from '../../config/theme'
import CookerContext from './CookerContext'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(1),
    height: 120,
    width: 80,
    padding: theme.spacing(1)
  },
  content: {
    padding: `${theme.spacing(1)}px 0px ${theme.spacing(1)}px 0px !important`
  },
  media: {
    height: 0,
    paddingTop: '100%'
  }
}))

export default function RiceCooker () {
  const classes = useStyles(theme)
  const [flowSelected, setFlowSelected] = useState(false)
  const [selectedPreset, selectPreset] = useState('milk')
  const [selectedFlow, selectFlow] = useState(null)

  function setFlow (flow) {
    console.log(`Setting flow with: ${flow}`)
    if (!flow) {
      // Flow will be false when an already set flow
      // is cancelled before completion
      setFlowSelected(false)
      selectFlow(null)
      // Selecting milk as default preset (first in the list)
      selectPreset('milk')
    } else {
      // Some flow was defined, set it follow it
      setFlowSelected(true)
      selectFlow(flow)
    }
  }

  return (
    <CookerContext.Provider
      value={{
        selectedPreset,
        selectedFlow,
        flowSelected,
        setFlow
      }}
    >
      <Typography align='center' variant='h3' color='secondary'>
        Rice Cooker
      </Typography>
      <Divider />
      <Grid
        container
        direction='row'
        justify='flex-start'
        alignItems='flex-start'
      >
        <Grid item md={5}>
          <Grid
            container
            direction='column'
            justify='flex-start'
            alignItems='center'
          >
            <Grid item>
              <Cooktop content='0 °C' />
            </Grid>
            <Grid item>
              <Grid
                container
                direction='row'
                justify='center'
                alignItems='center'
                spacing={3}
              >
                {presetFlows[selectedPreset].component}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={7}>
          {flowSelected ? (
            flows[selectedFlow].component
          ) : (
            <Box p={2}>
              <Typography variant='h4' align='center'>
                Presets
              </Typography>
              <Grid
                container
                direction='row'
                justify='space-evenly'
                alignItems='flex-start'
                spacing={2}
              >
                {Object.keys(presetFlows).map(card => (
                  <Grid item key={presetFlows[card].text}>
                    <Card
                      className={classes.root}
                      onClick={() => selectPreset(card)}
                    >
                      <CardMedia
                        className={classes.media}
                        image={presetFlows[card].img}
                      />
                      <CardContent className={classes.content} align='center'>
                        <Typography variant='caption'>
                          {presetFlows[card].text}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
        </Grid>
      </Grid>
    </CookerContext.Provider>
  )
}
