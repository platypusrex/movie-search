import { QueryHookResult, useQuery } from 'react-apollo-hooks';
import { FilmByIdQuery, FilmByIdQueryVariables, FilmDetail } from '../types/generated';
import { filmByIdQuery } from '../../api/film/filmByIdQuery';
import { apiKey } from '../constants/api';
import { Omit } from '../types/shared';
import { useLoading } from './useLoading';

type FilmByIdQueryResult = QueryHookResult<FilmByIdQuery, FilmByIdQueryVariables>;
type UseFilmById = Omit<FilmByIdQueryResult, 'data'> & {
  film?: FilmDetail;
};

export function useFilmById (id: string, useLoadingIndicator?: boolean): UseFilmById {
  const { data, ...rest } = useQuery<FilmByIdQuery, FilmByIdQueryVariables>(filmByIdQuery, {
    variables: {
      input: {
        apikey: apiKey,
        plot: 'full',
        i: id
      }
    }
  });

  useLoading(rest.loading);

  const film =
    data &&
    data.filmById;

  return { film, ...rest };
}