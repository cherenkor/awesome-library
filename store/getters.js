const getters = {
  getAllBooks(state) {
    return state.books;
  },
  getAllUserBooks(state) {
    return state.books.filter(book => book.added == true);
  },
  getFilteredBooks(state) {
    return state.filteredBooks;
  },
  getFiltersState(state) {
    return state.filtersActive;
  },
  getCurrentActiveFilter(state) {
    return state.currentActiveFilter;
  }
};

export default getters;
