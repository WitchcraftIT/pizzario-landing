import { motion } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'
import { pizzas } from '../data/pizzas'

const facts = [
  'Тесто созревает 48 часов',
  'Натуральная моцарелла',
  'Томаты из Италии',
  'Выпекаем после заказа',
]

export default function ComboSection() {
  return <section id="approach" className="px-3 py-10 sm:px-6 sm:py-20">
    <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .65, ease: [0.22, 1, 0.36, 1] }} className="craft-section relative mx-auto grid max-w-[1360px] overflow-hidden rounded-[32px] p-7 text-white sm:p-12 lg:grid-cols-[.94fr_1.06fr] lg:p-16">
      <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .55, delay: .12 }} className="relative z-10 max-w-xl">
        <p className="eyebrow text-[#f2b06f]">Наш подход</p>
        <h2 className="mt-4 font-display text-[clamp(2.9rem,5.4vw,5.5rem)] leading-[.85] tracking-[-.08em]">ВКУС, КОТОРЫЙ<br />СОБРАН ИЗ ДЕТАЛЕЙ</h2>
        <p className="mt-6 max-w-md text-sm leading-6 text-white/66">Мы не усложняем рецепт — просто бережно относимся к каждому продукту, времени и жару печи.</p>
        <div className="craft-facts mt-8 grid gap-3 sm:grid-cols-2">
          {facts.map((fact, index) => <motion.div key={fact} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .35, delay: .18 + index * .07 }} className="craft-fact"><Check size={14} strokeWidth={3} />{fact}</motion.div>)}
        </div>
        <a href="#menu" className="craft-cta mt-9 inline-flex items-center gap-2 rounded-xl px-5 py-4 text-xs font-extrabold uppercase">Выбрать пиццу <ArrowUpRight size={16} /></a>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .65, delay: .1 }} className="craft-visual relative mt-10 min-h-[350px] lg:mt-0">
        <div className="craft-visual-surface" />
        <motion.figure animate={{ y: [0, -7, 0], rotate: [-5, -3, -5] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="craft-pizza craft-pizza-small"><img src={pizzas[2].image} alt="Пицца четыре сыра" /></motion.figure>
        <motion.figure animate={{ y: [0, -5, 0], rotate: [6, 4, 6] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }} className="craft-pizza craft-pizza-main"><img src={pizzas[0].image} alt="Свежая пицца пепперони" /></motion.figure>
        <span className="craft-note craft-note-top">Соус из спелых<br />итальянских томатов</span>
        <span className="craft-note craft-note-bottom">100%<br />моцарелла</span>
        <span className="craft-stamp">48H<small>ферментация</small></span>
      </motion.div>
    </motion.div>
  </section>
}
