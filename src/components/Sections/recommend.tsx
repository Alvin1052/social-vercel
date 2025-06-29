'use client';

import { API } from '@/services/axios/api';
import { Page } from '@/types/Post';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import ListCard from '../ui/ListCard';

type PageNav = 'next' | 'prev';
const Recommend = () => {
  const [post, setPost] = useState<Page | null>(null);

  const [numPage, setNumPage] = useState<number>(1);

  const handlePage = (page: number) => {
    setNumPage(page);
  };

  const handlePageNav = (handle: PageNav) => {
    switch (handle) {
      case 'next':
        if (numPage < (post?.lastPage ?? 1)) {
          return setNumPage((prev) => prev + 1);
        }
      case 'prev':
        if (numPage > 1) {
          return setNumPage((prev) => prev - 1);
        }
        return setNumPage(numPage);
    }
  };
  const pages: number[] = Array.from(
    { length: post?.lastPage ?? 0 },
    (_, i) => i + 1
  );

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await API.getPost(numPage);

        setPost(res);
      } catch (error) {
        console.log('Error Fetching Post', error);
      }
    };

    fetchPost();
  }, [numPage]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className='text-neutral-800 px-16  flex flex-col gap-16 w-full mt-64 lg:mt-0 py-24 lg:py-0'>
      <b className='text-[28px] font-bold'>Recommended For You</b>
      {post.data.map((post) => (
        <div key={post.id} className='flex flex-col gap-12 w-full'>
          <ListCard post={post} isSidebar={false} />
        </div>
      ))}

      {/* Page Handle */}
      <div className='flex items-center justify-center'>
        <button className='flex gap-6 ' onClick={() => handlePageNav('prev')}>
          <ChevronLeft />
          <p>Previous</p>
        </button>

        <div className='flex gap-2 mx-6'>
          {pages.slice(0, 3).map((page) => (
            <button
              key={page}
              onClick={() => handlePage(page)}
              className={`size-40 rounded-full text-center ${
                numPage === page
                  ? 'bg-neutral-800 text-white'
                  : 'bg-neutral-200 text-black'
              }`}
            >
              {page}
            </button>
          ))}
          <button
            className={`size-40 rounded-full bg-neutral-100 text-black cursor-default ${
              pages.length > 3 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            ...
          </button>
        </div>
        <button className='flex gap-6' onClick={() => handlePageNav('next')}>
          <p>Next</p>
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Recommend;
