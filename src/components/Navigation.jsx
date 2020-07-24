import React from 'react'
import { NavLink } from 'react-router-dom'

import { Grid, makeStyles, useTheme } from '@material-ui/core'
import { CalendarToday, Kitchen, Settings, MenuBook } from '@material-ui/icons'

const styles = makeStyles(theme => ({
  grid: {
    height: '100%'
    // position: 'fixed',
    // left: '0',
    // bottom: '0',
  },
  img: {
    width: `${theme.constants.navWidth}px`,
    height: `${theme.constants.navWidth}px`
  }
}))

export default function Navigation () {
  // const [activeTab, setActiveTab] = useState(0)
  const classes = styles(useTheme())
  return (
    <Grid
      container
      direction='column'
      justify='space-around'
      alignItems='center'
      className={classes.grid}
    >
      {/* TODO: Set activeStyle to work on activeTab */}
      <Grid item>
        <NavLink to='/recipes' activeStyle={{ color: 'red' }}>
          <MenuBook />
        </NavLink>
      </Grid>
      <Grid item>
        <NavLink to='/scheduler' activeStyle={{ color: 'red' }}>
          <CalendarToday />
        </NavLink>
      </Grid>
      <Grid item>
        <NavLink to='/' activeStyle={{ color: 'red' }}>
          <img
            alt='monogram'
            src='/assets/monogramDark.png'
            className={classes.img}
          />
        </NavLink>
      </Grid>
      <Grid item>
        <NavLink to='/pantry' activeStyle={{ color: 'red' }}>
          <Kitchen />
        </NavLink>
      </Grid>
      <Grid item>
        <NavLink to='/settings' activeStyle={{ color: 'red' }}>
          <Settings />
        </NavLink>
      </Grid>
    </Grid>
  )
}
