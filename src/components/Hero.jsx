import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { heroImage } from '../data/pizzas'

export default function Hero({ pizza, pizzas, onSelect, onAdd }) {
  return (
    <section id="top" className="px-3 pb-12 pt-5 sm:px-6 sm:pb-20">
      <div className="hero-stage relative mx-auto min-h-[680px] max-w-[1360px] overflow-hidden rounded-[32px] bg-white shadow-soft lg:min-h-[770px]">
        <div className="absolute inset-0 z-0 bg-white" />
        <div className="hero-product-plane absolute inset-x-[2.2%] bottom-7 top-[51%] z-[2] rounded-[26px] bg-[#efdbc7]" />

        <h1 className="hero-title absolute left-1/2 top-[94px] z-[1] w-[95%] -translate-x-1/2 text-center font-display text-[clamp(3.55rem,8.35vw,9.15rem)] leading-[.73] tracking-[-.085em] text-ink">
          <span className="text-tomato">НОВАЯ</span> ПИЦЦА<br />КОЛЛЕКЦИЯ
        </h1>

        <div className="hero-pizza absolute left-1/2 top-[55%] z-[3] w-[min(91vw,710px)] -translate-x-1/2 -translate-y-[35%] lg:w-[710px]">
          <motion.img
            key={pizza.id}
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.65, type: 'spring' }}
            src={heroImage}
            alt={`Пицца ${pizza.name} с тянущимся сыром`}
            className="w-full drop-shadow-[0_38px_30px_rgba(73,30,8,.30)]"
            style={{ filter: `hue-rotate(${pizza.tone}) saturate(1.08)` }}
          />
        </div>
        <img
          src={heroImage}
          aria-hidden="true"
          alt=""
          className="hero-lifted-slice pointer-events-none absolute left-[54%] top-[51%] z-[4] w-[min(84vw,630px)] -translate-x-1/2 -translate-y-[40%] lg:w-[630px]"
          style={{ clipPath: 'polygon(53% 0, 100% 0, 100% 52%, 70% 47%)', filter: `hue-rotate(${pizza.tone}) saturate(1.08)` }}
        />

        <motion.button
          whileHover={{ scale: 1.07, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onAdd(pizza)}
          className="absolute bottom-[166px] right-5 z-[5] grid h-[74px] w-[74px] place-items-center rounded-full bg-tomato text-center text-[9px] font-extrabold uppercase leading-3 text-white shadow-float sm:right-9 lg:bottom-auto lg:right-[122px] lg:top-[53%] lg:h-[84px] lg:w-[84px]"
        >
          <span><Plus className="mx-auto mb-1" size={18} /><span className="block">в корзину</span></span>
        </motion.button>

        <div className="absolute right-4 top-1/2 z-[5] flex -translate-y-1/2 flex-col gap-3 sm:right-7 lg:right-[30px]">
          {pizzas.slice(0, 3).map((item) => (
            <button
              key={item.id}
              onClick={() => onSelect(item)}
              className={`h-[54px] w-[54px] overflow-hidden rounded-xl border-2 bg-[#f6d9c3] transition sm:h-[64px] sm:w-[64px] ${pizza.id === item.id ? 'border-tomato shadow-md' : 'border-white hover:border-tomato/40'}`}
              aria-label={`Выбрать ${item.name}`}
            >
              <img src={heroImage} alt="" className="h-full w-full scale-125 object-cover" style={{ filter: `hue-rotate(${item.tone}) saturate(1.1)` }} />
            </button>
          ))}
        </div>

        <div className="absolute bottom-6 left-1/2 z-[6] flex w-max max-w-[94%] -translate-x-1/2 flex-wrap justify-center gap-2">
          {['Тесто — вручную', 'Соус — итальянские томаты', 'Сыр — моцарелла'].map((tag) => (
            <span key={tag} className="rounded-xl bg-white/90 px-3 py-2 text-[9px] font-extrabold uppercase text-ink shadow-md backdrop-blur sm:text-[10px]">{tag}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
