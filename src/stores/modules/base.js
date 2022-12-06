import axios from 'axios';
import * as url from '../url-config';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

export default {
    namespaced: true,
    state () {
        return {
            loading: false,
        }
    },

    mutations: {
        SET_LOADING_STATE(state, payload){
            state.loading = payload;
        },
    },

    actions: {
        
    }
}