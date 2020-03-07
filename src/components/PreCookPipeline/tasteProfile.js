import React, { Component } from 'react'
import { Box, Text, RangeInput } from 'grommet'

const TASTES = ["Salt", "Spice", "Bitter", "Sweet", "Sour", "Texture"]

class TasteProfile extends Component {
    state ={ 
        tasteProfile: {
            "Salt" : 2 ,
            "Spice": 3 ,
            "Bitter": 1,
            "Sweet": 1,
            "Sour": 2,
            "Texture": 4
        }
    }
    onChange = (event, taste) => {
        let changedProfile = {}
        changedProfile[taste] = event.target.value;
        this.setState({tasteProfile: Object.assign(this.state.tasteProfile, changedProfile)})
    };

    render() {
        return (
            <Box pad="small">
                <Box>
                    {
                        Object.keys(this.state.tasteProfile).map((taste)  =>  {
                            return(
                                <Box key={taste} margin="xsmall" pad="xsmall" border round>
                                    <Box>
                                        <Text size="xsmall">
                                            {taste}
                                        </Text>
                                    </Box>
                                    <Box>
                                        <RangeInput value={this.state.tasteProfile[taste]} onChange={ (event) => this.onChange(event, taste)} />
                                    </Box>
                                </Box>
                            )
                        })
                    }
                    <Box height="small"></Box>
                </Box>
            </Box>
        )
    }
}

export default TasteProfile
