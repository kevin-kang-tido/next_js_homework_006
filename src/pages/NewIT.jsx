import CardCorusepage from '@/components/card/CardCorusepage'
import CardCourseContent from '@/components/card/CardCourseContent'
import CarouselComponent from '@/components/causels/CaroselComponent'
import "../app/globals.css";

import React from 'react'

export default function NewIT() {
  return (
    <>
    <h2 className='text-4xl text-center font-bold mt-12'>USSFULL COURSES</h2>
     <div className="container mx-auto p-14"> 
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 item-center justify-center'>
        <CardCourseContent/>
        <CardCourseContent/>
        <CardCourseContent/>
        <CardCourseContent/>
        <CardCourseContent/>
        <CardCourseContent/>
        <CardCourseContent/>
        <CardCourseContent/>
        <CardCourseContent/>
        <CardCourseContent/>
        <CardCourseContent/>
       </div>
      </div>  
   </>
  )
}
