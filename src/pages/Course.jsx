import CardCorusepage from '@/components/card/CardCorusepage'
import CarouselComponent from '@/components/causels/CaroselComponent'
import "../app/globals.css";

import React from 'react'

export default function CoursePage() {
  return (
    <div className="m-12">
       <h2 className='text-4xl text-center m-12 font-bold'>Course</h2>
       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 item-center justify-center'>
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
