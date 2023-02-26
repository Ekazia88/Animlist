import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/style.css'
import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret,faChevronDown} from '@fortawesome/free-solid-svg-icons'

const app = createApp(App)

library.add(faChevronDown);

app.use(router).mount('#app')
