import CardCorusepage from '@/components/card/CardCorusepage'
import CardCourseContent from '@/components/card/CardCourseContent'
import CarouselComponent from '@/components/causels/CaroselComponent'
// import "../app/globals.css";

import React from 'react'

export default function NewIT() {
  return (
    <>
    <h2 className='text-4xl text-center font-bold mt-12 text-red-500'>USEFUL COURSES</h2>
      <div className='flex flex-wrap justify-center gap-2 m-12'>
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
   </>
  )
}
