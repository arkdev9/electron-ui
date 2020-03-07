import React, { Component } from 'react'
import styled from 'styled-components';
import { Box, Text, Image, Button, Stack, List, Menu, Tabs, Tab,RoutedButton } from 'grommet';
import { Bookmark, LinkPrevious, Favorite, More, Spa } from 'grommet-icons';
import voca from 'voca';
import recipeDump from '../../data/recipes.json'
import { Link } from 'react-router-dom';

// const List = styled.div`
// display: flex;
// flex-direction: column;
// // margin-top: 10px
// `

const Item = styled.div`
padding: 2px;
margin: 1px;
border: .5px  black;
border-radius: 4px;
`

const RichTabTitle = ({ icon, label }) => (
    <Box direction="row" align="center" gap="xsmall" margin="xsmall">
      {icon}
      <Text size="small">
        <strong>{label}</strong>
      </Text>
    </Box>
  );

class Recipe extends Component {

    state={
        recipe:  null,
        recipeName: null
    }
    
    componentWillMount(){
        if(!this.state.recipe){
            this.setState({recipe: recipeDump.find(recipe => recipe.id == this.props.match.params.recipeId), recipeId: this.props.match.params.recipeId})
        }
    }

    componentDidMount(){
        if(!this.state.recipe){
            this.setState({recipe: recipeDump.find(recipe => recipe.id == this.props.match.params.recipeId), recipeId: this.props.match.params.recipeId})
        }
    }


    render() {
        // console.log(this.props.location)
        // const recipe = this.props.location.recipe;

        const recipe = this.state.recipe;

        return (     
               
            <div style={{overflow: "scroll"}}>
                <Box direction="column" >
                    <Box direction="row" pad="small" background={{ color: "light-5", opacity: true }} style={{top: 0, justifyContent: "space-between"}}>
                        <Box><LinkPrevious /></Box>
                        <Box><Text size="medium" weight="bold">{recipe.recipeName}</Text></Box>
                        <Box><Favorite /></Box>
                    </Box>
                    <Image fill src={recipe.smallImageUrls[0]}/>
                    <Box style={{marginTop: -10, width: "50%", marginRight:"auto", marginLeft: "auto"}}>
                        <Link to={{ pathname: "/preCookPipeline/"+recipe.id, state:{recipe: recipe} }}>
                            <Button primary label="Cook Now"/>
                        </Link>
                    </Box>
                </Box>
                {/* <Box margin="small" direction="row" animation="fadeIn" alignContent="between" justify="between">
                    <Text size="medium" weight="bold">{recipe.recipeName}</Text>
                    <Bookmark size="small" style={{alignSelf: "flex-end"}} />
                </Box> */}
                {/* <Box direction="row" justify="space-evenly" align="center" style={{justifyContent:  "space-evenly"}}>
                    <Box direction="row">
                        <Box justify="center" align="center"><Bookmark/></Box>
                        <Box direction="column">
                            <Text size="ssmall">13mins</Text>
                            <Text size="xsmall">Preperation</Text>
                        </Box>
                    </Box>
                    <Box direction="row">
                        <Box justify="center" align="center"><Bookmark/></Box>
                        <Box direction="column">
                            <Text size="small">17min</Text>
                            <Text size="xsmall">Cooking</Text>
                        </Box>
                    </Box>
                </Box> */}

                <Tabs flex style={{flexWrap: "nowrap"}}>
                    <Tab
                        title={
                        <RichTabTitle
                            icon={<Spa color="accent-1" />}
                            label="Ingredients"
                        />
                        }
                    >
                        <List
                                data={recipe.ingredients.map((ingredient) => voca.titleCase(ingredient))}
                                // pad={{ left: "xsmall", right: "none" }}
                                action={() => (
                                <Menu icon={<More />} hoverIndicator items={[{ label: "one" }]} />
                                )}
                            />
                    </Tab>                                 
                </Tabs>
                
                {/* 
                <List>
                    {recipe.ingredients.map((ingredient) => {
                        return(
                            <Item>
                                <span> {ingredient}</span>
                            </Item>
                        )
                    })}
                </List> */}
                <Box height="small"></Box>
            </div>           
        )
    }
}

export default Recipe


