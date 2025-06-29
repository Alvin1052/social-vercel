import { useSearchParams } from 'next/navigation';
import { useSearch } from './SearchContext';
import { useEffect } from 'react';
import ListCard from '@/components/ui/ListCard';
import { Devider } from '@/components/ui/devider';
import NotFoundPage from '@/components/pages/Searchpage/NotFoundPage';

const SearchView = () => {
  const { searchTerm, setSearchTerm, allData } = useSearch();
  const searchParams = useSearchParams();

  useEffect(() => {
    const initialQuery = searchParams.get('query') ?? '';
    setSearchTerm(initialQuery);
  }, [searchParams, setSearchTerm]);

  console.log(`hasil Array ${searchTerm}`, allData);
  return allData.length > 0 ? (
    <div className='lg:ml-91 lg:mt-128 lg:mb-260 lg:mr-149 lg:flex'>
      <div className='text-neutral-800 px-16  flex flex-col gap-16 w-full mt-64 lg:mt-0 py-24 lg:py-0 '>
        <b className='text-[28px] font-bold'>Search Result : {searchTerm}</b>
        <div>
          {allData.map((post) => (
            <div
              key={post.id}
              className='flex flex-col gap-12 w-[807px] mt-12 w-'
            >
              <ListCard post={post} isSidebar={false} isPicture={true} />
              <Devider />
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <NotFoundPage />
  );
};

export default SearchView;
