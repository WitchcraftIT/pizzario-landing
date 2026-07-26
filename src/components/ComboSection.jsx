import { ArrowUpRight } from 'lucide-react'
import { premiumHeroImage } from '../data/pizzas'

export default function ComboSection() {
  return <section id="approach" className="px-3 py-10 sm:px-6 sm:py-20">
    <div className="craft-section relative mx-auto grid max-w-[1360px] overflow-hidden rounded-[32px] p-7 text-white sm:p-12 lg:grid-cols-[.9fr_1.1fr] lg:p-16">
      <div className="relative z-10 max-w-xl self-center">
        <p className="eyebrow text-[#f2b06f]">Наш подход</p>
        <h2 className="mt-4 font-display text-[clamp(2.9rem,5.4vw,5.5rem)] leading-[.85] tracking-[-.08em]">ВКУС, КОТОРЫЙ<br />СОБРАН ИЗ ДЕТАЛЕЙ</h2>
        <p className="mt-7 max-w-md text-sm leading-6 text-white/66">Долгая ферментация теста, натуральная моцарелла и соус из спелых томатов — всё, чтобы один кусочек хотелось повторить.</p>
        <a href="#menu" className="craft-cta mt-9 inline-flex items-center gap-2 rounded-xl px-5 py-4 text-xs font-extrabold uppercase">Выбрать пиццу <ArrowUpRight size={16} /></a>
      </div>

      <div className="craft-visual relative mt-9 min-h-[300px] lg:mt-0 lg:min-h-[390px]">
        <figure className="craft-pizza-single"><img src={premiumHeroImage} alt="Аппетитная пицца с приподнятым кусочком" /></figure>
      </div>
    </div>
  </section>
}
