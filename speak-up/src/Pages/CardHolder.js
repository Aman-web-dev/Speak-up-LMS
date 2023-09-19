import React from 'react';
import Card from '../components/Card';

function CardHolder() {
  const french ="https://img.freepik.com/free-photo/close-up-portrait-young-attractive-woman-holding-her-notebook-isolated-rosy_176532-9669.jpg?w=1480&t=st=1693374829~exp=1693375429~hmac=16bad3622bbb1c1ad9863ee1290119187de816cf0d8bff1cf65ceea61379dd2a"

  const english ="https://img.freepik.com/free-photo/young-woman-holding-american-flag-independence-day_23-2148157169.jpg?w=1480&t=st=1693374599~exp=1693375199~hmac=e67f70bc43616427ab4496b298a854faf79722f34322f8ea200e11a5613e2179"

  const German="https://img.freepik.com/free-photo/fascinating-girl-knitted-red-sweater-playfully-smiling-bridge-sunny-day_197531-6799.jpg?w=1480&t=st=1693374902~exp=1693375502~hmac=9d2a9bb425dfdb4039c5ef0873a5508611fe48d482bc363602a31b9de94d09c2"
  
  const Japanese="https://img.freepik.com/free-photo/cheerful-beautiful-young-asian-woman-feeling-happy-smiling-camera-while-traveling-chinatown-beijing-china_7861-1345.jpg?w=1380&t=st=1693375368~exp=1693375968~hmac=a7b4c55e3827a15267a731d9a26fda109ff0dbe11ce4e8502a9aa25acec2f3d4"

  const Latina ="https://img.freepik.com/free-photo/smiling-romantic-asian-girl-contemplating-nature-around_1262-19410.jpg?w=1480&t=st=1693375056~exp=1693375656~hmac=484b530101fd8f5a6cdd908ec35342fc94a6fa0077401d005b0b1c64b1871088"
  
  const Korean="https://img.freepik.com/free-photo/image-modern-asian-woman-standing-park-smiling_197531-22520.jpg?w=1480&t=st=1693375202~exp=1693375802~hmac=3451ffbea0b7bf2e367f610063f5a69f842a85eae87950fec091d1e877bbd7db"
  
  const Spanish="https://img.freepik.com/free-photo/front-view-pretty-young-woman-talking-phone_23-2148679352.jpg?w=1480&t=st=1693375584~exp=1693376184~hmac=b7b2acf0ba5d1ab14e01dfa9c2abc58ad2d812d41dd59d672eadff705b821e2c"

  return (
    <div className='w-[90vw] my-5 flex flex-col m-auto flex-center p-2 bg-white'> 
    
<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Language Courses</h1>
<p className="mb-6 text-lg font-normal text-black lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Welcome to our Speak-Up based in Delhi, India! We specialize in offering a range of international language courses that cater to diverse learning needs. Whether you're a college student looking to enhance your language skills or an aspiring web developer seeking to broaden your horizons, our courses provide a comprehensive and interactive learning experience.</p>
<a href="#" className="inline-flex  my-2 m-auto  items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
    Learn more
    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
</a>

      <div className=' w-[80vw]  grid md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-3   m-auto'>
        <Card price="5,000" rating="4" pic={french} course="French Language"/>
        <Card price="9,000" rating="5" pic={english} course="English Language"/>
        <Card price="4,000" rating="3.5" pic={German} course="German Language"/>
        <Card price="12,000" rating="5" pic={Korean} course="Korean Language"/>
        <Card price="10,000" rating="4.5" pic={Japanese} course="Japanese Language"/>
        <Card price="15,000" rating="5" pic={Spanish} course="Spanish Language"/>
      </div>
    </div>
  );
}

export default CardHolder;
