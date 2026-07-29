'use client'

import { useEffect, useRef, useState } from 'react'

const FRAME_COUNT = 15
const FRAME_DURATION = 1000 / 8
const PATH_ANGLE_RADIANS = (30 * Math.PI) / 180

type JellyfishAnimationProps = {
  index: number
  layer: 'back' | 'front'
}

type Flight = {
  duration: number
  frameOffset: number
  progress: number
  size: number
  startX: number
  startY: number
  driftX: number
  riseY: number
}

function seededRandom(seed: number) {
  const value = Math.sin(seed * 999) * 10000
  return value - Math.floor(value)
}

function createFlight(seed: number, layer: JellyfishAnimationProps['layer']): Flight {
  const random = (offset: number) => seededRandom(seed + offset)
  const entersFromLeft = random(7) > 0.5
  const startY = entersFromLeft ? random(8) * 110 : 115
  const riseY = entersFromLeft ? startY + 55 + random(9) * 85 : 140

  return {
    duration: layer === 'back' ? 19000 + random(1) * 14000 : 15000 + random(1) * 14000,
    frameOffset: Math.floor(random(2) * FRAME_COUNT),
    progress: 0.08 + random(3) * 0.82,
    size: layer === 'front' ? 96 + random(4) * 180 : 48 + random(4) * 100,
    startX: entersFromLeft ? -8 : -10 + random(5) * 110,
    startY,
    driftX: riseY * Math.tan(PATH_ANGLE_RADIANS),
    riseY,
  }
}

export function JellyfishAnimation({ index, layer }: JellyfishAnimationProps) {
  const seed = index + (layer === 'front' ? 100 : 0)
  const [flight, setFlight] = useState(() => createFlight(seed, layer))
  const [position, setPosition] = useState(() => flight.progress)
  const [frame, setFrame] = useState(flight.frameOffset)
  const startTime = useRef<number | null>(null)
  const lastFrameTime = useRef(0)
  const cycle = useRef(0)

  useEffect(() => {
    let animationFrame: number

    const animate = (time: number) => {
      if (startTime.current === null) {
        startTime.current = time - flight.progress * flight.duration
        lastFrameTime.current = time - flight.frameOffset * FRAME_DURATION
      }

      const nextPosition = (time - startTime.current) / flight.duration

      if (nextPosition >= 1) {
        cycle.current += 1
        const nextFlight = createFlight(seed + cycle.current * 1000 + time, layer)
        setFlight(nextFlight)
        setPosition(0)
        setFrame(nextFlight.frameOffset)
        startTime.current = time
        lastFrameTime.current = time
      } else {
        setPosition(nextPosition)

        if (time - lastFrameTime.current >= FRAME_DURATION) {
          setFrame((currentFrame) => (currentFrame + 1) % FRAME_COUNT)
          lastFrameTime.current = time
        }
      }

      animationFrame = requestAnimationFrame(animate)
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [flight, layer, seed])

  const x = flight.startX + flight.driftX * position
  const y = flight.startY - flight.riseY * position

  return (
    <img
      src={`/animations/jellyfish/${frame + 1}.svg`}
      alt=""
      aria-hidden="true"
      draggable="false"
      className="absolute select-none will-change-transform"
      style={{
        left: `${x}vw`,
        top: `${y}vh`,
        width: `${flight.size}px`,
        opacity: layer === 'back' ? 0.58 : 1,
        transform: 'translate(-50%, -50%) rotate(30deg)',
      }}
    />
  )
}
