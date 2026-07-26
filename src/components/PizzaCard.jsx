import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { heroImage } from '../data/pizzas'

export default function PizzaCard({ pizza, onAdd, index }) {
  return <motion.article initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}} transition={{delay:index*.05}} whileHover={{y:-7}} className="group relative overflow-hidden rounded-[26px] bg-white p-4 shadow-soft">
    <div className="relative grid h-52 place-items-center overflow-hidden rounded-[20px] bg-[#f6dcc7]">
      <span className="absolute left-3 top-3 z-10 rounded-lg bg-white/80 px-2.5 py-1 text-[10px] font-extrabold uppercase text-tomato">{pizza.size}</span>
      <img src={heroImage} alt={pizza.name} className="w-[130%] rotate-[-10deg] transition duration-500 group-hover:scale-110 group-hover:rotate-0" style={{filter:`hue-rotate(${pizza.tone}) saturate(1.15)`}} />
    </div>
    <div className="px-1 pb-1 pt-4"><h3 className="font-display text-2xl leading-none tracking-[-.06em] text-ink">{pizza.name}</h3><p className="mt-2 min-h-10 text-xs font-medium leading-5 text-ink/55">{pizza.description}</p><div className="mt-4 flex items-center justify-between"><span className="text-lg font-extrabold text-ink">{pizza.price} ₽</span><button onClick={() => onAdd(pizza)} className="grid h-10 w-10 place-items-center rounded-xl bg-tomato text-white transition hover:bg-ink" aria-label={`Добавить ${pizza.name}`}><Plus size={20}/></button></div></div>
  </motion.article>
}
