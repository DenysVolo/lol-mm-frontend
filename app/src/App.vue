<template>
  <div id="app">
<!--navbar-->
    <div class="py-12 bg-cus-med-grey">
      <nav>
        <ul class="md:flex place-content-center mr-10">
          <li class="md:mx-4" v-for="link in links">
            <router-link class="text-3xl hover:text-cus-gold font-bold font-bebas tracking-wider" :to="link.link"> {{ link.name }} </router-link>
          </li>
        </ul>
      </nav>
    </div>
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

  import { RouterLink } from 'vue-router'

  const links = [
    { name: "Home", link: "/"},
    { name: "Leaderboard", link: "/leaderboard"},
    { name: "Teams", link: "/teams"}
  ]

</script>