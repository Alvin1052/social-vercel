import { API } from '@/services/axios/api';
import { Comment } from '@/types/Post';
import { CircleUserRound } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Devider } from '../ui/devider';

const Comments = ({ id }: { id: string }) => {
  const [comments, setComments] = useState<Comment[] | null>(null);

  useEffect(() => {
    const fetchcomment = async () => {
      const res = await API.getCommentById(id);
      setComments(res);
    };

    fetchcomment();
  }, [id]);
  if (!comments) return <div> No Comments</div>;
  console.log(comments);
  return (
    <div>
      <div className='flex flex-col'>
        {comments.slice(0, 3).map((comment, i) => (
          <div key={i} className=''>
            <div className='flex flex-col gap-12 mt-12'>
              {/* User */}
              <div className='flex gap-12'>
                <CircleUserRound size={48} />
                {/* <Image
                src={comment.author.avatarUrl}
                alt='Picture'
                width='48'
                height='48'
              /> */}
                <div className=' flex flex-col'>
                  <div className='text-[14px] font-semibold text-neutral-900'>
                    {comment.author.name}
                  </div>
                  <div className=' text-[14px] font-semibold text-neutral-600'>
                    {comment.createdAt}
                  </div>
                </div>
              </div>
              {/* content */}
              <div className='text-[14px] text-neutral-900'>
                {comment.content}
              </div>
              <Devider />
            </div>
          </div>
        ))}
      </div>

      {comments.length > 3 ? (
        <div className='mt-16 text-[#0093DD] underline-offset-1 underline'>
          See All Comments
        </div>
      ) : (
        false
      )}
    </div>
  );
};

export default Comments;
