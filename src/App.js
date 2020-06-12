import { ThemeProvider } from '@ui5/webcomponents-react/lib/ThemeProvider'
import React from 'react'
import Root from './Components/Root'
import { HashRouter } from 'react-router-dom'

const App = () => {
  return (
    <HashRouter>
      <ThemeProvider withToastContainer>
        <Root />
      </ThemeProvider>
    </HashRouter>
  )
}

export default App
