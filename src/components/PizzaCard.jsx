import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'

export default function PizzaCard({ pizza, onAdd, index }) {
  return <motion.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ delay: index * 0.05 }} whileHover={{ y: -4 }} className="group flex min-h-[430px] flex-col overflow-hidden rounded-[28px] border border-[#e9dac9] bg-[#fffaf4] transition-colors hover:border-tomato/35">
    <div className="relative m-3 mb-0 aspect-[1.17] overflow-hidden rounded-[21px] bg-[#f1e4d8]"><img src={pizza.image} alt={pizza.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]" /><span className="absolute left-3 top-3 rounded-lg bg-white/90 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide text-ink">{pizza.size}</span></div>
    <div className="flex flex-1 flex-col px-5 pb-5 pt-4"><p className="text-[10px] font-extrabold uppercase tracking-[.16em] text-tomato">Pizzario selection</p><h3 className="mt-1 font-display text-[1.65rem] leading-none tracking-[-.06em] text-ink">{pizza.name}</h3><p className="mt-3 min-h-10 text-xs font-medium leading-5 text-ink/60">{pizza.description}</p><div className="mt-auto flex items-center justify-between pt-5"><span className="text-lg font-extrabold text-ink">{pizza.price} ₽</span><button onClick={() => onAdd(pizza)} className="grid h-10 w-10 place-items-center rounded-full bg-tomato text-white transition hover:bg-ink" aria-label={`Добавить ${pizza.name}`}><Plus size={19} /></button></div></div>
  </motion.article>
}
