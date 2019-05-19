import gql from 'graphql-tag';

export const RatingFragment = gql`
  fragment Rating on Rating {
    Source
    Value
  }
`;