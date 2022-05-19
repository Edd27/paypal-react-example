import React from 'react'
import PaypalCheckoutButton from './PaypalCheckoutButton'

const Checkout = ({ cart }) => {
  return (
    <div>
      <h1>Checkout</h1>
      <PaypalCheckoutButton cart={cart} />
    </div>
  )
}

export default Checkout
