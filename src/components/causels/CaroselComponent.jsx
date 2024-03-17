'use client';

import { Carousel } from 'flowbite-react';
function CarouselComponent() {
  return (
<div className="relative" style={{height:'510px' }}>
  <Carousel>
    <div className="flex h-full items-center justify-center" style={{ backgroundImage: 'url("https://i.pinimg.com/564x/db/e1/5d/dbe15de105d79090c6b0920e788c2423.jpg")', backgroundSize: 'cover', backgroundPosition: 'center',opacity:'0.9'}}>
      <div className="text-center text-white" style={{opacity:'1'}}>
        <h1 className="text-[40px] md:text-6xl font-bold">Welcome to CSTAD</h1>
        <p className="text-lg md:text-xl mt-4">Explore our innovative courses and stay updated with the latest technology trends.</p>
        <button className="mt-4 px-6 py-3 m-3  text-white rounded-md text-lg font-semibold hover:bg-blue-600" style={{ backgroundColor: '#253C95'}}>Get Started</button>
      </div>
    </div>
    <div className="flex h-full items-center justify-center" style={{ backgroundImage: 'url("https://i.pinimg.com/564x/cd/75/68/cd756866a27ff0ffc3354cfb224bd9f8.jpg")', backgroundSize: 'cover', backgroundPosition: 'center',opacity:'0.9'}}>
      <div className="text-center text-white" style={{opacity:'1'}}>
        <h1 className="text-4xl md:text-6xl font-bold">Learn Anywhere, Anytime</h1>
        <p className="text-lg md:text-xl mt-4">Our courses are designed to fit your schedule. Start learning today!</p>
        <button className="mt-4 px-6 py-3  text-white rounded-md text-lg font-semibold hover:bg-blue-600" style={{ backgroundColor: '#253C95'}}>Explore Courses</button>
      </div>
    </div>
    <div className="flex h-full items-center justify-center" style={{ backgroundImage: 'url("https://i.pinimg.com/564x/92/77/a1/9277a13c34ff281af64cdcd3ce0c374f.jpg")', backgroundSize: 'cover', backgroundPosition: 'center',opacity:'0.9' }}>
      <div className="text-center text-white" style={{opacity:'1'}
      }>
        <h1 className="text-4xl md:text-6xl font-bold">Join Our Community</h1>
        <p className="text-lg md:text-xl mt-4">Connect with professionals, share insights, and grow together.</p>
        <button className="mt-4 px-6 py-3  text-white rounded-md text-lg font-semibold hover:bg-blue-600" style={{ backgroundColor: '#253C95'}}>Join Now</button>
      </div>
    </div>
  </Carousel>
</div>

  );
}

export default CarouselComponent;
