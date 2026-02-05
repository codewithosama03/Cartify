import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from './productsSlice'
import ProductCard from '../../components/ProductCard'


export default function Products() {
    const dispatch = useDispatch();
  const { items, isLoading } = useSelector(state => state.products);

  useEffect(() => {
      dispatch(fetchProducts())
    }, [dispatch]);
  
  
    if (isLoading) return <p className="p-6">Loading...</p>

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 bg-gray-200">
          {items.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )
      }


