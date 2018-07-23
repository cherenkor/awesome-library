<template>
    <div id="dashboard">
        <Sidebar/>
        <div class="main">
            <Content :books="getAllUserBooks"/>
        </div>
    </div>
</template>

<script>
import Sidebar from "@/components/library/Sidebar";
import Topbar from "@/components/library/Topbar";
import Content from "@/components/library/Content";

export default {
  components: {
    Sidebar,
    Topbar,
    Content
  },
  computed: {
    getAllUserBooks() {
      if (this.$store.getters.getFiltersState) {
        return this.$store.getters.getFilteredBooks;
      } else {
        return this.$store.getters.getAllBooks;
      }
    }
  }
};
</script>

<style scoped>
#dashboard {
  display: flex;
}

.main {
  background: #9aecdb;
  width: calc(100%-300px);
  position: relative;
  left: 300px;
}
</style>