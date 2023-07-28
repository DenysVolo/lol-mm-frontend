<script setup>
import { ref, onMounted } from "vue";
import { useTeamsStore } from '../stores/teamsStore'

const teamsStore = useTeamsStore();

//TODO: Maybe change store name

</script>

<template>
    <div class="mx-auto w-5/6 bg-cus-med-grey px-1 py-4 rounded-md font-bebas">
      <div class="grid grid-cols-4 gap-2 text-center py-2 px-4 text-cus-yellow font-bold text-2xl">
        <div>Position</div>
        <div>Team Name</div>
        <div>Country</div>
        <div>Points</div>
      </div>
      <div v-for="(team, index) in teamsStore.teams" class="grid grid-cols-4 gap-2 text-center text-xl py-2 px-4 text-cus-yellow rounded-sm" :class="index % 2 === 0 ? 'bg-cus-light-grey' : 'bg-cus-med-grey'">
        <div>{{ index + 1}} </div>
        <div>{{ team.name }}</div>
        <div>{{ team.country }}</div>
        <div>{{ team.points }}</div>
      </div>
    </div>
    <button class="mx-auto" @click="teamsStore.testIncrement(); teamsStore.testAddTeam()">Add To Score and Add Team</button>
</template>