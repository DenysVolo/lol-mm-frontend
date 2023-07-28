<template>
    <div>
        <h1>Name of tournamement</h1>

        <li v-for="team in teams" class="border border-gray-900 bg-gray-500 rounded-md p-5 flex justify-between items-center h-12">
            {{ team.name }}, {{ team.points }}, {{ team.country }}
        </li>
        
    </div>
</template>

<script setup>

import { ref, onMounted } from "vue";

const teams = ref([]);

const fetchData = () => {
    fetch('http://127.0.0.1:8081/get_leaderboard', {
                    method: "GET"
                })
                .then((response) => {
                    response.json().then((data) => {
                        this.teams = data.data;
                        console.log(data);
                    });
                })
                .catch((err) => {
                    console.error(err);
                });
}

onMounted (() => this.fetchData());

</script>