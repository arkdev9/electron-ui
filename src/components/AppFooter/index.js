import React, { Component } from 'react'
import styled from 'styled-components';
import monogram from '../../assets/monogramDark.png';
import { NavLink } from 'react-router-dom';
import recipeBook from  '../../assets/recipebook.png';
import calendar from '../../assets/calendar.png';
import settings from '../../assets/settings.png';
import shoppinglist from '../../assets/shoppinglist.png';
import { Anchor, Box, Grommet, Header, Text } from "grommet";
import logo from '../../assets/logo.png';
import {StatusGoodSmall, Catalog, Plan} from 'grommet-icons';

import {FaRegCalendarAlt, FaCarrot, FaCog, FaBook} from 'react-icons/fa';

const NavLinkIcon = styled.img`
height: 20px;
width: auto
`
const Logo = styled.img`
height: 60px;
width: auto
`

class AppFooter extends Component {
    state = {
        activeTab: 0
    }
    render() {        
        return (
            <Header background="light-1" pad="small" style={{display: "flex",position: "fixed", bottom: 0, width: "100%", justifyContent: 'space-between', height: 50}}>
                <Box direction="column" gap="medium" style={{flex: 1, justifyContent: "center", alignItems: "center", textAlign: "center", textDecoration: "none"}}>
                    <NavLink to="/recipes" activeStyle={{color: "red" }}>                       
                        <FaBook />                        
                    </NavLink>
                </Box>
                <Box direction="row" gap="medium" style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                    <NavLink to="/scheduler" activeStyle={{color: "red"  }}>
                        <FaRegCalendarAlt/>
                    </NavLink>
                </Box>
                <Box direction="row" gap="medium" style={{flex: 2}}>
                    <NavLink to="/"  activeStyle={{color: "red" }}>
                        <Logo src={monogram} style={{marginTop: -10}}/>  
                    </NavLink>
                </Box>
                <Box direction="row" gap="medium" style={{flex: 1}}>
                    <NavLink to="/pantry"  activeStyle={{color: "red" }}>
                        <FaCarrot  />
                    </NavLink>
                </Box>
                <Box direction="row" gap="medium" style={{flex: 1}}>
                    <NavLink to="/settings"  activeStyle={{color: "red" }}>
                        <FaCog/>
                    </NavLink>
                </Box>               
            </Header>
        )
    }
}

export default AppFooter
