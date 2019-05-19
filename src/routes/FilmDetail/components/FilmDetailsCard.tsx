import React from 'react';
import { Card, Col, Row } from 'antd';
import { Image } from '../../../shared/components/Image';
import { Stat } from '../../../shared/components/Stat';
import { FilmDetail } from '../../../shared/types/generated';
import { Anchor } from '../../../shared/components/Anchor';
import { RatingTags } from './RatingTags';

interface ParentProps {
  film: FilmDetail;
}

export const FilmDetailsCard: React.FC<ParentProps> = ({ film }) => (
  <Card
    title="Film Stats"
    extra={<Anchor href={film.Website}>view website</Anchor>}
  >
    <Row gutter={24}>
      <Col sm={24} md={6} style={{ marginBottom: 20 }}>
        <Image url={film.Poster} alt={`${film.Title} poster`} height={320}/>
      </Col>

      <Col sm={24} md={9}>
        <Stat label="Director" value={film.Director}/>
        <Stat label="Writer" value={film.Writer}/>
        <Stat label="Actors" value={film.Actors}/>
        <Stat label="Genre" value={film.Genre}/>
      </Col>

      <Col sm={24} md={9}>
        <Stat label="Production" value={film.Production}/>
        <Stat label="Box Office" value={film.BoxOffice}/>
        <Stat label="Actors" value={film.Awards}/>
        <Stat label="Ratings" value={<RatingTags ratings={film.Ratings}/>}/>
      </Col>
    </Row>
  </Card>
);