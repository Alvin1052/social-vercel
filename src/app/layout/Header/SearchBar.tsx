'use client';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

interface SearchBarProps {
  className?: string;
}
const SearchBar: React.FC<SearchBarProps> = () => {
  const router = useRouter();

  const [keyword, setKeyword] = useState<string>('');

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && keyword) {
      if (keyword !== '') {
        router.push(`/posts/search?query=${keyword}`);
        console.log('belajar');
      }
    }
  };

  return (
    <div className='border-1 bg-white border-neutral-300 rounded-full w-377 h-48 lg:flex items-center gap-8 px-16 py-12 hidden'>
      <Search color='#717680' />
      <input
        placeholder='Search'
        value={keyword}
        onChange={handleChangeInput}
        onKeyDown={handleKeyDown}
        className='bg-transparent outline-none text-neutral-300'
      />
    </div>
  );
};

export default SearchBar;
