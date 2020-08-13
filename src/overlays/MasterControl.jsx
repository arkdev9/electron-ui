import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import {
  Box,
  Drawer,
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent,
  makeStyles,
  useTheme,
  ThemeProvider
} from '@material-ui/core'

import { AppContext } from '../App'
import getTheme, { windowWidth, windowHeight } from '../config/theme'

const styles = makeStyles(theme => ({
  fullHeight: {
    height: '100%'
  },
  leftGrid: {},
  leftGridItem: {
    width: '100%',
    maxHeight: '33%'
  },
  leftGridHorizontal: {
    padding: theme.spacing(1),
    width: `calc(100% + ${theme.spacing(1)}px)`,
    flexWrap: 'nowrap',
    overflowX: 'auto'
  },
  leftGridHorizontalItem: {
    width: '250px'
  },
  rightGrid: {
    background: theme.palette.secondary.main,
    width: windowHeight,
    padding: theme.spacing(2)
  },
  rightGridItem: {
    width: '100%',
    marginBottom: theme.spacing(2)
  }
}))

const leftCards = {
  Recipes: new Array(10).fill({
    id: 'kadai-paneer',
    name: 'Kadai Paneer',
    to: '/recipes'
  }),
  Control: new Array(10).fill({
    id: 'riku/user/ctrl/spice',
    name: 'Spice Control',
    to: '/dev'
  }),
  Profile: new Array(10).fill({
    id: 'something',
    name: 'Something',
    to: '/riceCooker'
  })
}

const rightCards = [
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
  const history = useHistory()
  const darkTheme = getTheme({ paletteType: 'dark' })
  const appContext = useContext(AppContext)
  const classes = styles(useTheme())

  function cardClickHandler (to) {
    history.push(to)
    appContext.toggleMasterControl()
  }

  return (
    <Drawer
      anchor='left'
      open={appContext.appState.masterControl}
      onClose={() => appContext.toggleMasterControl()}
      transitionDuration={500}
    >
      <Box height={windowHeight} width={windowWidth}>
        <Grid
          container
          direction='row'
          justify='space-evenly'
          alignItems='center'
          className={classes.fullHeight}
        >
          <Grid
            item
            md={8}
            className={`${classes.leftGrid} ${classes.fullHeight}`}
          >
            <Grid
              container
              direction='column'
              justify='flex-start'
              alignItems='flex-start'
              className={classes.fullHeight}
            >
              {Object.keys(leftCards).map((leftCardsKey, i) => (
                <Grid key={i} item className={classes.leftGridItem}>
                  <Box pt={1} pl={1}>
                    <Typography variant='h4'>{leftCardsKey}</Typography>
                  </Box>
                  <Grid
                    container
                    direction='row'
                    justify='flex-start'
                    alignItems='flex-start'
                    spacing={2}
                    className={classes.leftGridHorizontal}
                  >
                    {leftCards[leftCardsKey].map((card, i) => (
                      <Grid key={i} item>
                        <Card
                          className={classes.leftGridHorizontalItem}
                          onClick={() => cardClickHandler(card.to)}
                        >
                          <CardHeader title={card.name} />
                          <CardContent>
                            <Typography>{card.name}</Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid
            item
            md={4}
            className={`${classes.rightGrid} ${classes.fullHeight}`}
          >
            <ThemeProvider theme={darkTheme}>
              <Grid
                container
                direction='column'
                justify='flex-start'
                alignItems='center'
                className={classes.fullHeight}
              >
                {rightCards.map((card, i) => (
                  <Grid item key={i}>
                    <Card className={classes.rightGridItem}>
                      <CardHeader title={card.title} />
                      <CardContent>
                        <Typography>{card.content}</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </ThemeProvider>
          </Grid>
        </Grid>
      </Box>
    </Drawer>
  )
}
