import { useEffect, useState } from 'react';
import * as H from 'history';
import { Routes } from '../constants/routes';

interface State {
  currentPage: number;
}
const initialState = {
  currentPage: 1,
};

export function usePagination (location: H.Location, history: H.History) {
  const [ state, setState ] = useState<State>(initialState);

  const searchParams = new URLSearchParams(location.search);
  const page = searchParams.get('page');
  const currentPage = page ? parseInt(page, 10) : 1;

  useEffect(() => {
    setState({ currentPage });
  }, [location.search, currentPage]);

  const setCurrentPage = (page: number, route: Routes) => {
    const pageNumber = page > 1 ? page.toString() : '';
    searchParams.set('page', pageNumber);
    history.push(`${route}?${searchParams}`);
  };

  return { ...state, setCurrentPage };
}