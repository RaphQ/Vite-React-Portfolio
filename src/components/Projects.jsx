import React from 'react';
import Projectitem from './Projectitem';

import netflixImg from '../assets/netflixImg.jpg';

const Projects = () => {
  return (
    <div id='project' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>
        Projects
      </h1>
      <p className='text-center py-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        exercitationem aliquam beatae blanditiis ipsum, commodi aperiam, autem,
        eligendi vel veniam tenetur! Dolor necessitatibus molestias quibusdam
        doloribus commodi eaque dolorem dolore.
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <Projectitem img={netflixImg} title='Netflix App' />
        <Projectitem img={netflixImg} title='Netflix App' />
        <Projectitem img={netflixImg} title='Netflix App' />
        <Projectitem img={netflixImg} title='Netflix App' />
      </div>
    </div>
  );
};

export default Projects;
