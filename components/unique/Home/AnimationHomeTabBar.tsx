'use client';
import React, { useState } from 'react';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react';
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/solid';
import Image from 'next/image';
import Reveal from '@/components/motion/Reveal';

export function AnimationHomeTabBar() {
  const data = [
    {
      label: 'Growth Marketing',
      value: 'growth_marketing',
      link: '/assets/growth-marketing.svg',
      img: '/assets/service/growth-marketing.svg',
      activeLink: '/assets/growth-marketing.svg',
      desc: `As business competition increases year after year, a strong online presence along with growth marketing and strategic planning becomes essential to outpace competitors. Our Growth Marketing services can turbocharge your brand visibility, engagement, and growth. We're a team of experts in SEO, Paid Ads, Social Media, Email Marketing, Content that actually makes sense, Digital PR (yep, we know people), smart Automation, and even the cool world of Influencers. All these fancy terms aside, what we really do is make YOUR Business bigger and better in today’s digital age. In short, we’re here to get your brand where you want it to be. No fluff, just results.`,
    },
    {
      label: 'Software Solution & Development',
      value: 'software_solution_development',
      img: '/assets/service/software-development.svg',
      link: '/assets/software-solution.svg',
      activeLink: '/assets/software-solution.svg',
      desc: `Meet your tech team at Bayshore Communication. When it comes to Web or Software Solutions and Development, we’re all about turning your ideas into reality. Whether you want to make Android and IOS Apps, build eye-catching websites, create seamless ecommerce experiences, or even develop cutting-edge SaaS solutions, we have the skills and experience to do it. We ensure your project stays current, provide visually stunning designs, and conduct thorough testing to guarantee flawless performance. We don’t just develop, we excel in innovation. Join us on your innovation journey with Bayshore.`,
    },
    {
      label: 'Offshore Office',
      value: 'offshore-office',
      img: '/assets/service/offshore-office-newone.svg',
      link: '/assets/offshore-office.svg',
      activeLink: '/assets/offshore-office.svg',
      desc: ` Bayshore’s Offshore Office supports are all about helping you to
      expand your business with your own efficient expert team, all
      staying cost-effective. We offer dedicated teams for various tasks
      like development, marketing, bookkeeping, finance, design,
      customer service, virtual assistance, project management, and CRM
      support. Our goal? Boost your efficiency and save you money. With
      our help, you can expand your operations without the usual high
      costs, keeping you ahead of the competition. Say hello to a more
      streamlined, cost effective way of working with Bayshore
      Communication.`,
    },
    {
      label: 'Content Development',
      value: 'content-development',
      img: '/assets/service/content-development.svg',
      link: '/assets/content-development.svg',
      activeLink: '/assets/content-development.svg',
      desc: `Enhancing brand visibility relies on audience engagement, and the
      key to achieving that is creative content. For that, Bayshore
      Communication is your ultimate creative content powerhouse. We
      offer diverse content development services, such as writing
      engaging articles, designing eye-catching social media posts, and
      making attention-grabbing videos. We bring your products to life
      with outstanding 3D visualization and captivating TVC/Ad creative
      ideas. Also, we are your behind-the-scenes experts, helping you
      set the stage for memorable video productions. We turn your vision
      into irresistible content that leaves lasting impressions.`,
    },
  ];

  return (
    <Tabs value='growth_marketing'>
      <Reveal>
        <TabsHeader
          className='p-2 rounded-[45px] bg-[#F4F4F4] md:p-2 flex justify-center items-center'
          indicatorProps={{
            className: 'bg-[#FAF0E4] shadow-none !text-gray-900 rounded-[45px]',
          }}
        >
          {data.map(({ label, value, link, activeLink }) => (
            <Tab key={value} value={value} className='md:p-16 p-8 !text-center'>
              <div className='flex items-center gap-x-10 gap-y-2 md:flex-col md:justify-center 2xl:flex-row'>
                <Image
                  src={activeLink}
                  alt='svg-logo'
                  width={100}
                  height={100}
                  className={`md:h-[26px] md:w-[26px] h-[16px] w-[16px] `}
                />
                <p className='py-2 sm:text-[1.6rem] text-[1rem] text-gray-600 hidden md:block '>
                  {label}
                </p>
              </div>
            </Tab>
          ))}
        </TabsHeader>
      </Reveal>
      <Reveal>
        <TabsBody>
          {data.map(({ label, desc, value, img }) => (
            <TabPanel
              key={value}
              value={value}
              className='border-2 mt-10 rounded-[45px]'
            >
              <div className='grid grid-cols-1 gap-8 p-6 md:grid-cols-2'>
                <div className='rounded-[10px] px-4 py-16 md:p-16 flex flex-col justify-center'>
                  <h2 className='leading-snug text-center heading-secondary sm:text-left'>
                    {label}
                  </h2>
                  <p className='text-base'>{desc}</p>
                </div>
                <div className='row-start-1 p-10 md:col-start-2'>
                  <Image
                    src={img}
                    alt='tab-1'
                    width={300}
                    height={300}
                    className='w-full h-full'
                  />
                </div>
              </div>
            </TabPanel>
          ))}
        </TabsBody>
      </Reveal>
    </Tabs>
  );
}
