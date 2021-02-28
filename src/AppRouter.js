import React, { lazy, Suspense } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';

import { WordsProvider } from './contexts/words';
import { SettingsProvider } from './contexts/settings';

import Header from './components/Header';
const Home = lazy(() => import('./components/Home'));
const WordSelector = lazy(() => import('./components/WordSelector'));

function App() {
  return (
    <HashRouter>
      <Header />
      <WordsProvider>
        <SettingsProvider>
          <Suspense fallback={<p>Loading...</p>}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/selector" component={WordSelector} />
            </Switch>
          </Suspense>
        </SettingsProvider>
      </WordsProvider>
    </HashRouter>
  );
}

export default App;
