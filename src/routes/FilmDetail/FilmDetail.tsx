import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Empty, PageHeader, Tag } from 'antd';
import { Page } from '../../shared/components/Page';
import { FilmDetailsCard } from './components/FilmDetailsCard';
import { useFilmById } from '../../shared/hooks/useFilmById';
import styled from '../../shared/styled';

const ContentWrapper = styled.div`
  width: 100%;
`;

export const FilmDetail: React.FC<RouteComponentProps<{id: string}>> = ({ history, match: { params } }) => {
  const { film, loading, error } = useFilmById(params.id, true);

  if (error) {
    return <Empty description={error}/>
  }

  if (!film) {
    return loading ? null : <Empty description="Sorry, we couldn't locate any details on this film"/>;
  }

  return (
    <Page>
      <ContentWrapper>
        <PageHeader
          title={film.Title}
          subTitle={film.Year}
          tags={<Tag>{film.Rated}</Tag>}
          onBack={() => history.goBack()}
          style={{ marginBottom: 20 }}
        >
          {film.Plot}
        </PageHeader>

        <FilmDetailsCard film={film}/>
      </ContentWrapper>
    </Page>
  )
};