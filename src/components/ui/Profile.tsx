import { handleDate } from '@/hooks/HandleDate';
import { API } from '@/services/axios/api';
import { Post } from '@/types/Post';
import { Dot, UserCircle2, UserCircleIcon } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface ProfileProps {
  post: Post;
}

interface user {
  id: number;
  email: string;
  headline: string;
  avatarUrl: string;
}
const Profile: React.FC<ProfileProps> = ({ post }) => {
  const [user, setUser] = useState<user | null>(null);

  useEffect(() => {
    const fetchuser = async () => {
      try {
        const res = await API.getUser(post.author.id);
        setUser(res.data);
      } catch (error) {
        console.error('Error Fething Data', error);
      }
    };
    fetchuser();
  }, [post.author.id]);

  if (!user)
    return (
      <div className='flex gap-8 lg:gap-12 items-center'>
        <UserCircleIcon />
        <div> {post.author.name}</div>
      </div>
    );
  return (
    <div>
      <div className='flex items-center '>
        <div className='flex gap-8 lg:gap-12 items-center'>
          <Image src={user.avatarUrl} alt='picture' width={40} height={40} />
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
