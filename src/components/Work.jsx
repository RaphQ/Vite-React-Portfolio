import React from 'react';
import Workitem from './Workitem';

const data = [
  {
    year: 'Year',
    title: 'Title',
    duration: 'How many years',
    details:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolorum impedit eos ullam necessitatibus? A aperiam corporis facere eos molestias eum nihil repellat saepe maxime nostrum, sint vero nesciunt tempore.'
  },
  {
    year: 'Year',
    title: 'Title',
    duration: 'How many years',
    details:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolorum impedit eos ullam necessitatibus? A aperiam corporis facere eos molestias eum nihil repellat saepe maxime nostrum, sint vero nesciunt tempore.'
  },
  {
    year: 'Year',
    title: 'Title',
    duration: 'How many years',
    details:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolorum impedit eos ullam necessitatibus? A aperiam corporis facere eos molestias eum nihil repellat saepe maxime nostrum, sint vero nesciunt tempore.'
  },
  {
    year: 'Year',
    title: 'Title',
    duration: 'How many years',
    details:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolorum impedit eos ullam necessitatibus? A aperiam corporis facere eos molestias eum nihil repellat saepe maxime nostrum, sint vero nesciunt tempore.'
  }
];
const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-2- p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
      {data.map((item, idx) => (
        <Workitem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
