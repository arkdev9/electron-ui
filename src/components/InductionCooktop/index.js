import React, { Component } from 'react';
import styled from 'styled-components';

import eggs from '../../assets/eggs.png';
import bottle from '../../assets/bottle.png';
import steak from '../../assets/steak.png';
import boil from '../../assets/boil.png';

import { subscribe } from 'mqtt-react';
import { Stack, Meter, Box, Text, Button } from 'grommet';



const presets = [
    {
        "name": 'Eggs',
        "icon": eggs,
        'temperature': 63
    },
    {
        "name": 'Milk',
        "icon": bottle,
        'temperature': 43
    },
    {
        "name": 'Steak',
        "icon": steak,
        'temperature': 110
    },
    {
        "name": 'Boil',
        "icon": boil,
        'temperature': 100
    },
]

const PresetsContainer = styled.div`
display: flex;
width: 100%;
overflow: scroll;
justify-content: center;
align-items: center;
text-align: center;
`
const Preset = styled.button`
width: 50px;
height: 75px;
border: .5px black;
border-radius: 5px;
background: transparent;
margin: 5px;
`

class InductionCooktop extends Component {

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
                                <Text size="xsmall">{preset.name}</Text>
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
    topic: 'Cooktop/Updates'
  })(InductionCooktop)
