import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h1>404 Not Found</h1>
      <a>
        <Link to='/'>Go Checkout</Link>
      </a>
    </div>
  )
}

export default NotFound
