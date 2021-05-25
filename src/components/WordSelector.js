import React, { useMemo, useState } from 'react';

import { DEFAULT_WORDS } from '../data';
import { DataSources } from '../constants';
import { useWordsState } from '../contexts/words';
import { getRandomElement } from '../utils/common';
import { fetchRandomWord } from '../services/wordsApi';
import { useSettingsState } from '../contexts/settings';

function WordSelector() {
  const [contextWords] = useWordsState();
  const [settings] = useSettingsState();
  const [selectedWords, setSelectedWords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { dataSource, shouldShowMeaning } = settings;

  const words = contextWords || DEFAULT_WORDS;

  const [selectedList, lastSelectedWord, isListExhausted] = useMemo(() => {
    return [
      selectedWords.map((x, idx) => (
        <li key={idx}>
          {x?.word}
          {shouldShowMeaning ? ` -> ${x?.meaning}` : ''}
        </li>
      )),
      selectedWords[selectedWords.length - 1],
      dataSource !== DataSources.API && selectedWords.length === words.length
    ];
  }, [selectedWords]);

  const fetchWordFromApi = async () => {
    setIsLoading(true);
    const word = await fetchRandomWord();
    setIsLoading(false);

    return word;
  };

  const handleNewWordClick = async () => {
    const selectedWord =
      dataSource === DataSources.API
        ? await fetchWordFromApi()
        : getRandomElement(words.filter((x) => !selectedWords.includes(x)));

    if (!selectedWord) {
      console.warn(`Couldn't select a word for some reason ¯\\_(ツ)_/¯`, { source: dataSource });

      return;
    }

    setSelectedWords(selectedWords.concat(selectedWord));
  };

  return (
    <>
      <div id="words-div" style={{ width: '100%' }}>
        <div id="current-words-div" style={{ width: '100%' }} align="center">
          <button onClick={handleNewWordClick} disabled={isListExhausted || isLoading}>
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
