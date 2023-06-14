'use client';
import { filterType } from '@/types/filter-types';
import { PriorityTypes } from '@/types/priority-type';
import { setPriority } from 'os';
import { ReactNode, createContext, useState } from 'react';

export const FilterContext = createContext({
  search: '',
  page: 0,
  type: filterType.ALL,
  priority: PriorityTypes.NEWS,
  setPriority: (value: PriorityTypes) => {},
  setSearch: (value: string) => {},
  setPage: (value: number) => {},
  setType: (value: filterType) => {}
});

interface ProviderProps {
  children: ReactNode;
}

export function FilterContextProvider({ children }: ProviderProps) {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const [type, setType] = useState(filterType.ALL);
  const [priority, setPriority] = useState(PriorityTypes.POPULARITY);
  return (
    <FilterContext.Provider
      value={{
        search,
        page,
        type,
        setSearch,
        setPage,
        setType,
        priority,
        setPriority
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
