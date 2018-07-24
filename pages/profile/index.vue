<template>
    <div>
        <Content :books="getSavedBooks"/>
    </div>
</template>

<script>
import Content from "@/components/library/Content";

export default {
  components: {
    Content
  },
  computed: {
    getSavedBooks() {
      return this.$store.getters.getAllUserBooks;
    }
  }
};
</script>

<style scoped>
</style>