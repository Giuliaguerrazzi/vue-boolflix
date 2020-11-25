const app = new Vue({
    el: '#app',
    data: {
        searchFilm: '',
        films: [],
    },
    created() {
        axios.get('https://api.themoviedb.org/3/search/movie',{
            params: {
                api_key: 'eeb0db4d0d02bb04c55f4ea1c6ff8917',
                query: 'ritorno al futuro'
            }
        })
        .catch (error => {
            console.log(error);
        })
    }
}); 