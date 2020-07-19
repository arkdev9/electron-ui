import React, { useRef, useEffect } from 'react'
import { Box, makeStyles, useTheme } from '@material-ui/core'

const graphStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    width: 300,
    height: 300,
    margin: 'calc(100px / 2 + 0px)',
    border: `2px solid ${theme.palette.secondary.main}`,
    borderRadius: '50%'
  },
  dots: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '25px',
    height: '25px',
    margin: 'calc(-25px / 2)',
    background: theme.palette.secondary.dark,
    borderRadius: '50%'
  }
}))
export default function InductionCooktop () {
  const graphClasses = graphStyles(useTheme())
  const graph = useRef(null)

  useEffect(() => {
    const ciclegraph = graph.current
    const circleElements = ciclegraph.childNodes

    let angle = 360 - 90
    const dangle = 360 / circleElements.length
    const innerGutter = 25

    for (let i = 0; i < circleElements.length; i++) {
      const circle = circleElements[i]
      angle += dangle
      circle.style.transform = `rotate(${angle}deg) translate(${ciclegraph.clientWidth /
        2 -
        innerGutter}px) rotate(-${angle}deg)`
    }
  }, [])

  return (
    <Box className={graphClasses.root} ref={graph}>
      <Box className={graphClasses.dots} />
      <Box className={graphClasses.dots} />
      <Box className={graphClasses.dots} />
      <Box className={graphClasses.dots} />
      <Box className={graphClasses.dots} />
      <Box className={graphClasses.dots} />
      <Box className={graphClasses.dots} />
      <Box className={graphClasses.dots} />
    </Box>
  )
}
