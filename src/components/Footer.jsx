import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { Grid, IconButton, withStyles } from '@material-ui/core'
import { CalendarToday, Kitchen, Settings, MenuBook } from '@material-ui/icons'

const FootGrid = withStyles({
  root: {
    position: 'fixed',
    left: '0',
    bottom: '0',
    padding: '1em',
    backgroundColor: 'whitesmoke'
  }
})(Grid)

export default function Footer () {
  // const [activeTab, setActiveTab] = useState(0)

  return (
    <FootGrid
      container
      direction='row'
      justify='space-around'
      alignItems='center'
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
            src='assets/monogramDark.png'
            style={{ width: '50px', height: '50px' }}
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
    </FootGrid>
  )
}
