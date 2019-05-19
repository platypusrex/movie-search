import React from 'react';
import { RouteComponentProps, withRouter, generatePath } from 'react-router';
import { Card, Col, Row, Empty } from 'antd';
import { Image } from '../../../shared/components/Image';
import { Film } from '../../../shared/types/generated';
import styled from '../../../shared/styled';
import { Routes } from '../../../shared/constants/routes';

const SearchResultsWrapper = styled.div`
  width: 100%;
`;

interface ParentProps {
  films: Film[];
  loading: boolean;
}

type Props =
  RouteComponentProps<{}> &
  ParentProps;

const SearchResultsComponent: React.FC<Props> = ({ films, loading, history }) => {
  const content = !films.length ? <Empty/> : (
    <Row type="flex" gutter={16} justify="center">
      {films.map((film: Film, i) => (
        <Col key={`${film.Title}${i}`} xs={24} sm={12} md={8} lg={6} style={{ marginBottom: 16 }}>
          <Card
            hoverable={true}
            cover={<Image url={film.Poster} alt={`${film.Title} poster`}/>}
            onClick={() => history.push(generatePath(Routes.FILM_DETAIL, { id: film.imdbID }))}
          >
            <Card.Meta title={film.Title} description={film.Year}/>
          </Card>
        </Col>
      ))}
    </Row>
  );

  return (
    <SearchResultsWrapper>
      <Card title="Search Results" loading={loading}>
        {content}
      </Card>
    </SearchResultsWrapper>
  );
};

export const SearchResults = withRouter(
  SearchResultsComponent
) as React.ComponentClass<ParentProps>;