import React from 'react'
import Cooktop from '../components/Cooktop'
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Box,
  Divider,
  makeStyles
} from '@material-ui/core'
import theme from '../config/theme'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(1),
    height: 120,
    width: 80,
    padding: theme.spacing(1)
  },
  content: {
    padding: `${theme.spacing(1)}px 0px ${theme.spacing(1)}px 0px !important`
  },
  media: {
    height: 0,
    paddingTop: '100%'
  }
}))

export default function InductionCooktop () {
  const classes = useStyles(theme)
  const cards = [
    {
      img: '/assets/cooktop/baby-bottle.png',
      text: 'Baby Bottle'
    },
    // TODO: Get a better icon
    // {
    //   img: '/assets/cooktop/eggs.png',
    //   text: 'Eggs'
    // },
    {
      img: '/assets/cooktop/hotspring.png',
      text: 'Soup'
    },
    {
      img: '/assets/cooktop/meat.png',
      text: 'Chicken'
    },
    {
      img: '/assets/cooktop/spa.png',
      text: 'Something'
    }
  ]
  return (
    <>
      <Typography align='center' variant='h3' color='secondary'>
        Induction Cooktop
      </Typography>
      <Divider />
      <Grid
        container
        direction='row'
        justify='flex-start'
        alignItems='flex-start'
      >
        <Grid item md={5}>
          <Cooktop content='0 °C' />
        </Grid>
        <Grid item md={7}>
          <Box p={2}>
            <Typography variant='h4' align='center'>
              Presets
            </Typography>
            <Grid
              container
              direction='row'
              justify='space-evenly'
              alignItems='flex-start'
              spacing={2}
            >
              {cards.map(card => (
                <Grid item key={card.text}>
                  <Card className={classes.root}>
                    <CardMedia className={classes.media} image={card.img} />
                    <CardContent className={classes.content} align='center'>
                      <Typography variant='caption'>{card.text}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}
