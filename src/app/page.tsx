import MostLike from '@/components/Sections/MostLike';
import Recommend from '@/components/Sections/recommend';

export default function Home() {
  return (
    <div className='lg:ml-91 lg:mt-128 lg:mb-260 lg:mr-149 lg:flex'>
      <Recommend />
      <div className='border-6 lg:border-1 border-neutral-300' />
      <MostLike />
    </div>
  );
}
