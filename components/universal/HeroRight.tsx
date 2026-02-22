import Image from 'next/image';
import React from 'react';
import Count from '../Count';

const cardData = [
  {
    image: '/assets/funnel.svg',
    title: 'Business Automation Helps Increasing',
    value: 1500,
    end: '%',
    bottomTitle: 'Leads to Our Clients Business',
  },

  {
    image: '/assets/funnel.svg',
    title: 'Optimizing Clients Website UI & UX ',
    value: 600,
    end: '%',
    bottomTitle: 'Sales Increase',
  },

  {
    image: '/assets/funnel.svg',
    title: 'Our Retargeting Ads Able to Generates',
    value: 4,
    end: 'x',
    bottomTitle: 'Time Better Results',
  },

  {
    image: '/assets/funnel.svg',
    title: 'All of Our Clients Got',
    value: 5,
    end: 'x',
    bottomTitle: 'Of Minimum ROI',
  },
];

const HeroRight = () => {
  return (
    <div className='row-start-1 md:col-start-2 md:pl-[4rem] '>
      <div className='flex flex-col gap-4 sm:px-[10vw] md:px-0 '>
        {cardData.map((data) => (
          <div
            key={data.title}
            className='bg-[#18112E] grid grid-cols-[20%_80%] items-center rounded-[45px] py-6 px-5 md:px-[2rem] w-full'
          >
            <div>
              <Image
                src={data.image}
                alt='doller'
                width={200}
                height={100}
                className='w-[5rem] md:w-[6.5rem] h-auto'
              />
            </div>
            <div className='flex flex-col '>
              <p className='text-[12px] md:text-small !text-[#fff] !text-start'>
                {data.title}
              </p>
              <p className='text-white font-bold text-[12px] sm:text-[15px] md:text-[16px] lg:text-[18px] my-[2px]'>
                <Count num={data.value} duration={3} />
                {data.end}
              </p>
              <p className='text-[12px] md:text-small !text-[#fff] !text-start'>
                {data.bottomTitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroRight;
