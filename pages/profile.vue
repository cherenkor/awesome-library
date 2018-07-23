<template>
    <div id="dashboard">
        <Sidebar/>
        <div class="main">
            <Topbar/>
            <nuxt/>
        </div>
    </div>
</template>

<script>
import Sidebar from "@/components/user/Sidebar";
import Topbar from "@/components/user/Topbar";

export default {
  components: {
    Sidebar,
    Topbar
  }
};
</script>

<style scoped>
#dashboard {
  display: flex;
  height: 100vh;
}

.main {
  background: #9aecdb;
  width: calc(100%-300px);
  position: relative;
  left: 300px;
}
</style>