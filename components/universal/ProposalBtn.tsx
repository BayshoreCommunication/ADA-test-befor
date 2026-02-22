import Link from 'next/link';
import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import '../../app/globals.css';

const ProposalBtn = () => {
  return (
    <Link
      href='/contact'
      className='!py-4 md:!py-4 flex items-center gap-2 sm:gap-4 md:gap-8 px-[2rem] justify-center md:justify-start border-2 bg-primary border-primary rounded-full hover:rounded-full text-white hover:bg-transparent hover:text-primary a-button'
    >
      <span className=''>Send Us a Proposal</span>
      <span className='inline-block translate-y-[1px] ml-2 mt-2'>
        <AiOutlineRight />
      </span>
    </Link>
  );
};

export default ProposalBtn;
