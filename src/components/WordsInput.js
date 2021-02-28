import React, { useState } from 'react';
import { useHistory } from 'react-router';

import { PLACEHOLDER_TEXT } from '../data';
import { useWordsState } from '../contexts/words';
import { useSettingsState } from '../contexts/settings';

function WordsInput() {
  const history = useHistory();
  const [words, setWords] = useWordsState();
  const [settings, setSettings] = useSettingsState();
  const [customWords, setCustomWords] = useState(null);

  const onChange = (evt) => {
    setCustomWords(evt.target.value);
  };

  const onSubmit = (evt) => {
    if (customWords !== null) {
      let parsedCustomWords = [];

      try {
        parsedCustomWords = JSON.parse(customWords);
      } catch (e) {
        console.error('Could not parse passed list: ', e);

        throw new Error('Passed list must be a valid JSON. Could not parse passed list: ', e);
      }

      setWords(parsedCustomWords);
      setSettings({ isCustomWords: true });
    }

    history.push('/selector');
  };

  return (
    <>
      <div id="words-input-div" style={{ width: '100%' }} align="center">
        <input id="input-source-static" name="data-source" type="radio" checked readOnly />
        <label htmlFor="input-source-static">
          <strong>Static list</strong>
        </label>
        <br />
        <div id="static-list">
          <textarea
            id="input"
            onChange={onChange}
            placeholder={PLACEHOLDER_TEXT}
            style={{ height: '50vh', width: '80%' }}
            value={customWords || (settings.isCustomWords ? JSON.stringify(words, null, 2) : undefined)}
          />
        </div>
        <br />
        <div id="settings" style={{ width: '80%' }}>
          <input
            type="checkbox"
            id="display-meaning-setting"
            onChange={(e) => setSettings({ shouldShowMeaning: e.target.checked })}
            checked={settings.shouldShowMeaning}
          />
          <label htmlFor="display-meaning-setting">Display Meaning of current word</label>
        </div>
        <br />
        <button onClick={onSubmit}>Submit</button>
      </div>
    </>
  );
}

export default WordsInput;
