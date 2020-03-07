import React, { Component } from 'react'
import { Box, Text, Button } from 'grommet';
import { Basket, Cycle, AddCircle } from 'grommet-icons';

//This should be part of the app state
const spiceConfig = [
    "Salt",
    "Sugar",
    "Garam Masala",
    "Chilli Powder",
]

class CheckSpices extends Component {
    state = {
        spiceConfig: spiceConfig,

    }
    // get spice rack config and match against if all the spices are available in the machine
    // if not avilable suggest replacement of the unused pods with the ones needed.
    componentWillMount(){
    // get spice rack config and match against if all the spices are available in the machine
    // if not avilable suggest replacement of the unused pods with the ones needed.
    
    }

    getSpicesFromIngrdientList = (ingredients) => {
        return ["Salt", "Chilli Powder", " Garam Masala"]
    }

    replaceSpicesInRecipe = (oldSpice, newSpice) => {

    }
    
    addSpicesInRecipe  = (newSpice)=> {

    }

    render() {
        const recipe = this.props.recipe;
        return (
            <Box>
                <Box pad="small" margin="small" gap="small" direction="row" wrap>
                    {
                        this.getSpicesFromIngrdientList().map((spice) => {
                            return(
                                <Box key={spice} align="center" margin="small" width="100px" pad="small" round border>
                                    <Box direction="row" style={{justifyContent:"space-between"}}>
                                        <Box>
                                            <Text style={{fontSize: 12}}>Pod: {spiceConfig.indexOf(spice)} </Text>
                                        </Box>        
                                        <Button onClick={() => {}}><Cycle size="small"/></Button>
                                    </Box>
                                    <Box>
                                        <Basket size="medium" color="dark-4"/>
                                    </Box>   
                                    <Box align="center" justify="center">
                                        <Text style={{fontSize: 14, fontWeight: 600, lineHeight: 1, textAlign: "center"}}>{spice}</Text>
                                    </Box>
                                </Box>
                            )
                        })
                    }
                    <Box align="center" justify="center" margin="small" width="100px" pad="small" round border>
                        <Button size="xlarge" onClick={() => {}}><AddCircle /></Button>
                    </Box>
                </Box>
            </Box>
        )
    }
}

export default CheckSpices
