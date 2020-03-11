export const BASIC_URL = `https://api.themoviedb.org/3/`
export const API_KEY = 'api_key=47e345218071181a1ca1d4eb072cc0cf'
export const LANGUAGE = (lang: string) => `&language=${lang}`
export const GET_IMAGE = (link: string, width: number) => `https://image.tmdb.org/t/p/w${width}/${link}`

export const GENRES = `genre/movie/list?${API_KEY}&language=ru-RU`
export const FILMS = ``