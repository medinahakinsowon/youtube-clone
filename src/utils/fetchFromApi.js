
import axios from 'axios'

const BASE_URL =  'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: '50', 
  },
  headers: {
    'X-RapidAPI-Key': 'dd55fa66acmsh303545ed4653e8cp14178ajsnbfc7dec7a0ba',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromApi = async (url) => {
   const {data} = await axios.get(`${BASE_URL}/${url}`,options)
   return data;
}