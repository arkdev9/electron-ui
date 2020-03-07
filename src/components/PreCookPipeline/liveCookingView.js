import React, { Component } from 'react'
import { Box, Layer, Button, Text, Image, Stack } from 'grommet'
import { Edit } from 'grommet-icons'

class LiveCookingView extends Component {
    state  = {
        overlayOpen: true,
        currentRecipeStep: null,
        recipeSteps: [],
        
    }

    onClose = () => {
        this.setState({overlayOpen: !this.state.overlayOpen})
    }

    onOpen = () => {}

    render() {
        return (
            <Box pad="small">
                {this.state.overlayOpen && (
                    <Layer full={false} modal={true} position="center" margin="medium" responsive={false} onClickOutside={this.onClose} onEsc={this.onClose}>
                        <Box pad="large" gap="small" width="medium">
                            <Button label="Cook Now" onClick={this.onClose} color="dark-3" />
                            <Button
                                label={
                                <Text color="white">
                                    <strong>Cook Later</strong>
                                </Text>
                                }
                                onClick={this.onClose}
                                primary
                                color="status-critical"
                            />
                        </Box>
                    </Layer>
                )}
                <Box>
                    <Box elevation="small" pad="small" border round="small" direction="row" margin="small" style={{justifyContent:  "space-between"}}>
                        <Box style={{flex:10}}>
                            <Text>
                                Recipe Step
                            </Text>
                        </Box>
                        <Box style={{flex:2}} align="center" justify="center">
                            <Edit style={{width: 14, height:14}} color='brand'/> 
                        </Box>
                    </Box>
                    <Stack border round="small" margin="small" height="300px"  pad="small">
                        <Box height="300px">
                        <Image
                        fit="cover"
                        src="https://v2.grommet.io/assets/Wilderpeople_Ricky.jpg"
                        />
                        </Box>
                        <Box align="center" justify="center" pad="small" background={{
                            "color": "dark-1",
                            "dark": true,
                            "opacity": true}}>
                                <Text color="ligh-t3">
                                Pan Temperature : 90C
                            </Text>
                        </Box>
                        
                    </Stack>
                </Box>
            </Box>
        )
    }
}

export default LiveCookingView
