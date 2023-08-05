<script setup>
import { computed, onMounted, ref } from "vue";
import { useLeaderboardStore } from "../stores/leaderboard.js";

const leaderboardStore = useLeaderboardStore();

onMounted(async () => {
  await leaderboardStore.fetchLeaderboard();
});

const refreshLeaderboard = async () => {
  await leaderboardStore.fetchLeaderboard();
};
</script>

<template>
  <div class="w-5/6 mx-auto md:w-1/2 bg-cus-med-grey px-1 py-4 rounded-md font-bebas drop-shadow-xl">
    <div class="text-sm md:text-xl grid grid-cols-3 text-center py-2 px-4 mb-2 font-bold bg-cus-dark-grey rounded-md tracking-wider">
      <div class="text-left">Position</div>
      <div class="text-left">Team</div>

      <div class="grid grid-cols-3 gap-1 tracking-wider">
        <div>Wins</div>
        <div>Losses</div>
        <div>Points</div>
      </div>
    </div>
    <div v-for="(team, index) in leaderboardStore.leaderboard"
         class="text-sm grid grid-cols-3 text-center md:text-xl py-2 px-4 rounded-sm"
         :class="index % 2 === 0 ? 'bg-cus-light-grey hover:bg-cus-light-grey-hover hover:drop-shadow-xl'
         : 'bg-cus-med-grey hover:bg-cus-med-grey-hover hover:drop-shadow-xl' "
    >
      <div class="text-left">{{ index + 1 }} </div>

      <div class="flex items-center">
        <img class="rounded-full w-8 h-8 mr-2" :src="team.logo">
        <div class="text-left"> {{ team.name }} </div>
      </div>

      <div class="grid grid-cols-3 gap-1">
        <div> {{ team.wins }} </div>
        <div> {{ team.losses }} </div>
        <div> {{ team.points }} </div>
      </div>
    </div>
  </div>
  <div class="bg-cus-dark-grey w-5/6 md:w-1/2 mx-auto rounded-md mt-2 py-2 px-2 text-right">
    <button class="bg-cus-light-grey py-2 px-4 rounded-md hover:bg-cus-light-grey-hover hover:drop-shadow-xl font-bebas border-2 border-cus-light-grey-hover hover:border-cus-light-grey" @click="refreshLeaderboard()">Refresh</button>
  </div>

</template>