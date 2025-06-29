import { useSearchParams } from 'next/navigation';
import { useSearch } from './SearchContext';
import { useEffect } from 'react';

const SearchView = () => {
  const { searchTerm, setSearchTerm, allData } = useSearch();
  const searchParams = useSearchParams();

  useEffect(() => {
    const initialQuery = searchParams.get('query') ?? '';
    setSearchTerm(initialQuery);
  }, [searchParams, setSearchTerm]);

  console.log(`hasil Array ${searchTerm}`, allData);
  return (
    <div>
      <div>Search Result : {searchTerm}</div>

      <div>
        {allData.map((data) => (
          <div key={data.id}> {data.id}</div>
        ))}
      </div>
    </div>
  );
};

export default SearchView;
