import CardCorusepage from '@/components/card/CardCorusepage'
import CarouselComponent from '@/components/causels/CaroselComponent'

import React from 'react'

export default function CoursePage() {
  return (
    <div className="m-12">
       <h2 className='text-4xl text-center m-12 font-bold'>Course</h2>
       <div className='flex flex-wrap justify-center gap-2 m-12'>
        <CardCorusepage/>
        <CardCorusepage/>
        <CardCorusepage/>
        <CardCorusepage/>
        <CardCorusepage/>
        <CardCorusepage/>
        <CardCorusepage/>
        <CardCorusepage/>
        <CardCorusepage/>
        <CardCorusepage/>
       </div>
      </div>  
  )
}
