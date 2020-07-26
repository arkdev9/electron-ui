import React, { useContext } from 'react'

import { CardContent, Typography, CardHeader, Button } from '@material-ui/core'

import FlowContext from './FlowContext'

export default function NeededMaterials (props) {
  // TODO: We need to get needed materials based on what they're cooking
  const context = useContext(FlowContext)
  return (
    <>
      <CardHeader title='Here is what you need' />
      <CardContent>
        <Typography>{`Selected Preset: ${props.selectedPreset}`}</Typography>
        <Button
          variant='outlined'
          onClick={() => {
            context.moveFlow('confirmed')
          }}
        >
          Continue
        </Button>
      </CardContent>
    </>
  )
}
