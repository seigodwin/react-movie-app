const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

console.log("API_KEY:", API_KEY);
console.log("BASE_URL:", BASE_URL);

export async function getPopularMovies() {
    const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}`;
    console.log("Fetching from:", url);
    const response = await fetch(url);
    
    if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    return data.results;
}

export async function searchMovies(query: string) {
    const response = 
    await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
}