import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';


export default function ProductCard({ product }) {
  const dispatch = useDispatch()

  return (
    <div className="border rounded-lg p-4 shadow bg-slate-300 ">
      <img src={product.image} className="h-40 mx-auto object-contain " />
      <h2 className="font-semibold mt-2 overflow-hidden">{product.title}</h2>
      <p className="text-sm text-gray-600">${product.price}</p>
      <button
        className="mt-3 bg-black text-white px-3 py-1 rounded cursor-pointer"
        onClick={() => dispatch(addToCart(product))}
      >
        Add to Cart
      </button>
      
    </div>
  )
}

