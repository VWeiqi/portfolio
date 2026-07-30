type HeroBackgroundProps = {
  theme: 'day' | 'night'
}

const backgrounds = {
  day: 'bg-linear-to-b from-[#13C1FF] to-[#A7ECFF]',
  night: 'bg-linear-to-b from-[#071B48] to-[#102F68]',
}

export function HeroBackground({ theme }: HeroBackgroundProps) {
  return (
    <>
      <div aria-hidden="true" className={`absolute inset-0 z-0 ${backgrounds[theme]}`} />
      <div aria-hidden="true" className="duotone-noise pointer-events-none absolute inset-0 z-[1]" />
    </>
  )
}
