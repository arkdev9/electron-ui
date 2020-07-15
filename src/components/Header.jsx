import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { AppBar, Toolbar, Grid, Box } from '@material-ui/core'

// const Logo = styled.img`
//   height: 20px;
//   width: auto;
// `

// const XSmallStatusGoodSmall = styled(StatusGoodSmall)`
//   font-size: 6px;
// `

export default function Header () {
  const [online, setOnline] = useState(true)
  return (
    <AppBar position='sticky' elevation={0} style={{ backgroundColor: '#333' }}>
      <Toolbar>
        <Grid container direction='row' justify='center' alignItems='center'>
          <Grid item>
            <Link to='/'>
              <img
                src='/assets/logo.png'
                alt='logo'
                style={{ height: '20px' }}
              />
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
