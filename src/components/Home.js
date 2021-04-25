import React, { useState } from 'react';
import { useHistory } from 'react-router';

import Settings from './Settings';
import DataSource from './DataSource';
import { DataSources } from '../constants';
import { useWordsState } from '../contexts/words';
import { useSettingsState } from '../contexts/settings';

function Home() {
  const history = useHistory();
  const [words, setWords, resetWords] = useWordsState();
  const [settings, setSettings] = useSettingsState();

  const { apiKey: apiKeySetting, dataSource: dataSourceSetting, shouldShowMeaning } = settings;

  const defaultCustomWords = (words && JSON.stringify(words, null, 2)) || '';
  const [customWords, setCustomWords] = useState(defaultCustomWords);
  const [apiKey, setApiKey] = useState(apiKeySetting);
  const [dataSource, setDataSource] = useState(dataSourceSetting);

  const updateCustomStaticData = () => {
    if (!customWords) {
      resetWords();

      return;
    }

    const parsedCustomWords = parseCustomWords(customWords, shouldShowMeaning);
    setWords(parsedCustomWords);
  };

  const updateApiSettings = () => {
    if (!apiKey) {
      const message = 'API key is required for RapidAPI data source.';

      throw new Error(message);
    }

    setSettings({ dataSource, apiKey });
  };

  const onSubmit = () => {
    try {
      if (dataSource === DataSources.STATIC) {
        updateCustomStaticData();
        setSettings({ dataSource });
      }

      if (dataSource === DataSources.API) {
        updateApiSettings();
      }

      history.push('/selector');
    } catch (e) {
      console.error(e);
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

/**
 * Parses and validates the passed custom words and throws appropriate errors.
 *
 * @param {string} customWords
 * @param {boolean} shouldShowMeaning
 * @returns {object}
 */
function parseCustomWords(customWords, shouldShowMeaning) {
  let parsedCustomWords;

  try {
    parsedCustomWords = JSON.parse(customWords);
  } catch (e) {
    throw new Error('Passed data must be a valid JSON Array. Could not parse passed list.');
  }

  if (!Array.isArray(parsedCustomWords)) {
    throw new Error('Custom words needs to be an array.');
  }

  for (let { word, meaning } of parsedCustomWords) {
    if (!word) {
      throw new Error(
        `Every element in passed data must have a "word" ${shouldShowMeaning ? 'as well as a "meaning"' : ''} property.`
      );
    }

    if (shouldShowMeaning && !meaning) {
      throw new Error(
        `Every element in passed data must have a "meaning" property. Turn off "Display meaning of current word" setting to continue without "meaning" property.`
      );
    }
  }

  return parsedCustomWords;
}

export default Home;
