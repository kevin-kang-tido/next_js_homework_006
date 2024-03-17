'use client';

import { Card } from 'flowbite-react';
import '../../utilites/CSS/card.css'


export default function UesFullCardComponent() {
  return (
    <>
    <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://api.istad.co/media/image/665bb2ec-bd8b-4dc0-bbc0-c652aacc422b.png"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white add_font line-champ-1">
      WebEssentials ប្រកាសរើសបុគ្គលិក Software Developer និង Senior Software
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 add_font overflow-ellipsis-lines ">
      ឱកាសការងារល្អសម្រាប់ប្អូនៗ និស្សិត ឬអ្នកដែលមានបំណងចង់ស្វែងរកបទពិសោធន៍ការងារថ្មីជា Software Developers និង Senior Software Developer
      </p>
    </Card>
    </>
  );
}