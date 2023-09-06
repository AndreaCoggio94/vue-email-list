const { createApp } = Vue;

createApp({
  data() {
    return {
      email: "",
    };
  },
  methods: {},
  mounted() {
    for (let i = 0; i < 10; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then(function (email) {
          console.log(email.data.response);
        });
    }
  },
}).mount("#app");
