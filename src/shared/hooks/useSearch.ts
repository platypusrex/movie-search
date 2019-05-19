import { useEffect, useState } from 'react';
import { Routes } from '../constants/routes';
import * as H from 'history';

interface State {
  searchValue: string;
}
const initialState: State = {
  searchValue: '',
};

export function useSearch (search: string, history: H.History) {
  const [ state, setState ] = useState<State>(initialState);

  useEffect(() => {
    const searchParams = new URLSearchParams(search);
    const searchValue = searchParams.get('title') || '';
    setState({ searchValue })
  }, [search]);

  const handleSearch = (searchValue: string) => {
    const searchParams = new URLSearchParams();
    searchParams.append('title', searchValue);
    const titleParams = searchParams.get('title') ? `?${searchParams}` : '';
    history.push(`${Routes.SEARCH}${titleParams}`)
  };

  return { ...state, setState, handleSearch };
}