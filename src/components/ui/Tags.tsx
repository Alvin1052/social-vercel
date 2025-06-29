import { Post } from '@/types/Post';
import React from 'react';

interface TagsProps {
  post: Post;
  isSidebar: boolean;
  i?: number;
}
const Tags: React.FC<TagsProps> = ({ post, isSidebar }) => {
  return (
    <div
      className={` gap-4 lg:gap-8 flex-auto ${isSidebar ? 'hidden' : 'flex'}`}
    >
      {post.tags.map((tag, i) => (
        <div
          className='flex  h-38 border-1 border-neutral-300 rounded-[8px] items-center justify-center  '
          key={i}
        >
          <div className='px-8 py-2 text-xs text-neutral-900 text-center'>
            {tag}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tags;
