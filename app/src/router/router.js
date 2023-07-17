import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/HomePage.vue';
import Leaderboard from '../pages/LeaderboardPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  //TODO can create multiple leagues across one page with dropdown, or have different pages? - discuss
  {
    path: '/leaderboard',
    name: 'leaderboard',
    component: Leaderboard
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
