const { createApp } = Vue;

createApp({
  data() {
    return {
      emailList: [],
    };
  },
  methods: {},
  mounted() {
    for (let i = 0; i < 10; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((email) => {
          console.log(email.data);

          const result = email.data.response;
          this.emailList.push(result);
        });
    }
  },
}).mount("#app");
