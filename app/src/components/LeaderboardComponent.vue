<script setup>
import { ref, onMounted } from "vue";
import { useTeamsStore } from '../stores/teamsStore'

const teamsStore = useTeamsStore();

//TODO: Maybe change store name

</script>

<template>
    <div>
        <h1>Name of tournamement</h1>

        <li v-for="team in teamsStore.teams" class="border border-gray-900 bg-gray-500 rounded-md p-5 flex justify-between items-center h-12">
            {{ team.name }}, {{ team.points }}, {{ team.country }}
        </li>

        <button @click="teamsStore.testIncrement(); teamsStore.testAddTeam()">Add To Score and Add Team</button>
        
    </div>
</template>