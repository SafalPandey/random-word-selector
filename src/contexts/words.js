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

import { DEFAULT_WORDS } from '../data';
import { getObjFromLocalStorage, setObjInLocalStorage } from '../utils/localStorage';

const LOCAL_STORAGE_WORDS_KEY = 'storedWords';

const storedWords = getObjFromLocalStorage(LOCAL_STORAGE_WORDS_KEY, DEFAULT_WORDS);

const WordsStateContext = createContext([storedWords, () => null]);

function WordsProvider(props) {
  const [defaultWords] = useContext(WordsStateContext);

  const [words, setWords] = useState(defaultWords);

  const updateWords = (words) => {
    setWords(words);
    setObjInLocalStorage(LOCAL_STORAGE_WORDS_KEY, words);
  }

  return <WordsStateContext.Provider value={[words, updateWords]}>{props.children}</WordsStateContext.Provider>;
}

function useWordsState() {
  const appInfoState = useContext(WordsStateContext);

  if (!appInfoState) {
    throw new Error('useWordsState must be used within an WordsProvider');
  }

  return appInfoState;
}

export { WordsProvider, useWordsState };
