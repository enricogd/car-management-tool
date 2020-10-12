import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'styles/globalStyle'
import theme from 'styles/theme'

import { Dashboard } from './pages/Dashboard'

export type ThemeType = typeof theme

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Dashboard />
      </ThemeProvider>
    </>
  )
}

export default App
