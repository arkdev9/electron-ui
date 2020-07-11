import React from 'react'

import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  withStyles
} from '@material-ui/core'
import { NavLink } from 'react-router-dom'

const CardImage = withStyles({
  root: {
    height: 0,
    paddingTop: '100%'
  }
})(CardMedia)

const CardWrapper = withStyles({
  root: {
    height: 150,
    width: 100,
    padding: '1em'
  }
})(Card)

export default function Home () {
  const cards = [
    {
      to: '/inductionCooktop',
      img: 'assets/cooktop.png',
      text: 'Induction'
    },
    {
      to: '/riceCooker',
      img: 'assets/riceCooker.png',
      text: 'Rice Cooker'
    },
    {
      to: '/weighingScale',
      img: 'assets/weighingScale.png',
      text: 'Weighing Scale'
    },
    {
      to: '/spiceRack',
      img: 'assets/spiceDispenser.png',
      text: 'Spice Dispenser'
    },
    {
      to: '/liquidStation',
      img: 'assets/liquidStation.png',
      text: 'Liquid Station'
    },
    {
      to: '/motorController',
      img: 'assets/settings.png',
      text: 'Motor Controller'
    },
    {
      to: '/testRecipe',
      img: 'assets/cooking.png',
      text: 'Cooking Recipe'
    }
  ]

  return (
    <Grid
      container
      direction='row'
      justify='space-evenly'
      alignItems='flex-start'
    >
      {cards.map(card => (
        <Grid item key={card.to}>
          <NavLink style={{ textDecoration: 'none' }} to={card.to}>
            <CardWrapper elevation={5}>
              <CardImage image={card.img} />
              <CardContent>
                <Typography align='center'>{card.text}</Typography>
              </CardContent>
            </CardWrapper>
          </NavLink>
        </Grid>
      ))}
    </Grid>
  )
}
