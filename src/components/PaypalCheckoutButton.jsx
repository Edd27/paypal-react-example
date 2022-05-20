import { useState } from 'react'
import { PayPalButtons } from '@paypal/react-paypal-js'

const PaypalCheckoutButton = ({ cart }) => {
  const [paidFor, setPaidFor] = useState(false)
  const [error, setError] = useState(null)

  const handleApprove = orderId => {
    console.log('Order approved', orderId)
    // Call backend to process payment and store on database
    setPaidFor(true)
  }

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: cart.map(item => ({
        description: item.description,
        amount: {
          value: item.price
        }
      }))
    })
  }

  const onApprove = async (data, actions) => {
    const order = await actions.order.capture()
    console.log('order', order)
    handleApprove(data.orderID)
  }

  if (paidFor) {
    // redirect to success page
  }

  if (error) {
    // redirect to error page
  }

  return (
    <PayPalButtons
      style={{
        color: 'gold',
        layout: 'horizontal',
        height: 48,
        shape: 'pill',
        tagline: false
      }}
      onClick={(data, actions) => console.log('on click')}
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
      onCancel={() => console.log('Order cancelled')}
      onError={err => setError(err)}
    />
  )
}

export default PaypalCheckoutButton
