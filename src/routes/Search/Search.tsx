import React from 'react';
import { Empty } from 'antd';
import { Page } from '../../shared/components/Page';
import { SearchInput } from './components/SearchInput';
import { SearchResults } from './components/SearchResults';
import { SearchPagination } from './components/SearchPagination';
import { useSearchFilms } from '../../shared/hooks/useSearchFilms';
import { RouteComponentProps } from 'react-router';

export const Search: React.FC<RouteComponentProps<{}>> = ({ location: { search } }) => {
  const { films, totalResults, loading, error } = useSearchFilms(search);

  if (error) {
    return <Empty description={error}/>
  }

  return (
    <Page title="Movie Search">
      <SearchInput/>
      <SearchResults films={films} loading={loading}/>
      <SearchPagination totalResults={totalResults}/>
    </Page>
  );
};