import React, { useContext } from 'react'
import {
  Box,
  Drawer,
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent,
  makeStyles,
  useTheme
} from '@material-ui/core'

import { AppContext } from '../App'
import { windowWidth, windowHeight } from '../config/theme'

const styles = makeStyles(theme => ({
  fullHeight: {
    height: '100%'
  },
  rightGrid: {
    width: '100%',
    background: '#111',
    padding: theme.spacing(2)
  },
  rightGridItem: {
    width: '100%',
    marginBottom: theme.spacing(2)
  }
}))

const cards = [
  {
    type: 'Meal Plan',
    title: 'Breakfast - Masala Oats',
    content: 'More from meal plan'
  },
  {
    type: 'Reminders',
    title: 'Soak rice - 20 minutes at 5pm',
    content: 'More from reminders'
  },
  {
    type: 'Notifications',
    title: 'Soak rice - 20 minutes at 5pm',
    content: 'More from notifications'
  }
]

export default function MasterControl () {
  const appContext = useContext(AppContext)
  const classes = styles(useTheme())
  return (
    <Drawer
      anchor='left'
      open={appContext.appState.masterControl}
      onClose={() => appContext.toggleMasterControl()}
    >
      <Box height={windowHeight} width={windowWidth} p={2}>
        <Grid
          container
          direction='row'
          justify='center'
          alignItems='center'
          className={classes.fullHeight}
        >
          <Grid item md={8}>
            <Typography>Hello</Typography>
          </Grid>
          <Grid
            item
            md={4}
            className={`${classes.rightGrid} ${classes.fullHeight}`}
          >
            <Grid
              container
              direction='column'
              justify='flow-start'
              alignItems='center'
              className={classes.fullHeight}
            >
              {cards.map(card => (
                <Grid item key={card.type} className={classes.rightGridItem}>
                  <Card>
                    <CardHeader title={card.title} />
                    <CardContent>
                      <Typography>{card.content}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Drawer>
  )
}
