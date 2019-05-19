import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import { ScrollTop } from './shared/components/ScrollTop';
import { Search } from './routes/Search/Search';
import { FilmDetail } from './routes/FilmDetail/FilmDetail';
import { Routes } from './shared/constants/routes';

export const App: React.FC<{}> = () => (
  <Layout>
    <Layout.Content>
      <ScrollTop>
        <Switch>
          <Route exact path={Routes.HOME} render={() => <Redirect to={Routes.SEARCH}/>}/>
          <Route exact={true} path={Routes.SEARCH} component={Search}/>
          <Route exact={true} path={Routes.FILM_DETAIL} component={FilmDetail}/>
        </Switch>
      </ScrollTop>
    </Layout.Content>
  </Layout>
);