const API_KEY = "88aedaceb0fb0faf5cba7bbd445835c2";
export default{
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&langauge=en-us`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&langauge=en-us`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&langauge=en-us&with-genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&langauge=en-us&with-genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&langauge=en-us&with-genres=27`,
    fetchRomanticMovies:`/discover/movie?api_key=${API_KEY}&langauge=en-us&with-genres=1079`,
    fetchMysteryMovies:`/discover/movie?api_key=${API_KEY}&langauge=en-us&with-genres=9048`,
    fetchSciFiMovies:`/discover/movie?api_key=${API_KEY}&langauge=en-us&with-genres=878`,
    fetchWesternMovies:`/discover/movie?api_key=${API_KEY}&langauge=en-us&with-genres=37`,

    fetchAnimationMovies:`/discover/movie?api_key=${API_KEY}&langauge=en-us&with-genres=38`,
    fetchTVMovies:`/discover/movie?api_key=${API_KEY}&langauge=en-us&with-genres=10770`,

}