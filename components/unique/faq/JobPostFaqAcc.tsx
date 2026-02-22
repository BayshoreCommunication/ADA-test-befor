'use client';

import { Fragment, useState } from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';
import parser from 'html-react-parser';

let faq: {
  heading: String;
  description: String;
}[];

faq = [
  {
    heading: `What services does your company offer?`,
    description: `We provide a range of services, including digital marketing solutions such as SEO, SEM, social media marketing, content creation, and email marketing. Additionally, we specialize in software development, offering custom web and mobile application development, software consulting, and UI/UX design.`,
  },
];

const AccordionCus = ({ title }: any) => {
  return (
    <div className='mt-12 border-[0.5px] border-[#AAAAAA] rounded-[10px] '>
      <h4 className='heading-four bg-[#F5F5F5] rounded-[10px] p-4 flex items-center gap-2 px-8'>
        {title}
      </h4>
      <Example arr={faq} />
    </div>
  );
};

export default AccordionCus;

function Icon({ id, open }: any) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={`${
        id === open ? 'rotate-180' : ''
      } h-5 w-5 transition-transform`}
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth={2}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
    </svg>
  );
}

export function Example({ arr }: any) {
  const [open, setOpen] = useState(0);

  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Fragment>
      {arr.map((el: any, i: number) => (
        <Accordion
          key={el}
          open={open === i + 1}
          icon={<Icon id={1 + i} open={open} />}
        >
          <div className='px-8'>
            <AccordionHeader
              className='border-b-0'
              onClick={() => handleOpen(i + 1)}
            >
              <div className='text-[16px] md:text-[18px]  font-normal'>
                {el.heading}
              </div>
            </AccordionHeader>
          </div>
          <div className=''>
            <AccordionBody>
              <div className=' bg-[#F5F5F5] border-t-[0.5px] border-[#AAAAAA] rounded-b-[10px]'>
                <div className='px-8 !py-8 text-base'>
                  {parser(el.description)}
                </div>
              </div>
            </AccordionBody>
          </div>
        </Accordion>
      ))}
    </Fragment>
  );
}
