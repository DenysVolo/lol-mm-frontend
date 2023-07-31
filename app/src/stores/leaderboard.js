import { ref } from "vue";
import axios from "axios";

const useLeaderboardStore = () => {
    const leaderboard = ref([]);

    async function fetchLeaderboard() {
        try {
            const response = await axios.get("http://127.0.0.1:8081/get_leaderboard");
            leaderboard.value = response.data.data;
        } catch (error) {
            alert(error);
            console.log(error);
        }
    }

    return {
        leaderboard,
        fetchLeaderboard,
    };
};

export default useLeaderboardStore;
