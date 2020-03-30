import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import cooktop from '../../assets/cooktop.png';
import recipeBook from '../../assets/recipebook.png';
import weighingScale from '../../assets/weighingScale.png';
import riceCooker from '../../assets/riceCooker.png';
import spiceDispenser from '../../assets/spiceDispenser.png';
import pantry from '../../assets/fridge.png'
import liquidStation from '../../assets/liquidStation.png';
import settings from '../../assets/settings.png'
import { Image } from 'grommet';
import { Grommet, Box, Text } from "grommet";
import { Restaurant } from 'grommet-icons';

const HomeContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction; column;
`
const CenteredFlexDiv = styled.div`
display: flex;
justify-content: center;
align-items:center;
flex-wrap:wrap;
flex-direction: row;
`

const CardButton = styled(Link)`
background: transparent;
border-radius: 3px;
border: .5px solid grey;
margin: 0.5em .5em;
padding: .5em .5em;
display:flex;
text-decoration: none;
justify-content: center;
align-items: center;
flex-direction: column;
color: black;
width: 75px;
height: 60px;
text-align: center;
font-size:12px;
line-height: 12px
`

function Home() {
  return (
    <div style={{marginTop:  60}} className="Home">
      <HomeContainer>
        <CenteredFlexDiv>
        </CenteredFlexDiv>
        <CenteredFlexDiv>
          <CardButton to="/inductionCooktop" style={{textDecoration: "none"}}>           
            <Image src={cooktop}/>
            <span size="small">Induction</span>
          </CardButton>
          <CardButton to="/riceCooker" style={{textDecoration: "none"}}>
            <Image src={riceCooker}/>
            <span>Rice Cooker</span>
          </CardButton>
          <CardButton to="/weighingScale">
              <img src={weighingScale}/>
              <span>Weighing Scale</span>
          </CardButton>
          <CardButton to="/spiceRack">
              <img src={spiceDispenser}/>
              <span>Spice Dispenser</span>
          </CardButton>
                 
          <CardButton to="/liquidStation">
              <img src={liquidStation}/>
              <span>Liquid Station</span>
          </CardButton>
          {/* <CardButton to="/pantry">
              <img src={pantry}/>
              <span>Pantry</span>
          </CardButton> */}
          <CardButton to="/motorController">
              <img src={settings}/>
              <span>Motor Controller</span>
          </CardButton>
          <CardButton to="/testRecipe">
              <Restaurant/>
              <span>Cook Recipe</span>
          </CardButton>
        </CenteredFlexDiv>
      </HomeContainer>
    </div>
  )
}

export default Home;
