import { BrowserRouter } from "react-router-dom"
import { Container } from '@mui/material'
import { Provider } from "react-redux"
import Routes  from "./routes"
import store from './Components/Store'
import Header from './Components/Header'

function App() {
  const localCart = JSON.parse(localStorage.getItem('dio-shopping: cart'))
  
  if (localCart !== null) {
    store.dispatch({ type: 'CHANGE_CART', localCart })
  }

  return (
    <Provider store={store}>
      <Container maxWidth='xl'>
        <BrowserRouter>
          <Header />
          <Routes />
        </BrowserRouter>
      </Container>
    </Provider>
  )
}

export default App
