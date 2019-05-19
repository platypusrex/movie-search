import React from 'react';
import { Rating } from '../../../shared/types/generated';
import { Tag } from 'antd';
import { TagProps } from 'antd/lib/tag';
import styled from '../../../shared/styled';

const RatingTag = styled(Tag)<TagProps>`
  width: fit-content;
  margin-bottom: 10px;
`;

const tagColors: string[] = [ 'red', 'blue', 'green' ];

interface ParentProps {
  ratings: Rating[];
}

export const RatingTags: React.FC<ParentProps> = ({ ratings }) => {
  return (
    <>
      {ratings.map((rating, i) => (
        <RatingTag color={tagColors[i]}>
          {rating.Source} {rating.Value}
        </RatingTag>
      ))}
    </>
  )
};