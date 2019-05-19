import gql from 'graphql-tag';
import { FilmFragment } from '../fragments/filmFragment';

export const searchFilmsQuery = gql`
  query SearchFilmsQuery ($input: SearchFilmsInput!) {
    searchFilms (input: $input) @rest(type: "SearchFilmsPayload", path: "/?{args.input}") {
      totalResults
      Search @type(name: "Film"){
        ...Film
      }
    }
  }
  ${FilmFragment}
`;