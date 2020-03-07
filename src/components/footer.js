import React, { Component } from 'react'
import styled from 'styled-components';
import monogram from '../assets/monogramDark.png';
import { Link } from 'react-router-dom';
import recipeBook from  '../assets/recipebook.png';
import calendar from '../assets/calendar.png';
import settings from '../assets/settings.png';
import shoppinglist from '../assets/shoppinglist.png';

const NavBar = styled.div`
width: 100%;
background-color: #EBEBEB;
height: 40px;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
bottom:0;
position:fixed;
z-index:10;
border: .2px black;
`

const NavBarTab = styled.div`
margin:  0;
padding: 2px;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
`

const Logo = styled.img`
height: 60px;
width: auto
`

const NavLinkIcon = styled.img`
height: 20px;
width: auto
`

const NavBarTabIcon = styled.div`
height: 50px;
width: auto
`
class Footer extends Component {
    render() {
        return (
            <NavBar>
                <NavBarTab>
                    <Link to="/recipes">
                        <NavLinkIcon src={recipeBook}/>
                    </Link>
                </NavBarTab>
                <NavBarTab>                    
                    <Link to="/recipes">
                        <NavLinkIcon src={calendar}/>
                    </Link>
                </NavBarTab>
                <NavBarTab>
                    <Link to="/">
                        <Logo src={monogram}/>  
                    </Link>
                </NavBarTab>
                <NavBarTab>
                    <Link to="/pantry">
                        <NavLinkIcon src={shoppinglist}/>
                    </Link>
                </NavBarTab>
                <NavBarTab>
                    <Link to="/recipes">
                        <NavLinkIcon src={settings}/>
                    </Link>
                </NavBarTab>
            </NavBar>
        )
    }
}

export default Footer
