import React, { useState } from 'react';
import { useHistory } from 'react-router';

import Settings from './Settings';
import DataSource from './DataSource';
import { DataSources } from '../constants';
import { useWordsState } from '../contexts/words';
import { useSettingsState } from '../contexts/settings';

function Home() {
  const history = useHistory();
  const [words, setWords] = useWordsState();
  const [settings, setSettings] = useSettingsState();

  const [apiKey, setApiKey] = useState(null);
  const [customWords, setCustomWords] = useState(null);
  const [dataSource, setDataSource] = useState(DataSources.STATIC);

  const updateCustomStaticData = () => {
    let parsedCustomWords;

    try {
      parsedCustomWords = JSON.parse(customWords);
    } catch (e) {
      const message = 'Passed data must be a valid JSON Array. Could not parse passed list.';
      console.error(message, e);

      throw new Error(message);
    }

    if (!Array.isArray(parsedCustomWords)) {
      throw new Error('Custom words needs to be an array.');
    }

    if (parsedCustomWords.some(({ word }) => !word)) {
      throw new Error('Every element in passed data must have a `word` property.');
    }

    setWords(parsedCustomWords);
    setSettings({ dataSource, isCustomWords: true });
  };

  const updateApiSettings = () => {
    if (!apiKey) {
      const message = 'API key is required for RapidAPI data source.';
      console.error(message);

      throw new Error(message);
    }

    setSettings({ dataSource, apiKey });
  };

  const onSubmit = () => {
    try {
      if (dataSource === DataSources.STATIC && customWords !== null) {
        updateCustomStaticData();
      }

      if (dataSource === DataSources.API) {
        updateApiSettings();
      }

      history.push('/selector');
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <>
      <DataSource {...{ words, apiKey, setApiKey, settings, dataSource, customWords, setDataSource, setCustomWords }} />
      <Settings settings={settings} setSettings={setSettings} />
      <button style={{ height: '2em', fontSize: '1.25em' }} onClick={onSubmit}>
        Submit
      </button>
    </>
  );
}

export default Home;
