export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': 'd9b1bbb733msh2563f4a1059745cp16f528jsn18e1dfccf72f'
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd9b1bbb733msh2563f4a1059745cp16f528jsn18e1dfccf72f',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};

export default fetchData;