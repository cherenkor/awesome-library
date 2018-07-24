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
        "http://pics.cdn.librarything.com/picsizes/6c/8d/6c8d248f062f092597a77315777444341587343.jpg",
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
  quotes: [
    "An investment in knowledge pays the best interest (Benjamin Franklin)",
    "Real knowledge is to know the extent of one's ignorance. (Confucius)",
    "The aim of education is the knowledge, not of facts, but of values. (William S. Burroughs)",
    "The true sign of intelligence is not knowledge but imagination. (Albert Einstein)",
    "Knowledge will give you power, but character respect. (Bruce Lee)",
    "We are all born ignorant, but one must work hard to remain stupid. (Benjamin Franklin)",
    "The only source of knowledge is experience. Albert Einstein",
    "A thorough knowledge of the Bible is worth more than a college education. (Theodore Roosevelt)",
    "A good decision is based on knowledge and not on numbers. (Plato)"
  ],
  filteredBooks: [],
  filtersActive: false,
  currentActiveFilter: ""
};

export default state;
