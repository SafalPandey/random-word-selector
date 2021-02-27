import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import { WordsProvider } from './contexts/words';
import WordsInput from './components/WordsInput';
import WordSelector from './components/WordSelector';
import { SettingsProvider } from './contexts/settings';

function App() {
  return (
    <BrowserRouter>
      <h1>Random Word Selector</h1>
      <WordsProvider>
        <SettingsProvider>
        <Switch>
          <Route exact path="/" component={WordsInput} />
          <Route exact path="/selector" component={WordSelector} />
        </Switch>
        </SettingsProvider>
      </WordsProvider>
    </BrowserRouter>
  );
}

export default App;
