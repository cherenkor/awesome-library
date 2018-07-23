<template>
    <div id="sidebar">
        <div @click="goToHomePage" class="logo text-center">
            <h1>Awesome</h1>
            <h1>Library</h1>
        </div>
        <div class="avatar"><img src="https://www.shareicon.net/data/2016/08/05/806962_user_512x512.png" alt="" /></div>
        <div class="navigation">
          <p class="filter-title">Filters</p>
          <hr>
            <ul class="menu-items">
                <li :class="isActiveFilter('novel')" @click="filterBooks('novel')" class="menu-item">Novels</li>
                <li :class="isActiveFilter('drama')" @click="filterBooks('drama')" class="menu-item">Drama</li>
                <li :class="isActiveFilter('classic')" @click="filterBooks('classic')" class="menu-item">Classic</li>
                <li :class="isActiveFilter('fantasy')" @click="filterBooks('fantasy')" class="menu-item">Fantasy</li>
                <li :class="isActiveFilter('views')" @click="filterMostViewed" class="menu-item">Most Viewed</li>
            </ul>
            <hr>            
            <ul class="menu-items">
                <nuxt-link tag="li" to="/profile" class="menu-item">Profile</nuxt-link>
            </ul>
        </div>
        <nuxt-link tag="li" to="/" id="main-menu-link" class="menu-item">Main Page</nuxt-link>
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

.menu-item,
.filter-title {
  font-family: "Gaegu", cursive;
  height: 42px;
  text-align: center;
  font-size: 26px;
  color: #ffdcb0;
  list-style-type: none;
  line-height: 42px;
  transition: font-size 0.4s;
}

.filter-title {
  font-size: 3em;
}

.menu-item:hover,
.menu-item.active {
  background-color: #8ab25b;
  color: cornsilk;
  border-radius: 4%;
  font-size: 32px;
}

#main-menu-link {
  margin-bottom: 32px;
}

#main-menu-link:hover {
  background-color: #6a7ff7;
}
</style>