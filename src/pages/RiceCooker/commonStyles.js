import { makeStyles } from '@material-ui/core'

const styles = makeStyles(theme => ({
  wrapper: {
    width: '300px',
    '& .MuiButton-root': {
      marginTop: `${theme.spacing(1)}px`,
      width: '100%'
    }
  }
}))

export default styles
