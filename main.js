const app = new Vue({
    el: '#app',
    data: {
        searchInput: '',
        films: [],
        series: [],
        availableFlags: ['it','en'],
    },
    methods: {

        getResult() {
            this.getFilms();
            this.getSeries();

            this.searchInput= '';
        },

        getFilms() {
            axios.get('https://api.themoviedb.org/3/search/movie',{
                params: {
                    api_key: 'eeb0db4d0d02bb04c55f4ea1c6ff8917',
                    language: 'it-IT',
                    query: this.searchInput,
                }
            })
            .then (result => {
                console.log(result.data)

                this.films = result.data.results;
                console.log(result.data.results);
            })
            .catch (error => {
                console.log(error);
            });

        
        },

        getSeries() {
            axios.get('https://api.themoviedb.org/3/search/tv',{
                params: {
                    api_key: 'eeb0db4d0d02bb04c55f4ea1c6ff8917',
                    language: 'it-IT',
                    query: this.searchInput,
                }
            })
            .then (result => {
                console.log(result.data)

                this.series = result.data.results;
                console.log(this.series);
            })
            .catch (error => {
                console.log(error);
            });


        },
       
        getVote(vote) {
            return Math.ceil(vote / 2);
        },

        langFlag(lang){
            return this.availableFlags.includes(lang)
        },

        getFlag(lang){
            return `${lang}.png`
        },
    }
}); 