type CloudProps = {
  src: string
  className: string
}

function Cloud({ src, className }: CloudProps) {
  return <img src={src} alt="" aria-hidden="true" className={`absolute select-none ${className}`} />
}

export function BackClouds() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
      <Cloud src="/images/clouds/day/cloud1.svg" className="-left-[8%] top-[4%] w-[42vw] min-w-80 opacity-75" />
      <Cloud src="/images/clouds/day/cloud3.svg" className="right-[-9%] top-[14%] w-[38vw] min-w-72 opacity-70" />
      <Cloud src="/images/clouds/day/cloud5.svg" className="left-[19%] bottom-[-9%] w-[52vw] min-w-96 opacity-65" />
    </div>
  )
}

export function FrontClouds() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-30 overflow-hidden">
      <Cloud src="/images/clouds/day/cloud2.svg" className="-left-[12%] bottom-[-4%] w-[47vw] min-w-96" />
      <Cloud src="/images/clouds/day/cloud4.svg" className="right-[-10%] bottom-[-7%] w-[47vw] min-w-96" />
    </div>
  )
}
