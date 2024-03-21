// import { Card } from 'flowbite-react'
import { Card } from 'flowbite-react'
import React from 'react'
// import { Image } from '@nextui-org/react';

export default function CardCorusepage() {
  return (

        <Card className="shadow-sm border-[0.5px] bg-yellow-300" 
              imgSrc="https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png" horizontal>
            <h5 className="text-[12px] text-blue-700 font-bold tracking-tight">
                FLUTTER MOBILE DEVELOPMENT
            </h5>
            <p className="font-normal text-[9px] text-base text-gray-700 dark:text-gray-400">
                Flutter course is designed to develop multi-platform like iOS and Android App,
                Web, Desktop apps like MacOS, Windows and Linux using one code base.
            </p>
        </Card>
  )
}
