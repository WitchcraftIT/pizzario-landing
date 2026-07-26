import { Menu, Pizza, ShoppingBag, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

const links = [
  { label: 'Меню', href: '#menu' },
  { label: 'Почему мы', href: '#benefits' },
  { label: 'Доставка', href: '#delivery' },
  { label: 'Отзывы', href: '#reviews' },
]

export default function Header({ count, onCart }) {
  const [open, setOpen] = useState(false)
  return <header className="site-header relative z-30 px-3 pt-3 sm:px-6 sm:pt-6">
    <motion.div initial={{ opacity: 0, y: -12, filter: 'blur(6px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: .55, ease: [0.22, 1, 0.36, 1] }} className="header-shell mx-auto flex max-w-[1360px] items-center justify-between rounded-[24px] bg-white px-5 py-4 sm:px-7">
      <a href="#top" className="header-brand flex items-center gap-2.5" aria-label="Pizzario">
        <span className="header-mark grid h-10 w-10 place-items-center rounded-xl bg-tomato text-cream"><Pizza size={24} fill="currentColor" /></span>
        <span className="font-display text-xl tracking-[-.08em] text-ink sm:text-2xl">PIZZARIO</span>
      </a>
      <nav className="header-nav hidden items-center gap-7 text-[11px] font-extrabold uppercase tracking-wide text-ink lg:flex">
        {links.map((link) => <a key={link.href} href={link.href} className="transition hover:text-tomato">{link.label}</a>)}
      </nav>
      <div className="flex items-center gap-2">
        <button onClick={onCart} className="cart-button relative grid h-11 w-11 place-items-center rounded-xl bg-tomato text-white transition hover:-translate-y-0.5 hover:bg-[#a91f1b]" aria-label="Открыть корзину"><ShoppingBag size={19}/>{count > 0 && <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-ink px-1 text-[10px] font-bold">{count}</span>}</button>
        <button onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-xl border border-black/10 lg:hidden" aria-label="Меню">{open ? <X/> : <Menu/>}</button>
      </div>
    </motion.div>
    <AnimatePresence>{open && <motion.nav initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} className="absolute left-3 right-3 top-[82px] grid gap-1 rounded-2xl bg-white p-4 shadow-soft sm:left-6 sm:right-6 lg:hidden">{links.map(link => <a onClick={() => setOpen(false)} key={link.href} href={link.href} className="rounded-xl px-4 py-3 text-sm font-bold hover:bg-cream">{link.label}</a>)}</motion.nav>}</AnimatePresence>
  </header>
}
