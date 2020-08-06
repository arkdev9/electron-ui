import React from 'react'
import { Grid, Typography, Divider, Button, Box } from '@material-ui/core'

import CookFlow from './CookFlow'
import Cooktop from '../../components/Cooktop'

export default function RiceCooker () {
  return (
    <>
      <Typography align='center' variant='h3' color='secondary'>
        Rice Cooker
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
              <Box
                border={1}
                borderColor='secondary'
                p={5}
                borderRadius='50%'
                mt={5}
              >
                <img src='/assets/icons/cooker.svg' alt='cooker' />
              </Box>
            </Grid>
            <Grid item>
              <Box mt={5}>
                <Typography align='center'>
                  What do you want to cook?
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={7}>
          <CookFlow />
        </Grid>
      </Grid>
    </>
  )
}
