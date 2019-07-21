class WordSelector {
  constructor() {
    this.words = [];
    this.selectedWords = [];

    this.wrapper = document.getElementById('words-div');
    this.wordElement = document.getElementById('word');
    this.meaningElement = document.getElementById('meaning');
    this.buttonElement = document.getElementById('button');
    this.selectedListElement = document.getElementById('selected-words-list');

    this.hide();
  }

  hide() {
    document.body.removeChild(this.wrapper);
  }

  show() {
    document.body.appendChild(this.wrapper);
  }

  setWordArray(newWordArray) {
    this.words = newWordArray;
  }

  reset() {
    this.selectedWords = [];

    this.updateSelectedList();

    this.wordElement.innerHTML = '';
    this.meaningElement.innerHTML = '';
  }

  generateSelectedList(list) {
    return list.reduce((acc, x) => {
      acc += '<li>' + x.word + '</li>';

      return acc;
    }, '');
  }

  updateCurrentWord(selectedWord) {
    if (this.selectedWords.length == this.words.length) {
      this.wordElement.innerHTML = 'ALL OUT OF WORDS MAAAN!!!!';
      this.meaningElement.innerHTML = '';

      return;
    }

    this.wordElement.innerHTML = 'WORD: ' + selectedWord.word;
    this.meaningElement.innerHTML = 'MEANING: ' + selectedWord.meaning;
  }

  updateSelectedList() {
    const selectedList = this.generateSelectedList(this.selectedWords);
    this.selectedListElement.innerHTML = selectedList;
  }

  handleClick() {
    const selectedWord = getRandomElement(
      this.words.filter((x) => !this.selectedWords.includes(x))
    );

    this.selectedWords.push(selectedWord);

    this.updateCurrentWord(selectedWord);
    this.updateSelectedList();
  }
}
