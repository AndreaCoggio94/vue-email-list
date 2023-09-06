console.log("Hello world");

const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello there!",
    };
  },
  mounted() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then(function (response) {
        // handle success
        console.log(response);
      });
  },
}).mount("#app");
