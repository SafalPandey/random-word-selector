import React, { useState } from 'react';
import { useHistory } from 'react-router';

import Settings from './Settings';
import DataSource from './DataSource';
import { DEFAULT_WORDS } from '../data';
import { DataSources } from '../constants';
import { useWordsState } from '../contexts/words';
import { useSettingsState } from '../contexts/settings';

function Home() {
  const history = useHistory();
  const [words, setWords] = useWordsState();
  const [settings, setSettings] = useSettingsState();

  const [customWords, setCustomWords] = useState(null);
  const [apiKey, setApiKey] = useState(settings.apiKey);
  const [dataSource, setDataSource] = useState(settings.dataSource);

  const updateCustomStaticData = () => {
    if (customWords !== null) {
      let parsedCustomWords;

      try {
        parsedCustomWords = JSON.parse(customWords || JSON.stringify(DEFAULT_WORDS));
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
    }

    setSettings({ dataSource, isCustomWords: !!customWords });
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
      if (dataSource === DataSources.STATIC) {
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
