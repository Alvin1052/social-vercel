import { handleDate } from '@/hooks/HandleDate';
import { Post } from '@/types/Post';
import { CircleUserRound, Dot } from 'lucide-react';
import React, { useEffect } from 'react';

interface ProfileProps {
  post: Post;
}
const Profile: React.FC<ProfileProps> = ({ post }) => {
  return (
    <div>
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
    </div>
  );
};

export default Profile;
