//https://flynn.boolean.careers/exercises/api/random/mail

//randommail = [];

//for (let i = 0; i < 10; i++) {
//axios
//.get("https://flynn.boolean.careers/exercises/api/random/mail")
//.then((result) => {
//randommail.push(result.data.response);

//for (let i = 0; i <= 10; i++) {
//console.log(result.data.response);
//}
//});
//}

const { createApp } = Vue;

createApp({
  data() {
    return {
      mail: [],
    };
  },

  methods: {
    addmail() {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((result) => this.mail.push(result.data.response));

      if (mail.length >= 10) {
        console.log(result.data.response);
      }
    },
  },
}).mount("#app");
