import React from 'react'

import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Divider,
  useTheme,
  makeStyles
} from '@material-ui/core'
import { NavLink } from 'react-router-dom'

const styles = makeStyles(theme => ({
  wrapper: {
    margin: 'auto',
    marginTop: `${theme.spacing(3)}px`,
    height: 200,
    width: 150,
    padding: `${theme.spacing(3)}px`,
    borderRadius: `${theme.spacing(2)}px`
  },
  img: {
    height: 0,
    paddingTop: '100%'
  }
}))

export default function Home () {
  const theme = useTheme()
  const classes = styles(theme)
  const cards = [
    {
      to: '/inductionCooktop',
      img: 'assets/home/cooktop.png',
      text: 'Induction'
    },
    {
      to: '/riceCooker',
      img: 'assets/common/rice.png',
      text: 'Rice Cooker'
    },
    {
      to: '/weighScale',
      img: 'assets/home/weighingScale.png',
      text: 'Weigh Scale'
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
        Ana! What do you want?
      </Typography>
      <Divider />
      <Grid container direction='row' justify='center' alignItems='center'>
        {cards.map(card => (
          <Grid item md={4} key={card.to}>
            <NavLink style={{ textDecoration: 'none' }} to={card.to}>
              {/* TODO: On hover, background color to translucent orange */}
              <Card elevation={5} className={classes.wrapper}>
                <CardMedia image={card.img} className={classes.img} />
                <CardContent align='center'>
                  <Typography variant='caption'>{card.text}</Typography>
                </CardContent>
              </Card>
            </NavLink>
          </Grid>
        ))}
      </Grid>
    </>
  )
}
