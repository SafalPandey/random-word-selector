import React, { useState } from 'react';
import { useHistory } from 'react-router';

import Settings from './Settings';
import DataSource from './DataSource';
import { DataSources } from '../constants';
import { parseCustomWords } from '../utils/words';
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
      <button
        className="float-right py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"
        onClick={onSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default Home;
