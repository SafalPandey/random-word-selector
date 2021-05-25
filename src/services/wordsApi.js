const RANDOM_WORD_API_URL = `https://san-random-words.vercel.app/`;

/**
 * Fetches random word from RapidAPI.
 *
 * @param {string} apiKey
 * @returns {Promise<>}
 */
export async function fetchRandomWord() {
  const result = await fetch(RANDOM_WORD_API_URL);

  const [response] = await result.json();

  return {
    word: response?.word,
    meaning: response?.definition
  };
}
