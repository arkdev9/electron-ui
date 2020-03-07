import React, { Component } from 'react'
import { Box, Stack, Meter, Text } from 'grommet';
import { subscribe } from 'mqtt-react';

//  This is component will get weight from mqtt and will keep indicating until the target weight is reached and will fire a function after target weight is reached.
class IngredientWeighingScale extends Component {
    state = {
        ingredient: "",        
        currentWeight: 0,
        targetWeight: 0,
        scaleStatus: "OFF"
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
            // console.log(this.props.data);
            let payload = this.props.data.pop();        
            console.log(payload);    
            this.setState({scaleStatus: true, currentWeight: payload.weight, targetWeight: this.props.targetWeight});
            // If target weight reached move to next ingredient
            if (this.state.currentWeight >= this.state.targetWeight){
                this.props.targetWeightReached({ingredient: this.state.ingredient, targetWeight: this.state.targetWeight, actualWeight: this.state.currentWeight});
            }
            this.props.updateCurrentWeight(this.state.currentWeight);
        })       
    }

    tareScale = () => {
    }

    render() {
        return (
            <Box style={{display: "flex", alignItems: "center", justifyContent:"center", flexDirection: "column", height: "100%"}}>
                <Box style={{flex: 10, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <Box align="center" pad="small">
                        <Stack anchor="center">
                            <Meter
                                type="circle"
                                background="light-2"
                                values={[
                                {
                                    value: this.state.currentWeight,
                                    onHover: over => {
                                    }
                                },
                                {
                                    value: this.props.targetWeight,
                                    onHover: over => {
                                    }
                                }
                                ]}
                                max={this.props.maxWeight}
                                size="small"
                                thickness="small"
                            />
                            <Box align="center">
                                <Box direction="row" align="center" pad={{ bottom: "xsmall" }}>
                                <Text size="xxlarge" weight="bold">
                                    {this.state.currentWeight}
                                </Text>
                                </Box>
                                <Text style={{fontSize: 12, textAlign: "center"}}> Target Weight : <Text>{this.props.targetWeight}</Text></Text>                                
                            </Box>
                        </Stack>
                    </Box>
                </Box>                              
            </Box>
        )
    }
}

export default subscribe({
    topic: 'Riku/WeighingScale/Updates'
  })(IngredientWeighingScale)
