import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({

    strict: true,//开启严格模式
    state: {
        count: 100,
        title: "我是title",
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
    }

})

export default store