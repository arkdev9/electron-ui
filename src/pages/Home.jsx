import React from 'react'

import { CardMedia, Button } from '@material-ui/core'
import { Restaurant } from '@material-ui/icons'

// const HomeContainer = styled.div`
// display: flex;
// justify-content: center;
// align-items: center;
// flex-direction; column;
// `
// const CenteredFlexDiv = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-wrap: wrap;
//   flex-direction: row;
// `

// const CardButton = styled(Link)`
//   background: transparent;
//   border-radius: 3px;
//   border: 0.5px solid grey;
//   margin: 0.5em 0.5em;
//   padding: 0.5em 0.5em;
//   display: flex;
//   text-decoration: none;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   color: black;
//   width: 75px;
//   height: 60px;
//   text-align: center;
//   font-size: 12px;
//   line-height: 12px;
// `

function Home () {
  return (
    <div style={{ marginTop: 60 }} className='Home'>
      <Button to='/inductionCooktop' style={{ textDecoration: 'none' }}>
        <CardMedia src='assets/cooktop.png' />
        <span size='small'>Induction</span>
      </Button>
      <Button to='/riceCooker' style={{ textDecoration: 'none' }}>
        <CardMedia src='assets/riceCooker.png' />
        <span>Rice Cooker</span>
      </Button>
      <Button to='/weighingScale'>
        <img src='assets/weighingScale' />
        <span>Weighing Scale</span>
      </Button>
      <Button to='/spiceRack'>
        <img src='assets/spiceDispenser' />
        <span>Spice Dispenser</span>
      </Button>

      <Button to='/liquidStation'>
        <img src='assets/liquidStation' />
        <span>Liquid Station</span>
      </Button>
      {/* <Button to="/pantry">
              <img src='assets/pantr'}/>
              <span>Pantry</span>
          </Button> */}
      <Button to='/motorController'>
        <img src='assets/settings' />
        <span>Motor Controller</span>
      </Button>
      <Button to='/testRecipe'>
        <Restaurant />
        <span>Cook Recipe</span>
      </Button>
    </div>
  )
}

export default Home
