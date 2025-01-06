import axios from "axios";

export const apiClient = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTMzYmE2NmQzZWVlZjJhZjAyMmFkYTlkZjVkYTk4YyIsIm5iZiI6MTczNTk4MTQxMy4zMDMsInN1YiI6IjY3NzhmOTY1YzExZWU2MWRkODc0Y2ZmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._aDl6EHfYmqzzgzCqe98CD8C0MJQyaqm-0doUGibhbg'
    }
});


