import React, { Component } from 'react'
import { Box, Calendar, List, Menu,Grommet } from "grommet";
import { More } from "grommet-icons";

import { grommet } from "grommet/themes";
class Scheduler extends Component {
    state={
        date:  '',
        recipes: ["Recipe1","Recipe1","Recipe1","Recipe1","Recipe1"]
    }

    onSelect = nextDate => {
        this.setState({ date: this.statedate ? nextDate : undefined });
    };

    render() {
        return (
            <Grommet theme={grommet}>
            <Box style={{marginTop: 40,}}>
            <Box align="center" pad="small"  >
                <Calendar
                date={this.state.date} 
                onSelect={this.onSelect}
                size="small"
                bounds={["2018-09-08", "2020-12-13"]}
                />
            </Box>
            <Box pad="large">
                <List
                    data={this.state.recipes}
                    pad={{ left: "small", right: "none" }}
                    action={() => (
                    <Menu icon={<More />} hoverIndicator items={[{ label: "one" }]} />
                    )}
                />
            </Box>
            </Box>
            </Grommet>
        )
    }
}

export default Scheduler
