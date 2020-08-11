import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Box,
  FormControl,
  NativeSelect,
  InputBase,
  Grid,
  Typography,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  ThemeProvider,
  withStyles,
  makeStyles,
  useTheme
} from '@material-ui/core'

import { Timer, Star } from '@material-ui/icons'

import recipesData from '../data/recipes.json'
import getTheme, { windowHeight } from '../config/theme'

const BootstrapInput = withStyles(theme => ({
  input: {
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
    }
  }
}))(InputBase)

const recipeGridStyles = makeStyles(theme => ({
  grid: {
    overflow: 'scroll',
    flexWrap: 'nowrap',
    height: windowHeight,
    paddingRight: theme.spacing(2)
  },
  gridItem: {
    width: '100%',
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1)
  },
  card: {
    marginBottom: theme.spacing(1),
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'no-wrap'
  },
  img: {
    height: 140,
    width: 200
  },
  contentBox: {
    '& .MuiCardContent-root': {
      paddingTop: theme.spacing(1)
    },
    '& .MuiCardHeader-root': {
      paddingBottom: theme.spacing(1)
    }
  },
  iconBox: {
    display: 'inline-flex',
    marginLeft: theme.spacing(2)
  },
  iconCaption: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}))

const filters = [
  {
    name: 'Spice',
    options: ['High', 'Higher', 'Highest']
  },
  {
    name: 'Meal-Time',
    options: ['Under 30 min', 'Under 1 hour']
  }
]

export default function Recipes () {
  const [recipes, setRecipes] = useState([])
  const darkTheme = getTheme({ paletteType: 'dark' })
  const recipeClasses = recipeGridStyles(useTheme())

  // TODO: We need to implement this in such a way that
  // the recipes are loaded from an external source
  function getRecipes () {
    setRecipes(recipesData)
  }

  useEffect(() => {
    getRecipes()
  })

  return (
    <Box ml={2} mr={2}>
      <Grid container>
        <Grid item md={8}>
          <Grid
            container
            direction='column'
            justify='flex-start'
            alignItems='center'
            className={recipeClasses.grid}
          >
            {recipes.map((recipe, i) => (
              <Grid item className={recipeClasses.gridItem} key={i}>
                <NavLink to={`/recipes/${recipe.id}`}>
                  <Card elevation={0} className={recipeClasses.card}>
                    <CardMedia
                      image={recipe.src}
                      className={recipeClasses.img}
                    />
                    <Box className={recipeClasses.contentBox}>
                      <CardHeader title={recipe.name} />
                      <CardContent>
                        <Typography>By {recipe.creator}</Typography>
                      </CardContent>
                      <Box className={recipeClasses.iconBox}>
                        <Timer />
                        <Typography className={recipeClasses.iconCaption}>
                          35 min
                        </Typography>
                        <Star />
                        <Typography className={recipeClasses.iconCaption}>
                          {recipe.rating}
                        </Typography>
                      </Box>
                    </Box>
                  </Card>
                </NavLink>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item md={4}>
          <ThemeProvider theme={darkTheme}>
            <Box
              height='100%'
              mr={-2}
              bgcolor={darkTheme.palette.secondary.main}
              textAlign='center'
            >
              {filters.map((filter, i) => (
                <FormControl
                  key={i}
                  style={{
                    // TOODO: Put these in  makeStyles
                    width: '80%',
                    marginTop: '8px',
                    marginBottom: '8px'
                  }}
                >
                  <NativeSelect
                    input={<BootstrapInput />}
                    value={filter.name}
                    defaultValue={filter.name}
                  >
                    {filter.options.map(option => (
                      // Needs a handler
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </NativeSelect>
                </FormControl>
              ))}
            </Box>
          </ThemeProvider>
        </Grid>
      </Grid>
    </Box>
  )
}
