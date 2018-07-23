<template>
  <section class="container-fluid">
    <div class="row justify-content-center">
      <div class="logo-title col-6 text-center">
        <h1>Awesome {{getName}} Library</h1>
      </div>
    </div>
    <div class="row navigation">
        <nuxt-link tag="div" to="/library" id="left-side" class="col-6">
          <span>Library</span>
        </nuxt-link>
        <nuxt-link tag="div" to="/profile" id="right-side" class="col-6">
          <span>Profile</span>
        </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  computed: {
    getName() {
      return this.$store.getters.getName || "name";
    }
  }
};
</script>

<style scoped>
.logo-title {
  position: absolute;
  width: 60%;
  text-align: center;
  color: #ffffff;
  padding: 32px;
  z-index: 2;
  background-color: #2ecc71;
  border-radius: 0 0 10px 10px;
}
.navigation,
.navigation div {
  height: 100vh;
}
#left-side,
#right-side {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 52px;
  cursor: pointer;
  background: no-repeat center;
  transition: background 0.2s ease-in-out;
  text-decoration: underline;
}
#left-side {
  background-color: #256a74;
}
#right-side {
  background-color: #f0932b;
}
#left-side:hover,
#right-side:hover {
  color: transparent;
}
#left-side:hover {
  background: url("~assets/img/library.png") no-repeat center, #ffbe76;
}
#right-side:hover {
  background: url("~assets/img/profile.png") no-repeat center, #9aecdb;
}
</style>
