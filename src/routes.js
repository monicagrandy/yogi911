import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import MainSearch from './components/main_search';
import DetailView from './components/detail_view';

export default (
    <Route path ="/" component={App}>
      <IndexRoute component={MainSearch} />
      <Route path = "search/:id" component={DetailView} />
    </Route>
  );