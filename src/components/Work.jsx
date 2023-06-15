import React from 'react';
import Workitem from './Workitem';

const data = [
  {
    year: '',
    title: 'Process Analyst – Incenter Solutions LLC Philippine Branch Office',
    duration: 'Feb 19, 2020 - Dec 21, 2022',
    details:
      'Perform quality assurance audits to ensure compliance with investor and agency, Complete preliminary checklist, To ensure all required documents are included in the loan file.'
  },
  {
    year: '',
    title: 'Marketing Assistant – Revolution Precrafted Properties Phils., Inc',
    duration: 'Nov 5, 2018 - July 4, 2019',
    details:
      'Assisting with closing processes, Preparing listing materials and posting property listings, Managing a client database and preparing reports, Coordinating showings, assisting at open houses, and obtaining feedback.'
  },
  {
    year: '',
    title: 'Property Specialist – New San Jose Builders Inc',
    duration: 'June 19, 2018 - Oct 31, 2018',
    details:
      'To find potential clients to buy a property from the developer, Responsible for managing and assisting the clients.'
  }
];
const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='py-8 text-4xl font-bold text-center text-[#001b5e]'>
        Work Experience
      </h1>
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
