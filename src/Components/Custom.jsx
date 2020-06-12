import React from 'react'
import { createUseStyles } from 'react-jss'

const styles = ({ parameters }) => {
  return {
    container: {
      backgroundColor: parameters.sapUiGlobalBackgroundColor,
      fontFamily: parameters.sapUiFontFamily
    },
    text: {
      color: parameters.sapUiContentForegroundTextColor
    }
  }
}

const useStyles = createUseStyles(styles)

export const Custom = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <span className={classes.text}>This is a custom component</span>
    </div>
  )
}
