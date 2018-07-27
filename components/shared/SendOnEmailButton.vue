<template>
    <div>
        <button @click.prevent.stop="sendOnEmail" class="btn btn-info">@</button>
    </div>
</template>

<script>
import emailMixins from "@/components/mixins/email";

export default {
  props: {
    bookId: {
      type: Number,
      default: null
    }
  },
  mixins: [emailMixins],
  methods: {
    sendOnEmail() {
      const book = this.$store.getters.getBooksMap[this.bookId];
      const self = this;

      alertify.prompt(
        null,
        null,
        function(evt, email) {
          self.sendBookOnEmail(
            email,
            book.title,
            book.author,
            () => alertify.success("Sent on " + email),
            () => alertify.error("Check your email " + email)
          );
        },
        function() {
          alertify.error("Canceled");
        }
      );
    }
  }
};
</script>

<style scoped>
.btn {
  padding: 0;
  font-size: 32px;
  width: 50px;
  margin-bottom: 5px;
}
</style>