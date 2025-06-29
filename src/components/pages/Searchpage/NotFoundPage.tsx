import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
  return (
    <div className='w-full h-screen '>
      <div className='absolute top-1/5 left-0 right-0 flex flex-col gap-24 justify-center items-center'>
        <Image src='/blank-search.svg' alt='blank' width={118} height={135} />
        <div className='text-center flex flex-col gap-4'>
          <p className='font-semibold'>No results found</p>
          <p>Try using different keywords</p>
        </div>
        <Link
          href={'/'}
          className='w-200 h-44 bg-[#0093DD] rounded-full flex justify-center items-center text-white'
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
