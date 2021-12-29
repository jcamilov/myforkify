import View from './View.js';

class SearchView extends View {
  _parentElement = document.querySelector('.search');

  getQuery() {
    const value = this._parentElement.querySelector('.search__field').value;
    this._clearInput();
    return value;
  }

  _clearInput() {
    this._parentElement.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener('submit', function (ev) {
      ev.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
