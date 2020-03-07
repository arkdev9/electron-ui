import React, { Component } from 'react'
import { Box, Text, Button } from 'grommet';
import { Basket, Cycle, AddCircle } from 'grommet-icons';

class GatherIngredients extends Component {
    state = {
        recipe: {},
        ingredients: []
    }
    // get spice rack config and match against if all the spices are available in the machine
    // if not avilable suggest replacement of the unused pods with the ones needed.
    componentWillMount(){        
    // get spice rack config and match against if all the spices are available in the machine
    // if not avilable suggest replacement of the unused pods with the ones needed.
    
    }

    componentDidMount(){
        this.setState({recipe: this.props.recipe, ingredients: this.props.recipe.ingredients})
    }

    getIngredientsFromIngrdientList = (ingredients) => {
        return ["Tomato", "Onion", "Carrot", "Minced Coconut"]
    }

    replaceSpicesInRecipe = (oldSpice, newSpice) => {

    }
    
    addSpicesInRecipe  = (newSpice)=> {

    }

    render() {
        return (
            <Box>
                <Box pad="small" margin="small" gap="small" direction="row" wrap style={{marginBottom: 50}}>
                    {
                        this.state.ingredients.map((ingredient) => {
                            return(
                                <Box key={ingredient} align="center" margin="small" width="100px" pad="small" round border>
                                    <Box direction="row" style={{justifyContent:"space-between"}}>
                                        <Box>
                                            <Text style={{fontSize: 12}}>Pod: 0 </Text>
                                        </Box>        
                                        <Button onClick={() => {}}><Cycle size="small"/></Button>
                                    </Box>
                                    <Box>
                                        <Basket size="medium" color="dark-4"/>
                                    </Box>   
                                    <Box align="center" justify="center">
                                        <Text style={{fontSize: 14, fontWeight: 600, lineHeight: 1, textAlign: "center"}}>{ingredient}</Text>
                                    </Box>
                                </Box>
                            )
                        })
                    }
                    <Box align="center" justify="center"  margin="small" width="100px" pad="small" round border>
                        <Button size="large" onClick={() => {}}><AddCircle /></Button>
                    </Box>                    
                </Box>
            </Box>
        )
    }
}

export default GatherIngredients
