
'use client';
import CardCourseContent from "@/components/card/CardCourseContent";
import { Carousel } from 'flowbite-react';

export default function UseFullCarsorelComponent() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <CardCourseContent/>
          <CardCourseContent/>
          <CardCourseContent/>
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        <CardCourseContent/>
        <CardCourseContent/>
        <CardCourseContent/>
        <CardCourseContent/>
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        <CardCourseContent/>
        <CardCourseContent/>
        <CardCourseContent/>
        </div>
      </Carousel>
    </div>
  );
}
