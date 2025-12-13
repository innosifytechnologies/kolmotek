import React from 'react';

const Paragraph = ({ text }) => {
  return (
    <div className='mb-10 text-center text-3xl'>
      <p className='max-w-2xl mx-auto text-sm sm:text-base text-gray-500 leading-relaxed'>
        {text}
      </p>
    </div>
  );
};

export default Paragraph;