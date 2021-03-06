import React, { useMemo, useState } from 'react';

import { DataSources } from '../constants';
import { useWordsState } from '../contexts/words';
import { getRandomElement } from '../utils/common';
import { fetchRandomWord } from '../services/wordsApi';
import { useSettingsState } from '../contexts/settings';

function WordSelector() {
  const [words] = useWordsState();
  const [settings] = useSettingsState();
  const [selectedWords, setSelectedWords] = useState([]);

  const { dataSource, apiKey, shouldShowMeaning } = settings;

  const [selectedList, lastSelectedWord, isListExhausted] = useMemo(() => {
    return [
      selectedWords.map((x, idx) => (
        <li key={idx}>
          {x?.word}
          {shouldShowMeaning ? ` -> ${x?.meaning}` : ''}
        </li>
      )),
      selectedWords[selectedWords.length - 1],
      selectedWords.length === words.length
    ];
  }, [selectedWords]);

  async function handleNewWordClick() {
    const selectedWord =
      dataSource === DataSources.API
        ? await fetchRandomWord(apiKey)
        : getRandomElement(words.filter((x) => !selectedWords.includes(x)));

    if (!selectedWord) return;

    setSelectedWords(selectedWords.concat(selectedWord));
  }

  return (
    <>
      <div id="words-div" style={{ width: '100%' }}>
        <div id="current-words-div" style={{ width: '100%' }} align="center">
          <button onClick={handleNewWordClick} disabled={isListExhausted}>
            New Word
          </button>
          {isListExhausted ? (
            <h2>ALL OUT OF WORDS!!!</h2>
          ) : (
            <>
              {shouldShowMeaning && <h2>{lastSelectedWord?.meaning}</h2>}
              <p>{lastSelectedWord?.word}</p>
            </>
          )}
        </div>
        <div id="past-words-div">
          {selectedList.length ? (
            <>
              <h2>Past words:</h2>
              <ol>{selectedList}</ol>
            </>
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  );
}

export default WordSelector;
