import React, { Component } from 'react'
import { Box, Stack, Meter, Text, Button } from 'grommet'
import { subscribe } from 'mqtt-react';
import riceCooker from '../../assets/riceCooker.png';
import eggs from '../../assets/eggs.png';
import bottle from '../../assets/bottle.png';
import steak from '../../assets/steak.png';
import boil from '../../assets/boil.png';
const presets = [
    {
        "name": 'White Rice',
        "icon": riceCooker,
        'temperature': 63
    },
    {
        "name": 'Brown Rice',
        "icon": riceCooker,
        'temperature': 43
    },
    {
        "name": 'Eggs',
        "icon": eggs,
        'temperature': 110
    },
    {
        "name": 'Pasta',
        "icon": eggs,
        'temperature': 100
    },
]

export class RiceCooker extends Component {

    state = {
        targetTemperature: 0,
        currentTemperature: 0,
        cooktopStatus: null
    }

    componentDidMount(){
        const {data, mqttProps, mqtt} = this.props;
        console.log(mqttProps);
        console.log(mqtt);
        console.log(data);
        mqtt.on('connect', () => {
            console.log("mqtt connected")
        })
        mqtt.on('message', (data) => {      
            console.log(data)     
            let currentStatus = this.props.data.pop();
            // this.setState({cooktopStatus: currentStatus, currentTemperature: currentStatus.ir_object_temperature.toFixed(2)});
            this.setState({cooktopStatus: currentStatus, currentTemperature: currentStatus.cooktopTemperature.toFixed(2)});

        })

    }

    setCooktopTemperature = (temperature) => {
        const {mqtt} = this.props;
        this.setState({targetTemperature: temperature});
        mqtt.publish('Riku/Induction/Control', 'My Message');
    }

    startCooktop = () => {
        const {mqtt} = this.props;  
        console.log("Cooktop Started")
        mqtt.publish('Riku/Updates', JSON.stringify({activate_cooktop: true}));      
        mqtt.publish('Riku/Induction/Control', 'My Message');
    }


    render() {
        return (
            <div style={{marginTop: 45, display: "flex", flexDirection: "column", height: "100%"}}>
                <div style={{flex: 10, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <Box align="center" pad="small">
                    <Stack anchor="center">
                    <Meter
                        type="circle"
                        background="light-2"
                        values={[
                        {
                            value: this.state.currentTemperature,
                            onHover: over => {
                            }
                        },
                        {
                            value: this.state.targetTemperature,
                            onHover: over => {
                            }
                        }
                        ]}
                        max={180}
                        size="small"
                        thickness="small"
                    />
                    <Box align="center">
                        <Box direction="row" align="center" pad={{ bottom: "xsmall" }}>
                        <Text size="xxlarge" weight="bold">
                            {this.state.currentTemperature}
                        </Text>
                        <Text></Text>
                        </Box>
                        <Text>{this.state.targetTemperature}</Text>
                    </Box>
                    </Stack>
                </Box>
                </div>
                <div style={{flex: 10, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <Button onClick={(e) => this.startCooktop(e)} primary round="xsmall" label="ON"/>
                </div>
                <div style={{flex:1}}>                    
                    <h5 style={{margin: 5}}>Presets:</h5>
                    <Box direction="row" pad="small" style={{overflow: "scroll"}}>
                    {presets.map((preset,i) => {
                        return(
                            <Box
                                direction="column"
                                border
                                pad="xsmall"
                                align="center"
                                round="xsmall"
                                gap="xsmall"
                                style={{marginRight: 5}}
                                hoverIndicator
                                onClick={() => this.setState({targetTemperature: preset.temperature}) }
                                key={preset.name}
                            >
                                <img src={preset.icon}/>
                                {/* <Attraction size="large" /> */}
                                <Text style={{fontSize:12}} size="xxsmall">{preset.name}</Text>
                            </Box>
                          
                        )
                    })}
                    </Box>
                </div>
            </div>

        )
    }
}

export default subscribe({
    topic: 'Riku/Firmware/PubInduction'
  })(RiceCooker)
