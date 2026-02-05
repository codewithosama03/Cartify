import { createSlice } from '@reduxjs/toolkit'

const initialItems = JSON.parse(localStorage.getItem('cartItems')) || []

const initialState = {
  items: initialItems,
  totalAmount: initialItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )
}

const calculateTotal = (items) => {
  return items.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload

      const existingItem = state.items.find(
        i => i.id === item.id
      )

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({ ...item, quantity: 1 })
      }

      state.totalAmount = calculateTotal(state.items)
      localStorage.setItem('cartItems', JSON.stringify(state.items))
    },

    removeFromCart: (state, action) => {
      const id = action.payload

      state.items = state.items.filter(item => item.id !== id)

      state.totalAmount = calculateTotal(state.items)
      localStorage.setItem('cartItems', JSON.stringify(state.items))
    },

    increaseQuantity: (state, action) => {
      const id = action.payload

      const existingItem = state.items.find(
        item => item.id === id
      )

      if (existingItem) {
        existingItem.quantity += 1
      }

      state.totalAmount = calculateTotal(state.items)
      localStorage.setItem('cartItems', JSON.stringify(state.items))
    },

    decreaseQuantity: (state, action) => {
      const id = action.payload

      const existingItem = state.items.find(
        item => item.id === id
      )

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1
      }

      state.totalAmount = calculateTotal(state.items)
      localStorage.setItem('cartItems', JSON.stringify(state.items))
    },

    clearCart: (state) => {
      state.items = []
      state.totalAmount = 0
      localStorage.removeItem('cartItems')
    }
  }
})

export const {
  addToCart,
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity
} = cartSlice.actions

export default cartSlice.reducer
