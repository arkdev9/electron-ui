import React, { useContext } from 'react'

import { Box } from '@material-ui/core'

import CookFlow from './CookFlow'

function CookFlowContext () {
  return (
    <Box width='100%' height='100%' alignContent='center'>
      <CookFlow />
    </Box>
  )
}

export default {
  cook: {
    component: <CookFlowContext />
  }
}
