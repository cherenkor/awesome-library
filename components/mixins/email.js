import * as emailjs from "emailjs-com";

export default {
  methods: {
    sendBookOnEmail(email, title, author, onSent, onError) {
      this.$store.commit("toogleLoadingStatus");
      emailjs.init("user_fVCgwoD3pke2vl66QgyWs");
      emailjs
        .send("gmail", "template_AQ4gOBDz", {
          email_to: email,
          book_title: title,
          book_author: author
        })
        .then(
          response => {
            this.$store.commit("toogleLoadingStatus");
            console.log("SUCCESS!", response.status, response.text);
            onSent();
          },
          err => {
            this.$store.commit("toogleLoadingStatus");
            console.log("FAILED...", err);
            onError();
          }
        );
    }
  }
};
