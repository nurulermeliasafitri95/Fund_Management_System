import { createApp } from 'vue'
import App from './App.vue'
// import router from './router';
import { createRouter, createWebHistory } from 'vue-router'; // Import router functions
import FundList from './components/FundList.vue';
import FundDetails from './components/FundDetails.vue';
import InvestmentPage from './components/InvestmentPage.vue'; 
import 'bootstrap-icons/font/bootstrap-icons.css';



import './assets/main.css'

import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
import 'bootstrap-vue/dist/bootstrap-vue.css'; // Import Bootstrap-Vue CSS
import BootstrapVue from 'bootstrap-vue'; // Import Bootstrap-Vue

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: FundList }, // Route for the funds list
    { path: '/funds/:id', component: FundDetails }, // Route for fund details with dynamic segment
    { path: '/investment', component: InvestmentPage },// Route for fund details with dynamic segment
    // Add more routes as needed
  ]
});

router.beforeEach((to, from, next) => {
  // Remove 'active' class from all nav-link elements
  document.querySelectorAll('.nav-link').forEach((element) => {
    element.classList.remove('active');
  });

  // Find the nav-link element corresponding to the current route and add 'active' class
  const activeLink = document.querySelector(`.nav-link[href="${to.path}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }

  next();
});

app.use(router); // Use Vue Router

app.mount('#app');



