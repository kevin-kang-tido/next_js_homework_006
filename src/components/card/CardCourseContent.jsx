'use client';

import { Card } from 'flowbite-react';
import '../../utilites/CSS/card.css'


export default function CardCourseContent() {
  return (
    <>
    <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://api.istad.co/media/image/53e118d6-58e3-4ec1-b40c-ef44f09c441e.jpg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white add_font">
      ជជែកគ្នាលេងអំពី Web 4.0
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>
    </>
  );
}