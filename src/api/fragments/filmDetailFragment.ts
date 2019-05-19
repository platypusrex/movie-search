import gql from 'graphql-tag';
import { RatingFragment } from './ratingFragment';

export const FilmDetailFragment = gql`
  fragment FilmDetail on FilmDetail {
    Title
    Year
    Rated
    Released
    Runtime
    Genre
    Director
    Writer
    Actors
    Plot
    Language
    Country
    Awards
    Poster
    Metascore
    imdbRating
    imdbVotes
    imdbID
    Type
    DVD
    BoxOffice
    Production
    Website
    Ratings @type(name: "Rating") {
      ...Rating
    }
  }
  ${RatingFragment}
`;