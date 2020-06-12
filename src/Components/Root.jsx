import React, { Fragment } from 'react'
import { ShellBar, ShellBarItem } from '@ui5/webcomponents-react'
import { Switch, Route, Redirect, useHistory } from 'react-router-dom'

// React components
import { Home } from './Home'
import { Detail } from './Detail'

import '@ui5/webcomponents-icons/dist/icons/add.js'

const Root = () => {
  const history = useHistory()
  const handleLogoClick = () => {
    history.push('./')
  }

  return (
    <Fragment>
      <ShellBar
        primaryTitle='My App'
        onLogoClick={handleLogoClick}
        logo={'react_logo.png'}
        profile={'profile_picture.png'}
      >
        <ShellBarItem icon='add' text='Add' />
      </ShellBar>
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/detail' component={Detail} />
        <Redirect from='/' to='/home' />
      </Switch>
    </Fragment>
  )
}

export default Root
