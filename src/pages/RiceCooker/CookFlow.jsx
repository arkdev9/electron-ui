import React, { useState } from 'react'
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  Grid,
  useTheme,
  CardMedia,
  makeStyles,
  Typography
} from '@material-ui/core'
import styles from './commonStyles'

const cardStyles = makeStyles(theme => ({
  contentWrapper: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  media: {
    height: 60,
    width: 60,
    marginLeft: '50%',
    transform: 'translateX(-50%)',
    marginTop: theme.spacing(2)
  }
}))

export default function CookFlow () {
  const classes = styles(useTheme())
  const cardClasses = cardStyles(useTheme())
  const [pointer, setPointer] = useState(0)
  function Initial () {
    return (
      <Card className={classes.wrapper}>
        <CardHeader title='What do you want to cook?' />
        <CardContent>
          <Button
            color='secondary'
            variant='outlined'
            onClick={() => setPointer(1)}
          >
            Rice
          </Button>
          <Button
            color='secondary'
            variant='outlined'
            onClick={() => setPointer(1)}
          >
            Something else
          </Button>
        </CardContent>
      </Card>
    )
  }
  function RicePresets () {
    const cards = [
      {
        img: '/assets/ricecooker/white.png',
        text: 'White Rice'
      },
      {
        img: '/assets/ricecooker/brown.png',
        text: 'Brown Rice'
      },
      {
        img: '/assets/ricecooker/black.png',
        text: 'Black Rice'
      },
      {
        img: '/assets/ricecooker/basmati.png',
        text: 'Basmati Rice'
      },
      {
        img: '/assets/ricecooker/sticky.png',
        text: 'Sticky Rice'
      }
    ]
    return (
      <Card className={classes.wrapper}>
        <CardHeader title='What do you want to cook?' />
        <CardContent>
          <Grid container direction='row' justify='center' alignItems='center'>
            {cards.map(card => (
              <Grid item key={card.text}>
                <Card>
                  <CardMedia
                    component='image'
                    image={card.img}
                    className={cardClasses.media}
                  />
                  <CardContent className={cardClasses.contentWrapper}>
                    <Typography variant='caption'>{card.text}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    )
  }

  if (pointer === 0) {
    return <Initial />
  } else {
    return <RicePresets />
  }
}
