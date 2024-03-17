import CardCorusepage from '@/components/card/CardCorusepage'
import CardCourseContent from '@/components/card/CardCourseContent'
import CarouselComponent from '@/components/causels/CaroselComponent'
import FooterComponent from "@/components/footer/FooterComponent";
import UseFullCaroselComponents from '@/components/causels/UseFullCaroselComponent'
import "../app/globals.css";

import React from 'react'

export default function Homepage() {
  return (
    <div>
      <CarouselComponent/>
       <h2 className='text-4xl text-center m-12 font-bold'>Course</h2>
       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 item-center justify-center'>
        <CardCorusepage/>
        <CardCorusepage/>
        <CardCorusepage/>
        <CardCorusepage/>
        <CardCorusepage/>
        <CardCorusepage/>
       </div>
       <h2 className='text-4xl text-center font-bold'>USSFULL COURSES</h2>
        {/* <UseFullCaroselComponents/> */}
     <div className="container mx-auto p-14"> 
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 item-center justify-center'>
        <CardCourseContent/>
        <CardCourseContent/>
        <CardCourseContent/>
        <CardCourseContent/>
       </div>
      </div>  
    </div>
  )
}
