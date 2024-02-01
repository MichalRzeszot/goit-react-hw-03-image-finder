const BASE_URL = 'https://pixabay.com/api';

const fetchImages = async (query, page = 1, perPage = 12) => {
  const url = `${BASE_URL}/?q=${encodeURIComponent(
    query
  )}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`;

  try {
    const response = await fetch(url);
    const { hits } = await response.json();
    return hits;
  } catch (error) {
    console.error('Error while fetching images:', error);
    throw error;
  }
};

export default fetchImages;
