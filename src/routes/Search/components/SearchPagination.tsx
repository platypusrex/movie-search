import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Pagination } from 'antd';
import { usePagination } from '../../../shared/hooks/usePagination';
import { Routes } from '../../../shared/constants/routes';
import styled from '../../../shared/styled';

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
`;

interface ParentProps {
  totalResults: number;
}

type Props =
  RouteComponentProps<{}> &
  ParentProps;

export const SearchPaginationComponent: React.FC<Props> = ({ history, location, totalResults }) => {
  const { currentPage, setCurrentPage } = usePagination(location, history);

  return (
    <PaginationWrapper>
      <Pagination
        total={totalResults}
        current={currentPage}
        onChange={(page) => setCurrentPage(page, Routes.SEARCH)}
      />
    </PaginationWrapper>
  )
};

export const SearchPagination = withRouter(
  SearchPaginationComponent
) as React.ComponentClass<ParentProps>;

