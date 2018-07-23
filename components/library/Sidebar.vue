<template>
    <div id="sidebar">
        <div @click="goToHomePage" class="logo text-center">
            <h1>Awesome</h1>
            <h1>Library</h1>
        </div>
        <div @click="$router.push('/profile')" class="avatar"><img src="https://www.shareicon.net/data/2016/08/05/806962_user_512x512.png" alt="" /></div>
        <div class="navigation">
          <ul class="menu-items">
          <nuxt-link tag="li" to="/profile" class="menu-item">My Profile</nuxt-link>
              <li :class="isActiveFilter('novel')" @click="filterBooks('novel')" class="menu-item">Novels</li>
              <li :class="isActiveFilter('drama')" @click="filterBooks('drama')" class="menu-item">Drama</li>
              <li :class="isActiveFilter('classic')" @click="filterBooks('classic')" class="menu-item">Classic</li>
              <li :class="isActiveFilter('fantasy')" @click="filterBooks('fantasy')" class="menu-item">Fantasy</li>
              <li :class="isActiveFilter('views')" @click="filterMostViewed" class="menu-item">Most Viewed</li>
          </ul>
        </div>
        <nuxt-link tag="li" to="/" class="menu-item">Main Page</nuxt-link>
    </div>
</template>

<script>
export default {
  methods: {
    goToHomePage() {
      this.$router.push("/");
    },
    filterBooks(filterType) {
      this.$store.commit("filterBooks", filterType);
    },
    filterMostViewed() {
      this.$store.commit("filterMostViewed");
    },
    isActiveFilter(filterType) {
      return this.$store.getters.getCurrentActiveFilter == filterType
        ? "active"
        : "";
    }
  }
};
</script>

<style scoped>
#sidebar {
  font-family: "Gaegu", sans-serif;
  background-color: #256a74;
  display: flex;
  flex-direction: column;
  width: 300px;
  position: fixed;
  height: 100vh;
  transition: all 0.5s ease;
}

h1 {
  line-height: 40px;
}

.logo,
.avatar,
.navigation {
  width: 100%;
}

.logo {
  min-height: 100px;
  height: 100px;
  margin-bottom: 30px;
  padding-top: 20px;
  color: bisque;
  transition: all 1s;
}

.logo:hover {
  color: #fff;
  transform: scale(1.18);
}

.avatar {
  text-align: center;
  z-index: 5;
  transition: transform 0.5s;
}

.avatar:hover {
  transform: scale(1.2);
}

.avatar img {
  width: 100px;
  height: 100px;
}

.navigation {
  margin-top: -50px;
  padding-top: 100px;
  border-top: 1px solid #ce9e55;
  z-index: 3;
  height: 100%;
}

hr {
  background-color: #fff;
  width: 90%;
  margin: auto;
}

.menu-items {
  margin-top: 10px;
  padding: 0;
}

.menu-item:first-child {
  margin-bottom: 24px;
}
.menu-item {
  font-family: "Gaegu", cursive;
  height: 48px;
  text-align: center;
  font-size: 32px;
  color: #f0932b;
  list-style-type: none;
  line-height: 42px;
  transition: font-size 0.4s;
}

.menu-item:hover,
.menu-item.active {
  background-color: #4ac694;
  color: cornsilk;
  font-size: 38px;
}

.menu-item:last-child {
  margin-bottom: 32px;
}
</style>