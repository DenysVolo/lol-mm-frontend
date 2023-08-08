<template>
  <div id="app">
<!--navbar-->
    <NavigationBarComponent/>
    <router-view></router-view>
  </div>
</template>

<style>
/* GLOBAL STYLES DO NOT CHANGE */
  body {
    background-color: #282b31;
    color: #e2e8f0;
  }
</style>

<script setup>

import LeaderboardComponent from './components/LeaderboardComponent.vue'
import NavigationBarComponent from './components/NavigationBarComponent.vue';

</script>