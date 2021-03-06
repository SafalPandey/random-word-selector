const WORDS_API_HOST = 'wordsapiv1.p.rapidapi.com';
export const RANDOM_WORD_API_URL = `https://${WORDS_API_HOST}/words?random=true`;

/**
 * Fetches random word from RapidAPI.
 *
 * @param {string} apiKey
 * @returns {Promise<>}
 */
export async function fetchRandomWord(apiKey) {
  const result = await fetch(RANDOM_WORD_API_URL, {
    headers: new Headers({
      useQueryString: true,
      'x-rapidapi-key': apiKey,
      'x-rapidapi-host': WORDS_API_HOST
    })
  });

  const response = await result.json();

  return {
    word: response.word,
    meaning: response.results && response.results[0]?.definition
  }
}
