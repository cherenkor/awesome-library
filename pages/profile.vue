<template>
    <div id="dashboard">
        <Sidebar/>
        <div class="main">
            <Topbar/>
            <nuxt id="content"/>
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
}

.main {
  background: #9aecdb;
  width: calc(100%-300px);
  position: relative;
  left: 300px;
}

#content {
  margin-top: 100px;
  height: 100vh;
}
</style>