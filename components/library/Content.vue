<template>
    <div id="content">
      <transition-group tag="div" class="books-wrap" name="fade" mode="out-in">
        <div @click.prevent="updateBookViews(book.id)" class="book-item" v-for="book in books" :key="book.id">
            <div class="book-preview"><img :src="book.image" /></div>
            <div class="info d-flex justify-content-around align-items-end">
              <p class="views">Views: {{book.filters.views}}</p>
              <add-remove-button title="Add to Read" :bookAdded="book.added" :bookId="book.id"/>
            </div>
        </div>
      </transition-group>
    </div>
</template>

<script>
import AddRemoveButton from "@/components/shared/AddRemoveButton";

export default {
  props: {
    books: {
      type: Array,
      default: []
    }
  },
  components: {
    AddRemoveButton
  },
  methods: {
    updateBookViews(bookId) {
      this.$store.commit("updateBookViews", bookId);
    }
  }
};
</script>

<style scoped>
#content {
  min-height: 100vh;
  transition: all 0.5;
}

.books-wrap {
  font-family: "Markazi Text", serif;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin-bottom: 40px;
  padding: 0 30px;
}

.book-item {
  width: 280px;
  height: 380px;
  cursor: pointer;
  margin: 40px 20px;
  background-color: #4ac694;
  -webkit-box-shadow: 10px 9px 5px -2px rgba(0, 0, 0, 0.37);
  -moz-box-shadow: 10px 9px 5px -2px rgba(0, 0, 0, 0.37);
  box-shadow: 10px 9px 5px -2px rgba(0, 0, 0, 0.37);
  transition: all 0.6s;
}

.book-item:hover {
  transform: scale(1.05);
}

.book-preview {
  width: 280px;
  height: 320px;
  overflow: hidden;
}

.book-preview img {
  width: 100%;
  height: 100%;
}

.views {
  font-family: "Acme", sans-serif;
  color: bisque;
  padding: 0;
  margin-right: 50px;
  font-size: 26px;
  cursor: pointer;
  transition: all 0.5s;
}

.views:hover {
  text-decoration: underline;
}

.views:active {
  transform: scale(0.8);
}
</style>