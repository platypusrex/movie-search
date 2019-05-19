import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Input } from 'antd';
import { SearchProps } from 'antd/lib/input';
import { useSearch } from '../../../shared/hooks/useSearch';
import styled from '../../../shared/styled';

const Search = styled(Input.Search)<SearchProps>`
  max-width: 500px;
  margin-bottom: 50px;
`;

export const SearchInputComponent: React.FC<RouteComponentProps<{}>> = ({ history, location: { search } }) => {
  const { searchValue, setState, handleSearch } = useSearch(search, history);

  return (
    <Search
      placeholder="search here by movie title..."
      enterButton="Search"
      value={searchValue}
      size="large"
      onChange={e => setState({ searchValue: e.target.value })}
      onSearch={handleSearch}
    />
  );
};

export const SearchInput = withRouter(
  SearchInputComponent
) as React.ComponentClass<{}>;