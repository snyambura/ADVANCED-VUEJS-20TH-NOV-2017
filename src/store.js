import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store= new Vuex.Store({
    state : {
        comments: []
    },
    actions : {
        ADD_COMMENT: function({ commit }, new_comment)
        {
            var set_new ={
                comment: new_comment,
                status:false
            };
            commit('ADD_COMMENT_MUTATION', set_new);
        }

    },

    mutations : {
        ADD_COMMENT_MUTATION: function(state, new_comment)
        {
            state.comments.push(new_comment);
        }

    },
    getters: {
        not_done: state => {
            var filtered = state.comments.filter(function(el)
            {
                return el.status === false;
            });
            return filtered;
        },
        done: state => {
            var filtered = state.comments.filter(function(el)
            {
                return el.status === true;
            });
            return filtered;
        }
    }
});

export default  store;