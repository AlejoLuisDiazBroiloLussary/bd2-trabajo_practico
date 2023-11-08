import axios from "axios"

export const getRandomDataApi = async () =>{
    const url="https://random-data-api.com/api/v2/beers";
    const response = await axios.get(url)

    return response.data;}

  
