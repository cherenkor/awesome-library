<template>
    <div :style="internalStyle" class="add">
        <i v-if="bookAdded" @click.prevent.stop="removeBook(bookId)" class="fas fa-check-circle"></i>
        <i v-else @click.prevent.stop="saveBook(bookId)" class="fas fa-plus-circle"></i>
    </div>
</template>

<script>
import * as emailjs from "emailjs-com";

export default {
  props: {
    bookAdded: {
      type: Boolean,
      default: false
    },
    bookId: {
      type: Number,
      default: null
    },
    internalStyle: {
      type: Object,
      default: null
    }
  },
  methods: {
    saveBook(bookId) {
      const book = this.$store.getters.getAllBooks.filter(
        book => book.id == bookId
      )[0];
      const templateParams = {
        book_title: book.title,
        book_author: book.author
      };
      emailjs.init("user_fVCgwoD3pke2vl66QgyWs");
      emailjs.send("gmail", "template_AQ4gOBDz", templateParams).then(
        response => {
          console.log("SUCCESS!", response.status, response.text);
        },
        err => {
          console.log("FAILED...", err);
        }
      );

      this.$store.commit("saveBook", bookId);
    },
    removeBook(bookId) {
      this.$store.commit("removeBook", bookId);
    }
  }
};
</script>

<style scoped>
.add {
  font-size: 44px;
  color: bisque;
  transition: all 0.5s;
}

.add:hover {
  color: #ffc107;
  cursor: pointer;
}
.add:active {
  transform: scale(0.7);
}

.fa-check-circle {
  color: #ffa055;
}
</style>