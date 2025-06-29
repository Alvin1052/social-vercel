import { Post } from '@/types/Post';
import { MessageSquare, ThumbsUp } from 'lucide-react';
import React from 'react';

interface InteractiveProps {
  post: Post;
}

const Interactive: React.FC<InteractiveProps> = ({ post }) => {
  return (
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
  );
};

export default Interactive;
