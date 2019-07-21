class App {
  constructor() {
    this.input = new WordsInput();
    this.selector = new WordSelector();

    this.input.submitElement.addEventListener("click", (evt) => {
      this.handleInput(this.input.inputElement.value);
    });

    this.selector.buttonElement.addEventListener("click", (evt) => {
      this.handleClick();
    });
  }

  handleInput(inputWords) {
    inputWords = inputWords || DEFAULT_WORDS;

    this.words = JSON.parse(inputWords);
    this.selector.setWordArray(this.words);
    this.selector.reset();

    this.input.hide();
    this.selector.show();
  }

  handleClick() {
    if (this.selector.words.length == this.selector.selectedWords.length) {
      this.selector.hide();
      this.input.show();

      return;
    }

    this.selector.handleClick();
  }
}
