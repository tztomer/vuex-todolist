'user strict';
import { router } from './router.js';
import { store } from './store/store.js';

import appHeader from './cmp/app-header.cmp.js';

const options = {
  template: `
    <main class="container">
        <div class="inner-wrapper">
            <app-header/>
            <router-view/>

        </div>
        <!-- <app-footer/> -->
</main>
`,
  components: {
    appHeader,
    // appFooter,
  },
};

const app = Vue.createApp(options);
app.use(router);
app.use(store);

app.mount('#app');
