<template>
    <div @click="notify" id="topbar">
        <h1>Soon here will be a nice quotes or something</h1>
    </div>
</template>

<script>
export default {
  methods: {
    notify() {
      console.log("DONE");

      if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
      } else if (Notification.permission === "granted") {
        // Let's check whether notification permissions have already been granted
        // If it's okay let's create a notification
        var notification = new Notification("Hi there!");
      } else if (Notification.permission !== "denied") {
        // Otherwise, we need to ask the user for permission
        Notification.requestPermission(function(permission) {
          // If the user accepts, let's create a notification
          if (permission === "granted") {
            var notification = new Notification("Hi there!");
          }
        });
      }
    }
  }
};
</script>

<style scoped>
#topbar {
  font-family: "Gaegu", cursive;
  width: 100%;
  background-color: #4ac694;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  vertical-align: middle;
}
#topbar h1 {
  width: 60%;
  text-overflow: hidden;
  white-space: nowrap;
}
</style>