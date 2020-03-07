import React from 'react';
import { Link } from 'react-router-dom';
import recipeDump from '../../data/recipes.json'
import { Grommet, Box, Text, Image,RoutedButton, Button, TextInput} from "grommet";
import styled from 'styled-components';
import { Filter, Scan } from "grommet-icons";

const RecipeList = styled(Box)`
display: flex;
flex-direction: row;
// flex-wrap: wrap;
// justify-content: fl;
align-items: center;
overflow: scroll;
`

const CategoriesList = styled(Box)`
display: -webkit-inline-box;
flex-direction: row;
overflow: scroll;
`

const Recipe = styled.div`
display: flex;
width: 120px;
justify-content: center;
align-items: center;
flex-direction: column;
border: 1px;
border-radius: 4px;
`

const filters = [
  "For You",
  "Ready to Cook",  
  "Soups",
  "Breakfast",
  "Dinner",
  "Desserts",
  "Salad"
]

const recipes = []

class Recipes extends React.Component{
  state={
    searchKeyword: null,
    currentFilter: "For You",
    allRecipes: [],
    filteredRecipes:  []
  }

  getAllRecipes = () =>  {
  }

  getRecipesByFilter = (filter) => {
  }

  applyFilter = (filter) => {
    this.setState({currentFilter: filter});
    this.setState({filteredRecipes: this.getRecipesByFilter(this.state.currentFilter)});
  }

  componentDidMount() {
    this.getAllRecipes();
  }


  render(){
    return (
      <Box>
        <CategoriesList elevation="medium">
          {
            filters.map((filter)=>{
              return(
                <Box style={{width: 60, justifyContent: "center" ,height: 60, borderRadius:60, fontSize: 14, textAlign: "center", lineHeight: 1}}              
                align="center"
                pad="medium"
                margin="small"
                gap="small"
                justify="center" onClick={(filter) => this.applyFilter(filter)} background="dark-1">                  
                {filter}                
                </Box>
              )
            })
          }                   
        </CategoriesList>       
        <RecipeList pad="small">
          {recipeDump.slice(1,10).map((recipe) => {
            return(
              <Link style={{"text-decoration": "none"}} key={recipe.id} to={{ pathname: "/recipe/"+recipe.id, recipe: recipe }}>
                <Box elevation="small" height="320px" margin="small" round="medium" border style={{textDecoration: "none"}} justify="center" align="center">                           
                    <Box height="200px" width="small">
                      <Image style={{borderRadius: "5px 5px 0px 0px"}} fit="cover" round="medium" src={recipe.imageUrlsBySize["90"]}/>
                    </Box>
                    <Box height="120px" pad="xsmall">
                      <Box height="70px">
                          <Text color="dark-2" style={{fontSize: 16, fontWeight: 900}}>{recipe.recipeName}</Text>
                      </Box>
                      <Box height="50px" direction="row" style={{justifyContent:"space-between", fontSize: 12}}>
                        <Box direction="column" align="center" justify="center" >
                          <Text style={{fontSize: 14, fontWeight: 400}} size="xsmall" color="dark-2">Prep Time</Text>
                          <Text style={{fontSize: 12, fontWeight: 400}} size="xsmall" color="dark-6">10min</Text>
                        </Box>
                        <Box direction="column" align="center" justify="center">
                          <Text style={{fontSize: 14, fontWeight: 400}} size="xsmall" color="dark-2">Cook Time</Text>
                          <Text style={{fontSize: 12, fontWeight: 400}}  size="xsmall" color="dark-6">40min</Text>
                        </Box>
                      </Box>
                      
                    </Box>
                </Box>
              </Link>
            )
          })}
        </RecipeList>
      </Box>
    )
  }
}

export default Recipes;
