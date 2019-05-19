import { ApolloClient } from 'apollo-client';
import { InMemoryCache, defaultDataIdFromObject } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';
import { baseURI as uri } from '../constants/api';
import { v4 } from 'uuid';

const dataIdFromObject = (object: any) => {
  const typename = object.__typename;

  switch (typename) {
    case 'Film': return `${typename}:${object.Title}:${v4()}`;
    case 'FilmDetail': return `${typename}:${object.Title}:${v4()}`;
    case 'Rating': return `${typename}:${object.Source}:${v4()}`;
    default: return defaultDataIdFromObject(object);
  }
};

const link = new RestLink({ uri });
const cache = new InMemoryCache({ dataIdFromObject });

export const apolloClient = new ApolloClient({
  link,
  cache,
  connectToDevTools: true
});