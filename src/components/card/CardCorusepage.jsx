import { Card } from 'flowbite-react'
import React from 'react'

export default function CardCorusepage() {
  return (
    <div className='container mx-auto p-12'>
        <Card className="w-[550px] shadow-sm border-[0.5px]" imgSrc="https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png" horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      FLUTTER MOBILE DEVELOPMENT
      </h5>
      <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
      Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base.
      </p>
    </Card>
    </div>
  )
}
