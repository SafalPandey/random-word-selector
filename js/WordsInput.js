class WordsInput {
  constructor() {
    this.wrapper = document.getElementById('words-input-div');
    this.inputElement = document.getElementById('input');
    this.submitElement = document.getElementById('submit');

    this.inputElement.placeholder = PLACEHOLDER_TEXT;
  }

  hide() {
    document.body.removeChild(this.wrapper);
  }

  show() {
    document.body.appendChild(this.wrapper);
  }
}
