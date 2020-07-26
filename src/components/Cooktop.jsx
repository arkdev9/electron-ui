import React, { useRef, useEffect } from 'react'
import { Box, makeStyles, useTheme, Typography, Grid } from '@material-ui/core'

// Number of dots on the cooktop circle
const numDots = 15
// Width/height of each dot in pixels
const dotDim = 10

const graphStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    width: 200,
    height: 200,
    margin: 'calc(100px / 2 + 0px)',
    border: '10px solid gray',
    borderRadius: '50%'
  },
  dots: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: `${dotDim}px`,
    height: `${dotDim}px`,
    margin: `calc(-${dotDim}px / 2)`,
    background: 'lightgray',
    borderRadius: '50%'
  }
}))
export default function InductionCooktop (props) {
  const graphClasses = graphStyles(useTheme())
  const graph = useRef(null)

  useEffect(() => {
    const ciclegraph = graph.current
    const circleElements = ciclegraph.childNodes

    let angle = 360 - 90
    // .length - 1 because first element is for content
    const dangle = 360 / (circleElements.length - 1)
    // Gutter width MUST be equal to width(diameter) of dot
    const innerGutter = dotDim

    // Skip first element because it's for content (no rotation applied)
    for (let i = 1; i < circleElements.length; i++) {
      const circle = circleElements[i]
      angle += dangle
      circle.style.transform = `rotate(${angle}deg) translate(${ciclegraph.clientWidth /
        2 -
        innerGutter}px) rotate(-${angle}deg)`
    }
  }, [])

  const dots = []
  for (let i = 0; i < numDots; i++) {
    dots.push(<Box key={`dot-${i}`} className={graphClasses.dots} />)
  }

  return (
    <Box className={graphClasses.root} ref={graph}>
      <Box className={graphClasses.content}>
        <Typography
          variant='h5'
          align='center'
          style={{ marginTop: '50%', transform: 'translateY(-50%)' }}
        >
          {props.content}
        </Typography>
      </Box>
      {dots}
    </Box>
  )
}
