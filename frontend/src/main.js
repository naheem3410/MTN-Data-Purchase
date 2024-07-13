// frontend/src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import UserRegister from './components/UserRegister.vue';
import UserLogin from './components/UserLogin.vue';
import AppHome from './components/AppHome.vue';
import UserDashboard from './components/UserDashboard.vue';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import AdminDashboard from './components/admin/AdminDashboard.vue';
import UserList from './components/admin/UserList.vue';
import UserDetails from './components/admin/UserDetails.vue';
import PurchaseList from './components/admin/PurchaseList.vue';
import PurchaseDetails from './components/admin/PurchaseDetails.vue';
import DataPurchase from './components/DataPurchase.vue';

const routes = [
    { path: '/', component: AppHome },
    { path: '/register', component: UserRegister },
    { path: '/login', component: UserLogin },
    {path: '/user-dashboard',name: 'UserDashboard',component: UserDashboard},
    { path: '/purchase', name: 'DataPurchase', component: DataPurchase },
    {
        path: '/admin',
        component: AdminDashboard,
        children: [
          { path: 'users', component: UserList },
          { path: 'users/:userId', component: UserDetails },
          { path: 'purchases', component: PurchaseList },
          { path: 'purchases/:purchaseId', component: PurchaseDetails },
        ],
      },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
