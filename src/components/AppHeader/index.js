import React, { Component } from 'react'
import styled from 'styled-components';
import { Anchor, Box, Grommet, Header, Text } from "grommet";
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import {StatusGoodSmall} from 'grommet-icons';

const Logo = styled.img`
height: 20px;
width: auto
`

const XSmallStatusGoodSmall = styled(StatusGoodSmall)`
font-size: 6px;
`

class AppHeader extends Component {
    state={
        online: true
    }
    render() {
        return (
            <Header background="dark-1" pad="small" style={{display: "flex",position: "fixed", top: 0, width: "100%", justifyContent: 'space-between',}}>
                <Box direction="row" gap="medium" style={{flex: 1}}></Box>
                <Box direction="row" gap="medium" style={{flex: 1, justifyContent: "flex-end"}}>
                    <Link to="/" style={{marginTop: 5}}>
                        <Logo src={logo}/>  
                    </Link>
                </Box>
                { this.state.online ? 
                     <Box direction="row" gap="medium" style={{flex: 1, justifyContent: "flex-end", paddingRight: 5}}>
                        <Text color='light-4' size="xsmall"><StatusGoodSmall color='status-ok' size='small'style={{width: 6, height: 6 }}   /> online</Text>
                     </Box>
                    : 
                    <Box direction="row" gap="medium" style={{flex: 1, justifyContent: "flex-end", paddingRight: 5}}>
                        <Text color="light-4" size="xsmall"><StatusGoodSmall color='status-disabled' size='small' style={{width: 6, height: 6 }} /> offline</Text>
                     </Box>

                  }

               
            </Header>
        )
    }
}

export default AppHeader
