import { defineStore } from 'pinia'
import axios from "axios"
export const useLeaderboardStore = defineStore("leaderboard", {
    state: () => ({
        leaderboard: [],
    }),
    getters: {
        getLeaderboard(state){
            return state.leaderboard
        }
    },
    actions: {
        async fetchLeaderboard() {
            try {
                const data = await axios.get(`http://127.0.0.1:8081/get_leaderboard`);
                this.leaderboard = data.data.data
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        }
    },
})