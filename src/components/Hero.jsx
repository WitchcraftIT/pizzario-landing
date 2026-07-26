import { motion } from 'framer-motion'
import { ArrowDown, ChevronRight, Flame, Plus, ShoppingBag } from 'lucide-react'
import { heroImage } from '../data/pizzas'

export default function Hero({ pizza, pizzas, onSelect, onAdd }) {
  return <section id="top" className="px-3 pb-12 pt-5 sm:px-6 sm:pb-20">
    <div className="hero-grid relative mx-auto min-h-[720px] max-w-[1360px] overflow-hidden rounded-[32px] bg-white px-5 pb-7 pt-10 shadow-soft sm:px-10 sm:pt-14 lg:min-h-[760px] lg:px-14">
      <div className="absolute left-[13%] top-[26%] h-72 w-72 rounded-full bg-[#f8c293]/45 blur-3xl" />
      <div className="relative z-10 flex items-center justify-between text-[10px] font-extrabold uppercase tracking-[.16em] text-ink/45"><span>Доставка от 30 минут</span><span className="hidden sm:block">Москва · каждый день 10:00–23:00</span></div>
      <motion.div key={pizza.id} initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.45}} className="relative z-10 mt-9 max-w-[850px]">
        <p className="mb-2 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[.19em] text-tomato"><Flame size={16} fill="currentColor"/> Пицца, которую хочется повторить</p>
        <h1 className="font-display text-[clamp(3.2rem,9vw,9.8rem)] leading-[.8] tracking-[-.09em] text-ink"><span className="text-tomato">НОВАЯ</span> ПИЦЦА<br/>КОЛЛЕКЦИЯ</h1>
        <p className="mt-6 max-w-sm text-sm font-medium leading-6 text-ink/65 sm:text-base">{pizza.description} Готовим из свежих ингредиентов и привозим горячей.</p>
      </motion.div>
      <motion.div initial={{opacity:0,scale:.86,rotate:-3}} animate={{opacity:1,scale:1,rotate:0}} transition={{delay:.15,duration:.7,type:'spring'}} className="pointer-events-none absolute bottom-[70px] left-1/2 z-10 w-[min(104%,800px)] -translate-x-1/2 lg:bottom-[-55px] lg:left-[57%]">
        <img src={heroImage} alt="Горячая пицца с тянущимся сыром" className="w-full drop-shadow-[0_38px_30px_rgba(73,30,8,.28)]" />
      </motion.div>
      <div className="absolute bottom-6 left-5 z-20 flex max-w-[88%] flex-wrap gap-2 sm:bottom-10 sm:left-10">
        {['Тесто — вручную', 'Соус — итальянские томаты', 'Сыр — моцарелла'].map((tag) => <span key={tag} className="rounded-xl bg-white/90 px-3 py-2 text-[10px] font-extrabold uppercase text-ink shadow-md backdrop-blur">{tag}</span>)}
      </div>
      <motion.button whileHover={{scale:1.06,rotate:5}} whileTap={{scale:.95}} onClick={() => onAdd(pizza)} className="absolute bottom-[176px] right-5 z-20 grid h-[88px] w-[88px] place-items-center rounded-full bg-tomato text-center text-[10px] font-extrabold uppercase leading-3 text-white shadow-float sm:right-10 lg:bottom-24"><span><Plus className="mx-auto mb-1" size={18}/><span className="block">в корзину</span></span></motion.button>
      <div className="absolute right-5 top-[58%] z-20 flex flex-col gap-2 sm:right-10 lg:top-[36%]">
        {pizzas.slice(0,3).map((item) => <button key={item.id} onClick={() => onSelect(item)} className={`h-16 w-16 overflow-hidden rounded-xl border-2 bg-[#f6d9c3] transition sm:h-20 sm:w-20 ${pizza.id === item.id ? 'border-tomato shadow-md' : 'border-white hover:border-tomato/40'}`} aria-label={`Выбрать ${item.name}`}><img src={heroImage} alt="" className="h-full w-full scale-125 object-cover" style={{filter:`hue-rotate(${item.tone}) saturate(1.1)`}}/></button>)}
      </div>
      <div className="absolute bottom-7 right-5 z-20 hidden items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest text-ink/45 sm:flex"><ArrowDown size={15}/> листай ниже</div>
    </div>
  </section>
}
