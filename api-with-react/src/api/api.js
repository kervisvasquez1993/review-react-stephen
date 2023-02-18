import axios from "axios";

export const searchImage = async (query = "") => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization:
                "Client-ID gz1SHzIEt5QHdimgnnjUHX_ExjJRmzgoOK6Yubju4lA",
        },
        params: {
            query: query,
        },
    });
    return response.data.results;
};
