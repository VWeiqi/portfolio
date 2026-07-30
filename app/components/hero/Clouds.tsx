type CloudProps = {
  src: string
  className: string
  driftClassName?: string
}

function Cloud({ src, className, driftClassName = 'cloud-drift' }: CloudProps) {
  return (
    <span className={`absolute block ${className}`}>
      <img src={src} alt="" aria-hidden="true" className={`block h-auto w-full max-w-none select-none ${driftClassName}`} />
    </span>
  )
}

export function BackClouds() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
      <Cloud src="/images/clouds/day/cloud3.svg" className="left-[-6%] top-[-8%] w-[30vw] min-w-64 opacity-70" driftClassName="cloud-drift cloud-drift-slow" />
      <Cloud src="/images/clouds/day/cloud2.svg" className="left-1/2 top-1/2 w-[44vw] min-w-80 -translate-x-1/2 -translate-y-1/2 opacity-75" driftClassName="cloud-drift cloud-drift-wide" />
      <Cloud src="/images/clouds/day/cloud4.svg" className="right-[7%] top-[16%] w-[34vw] min-w-72 opacity-70" driftClassName="cloud-drift cloud-drift-reverse" />
    </div>
  )
}

export function StreakClouds() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[5] overflow-hidden">
      <Cloud src="/images/clouds/day/bigstreak.svg" className="left-1/2 top-[-6%] w-[105vw] min-w-[960px] -translate-x-1/2 opacity-80 lg:top-[-16%]" driftClassName="cloud-drift cloud-drift-slow" />
      <Cloud src="/images/clouds/day/smallstreak.svg" className="right-[-7%] bottom-[18%] w-[24vw] min-w-56 opacity-80" driftClassName="cloud-drift cloud-drift-reverse" />
    </div>
  )
}

export function FrontClouds() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-30 overflow-hidden">
      <Cloud src="/images/clouds/day/cloud1.svg" className="bottom-[-5%] left-[-6%] w-[42vw] min-w-96 opacity-80" driftClassName="cloud-drift cloud-drift-wide" />
      <Cloud src="/images/clouds/day/cloud5.svg" className="right-[6%] bottom-[7%] w-[28vw] min-w-64 opacity-85" driftClassName="cloud-drift cloud-drift-slow" />
    </div>
  )
}
