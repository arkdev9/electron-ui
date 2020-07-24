import React from 'react'

import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Divider,
  withStyles
} from '@material-ui/core'
import { NavLink } from 'react-router-dom'

import theme from '../config/theme'

const CardImage = withStyles({
  root: {
    height: 0,
    paddingTop: '100%'
  }
})(CardMedia)

const CardWrapper = withStyles({
  root: {
    margin: 'auto',
    marginTop: `${theme.spacing(3)}px`,
    height: 140,
    width: 100,
    padding: `${theme.spacing(3)}px`,
    borderRadius: `${theme.spacing(2)}px`
  }
})(Card)

export default function Home () {
  const cards = [
    {
      to: '/inductionCooktop',
      img: 'assets/home/cooktop.png',
      text: 'Induction'
    },
    {
      to: '/riceCooker',
      img: 'assets/home/riceCooker.png',
      text: 'Rice Cooker'
    },
    {
      to: '/weighingScale',
      img: 'assets/home/weighingScale.png',
      text: 'Weighing Scale'
    },
    {
      to: '/spiceRack',
      img: 'assets/home/spiceDispenser.png',
      text: 'Spice Dispenser'
    },
    {
      to: '/liquidStation',
      img: 'assets/home/liquidStation.png',
      text: 'Liquid Station'
    },
    {
      to: '/testRecipe',
      img: 'assets/home/cooking.png',
      text: 'Cooking Recipe'
    }
  ]

  return (
    <>
      {/* TODO: Replace Ana with user's name from state */}
      <Typography variant='body1' align='center'>
        Hey Ana, what are you looking for?
      </Typography>
      <Divider />
      <Grid container direction='row' justify='center' alignItems='center'>
        {cards.map(card => (
          <Grid item md={4} key={card.to}>
            <NavLink style={{ textDecoration: 'none' }} to={card.to}>
              {/* TODO: On hover, background color to translucent orange */}
              <CardWrapper elevation={5}>
                <CardImage image={card.img} />
                <CardContent align='center'>
                  <Typography variant='caption'>{card.text}</Typography>
                </CardContent>
              </CardWrapper>
            </NavLink>
          </Grid>
        ))}
      </Grid>
    </>
  )
}
