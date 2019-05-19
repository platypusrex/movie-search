import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { scrollToTop } from '../utils/scrollToTop';

const ScrollTopComponent: React.FC<RouteComponentProps<{}>> = ({ location, children }) => {
  useEffect(() => scrollToTop, [location.pathname, location.search]);

  return <>{children}</>;
};

export const ScrollTop = withRouter(ScrollTopComponent);