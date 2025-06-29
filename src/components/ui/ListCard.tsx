import { handleDate } from '@/hooks/HandleDate';
import { Post } from '@/types/Post';
import { CircleUserRound, Dot, MessageSquare, ThumbsUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Tags from './Tags';
import { Devider } from './devider';

interface ListCardProps {
  post: Post;
  i?: number;
  isSidebar: boolean;
  isPicture: boolean;
}

const ListCard: React.FC<ListCardProps> = ({
  post,
  i,
  isSidebar,
  isPicture = false,
}) => {
  return (
    <Link
      href={`/posts/${post.id}`}
      key={i}
      className={`flex gap-24 ${isSidebar ? 'w-full' : 'lg:w-[807px]'}`}
    >
      <Image
        src={post.imageUrl}
        alt='image'
        width={340}
        height={258}
        className={`w-[340px] h-[258px] hidden ${
          isPicture ? 'lg:block' : 'hidden'
        }`}
      />
      <div className={`flex flex-col gap-16 `}>
        {/* title, tags & content */}
        <div className='flex flex-col gap-8 w-full lg:gap-12'>
          <p className='text-[18px] font-bold text-neutral-900'>{post.title}</p>

          {/* tags */}
          <Tags post={post} isSidebar={isSidebar} />

          {/* context */}
          <p className='text-xs text-neutral-900 text-ellipsis line-clamp-2'>
            {post.content}
          </p>
        </div>
        {/* author name */}
        <div className='flex items-center '>
          <div className='flex gap-8 lg:gap-12 items-center'>
            <CircleUserRound className='size-30' />
            <div> {post.author.name}</div>
          </div>
          <Dot />
          <div className='text-xs text-neutral-600'>
            {handleDate(post.createdAt)}
          </div>
        </div>
        {/* interactive  */}
        <div className=' flex gap-12'>
          <div className='flex gap-6'>
            <ThumbsUp />
            <div>{post.likes}</div>
          </div>
          <div className='flex gap-6'>
            <MessageSquare />
            <div>{post.comments}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListCard;
