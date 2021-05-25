import { RANDOM_WORD_API_URL } from '../constants';

/**
 * Fetches random word from an API source.
 *
 * @returns {Promise<{ word: string; meaning: string; }>}
 */
export async function fetchRandomWord() {
  const result = await fetch(RANDOM_WORD_API_URL);

  const [response] = await result.json();

  return {
    word: response?.word,
    meaning: response?.definition
  };
}
