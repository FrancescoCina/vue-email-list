console.log("vue ok", Vue);

Vue.config.devtools = true;

const app = new Vue({
    el: "#app",
    data: {
        listOfEmails: [],
    },
    methods: {

    },
    created() {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((res) => {
            const responseEmail = res.data.response;
            this.listOfEmails.push(responseEmail);
            console.table(this.listOfEmails);
        })
    },
})