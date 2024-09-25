export async function getData(query) {
    const BASE_URL = 'https://api.spoonacular.com/recipes/complexSearch';
    const API_KEY = '42286a83c7fb42dd94a90b11b7866847';
    const number = '20';

    const URL = `${BASE_URL}?query=${query}&apiKey=${API_KEY}&number=${number}`;

    try {
        const responce = await fetch(URL);

        if (!responce.ok) {
            throw new Error('Network issue!');
        }

        const data = await responce.json();

        return data;
    }
    catch(err) {
        alert(err);
        return null;
    }
}