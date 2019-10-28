# Install Enhanced Emotion

```
npm i enhanced-emotion
```

# APIs
- [css](#css)
- [useStyles](#usestyles)
- [ThemeProvider](#themeprovider)

## css
Define styles

```
import {css} from 'enhanced-emotion'

const styles = {}

styles.root = css`
  background: ${(props) => props.bgColor};
`

styles.name = css`
  color: red;
  font-size: 3rem;
`

styles.address = css`
  color: yellow;
`

export default styles
```

## useStyles
A custom hook to get classNames from style file

```
import {useStyles} from 'enhanced-emotion'
import styles from './styles'

const App = () => {
    const classes = useStyles(styles)
    
    return (
        <div className={classes('root', {bgColor: 'green'})}>
          <div className={classes('name')}>Khanh Pham</div>
    
          <div className={classes('address')}>593 Xo Viet Nghe Tinh</div>
        </div>
    )
}
```

## ThemeProvider
Global theme

```
import {ThemProvider} from 'enhanced-emotion'

const App = () => {
  return (
    <ThemeProvider theme={{
      colors: {
        green: 'green',
        yellow: 'yellow',
      },
    }}>
      /* content */
    </ThemeProvider>
  )
}

export default App
```

styles file
```
import {css} from 'enhanced-emotion'

const styles = {}

styles.root = css`
  background: ${(props) => props.bgColor};
`

styles.name = css`
  color: red;
  font-size: 3rem;
`

styles.address = css`
  color: ${(props) => props.theme.colors.yellow};
`

export default styles
```