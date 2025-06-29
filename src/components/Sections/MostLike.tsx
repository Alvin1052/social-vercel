'use client';

import { API } from '@/services/axios/api';
import { Page } from '@/types/Post';
import { useEffect, useState } from 'react';
import ListCard from '../ui/ListCard';

const MostLike = () => {
  const [post, setPost] = useState<Page | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await API.getMostLike();

        setPost(res);
      } catch (error) {
        console.log('Error Fetching Post', error);
      }
    };

    fetchPost();
  }, []);

  if (!post) return <div>Loading...</div>;

  return (
    <div className='text-neutral-800 px-16 flex flex-col gap-16 w-full mt-24 lg:mt-0'>
      <b className='text-[28px] font-bold'>Most Liked</b>
      {post.data.slice(0, 3).map((post) => (
        <div key={post.id} className='flex flex-col gap-12 w-full'>
          <ListCard post={post} isSidebar={true} isPicture={false} />
        </div>
      ))}
    </div>
  );
};

export default MostLike;
