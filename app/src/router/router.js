import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/HomePage.vue';
import Leaderboard from '../pages/LeaderboardPage.vue';
import Team from '../pages/TeamPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/leaderboard',
    name: 'leaderboard',
    component: Leaderboard
  },
  {
    path: '/team/{teamId}',
    name: 'team',
    component: Team
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
