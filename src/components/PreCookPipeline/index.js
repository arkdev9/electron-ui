import React, { Component, useContext } from 'react'
import { Box, Button, Text } from 'grommet'
import { LinkNext, LinkPrevious } from 'grommet-icons';
import Recipes from '../Recipes';
import CheckSpices from './checkSpices';
import LoadIngredients from './loadIngredients';
import GatherIngredients from './gatherIngredients';
import CheckLiquids from './checkLiquids';
import RecipeContext from './../../data/recipeContext';
import recipeDump from '../../data/recipes.json'
import TasteProfile from './tasteProfile';
import LiveCookingView from './liveCookingView';

class PreCookPipeline extends Component {
    // [recipe, setRecipe] = useContext(RecipeContext);
    // static contextType = RecipeContext;

    state={
        recipe: {},
        autoStepping: true,
        currentStep: "Checking Oil & Water",
        currentStepIndex: 0,
        totalSteps:  5,
        nextStep: "Gather Ingredients",
        steps: ["Checking Oil & Water", "Checking Spices" ,"Gather Ingredients", "Load Inrgedients", "Taste Profile", "Cooking"]
    }

    // Autostep some steps like checking oil & spice check.
    toggleAutoStep = () => {
        this.setState({autoStepping: !this.state.autoStepping})
    }


    componentWillMount(){
        if(!this.state.recipe.ingredients){
            let r = recipeDump.find(recipe => recipe.id == this.props.match.params.recipeId)
            this.setState({recipe: r, recipeId: this.props.match.params.recipeId})           
        }
    }

    // componentDidMount(){
    //     if(!this.state.recipe){
    //         this.setState({recipe: recipeDump.find(recipe => recipe.id == this.props.match.params.recipeId), recipeId: this.props.match.params.recipeId})
    //     }
    // }

    previousStep = () => {
        if(this.state.currentStepIndex > 0){
            this.setState({currentStep: this.state.steps[this.state.currentStepIndex-1], nextStep: this.state.steps[this.state.currentStepIndex] , currentStepIndex: this.state.currentStepIndex-1})
        }
    }
 
    nextStep = () => { 
        this.context = this.props.recipe;
        console.log(this.context);

        if(this.state.currentStepIndex < this.state.steps.length-1){  
            this.setState({currentStep: this.state.steps[this.state.currentStepIndex+1], nextStep: this.state.steps[this.state.currentStepIndex+1] , currentStepIndex: this.state.currentStepIndex+1})
        }
    }

    stepHeader = () => {
        const recipe = this.state.recipe;
        const steps = this.state.steps;
        return(
            <Box size="large" pad="xsmall" background="dark-1">
                <Box direction="row" pad="xsmall" >
                    <Box align="center" justify="center" pad="small" width="10%" onClick={()=> this.previousStep()}>
                        <LinkPrevious color={ this.state.currentStepIndex > 0  ? 'status-ok' : 'status-disabled'} />                                            
                    </Box>
                    <Box direction="column" pad="xsmall" style={{lineHeight: 1}} width="80%">
                        <Box direction="column" align="center" justify="center" gap="xsmall" pad="xsmall" >
                            <Text width="xsmall" style={{lineHeight: 1, fontWeight: 900, paddingLeft: 5}}>
                                <span style={{fontSize: 18, marginLeft: 5}}>{this.state.currentStepIndex+1}</span><span style={{fontSize: 12}}>/{this.state.steps.length}</span> <Text size="small" style={{ fontSize: 14, fontWeight: 900}}>
                                {this.state.currentStep}
                            </Text>
                            </Text>                                                                                 
                            <Text size="xsmall" style={{fontSize: 10, textAlign: "end", fontWeight: 900}} >
                                {
                                    this.state.currentStepIndex < this.state.steps.length-1  ? <span style={{fontWeight: 300}}>next step <Text style={{ fontSize: 12, fontWeight: 400}}>{this.state.steps[this.state.currentStepIndex +1]}</Text></span>  : <span style={{fontWeight: 300}}> </span>
                                }                            
                            </Text>
                        </Box>
                    </Box>
                    <Box align="center" justify="center" pad="small" primary onClick={()=> this.nextStep()} width="10%">
                        <LinkNext color={ this.state.currentStepIndex < this.state.steps.length-1  ? 'status-ok' : 'status-disabled'} />                           
                    </Box>
                </Box>
            </Box>
        )
    }

    stepView = () => {
        const recipe = this.state.recipe;
        const steps = this.state.steps;
        console.log("from precok")
        console.log(recipe)
        

        switch(this.state.currentStep){
            case steps[0]:
                return(
                    <Box direction="column">
                        {this.stepHeader()}                        
                        <Box>
                            <CheckLiquids recipe={recipe} />
                        </Box>
                    </Box>
                )
            case steps[1] : 
                return(
                    <Box direction="column">
                        {this.stepHeader()}                        
                        <Box>
                            <CheckSpices recipe={recipe}  />
                        </Box>
                    </Box>
                )
            case steps[2]:
                return(
                    <Box direction="column">
                        {this.stepHeader()}                        
                        <Box>
                            <GatherIngredients recipe={recipe}  />
                        </Box>
                    </Box>
                )
            case steps[3]:
                return(
                    <Box direction="column">
                        {this.stepHeader()}                        
                        <Box>
                            <LoadIngredients recipe={recipe}  />
                        </Box>
                    </Box>
                )
            case steps[4]:
                return(
                    <Box direction="column">
                        {this.stepHeader()}                        
                        <Box>
                            <TasteProfile recipe={recipe} />
                        </Box>
                    </Box>
                )
            default:
                return(
                    <Box direction="column">
                        {this.stepHeader()}                        
                        <Box>
                            <LiveCookingView recipe={recipe}  />
                        </Box>
                    </Box>
                )

        }
    } 
    render() {
        return (
            <Box>
                {this.stepView()}
            </Box>
        )
    }
}


export default PreCookPipeline