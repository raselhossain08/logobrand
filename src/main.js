// Import global CSS files
import './assets/main.css'
import './index.css'
// Import Vue and other necessary dependencies
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import FontAwesomeIcon from './plugins/font-awesome'
// Create the Vue app instance
const app = createApp(App)
// Register FontAwesomeIcon component globally
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('font-awesome-icon', FontAwesomeIcon)
// Use Vue Router
app.use(router)

// Mount the app to the DOM element with id="app"
app.mount('#app')
