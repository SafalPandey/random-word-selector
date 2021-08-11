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

  const { dataSource: dataSourceSetting, shouldShowMeaning } = settings;

  const defaultCustomWords = (words && JSON.stringify(words, null, 2)) || '';
  const [customWords, setCustomWords] = useState(defaultCustomWords);
  const [dataSource, setDataSource] = useState(dataSourceSetting);

  const updateCustomStaticData = () => {
    if (!customWords) {
      resetWords();

      return;
    }

    const parsedCustomWords = parseCustomWords(customWords, shouldShowMeaning);
    setWords(parsedCustomWords);
  };

  const onSubmit = () => {
    try {
      if (dataSource === DataSources.STATIC) {
        updateCustomStaticData();
      }

      setSettings({ dataSource });
      history.push('/selector');
    } catch (e) {
      console.error(e);
      alert(e.message);
    }
  };

  return (
    <div className="flex-wrap">
      <DataSource {...{ words, settings, dataSource, customWords, setDataSource, setCustomWords }} />
      <Settings settings={settings} setSettings={setSettings} />
      <button className="float-right py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700" onClick={onSubmit}>
        Submit
      </button>
    </div>
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
    parsedCustomWords = customWords.split(',').reduce((acc, word) => {
      const trimmedWord = word.trim();

      if (trimmedWord) {
        acc.push({ word: trimmedWord });
      }

      return acc;
    }, []);
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
        `Every element in passed data must have a "meaning" property.\n\nTurn off "Display meaning of current word" setting to continue without "meaning" property.`
      );
    }
  }

  return parsedCustomWords;
}

export default Home;
