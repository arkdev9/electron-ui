import React, { Component } from 'react'
import { subscribe } from 'mqtt-react';
import { Stack, Meter, Box, Text, Button } from 'grommet';

class LiquidStation extends Component {
    state = {
        station_2_level:  0,
        station_1_level: 0
    }

    componentDidMount(){
        const {data, mqttProps, mqtt} = this.props;
        // console.log(mqttProps);
        // console.log(mqtt);
        // console.log(data);
        mqtt.on('connect', () => {
            console.log("mqtt connected")
        })
        mqtt.on('message', (data) => {      
            // console.log(data)     
            let payload = this.props.data.pop();
            this.setState({station_1_level: payload.station1Level, station_2_level: payload.station2Level})
            // this.setState({cooktopStatus: currentStatus, currentTemperature: currentStatus.ir_object_temperature.toFixed(2)});
            // this.setState({cooktopStatus: currentStatus, currentTemperature: currentStatus.cooktopTemperature.toFixed(2)});
        })
    }
    render() {
        return (
            <div style={{marginTop: 45}}>
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
                            values={[{ value: this.state.station_1_level.toFixed(2) }]}
                            size="large"
                            thickness="large"                            
                        />
                        <Box direction="row" align="center" pad={{ bottom: "xsmall" }}>
                            <Text size="xlarge" weight="bold">
                            {this.state.station_1_level.toFixed(2)}
                            </Text>
                            <Text size="small">%</Text>
                        </Box>
                        </Stack>
                        <Text>Water  Level</Text>
                    </Box>                    
                    <Box align="center" pad="large"
                    margin="small"
                    pad="medium"
                    background="light-1"
                    elevation="medium"
                    gap="medium"
                    >
                        <Stack anchor="center">
                        <Meter
                            type="bar"
                            background="light-6"
                            values={[{ value: this.state.station_2_level.toFixed(2) }]}
                            size="large"
                            thickness="large"                           
                        />
                        <Box direction="row" align="center" pad={{ bottom: "xsmall" }}>
                            <Text size="xlarge" weight="bold">
                            {this.state.station_2_level.toFixed(2)}
                            </Text>
                            <Text size="small">%</Text>
                        </Box>
                        </Stack>
                        <Text>Oil Level</Text>
                    </Box>                  
                </Box>
            </div>
        )
    }
}

export default subscribe({
    topic: 'LiquidStation/Updates'
  })(LiquidStation)
