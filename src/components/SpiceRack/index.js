import React, { Component } from 'react'
import {Select, Box, Layer, Button} from 'grommet';
import { AddCircle, Amazon, Update } from 'grommet-icons';

const allSpices = [
    "Salt",
    "Sugar",
    "Red Chilli Powder",
    "Garam Masala",
    "Coriander Powder",
    "Black Pepper",
    "Turmeric",
    "Cumin Seeds",
    "Fenugreek Seeds",
    "Mustard Seeds",
    "Cardamom Seeds"
]

class SpiceRack extends Component {
    state = {
        spiceConfig: [1,2,3,4,5,6,7,8,9,10].map(() => null) ,
        allSpices: allSpices,
        showFullList: false
    }

    updateSpiceConfig = (event) =>{
        // event.value = value;
        let spiceConfig = this.state.spiceConfig
        console.log(spiceConfig)
        spiceConfig.map((spice,i)  => {
            if(spice == event.target.value){
                spiceConfig[i] = event.value;
            }
        })
        console.log(spiceConfig)
        this.setState({spiceConfig: spiceConfig});
    }

    componentDidMount(){
        // Get the list of all avilable options from the database.
        // For now just setting it directly
        // this.setState({spiceConfig: allSpices.slice(0,10), allSpices:  allSpices});
    }
    
    toggleShowFullList = () => {
        this.setState({showFullList: !this.state.showFullList})
    }

    render() {
        return (
            <Box pad='small' style={{marginTop: 45}}>               
                {this.state.showFullList && (
                    <Layer margin={{ left: "40px", top: "50px", right: "30px", bottom: "10px" }}  animation="fadeIn">
                        <Box fill background="light-4" align="center" justify="center">
                        <Button
                            primary
                            label="Close"
                            onClick={() => this.toggleShowFullList()}
                        />
                        </Box>
                    </Layer>
                )}
                <Box direction="row" align="center" justify="center" pad="small" wrap="true" >
                    {this.state.spiceConfig.map((spice,i) => {
                        if(spice){
                            return(
                                <Box key={spice+i.toString()} pad="small" border gap="medium" margin="small" width="xsmall" height="xsmall">
                                    <Box direction="row" style={{justifyContent: "space-between"}}>
                                        <span>{i+1}</span> 
                                        <Update size='small' onClick={() => this.toggleShowFullList()} />
                                    </Box>
                                    <Box align="center" justify="center" >
                                        <Amazon />
                                        <span style={{fontSize: 12, lineHeight: 1, textAlign: "center"}}>{spice}</span>
                                    </Box>                                    
                                </Box>
                            )    
                        }else{
                            return  (

                                <Box key={spice+i.toString()} pad="small" round >
                                    <Box key={spice+i.toString()} pad="small" border gap="medium" margin="small" width="xsmall" height="xsmall">
                                        <Box direction="row" justify="space-between">
                                            <span>{i+1}</span>                                             
                                        </Box>
                                        <Box align="center" justify="center">
                                            <AddCircle size='medium' onClick={() => this.toggleShowFullList()} />
                                            <span style={{fontSize: 12, lineHeight: 1, textAlign: "center"}}>Add Spice</span>
                                        </Box>                                    
                                    </Box>
                                </Box>
                            )
                        }
                    })}
                </Box>
                <Box height="xsmall"/>
            </Box>
        )
    }
}

export default SpiceRack
