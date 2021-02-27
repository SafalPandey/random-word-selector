import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useSettingsState } from '../contexts/settings';
import { useWordsState } from '../contexts/words';
import { PLACEHOLDER_TEXT } from '../data';

function WordsInput() {
  const history = useHistory();
  const [words, setWords] = useWordsState();
  const [settings, setSettings] = useSettingsState();
  const [customWords, setCustomWords] = useState(JSON.stringify(words));
  const onChange = (evt) => {
    setCustomWords(evt.target.value);
  };

  const onSubmit = (evt) => {
    setWords(JSON.parse(customWords));

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
