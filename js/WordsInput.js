class WordsInput {
  constructor() {
    this.inputElement = document.getElementById('input');
    this.submitElement = document.getElementById('submit');
    this.wrapper = document.getElementById('words-input-div');
    this.displayMeaningSetting = document.getElementById('setting-display-meaning');

    this.inputElement.placeholder = PLACEHOLDER_TEXT;
  }

  hide() {
    document.body.removeChild(this.wrapper);
  }

  show() {
    document.body.appendChild(this.wrapper);
  }
}
