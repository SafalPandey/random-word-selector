/**
 * Parses and validates the passed custom words and throws appropriate errors.
 *
 * @param {string} customWords
 * @param {boolean} shouldShowMeaning
 * @returns {object}
 */
export function parseCustomWords(customWords, shouldShowMeaning) {
  let parsedCustomWords;

  try {
    parsedCustomWords = JSON.parse(customWords);
  } catch (e) {
    parsedCustomWords = customWords.split(',').reduce((acc, word) => {
      const trimmedWord = word.trim();

      if (trimmedWord) {
        acc.push({ word: trimmedWord });
      }

      return acc;
    }, []);
  }

  if (!Array.isArray(parsedCustomWords)) {
    throw new Error('Custom words needs to be an array.');
  }

  for (let { word, meaning } of parsedCustomWords) {
    if (!word) {
      throw new Error(
        `Every element in passed data must have a "word" ${shouldShowMeaning ? 'as well as a "meaning"' : ''} property.`
      );
    }

    if (shouldShowMeaning && !meaning) {
      throw new Error(
        `Every element in passed data must have a "meaning" property.\n\nTurn off "Display meaning of current word" setting to continue without "meaning" property.`
      );
    }
  }

  return parsedCustomWords;
}
