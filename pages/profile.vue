<template>
    <div id="dashboard">
        <Sidebar/>
        <div class="main">
            <Topbar/>
            <Content/>
        </div>
    </div>
</template>

<script>
import Sidebar from "@/components/user/Sidebar";
import Topbar from "@/components/user/Topbar";
import Content from "@/components/user/Content";

export default {
  components: {
    Sidebar,
    Topbar,
    Content
  }
};
</script>

<style scoped>
#dashboard {
  display: flex;
}

.main {
  background: #a1ffce; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #faffd1,
    #a1ffce
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #faffd1,
    #a1ffce
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  width: calc(100%-300px);
  position: relative;
  left: 300px;
}
</style>