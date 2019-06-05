import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        header: 'SmartCalculator',
        backButton: false
    },
    mutations: {
        setHeader (state, header) {
            state.header = header
            state.backButton = true
        },
        resetHeader (state) {
            state.header = 'SmartCalculator'
            state.backButton = false
        }
    },
    actions: {

    }
})
