import { motion } from 'framer-motion'
import { Flame, Plus, Star } from 'lucide-react'
import { premiumHeroImage } from '../data/pizzas'

export default function Hero({ pizza, pizzas, onSelect, onAdd }) {
  return <section id="top" className="px-3 pb-12 pt-5 sm:px-6 sm:pb-20">
    <div className="hero-stage mx-auto max-w-[1360px] rounded-[32px] bg-[#fffdfa] shadow-soft">
      <div className="hero-halo absolute bottom-[-10%] left-1/2 z-[2] h-[42%] w-[64%] -translate-x-1/2 rounded-[50%] bg-[#efd1b5]/60 blur-2xl" />
      <div className="absolute left-[9%] top-[40%] z-[2] hidden h-28 w-28 rounded-full border border-tomato/15 lg:block" />
      <div className="hero-intro absolute left-1/2 top-10 z-[4] w-[92%] -translate-x-1/2 text-center"><p className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-[.18em] text-tomato"><Flame size={14} fill="currentColor" /> Hot & fresh pizza every day</p></div>
      <h1 className="hero-title"><span className="text-tomato">NEW</span> PIZZA COLLECTION</h1>
      <p className="hero-description absolute left-1/2 top-[184px] z-[4] w-[min(92%,420px)] -translate-x-1/2 text-center text-sm font-medium leading-5 text-ink/60">Пицца на живом тесте, которую хочется заказать ещё до первого кусочка.</p>
      <div className="hero-pizza-wrapper">
        <motion.img initial={{ opacity: 0, scale: 0.95, y: 12 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.45 }} src={premiumHeroImage} alt={`Пицца ${pizza.name}`} className="hero-pizza-image drop-shadow-[0_30px_26px_rgba(85,43,20,.24)]" />
      </div>
      <div className="hero-product-meta absolute left-[7%] top-[54%] z-[4] hidden rounded-2xl bg-white/80 px-4 py-3 backdrop-blur lg:block"><p className="text-[10px] font-extrabold uppercase tracking-[.15em] text-tomato">Самая популярная сегодня</p><p className="mt-1 text-lg font-extrabold text-ink">{pizza.name} <span className="ml-2 text-sm text-ink/45">{pizza.price} ₽</span></p></div>
      <div className="hero-rating absolute bottom-[106px] left-[7%] z-[4] hidden items-center gap-2 rounded-xl bg-white/80 px-3 py-2 text-xs font-bold text-ink shadow-sm backdrop-blur lg:flex"><Star size={15} fill="currentColor" className="text-[#e19b2d]" /> 4.9 <span className="text-ink/45">/ 1200+ заказов</span></div>
      <motion.button whileHover={{ scale: 1.06, rotate: 4 }} whileTap={{ scale: 0.96 }} onClick={() => onAdd(pizza)} className="absolute bottom-[155px] right-5 z-[5] grid h-[70px] w-[70px] place-items-center rounded-full bg-tomato text-center text-[9px] font-extrabold uppercase leading-3 text-white shadow-float sm:right-9 lg:bottom-auto lg:right-[122px] lg:top-[53%] lg:h-[78px] lg:w-[78px]"><span><Plus className="mx-auto mb-1" size={17} /><span className="block">в корзину</span></span></motion.button>
      <div className="absolute right-4 top-1/2 z-[5] flex -translate-y-1/2 flex-col gap-3 sm:right-7 lg:right-[30px]">
        {pizzas.slice(0, 3).map((item) => <button key={item.id} onClick={() => onSelect(item)} className={`h-[54px] w-[54px] overflow-hidden rounded-xl border-2 bg-[#f6d9c3] transition sm:h-[62px] sm:w-[62px] ${pizza.id === item.id ? 'border-tomato shadow-md' : 'border-white hover:border-tomato/40'}`} aria-label={`Выбрать ${item.name}`}><img src={item.image} alt="" className="h-full w-full object-cover" /></button>)}
      </div>
      <div className="absolute bottom-6 left-1/2 z-[6] flex w-max max-w-[94%] -translate-x-1/2 flex-wrap justify-center gap-2">{['Тесто ручной работы', '100% моцарелла', 'Доставка от 30 минут'].map((tag) => <span key={tag} className="rounded-xl bg-white/90 px-3 py-2 text-[9px] font-extrabold uppercase text-ink shadow-sm backdrop-blur sm:text-[10px]">{tag}</span>)}</div>
    </div>
  </section>
}
