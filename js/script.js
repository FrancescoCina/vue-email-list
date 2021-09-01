console.log("vue ok", Vue);

Vue.config.devtools = true;

const app = new Vue({
    el: "#app",
    data: {
        emails: [],
    },
    methods: {
        mountArrayWithTenEmails() {
            for (let i = 0; i < 10; i++) {
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((res) => {
                    const responseEmail = res.data.response;
                    this.emails.push(responseEmail);
                })
            }
        }
    },
    created() {
        this.mountArrayWithTenEmails();
        console.log(this.emails);

    },
})