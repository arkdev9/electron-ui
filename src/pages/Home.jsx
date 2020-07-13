import React from 'react'

import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Divider,
  withStyles,
  Box
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
    marginTop: '1em',
    height: 140,
    width: 100,
    padding: '1em'
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
    // {
    //   to: '/motorController',
    //   img: 'assets/home/settings.png',
    //   text: 'Motor Controller'
    // },
    {
      to: '/testRecipe',
      img: 'assets/home/cooking.png',
      text: 'Cooking Recipe'
    }
  ]

  return (
    <>
      {/* TODO: Replace Ana with user's name from state */}
      <Box p={2}>
        <Typography variant='body1' align='center'>
          Hey Ana, what are you looking for?
        </Typography>
      </Box>
      <Divider style={{ width: '80%', marginLeft: '10%' }} />
      <Grid
        container
        direction='row'
        justify='space-evenly'
        alignItems='flex-start'
      >
        {cards.map(card => (
          <Grid item key={card.to}>
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
