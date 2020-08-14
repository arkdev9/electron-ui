import React, { Component } from 'react'
import { subscribe } from 'mqtt-react'
import { Box, Paper, Typography, Button } from '@material-ui/core'

import * as PubSubBridge from '../config/mqttPubSub'
import topics from '../config/topicMap'
import { windowHeight } from '../config/theme'

class MotorController extends Component {
  constructor (props) {
    super(props)

    this.state = {
      currentSpicePosition: 1,
      currentIngredientPosition: 0,
      openWorkingModal: false,
      payload: '',
      stirrerState: false
    }
  }

  publishMessage (message, topic = 'Riku/Firmware/SubParams') {
    // e.preventDefault();
    // MQTT client is passed on
    console.log(`Publishing to ${topic}: ${JSON.stringify(message)}`)
    const { mqtt } = this.props
    mqtt.publish(topic, JSON.stringify(message))
  }

  homeSpiceRack () {
    this.publishMessage(PubSubBridge.homeSpiceRack(), topics.control.spice)
  }

  homeIngredientRack () {
    this.publishMessage(
      PubSubBridge.homeIngredientRack(),
      topics.control.ingredient
    )
  }

  publishDispenseSpice () {
    this.publishMessage(
      PubSubBridge.dispenseSpice(this.state.currentSpicePosition, 20, 1),
      topics.control.spice
    )
  }

  publishMove2PositionSpiceRack (position) {
    const message = PubSubBridge.moveSpiceRack2Position(position)
    this.publishMessage(message, topics.control.spice)
  }

  publishMove2PositionIngredientRack (position) {
    const message = PubSubBridge.moveIngredientRack2Position(position)
    this.publishMessage(message, topics.control.ingredient)
  }

  // publishDispenseSpice (weight) {}

  // TODO: What channel to publish to?
  publishToggleStirrer () {
    this.setState({ stirrerState: !this.state.stirrerState })
    if (this.state.stirrerState) {
      const message = PubSubBridge.switchOffStirring()
      this.publishMessage(message)
    } else {
      const message = PubSubBridge.switchOnStirring()
      this.publishMessage(message)
    }
  }

  publishDispenseLiquid (station, volume) {
    const message =
      station === 'Oil'
        ? PubSubBridge.dispenseOil(volume)
        : PubSubBridge.dispenseWater(volume)
    this.publishMessage(message, topics.control.liquid)
  }

  handleModal () {
    this.setState({ ...this.state, openWorkingModal: false })
  }

  render () {
    // TODO: Convert this to functional component !urgent
    return (
      <Box height={windowHeight} m={-2} pl={2} pr={2} overflow='scroll'>
        {this.state.openWorkingModal && (
          <Paper
            position='center'
            modal
            onClickOutside={this.handleModal}
            onEsc={this.handleModal}
          >
            <Box pad='medium' gap='small' width='medium'>
              <Typography variant='h3' margin='none'>
                Got this from Broker
              </Typography>

              <Box gap='small' align='center'>
                {Object.keys(this.state.payload).map(key => {
                  return (
                    <Typography key={key}>
                      <strong>{key}</strong>
                      <span> {this.state.payload[key]}</span> <br />
                    </Typography>
                  )
                })}
              </Box>
            </Box>
          </Paper>
        )}

        <Paper elevation={2} style={{ marginTop: '16px' }}>
          <Box p={2}>
            <Typography>{`Spice Rack - ${this.state.currentSpicePosition}`}</Typography>
            <Box
              mt={2}
              direction='row'
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between'
              }}
            >
              <Button variant='outlined' onClick={() => this.homeSpiceRack()}>
                Home
              </Button>
              <Button
                variant='outlined'
                onClick={() => this.publishDispenseSpice()}
              >
                Download
              </Button>
            </Box>
            <Box direction='row' display='flex' flexWrap='wrap' m={2}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(position => {
                return (
                  <Button
                    key={position}
                    variant='contained'
                    style={{ margin: 5, padding: 5, width: 30 }}
                    onClick={() => this.publishMove2PositionSpiceRack(position)}
                  >
                    {position}
                  </Button>
                )
              })}
            </Box>
          </Box>
        </Paper>
        <Paper elevation={2} style={{ marginTop: '16px' }}>
          <Box p={2}>
            <Typography>{`Ingredient Rack - ${this.state.currentIngredientPosition}`}</Typography>
            <Box
              mt={2}
              direction='row'
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between'
              }}
            >
              <Button
                variant='outlined'
                onClick={() => this.homeIngredientRack()}
              >
                Home
              </Button>
              <Button
                variant='outlined'
                onClick={() => this.publishToggleStirrer()}
              >
                Download
              </Button>
            </Box>
            <Box direction='row' display='flex' flexWrap='wrap' m={2}>
              {[1, 2, 3, 4, 5, 6, 7, 8].map(position => {
                return (
                  <Button
                    onClick={() =>
                      this.publishMove2PositionIngredientRack(position)
                    }
                    key={position}
                    variant='contained'
                    style={{ margin: 5, padding: 5, width: 30 }}
                  >
                    {position}
                  </Button>
                )
              })}
            </Box>
          </Box>
        </Paper>
        <Paper elevation={2} style={{ marginTop: '16px' }}>
          <Box p={2}>
            <Typography>Oil Station</Typography>
            <Box
              mt={2}
              direction='row'
              style={{ display: 'flex', flexWrap: 'wrap', justifyContent: '' }}
            >
              {[10, 20, 30].map(volume => {
                return (
                  <Button
                    key={volume}
                    variant='contained'
                    style={{ margin: 5, padding: 5, width: 60 }}
                    onClick={() => this.publishDispenseLiquid('Oil', volume)}
                  >
                    {`${volume}ml`}
                  </Button>
                )
              })}
            </Box>
          </Box>
        </Paper>
        <Paper elevation={2} style={{ marginTop: '16px' }}>
          <Box p={2}>
            <Typography>Water Station</Typography>
            <Box
              mt={2}
              direction='row'
              style={{ display: 'flex', flexWrap: 'wrap', justifyContent: '' }}
            >
              {[10, 20, 30].map(volume => {
                return (
                  <Button
                    key={volume}
                    variant='contained'
                    style={{ margin: 5, padding: 5, width: 60 }}
                    onClick={() => this.publishDispenseLiquid('Water', volume)}
                  >
                    {`${volume}ml`}
                  </Button>
                )
              })}
            </Box>
          </Box>
        </Paper>
        <Box height='small' />
      </Box>
    )
  }
}
export default subscribe({
  topic: 'Riku/Firmware/PubAll'
})(MotorController)
