<template>
    <div>
        <Content :books="getSavedBooks"/>
        <ul>
            <li>Email Send</li>
            <li>Disable filters</li>
            <li>Implement quotes</li>
        </ul>
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