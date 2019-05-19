import gql from 'graphql-tag';
import { FilmDetailFragment } from '../fragments/filmDetailFragment';

export const filmByIdQuery = gql`
  query FilmByIdQuery ($input: FilmByIdInput!) {
    filmById (input: $input) @rest(type: "FilmDetail", path: "/?{args.input}") {
      ...FilmDetail
    }
  }
  ${FilmDetailFragment}
`;