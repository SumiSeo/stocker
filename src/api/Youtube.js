import axios from "axios";

const KEY = "AIzaSyANDv1sdLX1n9V0dV6rI1sS7E-izPXtSUs";


export default axios.create({
    baseURL :"https://www.googleapis.com/youtube/v3",
    params:{
        part:"snippet",
        type:"video",
        maxResults:7,
        key: KEY
    }
});

