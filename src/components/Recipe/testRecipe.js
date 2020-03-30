import React, { Component } from 'react'
import { Box, Button } from 'grommet'
import { subscribe } from 'mqtt-react';

import * as PubSubBrdige from '../../config/mqttPubSub'

class TestRecipe extends Component {



    componentDidMount(){
        const {data, mqttProps, mqtt} = this.props;
        mqtt.on('message', (data) => {
            console.log(this.props.data);
            let payload = this.props.data.pop();
            console.log(payload);
        })
    }



    publishMessage  = (message, topic) =>{
        // e.preventDefault();
        //MQTT client is passed on
        console.log(topic,message)
        const { mqtt } = this.props;
        mqtt.publish(topic ? topic : "Riku/Firmware/SubParams", JSON.stringify(message));
    }


    publishCookRecipe2Broker  = (recipe)  =>  {
        let recipeInstructions = this.getRecipeInstructions(recipe);
        let message = {
            "28": recipeInstructions
        }
        this.publishMessage(message)
    }

    getRecipeInstructions = (recipe) => {

        switch(recipe){
            case "Upma":
                return   [
                   PubSubBrdige.setInductionTemperature(40),
                   PubSubBrdige.dispenseOil(10),
                   PubSubBrdige.switchOnStirring(),
                   PubSubBrdige.dispenseSpice(4,20,1),
                   PubSubBrdige.dispenseSpice(4,10,1),
                   PubSubBrdige.dispenseSpice(10,15,1),
                   PubSubBrdige.dispenseSpice(8,5,1),
                   PubSubBrdige.setInductionTemperature(60),
                   PubSubBrdige.dispenseIngredient(1),
                   PubSubBrdige.setInductionTemperature(40),
                   PubSubBrdige.dispenseIngredient(2),
                   PubSubBrdige.dispenseIngredient(3),
                   PubSubBrdige.dispenseIngredient(4),
                   PubSubBrdige.setInductionTemperature(60),
                   PubSubBrdige.dispenseIngredient(5),
                   PubSubBrdige.dispenseWater(200),
                   PubSubBrdige.dispenseIngredient(),
                   PubSubBrdige.setInductionTemperature(90),
                   PubSubBrdige.setInductionTemperature(40),
                   PubSubBrdige.switchOffStirring(),
                   PubSubBrdige.dispenseIngredient(6)                    
                ]
            case "Carrot Fry" :
                return []
            default: 
                return  []
        }


    } 

    render() {
        return (
            <Box pad="medium">
                <Button label="Upma" onClick={()=>this.publishCookRecipe2Broker("Upma")}/>
            </Box>
        )
    }
}



export default subscribe({
    topic: 'Riku/Firmware/PubAll',
  })(TestRecipe)             
