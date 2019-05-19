/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FilmByIdQuery
// ====================================================

export interface FilmByIdQuery_filmById_Ratings {
  __typename: "Rating";
  Source: string;
  Value: string;
}

export interface FilmByIdQuery_filmById {
  __typename: "FilmDetail";
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Ratings: FilmByIdQuery_filmById_Ratings[];
}

export interface FilmByIdQuery {
  filmById: FilmByIdQuery_filmById;
}

export interface FilmByIdQueryVariables {
  input: FilmByIdInput;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SearchFilmsQuery
// ====================================================

export interface SearchFilmsQuery_searchFilms_Search {
  __typename: "Film";
  Title: string;
  Year: string;
  Poster: string;
  imdbID: string;
  Type: string;
}

export interface SearchFilmsQuery_searchFilms {
  __typename: "SearchFilmsPayload";
  totalResults: string;
  Search: SearchFilmsQuery_searchFilms_Search[] | null;
}

export interface SearchFilmsQuery {
  searchFilms: SearchFilmsQuery_searchFilms;
}

export interface SearchFilmsQueryVariables {
  input: SearchFilmsInput;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FilmDetail
// ====================================================

export interface FilmDetail_Ratings {
  __typename: "Rating";
  Source: string;
  Value: string;
}

export interface FilmDetail {
  __typename: "FilmDetail";
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Ratings: FilmDetail_Ratings[];
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Film
// ====================================================

export interface Film {
  __typename: "Film";
  Title: string;
  Year: string;
  Poster: string;
  imdbID: string;
  Type: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Rating
// ====================================================

export interface Rating {
  __typename: "Rating";
  Source: string;
  Value: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface FilmByIdInput {
  apikey: string;
  i: string;
  plot: string;
}

export interface SearchFilmsInput {
  apikey: string;
  type: string;
  page: number;
  s: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
