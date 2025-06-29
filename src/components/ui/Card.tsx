import { UserCircle2Icon } from 'lucide-react';
import React from 'react';
import ListCard from './ListCard';

const Card = (post) => {
  return (
    <div className='flex gap-24 items-center justify-between'>
      <UserCircle2Icon width={340} height={258} />
      <ListCard {post}/>
    </div>
  );
};

export default Card;
