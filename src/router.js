// src/router.js
import { createApp } from 'vue'
import VueRouter from 'vue-router';
import FundList from './components/FundList.vue';
import App from './App.vue'
import FundDetails from './components/FundDetails.vue';
import InvestmentPage from './components/InvestmentPage.vue'; 
import InvestmentModal from './components/InvestmentModal.vue'; // Adjust the path
import { createRouter, createWebHistory } from 'vue-router';

const app = createApp(App);

// Use Vue Router with the app instance
app.use(router);

// Mount the app
app.mount('#app');

const routes = [
  { path: '/', component: FundList },
  { path: '/funds/:id', component: FundDetails },
  { path: '/investment', component: InvestmentPage },
  { path: '/modal-investment', component: InvestmentModal },
];

const router = createRouter({
    history: createWebHistory(),
    routes
  });

export default router;
