import React, { useContext } from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  CardMedia,
  Typography,
  useTheme,
  makeStyles,
  Box
} from '@material-ui/core'
import FlowContext from './FlowContext'

const cardStyles = makeStyles(theme => ({
  tileWrapper: {
    width: 75,
    height: 90,
    margin: `${theme.spacing(0.5)}px`
  },
  contentWrapper: {
    textAlign: 'center',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  media: {
    height: 40,
    width: 40,
    marginLeft: '50%',
    transform: 'translateX(-50%)',
    marginTop: theme.spacing(2)
  }
}))

export default function RicePresets () {
  const cardClasses = cardStyles(useTheme())
  const context = useContext(FlowContext)

  const cards = [
    {
      img: '/assets/ricecooker/white.png',
      text: 'White Rice',
      key: 'white'
    },
    {
      img: '/assets/ricecooker/brown.png',
      text: 'Brown Rice',
      key: 'brown'
    },
    {
      img: '/assets/ricecooker/black.png',
      text: 'Black Rice',
      key: 'black'
    },
    {
      img: '/assets/ricecooker/basmati.png',
      text: 'Basmati Rice',
      key: 'basmati'
    },
    {
      img: '/assets/ricecooker/sticky.png',
      text: 'Sticky Rice',
      key: 'sticky'
    }
  ]
  return (
    <>
      <CardHeader title='What do you want to cook?' />
      <CardContent>
        <Grid container direction='row' justify='center' alignItems='center'>
          {cards.map(card => (
            <Box onClick={() => context.moveFlow(card.key)} key={card.text}>
              <Grid item>
                <Card className={cardClasses.tileWrapper}>
                  <CardMedia image={card.img} className={cardClasses.media} />
                  <CardContent className={cardClasses.contentWrapper}>
                    <Typography variant='caption'>{card.text}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Box>
          ))}
        </Grid>
      </CardContent>
    </>
  )
}
