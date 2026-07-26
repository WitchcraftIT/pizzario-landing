import { useEffect, useMemo, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import PopularMenu from './components/PopularMenu'
import ComboSection from './components/ComboSection'
import Benefits from './components/Benefits'
import DeliveryForm from './components/DeliveryForm'
import Reviews from './components/Reviews'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import { pizzas } from './data/pizzas'

const STORAGE_KEY = 'pizzario-cart'

export default function App() {
  const [featured, setFeatured] = useState(pizzas[0])
  const [cart, setCart] = useState(() => { try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [] } catch { return [] } })
  const [cartOpen, setCartOpen] = useState(false)
  useEffect(() => localStorage.setItem(STORAGE_KEY, JSON.stringify(cart)), [cart])
  const addToCart = item => { setCart(current => { const hit = current.find(x => x.id === item.id); return hit ? current.map(x => x.id === item.id ? {...x,qty:x.qty+1} : x) : [...current,{...item,qty:1}] }); setCartOpen(true) }
  const changeQty = (id, diff) => setCart(current => current.flatMap(item => item.id === id ? (item.qty + diff > 0 ? [{...item,qty:item.qty+diff}] : []) : [item]))
  const remove = id => setCart(current => current.filter(item => item.id !== id))
  const count = cart.reduce((sum,item) => sum + item.qty, 0)
  const total = useMemo(() => cart.reduce((sum,item) => sum + item.price * item.qty, 0), [cart])
  return <main><Header count={count} onCart={() => setCartOpen(true)}/><Hero pizza={featured} pizzas={pizzas} onSelect={setFeatured} onAdd={addToCart}/><PopularMenu pizzas={pizzas} onAdd={addToCart}/><ComboSection/><Benefits/><DeliveryForm/><Reviews/><Footer/><CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} items={cart} onChange={changeQty} onRemove={remove} total={total}/></main>
}
