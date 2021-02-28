import React, { lazy, Suspense } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';

import { WordsProvider } from './contexts/words';
import { SettingsProvider } from './contexts/settings';

const WordsInput = lazy(() => import('./components/WordsInput'));
const WordSelector = lazy(() => import('./components/WordSelector'));

function App() {
  return (
    <HashRouter>
      <h1>Random Word Selector</h1>
      <WordsProvider>
        <SettingsProvider>
          <Suspense fallback={<p>Loading...</p>}>
            <Switch>
              <Route exact path="/" component={WordsInput} />
              <Route exact path="/selector" component={WordSelector} />
            </Switch>
          </Suspense>
        </SettingsProvider>
      </WordsProvider>
    </HashRouter>
  );
}

export default App;
