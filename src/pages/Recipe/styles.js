import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
  progressSquare: {
    marginTop: theme.spacing(2),
    borderRadius: theme.spacing(1),
    width: 40,
    height: 40
  },
  contentBox: {
    padding: theme.spacing(2)
  },
  statsContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  statsBox: {
    padding: theme.spacing(1),
    border: '1px solid black',
    borderRadius: theme.spacing(1),
    margin: theme.spacing(1),
    textAlign: 'center'
  },
  ingredientImagesContainer: {
    marginTop: theme.spacing(2)
  },
  ingredientImg: {
    width: 40,
    height: 40,
    marginLeft: '50%',
    transform: 'translateX(-50%)'
  }
}))
