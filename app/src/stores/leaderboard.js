import { ref } from "vue";
import axios from "axios";
import { defineStore } from "pinia";

export const useLeaderboardStore = defineStore('leaderboardStore', () => {
    const leaderboard = ref([]);

    async function fetchLeaderboard() {
        try {
            const response = await axios.get("http://127.0.0.1:8081/get-leaderboard");
            leaderboard.value = response.data;
        } catch (error) {
            alert(error);
            console.log(error);
        }
    }

    return {
        leaderboard,
        fetchLeaderboard,
    };
});
