// import React from 'react'
// import testimonialData from '../assets/testimonialData'
// import Slider from "react-slick"
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Testimonial = () => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 5,
//         slidesToScroll: 3
//       };
//   return (
//     <div className='w-3/4 m-auto'>
//         <div className='my-20'>
//             <Slider {...settings}>
//                 {
//                     testimonialData.map((d) =>
//                     <div className='bg-white h-[200px] text-black rounded-xl border-2 gap-3'>
//                         <div className='flex flex-col justify-center items-center gap-4 p-4'>
//                             <p className='text-xl font-semibold'>{d.name}</p>
//                             <p>{d.review}</p>
//                         </div>
//                     </div> )
//                 }
//             </Slider>
//         </div>
        
//     </div>
//   )
// }

// export default Testimonial








import React from 'react';
import testimonialData from '../assets/testimonialData';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default slides to show
    slidesToScroll: 1, // Default slides to scroll
    responsive: [
      {
        breakpoint: 1024, // For large screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For medium screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='w-full sm:w-3/4 m-auto px-4'>
      <div className='my-10'>
        <Slider {...settings}>
          {testimonialData.map((d, index) => (
            <div
              key={index}
              className='bg-white  text-black h-60 mb-10 rounded-xl border-2 gap-3 shadow-md'
            >
              <div className='flex flex-col justify-center items-center gap-4 p-6'>
                <p className='text-lg sm:text-xl font-semibold'>{d.name}</p>
                <p className='text-sm sm:text-base text-gray-700'>{d.review}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
