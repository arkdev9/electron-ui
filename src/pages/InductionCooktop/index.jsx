import React from 'react'
import Cooktop from '../../components/Cooktop'
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
import theme from '../../config/theme'

const styles = makeStyles(theme => ({
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
  const classes = styles(theme)
  const cards = [
    {
      img: '/assets/common/milk.png',
      text: 'Baby Bottle'
    },
    {
      img: '/assets/common/hotspring.png',
      text: 'Soup'
    },
    {
      img: '/assets/common/meat.png',
      text: 'Chicken'
    },
    {
      img: '/assets/common/rice.png',
      text: 'Rice'
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
          <Grid
            container
            direction='column'
            justify='flex-start'
            alignItems='center'
          >
            <Grid item>
              <Cooktop content='0 °C' />
            </Grid>
            <Grid item>
              <Grid
                container
                direction='row'
                justify='center'
                alignItems='center'
                spacing={5}
              >
                <Grid item>
                  <img
                    style={{ width: '30px', height: '30px' }}
                    src='/assets/cooktop/minus.png'
                    alt='test'
                  />
                </Grid>
                <Grid item>
                  <img
                    style={{ width: '50px', height: '50px' }}
                    src='/assets/cooktop/power.png'
                    alt='test'
                  />
                </Grid>
                <Grid item>
                  <img
                    style={{ width: '30px', height: '30px' }}
                    src='/assets/cooktop/add.png'
                    alt='test'
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
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
