import { premiumHeroImage } from '../data/pizzas'

export default function ComboSection() {
  return <section id="approach" className="px-3 py-10 sm:px-6 sm:py-20">
    <div className="craft-section relative mx-auto max-w-[1360px] overflow-hidden rounded-[32px]">
      <div className="craft-visual relative min-h-[400px] sm:min-h-[500px]">
        <figure className="craft-pizza-single"><img src={premiumHeroImage} alt="Аппетитная пицца с приподнятым кусочком" /></figure>
      </div>
    </div>
  </section>
}
