import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'

export default function PizzaCard({ pizza, onAdd, index }) {
  return <motion.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ delay: index * 0.05 }} whileHover={{ y: -6 }} className="menu-card group flex min-h-[438px] flex-col overflow-hidden rounded-[28px]">
    <div className="menu-card-image relative m-3 mb-0 aspect-[1.17] overflow-hidden rounded-[21px]"><img src={pizza.image} alt={pizza.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]" /><span className="size-badge absolute left-3 top-3 rounded-lg px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide text-ink">{pizza.size}</span></div>
    <div className="flex flex-1 flex-col px-5 pb-5 pt-4"><p className="eyebrow text-[10px]">Pizzario selection</p><h3 className="mt-2 font-display text-[1.7rem] leading-none tracking-[-.06em] text-ink">{pizza.name}</h3><p className="mt-3 min-h-10 text-xs font-medium leading-5 text-ink/60">{pizza.description}</p><div className="mt-auto flex items-center justify-between border-t border-ink/8 pt-4"><span className="text-xl font-extrabold text-ink">{pizza.price} ₽</span><button onClick={() => onAdd(pizza)} className="add-button grid h-10 w-10 place-items-center rounded-full bg-tomato text-white" aria-label={`Добавить ${pizza.name}`}><Plus size={19} /></button></div></div>
  </motion.article>
}
