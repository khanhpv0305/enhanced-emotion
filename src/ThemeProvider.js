import React, {createContext} from 'react'

const ThemeContext = createContext()

const ThemeProvider = ({theme, children}) => (
  <ThemeContext.Provider value={theme}>
    {children}
  </ThemeContext.Provider>
)

export {ThemeContext}

export default ThemeProvider
