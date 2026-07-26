import { motion } from 'framer-motion'
import { ArrowDown, Flame, Plus } from 'lucide-react'
import { heroImage } from '../data/pizzas'

export default function Hero({ pizza, pizzas, onSelect, onAdd }) {
  return <section id="top" className="px-3 pb-12 pt-5 sm:px-6 sm:pb-20">
    <div className="hero-grid relative mx-auto min-h-[650px] max-w-[1360px] overflow-hidden rounded-[32px] bg-white px-5 py-7 shadow-soft sm:px-10 lg:min-h-[770px] lg:px-14 lg:py-10">
      <div className="absolute left-[12%] top-[21%] h-72 w-72 rounded-full bg-[#f8c293]/45 blur-3xl" />
      <div className="relative z-10 flex items-center justify-between text-[10px] font-extrabold uppercase tracking-[.16em] text-ink/45"><span>Доставка от 30 минут</span><span className="hidden sm:block">Москва · каждый день 10:00–23:00</span></div>
      <motion.div key={pizza.id} initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:.35}} className="hero-copy absolute left-5 top-[112px] z-20 max-w-[210px] sm:left-10 sm:max-w-[250px] lg:left-[7%] lg:top-[48%]">
        <p className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.15em] text-tomato"><Flame size={14} fill="currentColor"/> {pizza.subtitle}</p>
        <p className="mt-3 text-xs font-medium leading-5 text-ink/60 sm:text-sm">{pizza.description}</p>
        <p className="mt-3 text-lg font-extrabold text-ink">от {pizza.price} ₽</p>
      </motion.div>
      <h1 className="hero-title absolute left-1/2 top-[155px] z-10 w-[96%] -translate-x-1/2 text-center font-display text-[clamp(3.5rem,10.2vw,9.8rem)] leading-[.78] tracking-[-.1em] text-ink lg:top-[118px] lg:w-full"><span className="text-tomato">НОВАЯ</span> ПИЦЦА<br/>КОЛЛЕКЦИЯ</h1>
      <motion.div initial={{opacity:0,scale:.88,rotate:-3}} animate={{opacity:1,scale:1,rotate:0}} transition={{delay:.12,duration:.7,type:'spring'}} className="pointer-events-none absolute bottom-[-34px] left-1/2 z-20 w-[min(128%,860px)] -translate-x-1/2 sm:bottom-[-70px] sm:w-[min(104%,830px)] lg:bottom-[-105px] lg:left-[50%] lg:w-[790px]">
        <img src={heroImage} alt="Горячая пицца с тянущимся сыром" className="w-full drop-shadow-[0_38px_30px_rgba(73,30,8,.28)]" />
      </motion.div>
      <div className="absolute bottom-5 left-5 z-30 flex max-w-[90%] flex-wrap gap-2 sm:bottom-9 sm:left-10 lg:left-[7%]">
        {['Тесто — вручную', 'Соус — итальянские томаты', 'Сыр — моцарелла'].map((tag) => <span key={tag} className="rounded-xl bg-white/90 px-3 py-2 text-[10px] font-extrabold uppercase text-ink shadow-md backdrop-blur">{tag}</span>)}
      </div>
      <motion.button whileHover={{scale:1.06,rotate:5}} whileTap={{scale:.95}} onClick={() => onAdd(pizza)} className="absolute bottom-[175px] right-5 z-30 grid h-[82px] w-[82px] place-items-center rounded-full bg-tomato text-center text-[10px] font-extrabold uppercase leading-3 text-white shadow-float sm:right-10 lg:bottom-[195px] lg:right-[12.5%] lg:h-[94px] lg:w-[94px]"><span><Plus className="mx-auto mb-1" size={18}/><span className="block">в корзину</span></span></motion.button>
      <div className="absolute right-5 top-[52%] z-30 flex flex-col gap-2 sm:right-10 lg:right-[6.5%] lg:top-[34%]">
        {pizzas.slice(0,3).map((item) => <button key={item.id} onClick={() => onSelect(item)} className={`h-16 w-16 overflow-hidden rounded-xl border-2 bg-[#f6d9c3] transition sm:h-20 sm:w-20 ${pizza.id === item.id ? 'border-tomato shadow-md' : 'border-white hover:border-tomato/40'}`} aria-label={`Выбрать ${item.name}`}><img src={heroImage} alt="" className="h-full w-full scale-125 object-cover" style={{filter:`hue-rotate(${item.tone}) saturate(1.1)`}}/></button>)}
      </div>
      <div className="absolute bottom-7 right-5 z-30 hidden items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest text-ink/45 sm:flex"><ArrowDown size={15}/> листай ниже</div>
    </div>
  </section>
}
