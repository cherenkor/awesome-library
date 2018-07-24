<template>
    <div @click="notify" id="topbar">
        <h1 class="running-line"><span>{{quote}}</span></h1>
    </div>
</template>

<script>
export default {
  data() {
    return {
      quoteIndex: 0,
      quotesLength: 0,
      quote: []
    };
  },
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
  },
  mounted() {
    this.quotesLength = this.$store.getters.getQuotes.length;
    this.quote = this.$store.getters.getQuotes[this.quoteIndex];

    setInterval(() => {
      this.quoteIndex =
        this.quoteIndex < this.quotesLength ? this.quoteIndex + 1 : 0;
      this.quote = this.$store.getters.getQuotes[this.quoteIndex];
    }, 14000);
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

@-webkit-keyframes scroll {
  0% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  100% {
    -webkit-transform: translate(-105%, 0);
    transform: translate(-105%, 0);
  }
}

@-moz-keyframes scroll {
  0% {
    -moz-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  100% {
    -moz-transform: translate(-105%, 0);
    transform: translate(-105%, 0);
  }
}

@keyframes scroll {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-105%, 0);
  }
}

.running-line {
  display: block;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
}

.running-line span {
  display: inline-block;
  padding-left: 100%;
  -webkit-animation: scroll 14s infinite linear;
  -moz-animation: scroll 14s infinite linear;
  animation: scroll 14s infinite linear;
}
</style>