import {useContext} from 'react'
import {css} from 'emotion'

import {ThemeContext} from './ThemeProvider'

const isFunction = (fn) => fn && {}.toString.call(fn) === '[object Function]'

export default (classes) => {
  const theme = useContext(ThemeContext)

    return (cpName, props = {}) => {
    const {
      literals,
      expressions,
    } = classes[cpName]

    let string = ``

    for (const [i, val] of expressions.entries()) {
      const expression = isFunction(val) ? val({...props, theme}) : val

      string += literals[i] + expression
    }

    string += literals[literals.length - 1]

    const className = css`${string}`
    
    if (process.env.NODE_ENV !== 'production') {
      return `${cpName}-${className.split('-').pop()} ${className}`
    }
    
    return className
  }
}
