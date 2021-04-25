/**
 *
 * (c) Laudio, Inc. All Rights Reserved.
 *
 * This file contains proprietary and confidential source
 * code. Unauthorized copying of this file, via any
 * medium is strictly prohibited.
 *
 * (r) 2018 Laudio is a registered trademark of Laudio, Inc.
 *
 */

import React, { useState, useContext, createContext } from 'react';

import { getObjFromLocalStorage, removeObjFromLocalStorage, setObjInLocalStorage } from '../utils/localStorage';

const LOCAL_STORAGE_WORDS_KEY = 'storedWords';

const storedWords = getObjFromLocalStorage(LOCAL_STORAGE_WORDS_KEY);

const WordsStateContext = createContext([storedWords, () => null, () => null]);

function WordsProvider(props) {
  const [defaultWords] = useContext(WordsStateContext);

  const [words, setWords] = useState(defaultWords);

  const updateWords = (words) => {
    if (!words) {
      return;
    }

    setWords(words);
    setObjInLocalStorage(LOCAL_STORAGE_WORDS_KEY, words);
  };

  const resetWords = () => {
    setWords(defaultWords);
    removeObjFromLocalStorage(LOCAL_STORAGE_WORDS_KEY);
  };

  return (
    <WordsStateContext.Provider value={[words, updateWords, resetWords]}>{props.children}</WordsStateContext.Provider>
  );
}

function useWordsState() {
  const appInfoState = useContext(WordsStateContext);

  if (!appInfoState) {
    throw new Error('useWordsState must be used within an WordsProvider');
  }

  return appInfoState;
}

export { WordsProvider, useWordsState };
