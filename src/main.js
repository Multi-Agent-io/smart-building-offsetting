import { createApp } from "vue";
import App from "./App.vue";
import filters from "./plugins/filters";
import Ipfs from "./plugins/ipfs";

const app = createApp(App);

app.use(filters).use(Ipfs).mount("#app");
