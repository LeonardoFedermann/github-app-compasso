import Routes from './routes/Routes'
import { Theme } from './style/Theme'
import { ThemeProvider } from '@material-ui/core/styles'

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Routes />
    </ThemeProvider>
  )
}

