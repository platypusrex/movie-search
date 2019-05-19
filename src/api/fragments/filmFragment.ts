import gql from 'graphql-tag';

export const FilmFragment = gql`
  fragment Film on Film {
    Title
    Year
    Poster
    imdbID
    Type
  }
`;