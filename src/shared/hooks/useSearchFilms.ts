import { QueryHookResult, useQuery } from 'react-apollo-hooks';
import { searchFilmsQuery } from '../../api/film/searchFilmsQuery';
import { SearchFilmsQuery, SearchFilmsQueryVariables, Film } from '../types/generated';
import { apiKey } from '../constants/api';
import { Omit } from '../types/shared';

type SearchFilmsQueryResult = QueryHookResult<SearchFilmsQuery, SearchFilmsQueryVariables>;
type UseSearchFilmsQueryResult = Omit<SearchFilmsQueryResult, 'data'> & {
  totalResults: number;
  films: Film[];
}

export function useSearchFilms (search: string): UseSearchFilmsQueryResult {
  const searchParams = new URLSearchParams(search);
  const filmTitle = searchParams.get('title') || '';
  const pageNumber = searchParams.get('page');
  const page = pageNumber ? parseInt(pageNumber, 10) : 1;

  const { data, ...rest } = useQuery<SearchFilmsQuery, SearchFilmsQueryVariables>(searchFilmsQuery, {
    skip: !filmTitle,
    variables: {
      input: {
        apikey: apiKey,
        s: filmTitle,
        type: 'movie',
        page,
      },
    }
  });

  const searchFilmsResult =
    data &&
    data.searchFilms;

  const films =
    searchFilmsResult &&
    searchFilmsResult.Search || [];

  const totalResults =
    searchFilmsResult &&
    searchFilmsResult.totalResults &&
    parseInt(searchFilmsResult.totalResults, 10) || 1;

  return { films, totalResults, ...rest };
}