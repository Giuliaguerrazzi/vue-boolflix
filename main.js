const app = new Vue({
    el: '#app',
    data: {
        searchInput: '',
        films: [],
        series: [],
    },
    methods: {

        getFilms() {
            axios.get('https://api.themoviedb.org/3/search/movie',{
                params: {
                    api_key: 'eeb0db4d0d02bb04c55f4ea1c6ff8917',
                    query: this.searchInput,
                }
            })
            .then (result => {
                console.log(result.data)

                this.films = result.data.results;
            })
            .catch (error => {
                console.log(error);
            });

           this.searchFilm= '';
        },

        getSeries() {
            axios.get('https://api.themoviedb.org/3/search/movie',{
                params: {
                    api_key: 'eeb0db4d0d02bb04c55f4ea1c6ff8917',
                    query: this.searchInput,
                }
            })
            .then (result => {
                console.log(result.data)

                this.series = result.data.results;
            })
            .catch (error => {
                console.log(error);
            });

           this.searchFilm= '';
        },
       
        getVote(vote) {
            return Math.ceil(vote / 2);
        }
    }
}); 