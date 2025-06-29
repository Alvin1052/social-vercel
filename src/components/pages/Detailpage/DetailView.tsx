'use client';

import AnotherPost from '@/components/Sections/AnotherPost';
import CommentInput from '@/components/Sections/CommentInput';
import Comments from '@/components/Sections/Comments';
import { Devider } from '@/components/ui/devider';
import Tags from '@/components/ui/Tags';
import { API } from '@/services/axios/api';
import { Post } from '@/types/Post';
import Image from 'next/image';
import { useEffect, useState } from 'react';
const DetailView = ({ id }: { id: string }) => {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    try {
      const fetchpost = async () => {
        const res = await API.getPostById(id);
        setPost(res);
      };

      fetchpost();
    } catch (error) {
      console.log('Fetch Data Error', error);
    }
  }, [id]);

  if (!post) return <div>Loading...</div>;
  return (
    <div className='mt-128 mx-320 my-303'>
      <div className='flex flex-col gap-16'>
        <div className='text-[36px] font-bold'>{post.title}</div>
        <Tags post={post} isSidebar={false} />
        <div>profile</div>
        <Devider />
        <div> interactive</div>
        <Devider />

        <Image src={post.imageUrl} alt='' width='800' height='607' />

        <div>{post.content}</div>
        <Devider />
        <CommentInput />
        <Devider />
        <Comments id={id} />
        <Devider />
        <AnotherPost />
      </div>
    </div>
  );
};

export default DetailView;
