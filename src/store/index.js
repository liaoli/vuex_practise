import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({

    strict: true,//开启严格模式
    state: {
        count: 100,
        title: "我是title",
        list: [1, 4, 6, 8, 9, 3, 4, 7]
    },
    mutations: {
        addCount(state, num) {
            state.count += num
        },
        subtractCount(state, num) {
            state.count -= num
        },
        inputCount(state, num) {
            state.count = num
        },
        changeCount(state, num) {
            state.count = num
        }

    },
    actions: {
        setAsyncCount(context, num) {
            setTimeout(() => {
                context.commit('changeCount', num)
            }, 1000)
        }
    },
    getters: {
        largeThen5List: state =>
            state.list.filter(item => item > 5)

    }


})

export default store