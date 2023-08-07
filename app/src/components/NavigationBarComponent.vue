<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="py-12 bg-cus-dark-grey">
    <nav>
      <ul class="md:flex place-content-center mr-10">
        <li class="md:mx-4">
          <router-link class="text-3xl hover:text-cus-gold font-bold font-bebas tracking-wider text-cus-white" :to="this.$router.getRoutes()[0].path"> {{ this.$router.getRoutes()[0].name }} </router-link>
        </li>
        <li class="md:mx-4">
          <router-link class="text-3xl hover:text-cus-gold font-bold font-bebas tracking-wider text-cus-white" :to="this.$router.getRoutes()[1].path"> {{ this.$router.getRoutes()[1].name }} </router-link>
        </li>
        <li class="md:mx-4">
          <router-link class="text-3xl hover:text-cus-gold font-bold font-bebas tracking-wider text-cus-white" :to="this.$router.getRoutes()[2].path"> {{ this.$router.getRoutes()[2].name }} </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>