// import '../../styles/globals.css'
import {ThemeProvider} from 'styled-components'


const theme = {
  colors: {
    primary: 'blue'
  }
}

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
