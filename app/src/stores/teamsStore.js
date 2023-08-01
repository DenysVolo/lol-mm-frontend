import { defineStore } from 'pinia'
import { ref, onMounted } from "vue";
import axios from 'axios';

export const useTeamsStore = defineStore('teams', () => {
    const teams = ref([])

    onMounted(() => {
      // Fetch data or perform any other actions here
      fetchTeams(); // You can call a fetchData function here or perform any other logic
  });

    function fetchTeams() {
      axios.get('http://127.0.0.1:8081/get_leaderboard')
            .then((response) => {
                teams.value = response.data;
                console.log("Recieved Team Data")
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }

      function testIncrement() {
        teams.value[0].points++;
      }

      function testAddTeam() {
        teams.value.push({team_id: "66", name: "Damian", points: 140, country: "PL"});
      }

      return {teams, testIncrement, testAddTeam}
})
