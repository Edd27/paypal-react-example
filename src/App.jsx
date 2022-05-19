import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import Checkout from './components/Checkout'
import NotFound from './components/NotFound'
import { cart } from './data/cart'

const App = () => {
  return (
    <PayPalScriptProvider
      options={{ 'client-id': import.meta.env.VITE_PAYPAL_CLIENT_ID }}
    >
      <Router>
        <Routes>
          <Route path='/' element={<Checkout cart={cart} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </PayPalScriptProvider>
  )
}

export default App
