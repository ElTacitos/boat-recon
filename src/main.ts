import App from "./App.vue";
import Vue, { VNode } from "vue";

Vue.config.productionTip = false;

new Vue({
    render: (render): VNode => render(App),
}).$mount("#app");
