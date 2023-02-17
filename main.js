//https://flynn.boolean.careers/exercises/api/random/mail

randommail = [];

for (let i = 0; i < 10; i++) {
  axios
    .get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((result) => {
      randommail.push(result.data.response);

      for (let i = 0; i <= 10; i++) {
        console.log(result.data.response);
      }
    });
}
