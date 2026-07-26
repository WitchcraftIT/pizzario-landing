import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { trimmedHeroImage } from '../data/pizzas'

export default function Hero({ pizza, pizzas, onSelect, onAdd }) {
  return <section id="top" className="px-3 pb-12 pt-5 sm:px-6 sm:pb-20">
    <div className="hero-stage mx-auto max-w-[1360px] rounded-[32px] bg-[#fffdfa] shadow-soft">
      <div className="hero-halo absolute bottom-[-10%] left-1/2 z-[2] h-[42%] w-[64%] -translate-x-1/2 rounded-[50%] bg-[#efd1b5]/60 blur-2xl" />
      <h1 className="hero-title"><span className="text-tomato">NEW</span> PIZZA COLLECTION</h1>
      <div className="hero-pizza-wrapper">
        <motion.img initial={{ opacity: 0, scale: 0.95, y: 12 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.45 }} src={trimmedHeroImage} alt={`Пицца ${pizza.name}`} className="hero-pizza-image drop-shadow-[0_28px_26px_rgba(85,43,20,.22)]" />
      </div>
      <motion.button whileHover={{ scale: 1.06, rotate: 4 }} whileTap={{ scale: 0.96 }} onClick={() => onAdd(pizza)} className="absolute bottom-[155px] right-5 z-[5] grid h-[70px] w-[70px] place-items-center rounded-full bg-tomato text-center text-[9px] font-extrabold uppercase leading-3 text-white shadow-float sm:right-9 lg:bottom-auto lg:right-[122px] lg:top-[53%] lg:h-[78px] lg:w-[78px]"><span><Plus className="mx-auto mb-1" size={17} /><span className="block">в корзину</span></span></motion.button>
      <div className="absolute right-4 top-1/2 z-[5] flex -translate-y-1/2 flex-col gap-3 sm:right-7 lg:right-[30px]">
        {pizzas.slice(0, 3).map((item) => <button key={item.id} onClick={() => onSelect(item)} className={`h-[54px] w-[54px] overflow-hidden rounded-xl border-2 bg-[#f6d9c3] transition sm:h-[62px] sm:w-[62px] ${pizza.id === item.id ? 'border-tomato shadow-md' : 'border-white hover:border-tomato/40'}`} aria-label={`Выбрать ${item.name}`}><img src={item.image} alt="" className="h-full w-full object-cover" /></button>)}
      </div>
      <div className="absolute bottom-6 left-1/2 z-[6] flex w-max max-w-[94%] -translate-x-1/2 flex-wrap justify-center gap-2">{['Тесто — вручную', 'Соус — итальянские томаты', 'Сыр — моцарелла'].map((tag) => <span key={tag} className="rounded-xl bg-white/90 px-3 py-2 text-[9px] font-extrabold uppercase text-ink shadow-sm backdrop-blur sm:text-[10px]">{tag}</span>)}</div>
    </div>
  </section>
}
