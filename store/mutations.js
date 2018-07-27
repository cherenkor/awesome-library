function getFormattedDate() {
  let today = new Date();
  let dd = today.getDate();

  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  return (today = dd + "-" + mm + "-" + yyyy);
}

const mutations = {
  updateBookViews(state, bookId) {
    state.books = state.books.map(book => {
      if (book.id === bookId) {
        book.filters.views++;
      }
      return book;
    });
  },
  saveBook(state, bookId) {
    state.books = state.books.map(book => {
      if (book.id === bookId) {
        book.added = true;
      }

      return book;
    });
  },
  removeBook(state, bookId) {
    state.books = state.books.map(book => {
      if (book.id === bookId) {
        book.added = false;
      }

      return book;
    });
  },
  makeStatusInProgress(state, bookId) {
    state.books = state.books.map(book => {
      if (book.id === bookId) {
        book.status = "progress";
      }

      return book;
    });
  },
  makeStatusCompleted(state, bookId) {
    state.books = state.books.map(book => {
      if (book.id === bookId) {
        book.status = "completed";
        book.completeDate = getFormattedDate();
      }

      return book;
    });
  },
  filterBooks(state, filterType) {
    state.filtersActive = true;
    state.currentActiveFilter = filterType;

    state.filteredBooks = state.books.filter(book =>
      book.filters.genres.includes(filterType.toLowerCase())
    );
  },
  filterMostViewed(state) {
    state.filtersActive = true;
    state.currentActiveFilter = "views";
    state.filteredBooks = state.books.filter(book => book.filters.views > 5);
  },
  disableFilters(state) {
    state.currentActiveFilter = "";
    state.filtersActive = disable;
  },
  /*
  ** Network
  */
  toogleLoadingStatus(state) {
    state.network.isLoading = !state.network.isLoading;
  }
};

export default mutations;
