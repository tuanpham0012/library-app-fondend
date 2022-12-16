import axios from '../axios-config';
import * as url from '../url-config';

export default {
    namespaced: true,
    state () {
        return {
            loading: true,
            token: null,
            authors: null,
            author: null,
            countries: null,
        }
    },

    mutations: {
        SET_LOADING_STATE(state, payload){
            state.loading = payload;
        },
        SET_AUTHOR_LIST(state, payload){
            state.authors = payload;
        },
        SET_AUTHOR_DETAIL(state, payload){
            state.author = payload;
        },
        SET_COUNTRIES_LIST(state, payload){
            state.countries = payload;
        }
    },

    actions: {
        async getListAuthor({commit}, page = 1, per_page = 30){
            commit('SET_LOADING_STATE', true);
            await axios({
                method: 'GET',
                url: url.url_author.RESOURCE,
                headers: {
                    'Accept': 'application/json'
                  }
            }).then(res => {
                console.log(res.data);
                commit('SET_AUTHOR_LIST', res.data);
                commit('SET_LOADING_STATE', false);
              }).catch(err => {
                console.log(err);
              })
        },

        async getListCountries({commit}){
            // commit('SET_LOADING_STATE', true);
            await axios({
                method: 'GET',
                url: 'http://tenant-api.test/api/v1/countries/get_all', //url.url_country.RESOURCE, // 
            }).then(res => {
                console.log(res.data);
                commit('SET_COUNTRIES_LIST', res.data);
                // commit('SET_LOADING_STATE', false);
              }).catch(err => {
                console.log(err);
              })
        }
    }
}