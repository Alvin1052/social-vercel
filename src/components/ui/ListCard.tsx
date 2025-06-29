import { handleDate } from '@/hooks/HandleDate';
import { Post } from '@/types/Post';
import { CircleUserRound, Dot, MessageSquare, ThumbsUp } from 'lucide-react';
import React from 'react';

interface ListCardProps {
  post: Post;
  i?: number;
  isSidebar: boolean;
}

const ListCard: React.FC<ListCardProps> = ({ post, i, isSidebar }) => {
  return (
    <div
      key={i}
      className={`flex flex-col gap-16 ${
        isSidebar ? 'w-full' : 'lg:w-[807px]'
      }`}
    >
      {/* title, tags & content */}
      <div className='flex flex-col gap-8 w-full lg:gap-12'>
        <p className='text-[18px] font-bold text-neutral-900'>{post.title}</p>

        {/* tags */}
        <div
          className={` gap-4 lg:gap-8 flex-auto ${
            isSidebar ? 'flex' : 'hidden'
          }`}
        >
          {post.tags.map((tag, i) => (
            <div
              className='flex max-w-90 h-38 border-1 border-neutral-300 rounded-[8px] items-center justify-center  '
              key={i}
            >
              <div className='px-8 py-2 text-xs text-neutral-900 text-center'>
                {tag}
              </div>
            </div>
          ))}
        </div>
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
      <div className='border-1 border-neutral-300 rounded-full' />
    </div>
  );
};

export default ListCard;
