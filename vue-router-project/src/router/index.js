import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Dashboard from '../components/Dashboard.vue';
import Profile from '../components/Profile.vue';
import Settings from '../components/Settings.vue';
import NotFound from '../components/NotFound.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  {
    path: '/dashboard',
    component: Dashboard,
    children: [
      { path: 'profile', component: Profile },
      { path: 'settings', component: Settings },
    ],
  },
  { path: '/:pathMatch(.*)*', component: NotFound }, // 404 Page
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
