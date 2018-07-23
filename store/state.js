const state = {
  books: [
    {
      id: 1,
      title: "Martin Eden",
      author: "Jack London",
      image:
        "https://img5.lalafo.com/i/posters/original/67/2a/26ab4fa7fffb66b9f381ede83471.jpeg",
      filters: {
        genres: ["novel", "classic"],
        views: 0,
        rating: 0
      },
      added: false,
      status: "",
      completeDate: ""
    },
    {
      id: 2,
      title: "Volhv",
      author: "John Fowles",
      image:
        "https://upload.wikimedia.org/wikipedia/en/e/ef/Themagus_cover.jpg",
      filters: {
        genres: ["novel", "classic", "non-fiction"],
        views: 5,
        rating: 2
      },
      added: true,
      status: "",
      completeDate: ""
    },
    {
      id: 3,
      title: "Rich Man, Poor Man",
      author: "Irwin Shaw",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/8/88/RichManPoorMan.jpg/220px-RichManPoorMan.jpg",
      filters: {
        genres: ["novel", "classic", "drama", "non-fiction"],
        views: 2,
        rating: 3
      },
      added: false,
      status: "",
      completeDate: ""
    },
    {
      id: 4,
      title: "Harry Potter & The Philosopher's Stone",
      author: "J. K. Rowling",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg/220px-Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg",
      filters: {
        genres: ["novel", "fantasy", "drama", "non-fiction"],
        views: 11,
        rating: 8
      },
      added: false,
      status: "",
      completeDate: ""
    },
    {
      id: 5,
      title: "Frankenstein",
      author: "Mary Shelley",
      image:
        "https://s-media-cache-ak0.pinimg.com/564x/f9/8e/2d/f98e2d661445620266c0855d418aab71.jpg",
      filters: {
        genres: ["novel", "fantasy", "drama"],
        views: 1,
        rating: 8
      },
      added: false,
      status: "",
      completeDate: ""
    },
    {
      id: 6,
      title: "A Little Princess",
      author: "Frances Hodgson Burnett",
      image:
        "https://alysbcohen.files.wordpress.com/2015/01/little-princess-book-cover.jpg",
      filters: {
        genres: ["novel", "fantasy", "tale"],
        views: 1,
        rating: 3
      },
      added: false,
      status: "",
      completeDate: ""
    }
  ],
  user: {
    settings: {}
  },
  filteredBooks: [],
  filtersActive: false,
  currentActiveFilter: ""
};

export default state;
