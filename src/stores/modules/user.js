import axios from 'axios';
import * as url from '../url-config';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

export default {
    namespaced: true,
    state () {
        return {
            loading: true,
            token: null,
            authors: null,
            author: null,
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
        }
    }
}