import { API } from '@/services/axios/api';
import { Post } from '@/types/Post';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ListCard from '../ui/ListCard';

const AnotherPost = () => {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await API.getPost(1);

        setPost(res.data[1]);
      } catch (error) {
        console.log('Error Fetching Post', error);
      }
    };

    fetchPost();
  });
  if (!post) return <div>Loading...</div>;
  return (
    <div className='flex flex-col gap-16'>
      <div>
        <p className='text-[24px] font-bold text-neutral-900'>Another Posts</p>
      </div>
      <div className='flex gap-24'>
        <ListCard post={post} isSidebar={false} isPicture={true} />
      </div>
    </div>
  );
};

export default AnotherPost;
