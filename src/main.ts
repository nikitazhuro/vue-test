import { createApp } from "vue";

import App from "./App.vue";
import components from "./UI";
import customDirectives from "./directives/index";
import { router } from "./router";
import { store } from "./store";

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

customDirectives.forEach((directive) => {
  app.directive(directive.name, directive);
});

app.use(router).use(store).mount("#app");
