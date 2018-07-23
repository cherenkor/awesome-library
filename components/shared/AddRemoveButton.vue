<template>
    <div :style="internalStyle" class="add">
        <i v-if="bookAdded" @click.prevent="removeBook(bookId)" class="fas fa-check-circle"></i>
        <i v-else @click.prevent="saveBook(bookId)" class="fas fa-plus-circle"></i>
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
    saveBook(bookId) {
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
  font-size: 45px;
  color: #10e2d2;
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
  color: chartreuse;
}
</style>