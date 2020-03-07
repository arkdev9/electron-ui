import React, { Component } from 'react'
import { Box, Text, Button } from 'grommet';
import { Basket, Cycle, AddCircle, Next , StatusGoodSmall} from 'grommet-icons';
import { ThemeProvider } from 'styled-components';
// import Recipe from '../Recipe';
import RecipeContext from './../../data/recipeContext';
import IngredientWeighingScale from '../WeighingScale/ingredientWeighingScale';


class LoadIngredients extends Component {
    // static contextType = RecipeContext;

    state = {
        recipe: {},
        refs: [],
        ingredients: [],
        ingredientsHash: {},
        currentIngredientIndex: 0,
        currentIngredientWeight: 0,
        currentIngredientTargetWeight: 20,
        nextIngredient: "",
        statusIndicator: false
    }
    // get spice rack config and match against if all the spices are available in the machine
    // if not avilable suggest replacement of the unused pods with the ones needed.
    // componentWillMount(){
    //     this.setState({recipe: this.props.recipe})
    // // get spice rack config and match against if all the spices are available in the machine
    // // if not avilable suggest replacement of the unused pods with the ones needed.
    // }

    componentDidMount(){
        this.setState({recipe: this.props.recipe, ingredients: this.props.recipe.ingredients, currentIngredient: this.props.recipe.ingredients[0], statusIndicator: true})
        // const refs = this.state.ingredients.reduce((acc, value) => {
        //     acc[value] = React.createRef();
        //     return acc;
        //   }, {});        
        // this.setState({refs:  refs});
        console.log(this.state);
    }

    getIngredientsFromIngrdientList = (ingredients) => {
        return ["", "Chilli Powder", " Garam Masala"]
    }

    replaceSpicesInRecipe = (oldSpice, newSpice) => {
    }
    
    addSpicesInRecipe  = (newSpice)=> {
    }

    // scroll2NextIngredient  = id  => {
    //     this.state.refs[id].current.scrollIntoView({
    //       behavior: 'smooth',
    //       block: 'start',
    //     });
    // }

    loadNextIngredient = () => {
        let iHash = {}

        iHash[this.state.ingredients[this.state.currentIngredientIndex]] = { 
                "targetWeight": this.state.currentIngredientTargetWeight,
                "actualWeight": this.state.currentIngredientWeight
            }
        this.setState({
            ingredientsHash: Object.assign(this.state.ingredientsHash, iHash),
            currentIngredientIndex: this.state.currentIngredientIndex+1
        })
        // console.log(this.state.ingredientsHash);
    }


    updateCurrentWeight  = (weight) => {
        this.setState({currentIngredientWeight: weight})
    }

    render() {         
        return (            
            <Box>
                <Box align="center" margin="small" size="large" pad="small" round border style={{width: "90%",marginLeft: "auto", marginRight: "auto"}}>
                    <IngredientWeighingScale updateCurrentWeight={this.updateCurrentWeight} targetWeight={this.state.currentIngredientTargetWeight} maxWeight="10000"/>                    
                    <Box align="center">
                        <Basket size="medium" color="dark-4"/>
                        <Text style={{fontSize: 14, fontWeight: 600, lineHeight: 1, textAlign: "center"}}>{this.state.ingredients[this.state.currentIngredientIndex]}</Text>
                    </Box>   
                </Box>
                <Box align="center" justify="center">
                    <Box round="full" overflow="hidden" background={this.state.statusIndicator ? "status-disabled": "neutral-1"}>
                        <Button icon={<Next />} hoverIndicator onClick={() => this.loadNextIngredient()} />
                    </Box>                                       
                </Box>
                <Box direction="row" align="center" justify="center">
                        { this.state.ingredients.map( (ingredient,index) => {
                            return(
                                <Box key={ingredient}  margin="xxsmall">
                                    <StatusGoodSmall style={{ width: 10, height:10}} background={this.state.currentIngredientIndex == index ? "dark-4" : "light-4" } />
                                </Box>
                            )
                            })
                        }
                </Box>
            </Box>
        )
    }
}

export default LoadIngredients
