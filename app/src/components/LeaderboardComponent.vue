<script setup>
import { ref, onMounted } from "vue";
import { useTeamsStore } from '../stores/teamsStore'

const teamsStore = useTeamsStore();

//TODO: Maybe change store name

</script>

<template>
  <div class="w-5/6 mx-auto md:w-2/3 bg-cus-med-grey px-1 py-4 rounded-md font-bebas drop-shadow-xl border border-cus-yellow">
    <div class="text-sm md:text-xl grid grid-cols-5 gap-2 text-center py-2 px-4 font-bold">
      <div class="text-left">Position</div>
      <div class="text-left">Team</div>
      <div>Wins</div>
      <div>Losses</div>
      <div>Points</div>
    </div>
    <div v-for="(team, index) in teamsStore.teams" class="text-sm grid grid-cols-5 gap-2 text-center md:text-xl py-2 px-4 rounded-sm" :class="index % 2 === 0 ? 'bg-cus-light-grey hover:bg-cus-light-grey-hover hover:drop-shadow-xl' : 'bg-cus-med-grey hover:bg-cus-med-grey-hover hover:drop-shadow-xl' ">
      <div class="text-left">{{ index + 1 }} </div>
      <div class="text-left">{{ team.name }}</div>
      <div> 3 </div>
      <div> 1 </div>
      <div >{{ team.points }}</div>
    </div>
  </div>
  <button @click="teamsStore.testIncrement(); teamsStore.testAddTeam()">Add To Score and Add Team</button>
</template>