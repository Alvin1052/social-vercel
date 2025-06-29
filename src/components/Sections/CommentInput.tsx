import React from 'react';

const CommentInput = () => {
  return (
    <div className='flex flex-col gap-12'>
      <div className='text-neutral-900 text-[24px] font-bold'>Comment</div>
      <div> Username</div>
      <div className='flex flex-col gap-4'>
        <p className='text-[14px] font-semibold text-neutral-950'>
          Give Your Comments
        </p>

        <textarea
          name='comment'
          id='comment'
          placeholder='Enter your comment'
          className='w-full h-140 border-1 border-neutral-300 rounded-[12px] px-16 py-8'
        />
      </div>
      <div className='flex justify-end-safe'>
        <button className='w-204 h-48 bg-[#0093DD] rounded-full '>
          <p className='text-white'>Send</p>
        </button>
      </div>
    </div>
  );
};

export default CommentInput;
