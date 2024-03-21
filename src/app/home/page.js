// "use client"
import CardCorusepage from '@/components/card/CardCorusepage'
import CardCourseContent from '@/components/card/CardCourseContent'
import CarouselComponent from '@/components/causels/CaroselComponent'

import React from 'react'

export default function Homepage() {
  return (
    <div>
      <CarouselComponent/>
       <h2 className='text-2xl text-center font-bold text-blue-700'>Course</h2>
       <div className='flex flex-wrap bg-yellow-200 justify-center gap-2'>
        <CardCorusepage/>
        <CardCorusepage/>
        <CardCorusepage/>
        <CardCorusepage/>
       </div>
  
       <h2 className='text-4xl text-center font-bold'>USSFULL COURSES</h2>

     <div className="container mx-auto p-14"> 
      <div className=' flex flex-wrap bg-yellow-200 justify-center gap-2 m-12'>
        <CardCourseContent/>
        <CardCourseContent/>
        <CardCourseContent/>
       </div>
      </div>  
    </div>
  )
}
