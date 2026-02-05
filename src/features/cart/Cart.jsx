import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart, clearCart,increaseQuantity,decreaseQuantity } from './cartSlice'

export default function Cart() {
  const dispatch = useDispatch()
  const items = useSelector(state => state.cart.items)
  const total = useSelector(state => state.cart.totalAmount)

  if (items.length === 0) {
      return (
     <div className="flex justify-center py-8">
      <div className="rounded-lg bg-amber-300 px-6 py-3 text-center">
        <h2> Your Cart Is Empty! 
           <p className='font-bold text-2xl'> :( </p>
        </h2>
      </div>
    </div>
  );
  }

  return (
    <div className="p-6 bg-slate-400 mt-10">
     
      {items.map(item => (
        <div key={item.id} className="flex justify-between mb-2 gap-1">
          <span>{item.title} (x{item.quantity})</span>

       <button
         className="bg-gray-300  px-2 ml-auto rounded font-bold text-l cursor-pointer "
         onClick={() => dispatch(increaseQuantity(item.id))}
       >
         +
       </button> 

       <button
         className="bg-gray-300 px-2 rounded font-bold text-l cursor-pointer"
         onClick={() => dispatch(decreaseQuantity(item.id))}
       >
         −
       </button>

       
        <button
            className="bg-gray-300  bg-amber-200 px-2 rounded  font-bold text-l cursor-pointer"
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            Remove
          </button>
        
       
        </div>

      ))}

      <div className="p-4 mt-8 flex justify-center bg-blue-50 gap-2 rounded">
      
      <div className="font-bold text-black px-4 py-2 rounded cursor-pointer">
        Total: ₹{Number(total).toFixed(2)}
       </div> 
     
        <button
          className="bg-red-600 text-white px-4 py-2 rounded cursor-pointer"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>

          <button
          className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer">
          Proceed To Checkout ->
        </button>
   

      </div>

     <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
  <h2 className="mb-3 text-xl font-semibold text-gray-800">
    About This Website
  </h2>

  <p className="text-sm leading-relaxed text-gray-600">
    This project is a frontend e-commerce cart application built using
    <span className="font-medium text-gray-800"> React </span>
    and
    <span className="font-medium text-gray-800"> Redux Toolkit</span>.
    It demonstrates core concepts like global state management, adding and
    removing items from a cart, calculating totals, and persisting cart data
    using
    <span className="font-medium text-gray-800"> Local Storage</span>.
  </p>

  <p className="mt-3 text-sm leading-relaxed text-gray-600">
    The goal of this project is to practice real-world frontend patterns and
    build a scalable cart system similar to those used in production
    e-commerce applications.
  </p>
</div>

    </div>
  )
}
