import Vue from "vue";
import router from "./router";
import store from './store';
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

import BootstrapVue from "bootstrap-vue";
import FlashMessage from "@smartweb/vue-flash-message";
import moment from "moment";


Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(FlashMessage);

Vue.filter("date", value => {
    if (!value) {
        return "";
    }
    return moment(value).format("MMM DD, YYYY");
});

Vue.filter("timeAgo", value => {
    if (!value) {
        return "";
    }
    return moment(value)
        .startOf("hour")
        .fromNow();
});

// require('./bootstrap');
let app = new Vue({
    el: "#app",
    router,
    store,
    render: h => h(App)
});


