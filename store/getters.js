const getters = {
  getAllBooks(state) {
    return state.books;
  },
  getAllUserBooks(state) {
    return state.books.filter(book => book.added == true);
  },
  getBooksMap(state, getters) {
    return getters.getAllBooks.reduce((acc, book) => {
      acc[book.id] = { title: book.title, author: book.author };
      return acc;
    }, {});
  },
  getFilteredBooks(state) {
    return state.filteredBooks;
  },
  getFiltersState(state) {
    return state.filtersActive;
  },
  getCurrentActiveFilter(state) {
    return state.currentActiveFilter;
  },
  getQuotes(state) {
    return state.quotes;
  }
};

export default getters;
