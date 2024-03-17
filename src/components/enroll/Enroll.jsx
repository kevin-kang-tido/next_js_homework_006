import React from 'react'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import Link from 'next/link';

export default function Enroll() {
  return (
    <>
  <form className="max-w-2xl mx-auto m-12 p-12 bg-white rounded-xl shadow-md">
  <div className="mb-4">
    <label htmlFor="fullName" className="block mb-2 text-sm font-semibold text-gray-600">Full Name</label>
    <input id="fullName" type="text" placeholder="John Doe" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
  </div>
  <div className="mb-4">
    <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-600">Your Email</label>
    <input id="email" type="email" placeholder="name@flowbite.com" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
  </div>
  <div className="mb-4">
    <label htmlFor="password" className="block mb-2 text-sm font-semibold text-gray-600">Password</label>
    <input id="password" type="password" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
  </div>
  <div className="mb-4">
    <label htmlFor="confirmPassword" className="block mb-2 text-sm font-semibold text-gray-600">Confirm Password</label>
    <input id="confirmPassword" type="password" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
  </div>
  <div className="flex items-center mb-4">
    <input id="agree" type="checkbox" className="mr-2" />
    <label htmlFor="agree" className="text-sm text-gray-700">I agree to the <a href="#" className="text-blue-600 hover:underline">terms and conditions</a></label>
  </div>
  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-300">Enroll</button>
</form>

    </>
  )
}
