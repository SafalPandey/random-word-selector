const words = [
    {
        word: 'FLABBERGASTED',
        meaning: 'As if struck dumb with astonishment and surprise'
    },
    {
        word: 'ARCANE',
        meaning: 'Requiring secret or mysterious knowledge'
    },
    {
        word: 'GLUTTONY',
        meaning: 'Habitual eating to excess'
    },
    {
        word: 'EMPATHY',
        meaning: 'Understanding and entering into another s feelings'
    },
    {
        word: 'INEPT',
        meaning: 'Generally incompetent and ineffectual'
    },
    {
        word: 'IMPECCABLE',
        meaning: 'Without fault or error'
    },
    {
        word: 'EMBEZZLE',
        meaning: 'Appropriate fraudulently to one s own use'
    },
    {
        word: 'ABERRATION',
        meaning: 'A state or condition markedly different from the norm'
    },
    {
        word: 'DEFERENTIAL',
        meaning: 'Showing courteous regard for people s feelings'
    },
    {
        word: 'CUMULATIVE',
        meaning: 'Increasing by successive addition'
    },
    {
        word: 'INSATIABLE',
        meaning: 'Impossible to satisfy'
    },
    {
        word: 'BRUSQUE',
        meaning: 'Rudely abrupt or blunt in speech or manner'
    },
    {
        word: 'INHIBIT',
        meaning: 'Limit the range or extent of'
    },
    {
        word: 'CANDOR',
        meaning: 'The quality of being honest and straightforward'
    },
    {
        word: 'COMPLACENCY',
        meaning: 'The feeling you have when you are satisfied with yourself'
    },
    {
        word: 'GRATUITOUS',
        meaning: 'Unnecessary and unwarranted'
    },
    {
        word: 'CONFIDANT',
        meaning: 'Someone to whom private matters are told'
    },
    {
        word: 'ELATED',
        meaning: 'Exultantly proud and joyful in high spiritsp'
    },
    {
        word: 'FABRICATE',
        meaning: 'Make up something artificial or untrue'
    },
    {
        word: 'CALLOUS',
        meaning: 'Emotionally hardened'
    },
    {
        word: 'INNATE',
        meaning: 'Present at birth but not necessarily hereditary'
    },
    {
        word: 'COERCE',
        meaning: 'Cause to do through pressure or necessity'
    },
    {
        word: 'BRAZEN',
        meaning: 'Unrestrained by convention or propriety'
    },
    {
        word: 'COHERENT',
        meaning: 'Marked by an orderly and consistent relation of parts'
    },
    {
        word: 'APPEASE',
        meaning: 'Make peace with'
    },
    {
        word: 'HYPOCRISY',
        meaning: 'Pretending to have qualities or beliefs that you do not have'
    },
    {
        word: 'ABHOR',
        meaning: 'Find repugnant'
    },
    {
        word: 'INFAMY',
        meaning: 'A state of extreme dishonor'
    },
    {
        word: 'FORSAKE',
        meaning: 'Leave someone who needs or counts on you leave in the lurch'
    },
    {
        word: 'DILIGENT',
        meaning: 'Quietly and steadily persevering in detail or exactness'
    },
    {
        word: 'AMIABLE',
        meaning: 'Diffusing warmth and friendliness'
    },
    {
        word: 'ELOQUENT',
        meaning: 'Expressing yourself readily clearly effectively'
    },
    {
        word: 'ENMITY',
        meaning: 'A state of deep seated ill will'
    },
    {
        word: 'IMPERTINENT',
        meaning: 'Improperly forward or bold'
    },
    {
        word: 'IMPUDENT',
        meaning: 'Improperly forward or bold'
    }
];

selectedWords = [];

wordElement = document.getElementById('word');
meaningElement = document.getElementById('meaning');
buttonElement = document.getElementById('button');
selectedListElement = document.getElementById('selected-words-list');

function getRandomWord(wordArray) {
    const randIndex = Math.floor(Math.random() * wordArray.length);

    return wordArray[randIndex];
}

function updateWord() {
    const selectedWord = getRandomWord(
        words.filter((x) => !selectedWords.includes(x))
    );

    console.log(selectedWord, selectedWords.length, selectedWords, words.filter((x) => !selectedWords.includes(x)));

    if (selectedWords.length == words.length) {
        wordElement.innerHTML = 'ALL OUT OF WORDS MAAAN!!!!';
        meaningElement.innerHTML = '';

        return;
    }

    wordElement.innerHTML = 'Word: ' + selectedWord.word;
    meaningElement.innerHTML = 'Meaning: ' + selectedWord.meaning;
    selectedWords.push(selectedWord);


    const selectedList = selectedWords.reduce((acc, x) => {
        acc += '<li>' + x.word + '</li>';
        return acc
    }, '');

    console.log(selectedList);

    selectedListElement.innerHTML = selectedList;


}