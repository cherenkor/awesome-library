<template>
  <div>
        <rotate-loader class="spinner" :size="'40px'" :color="'#ffa055'" :loading="isLoading"></rotate-loader>

    <nuxt/>
  </div>
</template>

<script>
import RotateLoader from "vue-spinner/src/RotateLoader";
import { mapState } from "vuex";

alertify.defaults = {
  transition: "pulse",
  // notifier defaults
  notifier: {
    // auto-dismiss wait time (in seconds)
    delay: 3,
    // default position
    position: "top-right"
  },
  glossary: {
    // dialogs default title
    title: "Awesome Library",
    // ok button text
    ok: "Sent",
    // cancel button text
    cancel: "Cancel"
  },

  // theme settings
  theme: {
    // class name attached to prompt dialog input textbox.
    input: "ajs-input",
    // class name attached to ok button
    ok: "ajs-ok",
    // class name attached to cancel button
    cancel: "ajs-cancel"
  }
};

export default {
  components: {
    RotateLoader
  },
  computed: {
    ...mapState({
      isLoading: state => state.network.isLoading
    })
  }
};
</script>

<style>
body {
  font-family: "ArchitectsDaughter", sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #9aecdb;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}
.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}
.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}
.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.link-unstyled,
.link-unstyled:visited,
.link-unstyled:hover,
.link-unstyled:active,
.link-unstyled:focus,
.link-unstyled:active:hover {
  font-style: inherit;
  color: inherit;
  background-color: transparent;
  font-size: inherit;
  text-decoration: none;
  font-variant: inherit;
  font-weight: inherit;
  line-height: inherit;
  font-family: inherit;
  border-radius: inherit;
  border: inherit;
  outline: inherit;
  box-shadow: inherit;
  padding: inherit;
  vertical-align: inherit;
}
.spinner {
  width: fit-content;
  margin: auto;
  padding: 20px 0 0 300px;
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 99;
}
</style>
