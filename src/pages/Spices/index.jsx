import React, { useState } from 'react'
import { Box, Button } from '@material-ui/core'
import Mixes from './Mixes'
import Spices from './Spices'

export default function SpicesIndex () {
  const [mixesView, toggleMixesView] = useState(false)

  return (
    <Box p={2}>
      <Box mb={2} width='100%'>
        <Button
          variant={mixesView ? 'outlined' : 'contained'}
          color='secondary'
          onClick={() => toggleMixesView(!mixesView)}
          style={{ width: '50%' }}
        >
          Spices
        </Button>
        <Button
          variant={mixesView ? 'contained' : 'outlined'}
          color='secondary'
          onClick={() => toggleMixesView(!mixesView)}
          style={{ width: '50%' }}
        >
          Spice Mixes
        </Button>
      </Box>
      {mixesView ? <Mixes /> : <Spices />}
    </Box>
  )
}
