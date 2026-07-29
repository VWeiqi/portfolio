import { BackClouds, FrontClouds } from './Clouds'
import { HeroBackground } from './HeroBackground'
import { JellyfishAnimation } from './JellyfishAnimation'

type HeroProps = {
  theme?: 'day' | 'night'
}

export function Hero({ theme = 'day' }: HeroProps) {
  return (
    <section className="relative h-screen w-screen overflow-hidden" aria-label="Animated sky">
      <HeroBackground theme={theme} />
      <BackClouds />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
        {Array.from({ length: 6 }, (_, index) => <JellyfishAnimation key={`back-${index}`} index={index} layer="back" />)}
      </div>

      <FrontClouds />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-40 overflow-hidden">
        {Array.from({ length: 6 }, (_, index) => <JellyfishAnimation key={`front-${index}`} index={index} layer="front" />)}
      </div>
    </section>
  )
}
