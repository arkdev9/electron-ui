import React, { Component } from 'react'
import { subscribe } from 'mqtt-react';
import { Box, Text, Button } from 'grommet';
import { Home, Download } from 'grommet-icons';
import * as PubSubBridge from '../../config/mqttPubSub';

class MotorController extends Component {

    state = {
        currentSpicePosition : 1,
        currentIngredientPosition: 0
    }

    publishMessage  = (message, topic) =>{
        // e.preventDefault();
        //MQTT client is passed on
        console.log(topic,message)
        const { mqtt } = this.props;
        mqtt.publish(topic ? topic : "Riku/Firmware/SubParams", JSON.stringify(message));
    }

    homeSpiceRack = () => {
        this.publishMessage(PubSubBridge.homeSpiceRack())
    }

    publishDispenseSpice = () =>  {
        this.publishMessage(PubSubBridge.dispenseSpice(this.state.currentSpicePosition, 20, 1))
    }

    pubishMove2PositionSpiceRack = (position)  => {
        let message = PubSubBridge.moveSpiceRack2Position(position);
        this.publishMessage(message)
    }

    publishMove2PositionIngredientRack = (position) =>  {
        let message = PubSubBridge.moveIngredientRack2Position(position);
        this.publishMessage(message)

    }

    publishDispenseSpice = (weight) => {
        
    }

    publishDispenseLiquid = (station, volume)  => {
        if(station == "Oil"){

            this.publishMessage(PubSubBridge.dispenseOil(volume))
        }else{
            this.publishMessage(PubSubBridge.dispenseWater(volume))
        }
    }  

    render() {
        return (
            <Box style={{marginTop: 45}} pad="small">
                <Box border round="xsmall" elevation="small" pad="small" gap="medium" margin="xsmall">
                    <Box direction="row" style={{justifyContent: "space-between"}}>
                        <Text>Spice Rack</Text>
                        <Text size="xsmall" color="dark-1">{this.state.currentSpicePosition}</Text>
                    </Box>
                    <Box direction="column">
                        <Box direction="row" style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
                            <Button size="xsmall" plain icon={<Home size="medium"/>} onClick={() => this.homeSpiceRack()}/>
                            <Button plain icon={<Download />} onClick={() => this.publishDispenseSpice() }/>
                        </Box>
                        <Box direction="row"  style={{display: "flex", flexWrap: "wrap", margin: 2, padding: 2}} >
                        {
                            [1,2,3,4,5,6,7,8,9,10].map((position)  =>  {
                                return(
                                    <Button key={position} size="xsmall" style={{margin: 5, padding: 5, width: 30}} label={position} onClick={() => this.pubishMove2PositionSpiceRack(position) } /> 
                                )
                            })
                        }
                        </Box>
                    </Box>
                </Box>
                <Box border round="xsmall" elevation="small" pad="small" gap="medium" margin="xsmall">
                    <Box direction="row" style={{justifyContent: "space-between"}}>
                        <Text >Ingredient Rack</Text>
                        <Text size="xsmall" color="dark-1">{this.state.currentIngredientPosition}</Text>
                    </Box>
                    <Box direction="row" style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
                        <Button pad="small" plain icon={<Home />} onClick={() => this.publishMessage("",{})}/>                       
                    </Box>
                        <Box direction="row"  style={{display: "flex", flexWrap: "wrap", margin: 2, padding: 2}} >
                        {
                            [1,2,3,4,5,6,7,8].map((position) => {
                                return(
                                    <Button key={position} size="xsmall" style={{margin: 5, padding: 5, width: 30}} label={position} onClick={() => this.publishMove2PositionIngredientRack(position)} /> 
                                )
                            })
                        }
                    </Box>
                </Box>
                <Box border round="xsmall" elevation="small" pad="small" gap="medium" margin="xsmall">
                    <Box direction="row" style={{justifyContent: "space-between"}}>
                        <Text>Oil Station</Text>
                    </Box>
                    <Box direction="row" style={{display: "flex", flexWrap: "wrap", justifyContent: ""}}>
                        {[10,20,30].map((volume) => {
                            return(
                                <Button key={volume} style={{margin: 5, padding: 5, width: 60}} onClick={() => this.publishDispenseLiquid("Oil", volume)} label={volume+" ml"}/>
                            )
                        })
                        }
                        
                    </Box>
                </Box>
                <Box border round="xsmall" elevation="small" pad="small" gap="medium" margin="xsmall">
                    <Box direction="row" style={{justifyContent: "space-between"}}>
                        <Text>Water Station</Text>
                    </Box>
                    <Box direction="row" style={{display: "flex", flexWrap: "wrap", justifyContent: ""}}>
                        {[10,20,30].map((volume) => {
                                return(
                                    <Button key={volume} style={{margin: 5, padding: 5, width: 60}} onClick={() => this.publishDispenseLiquid("Water", volume)} label={volume+" ml"}/>
                                )
                            })
                        }
                    </Box>
                </Box>
                {/* <Box border round="xsmall" elevation="small" pad="small" gap="medium" margin="xsmall">
                    <Text>Cooktops</Text>                    
                </Box> */}
                <Box height="small"></Box>
            </Box>
        )
    }
}
export default subscribe({
    topic: 'Riku/Firmware/SubParams'
  })(MotorController)
