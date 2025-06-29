'use client';
import { API } from '@/services/axios/api';
import { Post } from '@/types/Post';
import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { createContext } from 'react';

interface SearchProviderProps {
  children: ReactNode;
}

interface SearchContextProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  allData: Post[];
}

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [allData, setAllData] = useState<Post[]>([]);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const res = await API.getPostByQuery(searchTerm);
        setAllData(res.data);
      } catch (err) {
        console.error('Error Fething Data', err);
      }
    };
    fetchAllData();
  }, [searchTerm]);

  const contextValue = {
    searchTerm,
    setSearchTerm,
    allData,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};
const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const useSearch = () => {
  const context = useContext(SearchContext);

  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};
