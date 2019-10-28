import {createContext, createElement} from 'react'

const ThemeContext = createContext()

const ThemeProvider = ({theme, children}) => createElement(ThemeContext.Provider, {value: theme}, children)

export {ThemeContext}

export default ThemeProvider
