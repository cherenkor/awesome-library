<template>
    <div :style="internalStyle" class="add">
        <i v-if="bookAdded" @click.prevent.stop="removeBook" class="fas fa-check-circle"></i>
        <i v-else @click.prevent.stop="saveBook" class="fas fa-plus-circle"></i>
    </div>
</template>

<script>
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
    saveBook() {
      const book = this.$store.getters.getBooksMap[this.bookId];

      alertify.success(`${book.title} was saved in Profile`, 8, () => {});

      this.$store.commit("saveBook", this.bookId);
    },
    removeBook() {
      const book = this.$store.getters.getAllBooks.filter(
        book => book.id == this.bookId
      )[0];
      alertify.error(`${book.title} was DELETED`, 5);
      this.$store.commit("removeBook", this.bookId);
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