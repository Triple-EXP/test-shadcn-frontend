import { ThemeProvider } from '@/components/theme-provider'
import { AppRoutes } from './routes/index'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
