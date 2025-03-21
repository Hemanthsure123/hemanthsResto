import './index.css'
import {FaShoppingCart} from 'react-icons/fa'

const Header = ({cartItems}) => {
  const getCartItemsCount = () =>
    cartItems.reduce((acc, item) => acc + item.quantity, 0)

  const renderCartIcon = () => (
    <div className="cart-icon-container">
      <p className="cart-count">{getCartItemsCount()}</p>
      <FaShoppingCart className="cart-icon" />
    </div>
  )

  return (
    <header className="nav-header">
      <h1 className="logo-heading">UNI Resto Cafe</h1>
      <div className="orders-container">
        <p className="my-orders-text">My Orders</p>
        {renderCartIcon()}
      </div>
    </header>
  )
}

export default Header
