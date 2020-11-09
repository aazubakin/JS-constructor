export class Site {
  constructor(selector) {
    this.$el = document.querySelector(selector)
  }

  render(model) {
    this.$el.innderHTML = ''
    model.forEach(block => {
      this.$el.insertAdjacentHTML('beforeend', block.toHTML())
    });
  }
}