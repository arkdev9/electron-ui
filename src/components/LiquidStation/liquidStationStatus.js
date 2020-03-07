import React, { Component } from 'react'
import { Box, Stack, Meter, Text } from 'grommet'

class LiquidStationStatus extends Component {
    state={
        stationName: null,
        stationCurrentLevel: null,
        stationTargetLevel: null
    }

    componentDidMount(){
        const {data, mqttProps, mqtt, liquidStation} = this.props;
        // console.log(mqttProps);
        // console.log(mqtt);
        // console.log(data);
        mqtt.on('connect', () => {
            console.log("mqtt connected")
        })
        mqtt.on('message', (data) => {      
            // console.log(data)     
            let payload = this.props.data.pop();
            this.setState({stationCurrentLevel: payload.station1Level})
        })
    }

    render() {
        return (
            <Box>
                <Box direction="column" align="center" justify="center">
                    <Box align="center" pad="large"
                        margin="small"
                        pad="medium"
                        background="light-1"
                        elevation="medium"
                        gap="medium"
                        >
                        <Stack anchor="center">
                            <Meter
                                alignSelf="stretch"
                                type="bar"
                                background="light-6"
                                values={[{ value: this.state.stationCurrentLevel.toFixed(2) }]}
                                size="large"
                                thickness="large"                            
                            />
                            <Box direction="row" align="center" pad={{ bottom: "xsmall" }}>
                                <Text size="xlarge" weight="bold">
                                {this.state.stationCurrentLevel.toFixed(2)}
                                </Text>
                                <Text size="small">%</Text>
                            </Box>
                        </Stack>
                        <Text>Water  Level</Text>
                    </Box>
                </Box>
            </Box>
        )
    }
}

export default subscribe({
    topic: 'LiquidStation/Updates'
  })(LiquidStationStatus)