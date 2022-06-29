import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./component/App/App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";

// Import any icons you want to use
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {
    faMagnifyingGlass,
    faTerminal,
} from "@fortawesome/free-solid-svg-icons";

library.add(faMagnifyingGlass, faTerminal);

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
