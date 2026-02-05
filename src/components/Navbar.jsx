// import { useSelector } from 'react-redux'

import { useSelector } from "react-redux";

export default function Navbar() {
  const cartItems = useSelector(state => state.cart.items)

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-black text-white">
      <h1 className="text-2xl font-bold">Cartify 🛒 </h1>
      <div>🛒 Cart: {cartItems.length}</div>
    </nav>
  )
}

