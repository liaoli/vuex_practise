const state = {
    userInfo: {
        name: 'yangqun',
        age: 22
    },
    msg: 'message'
}

const mutations = {
    updateMsg(state, msg) {
        state.msg = msg
    }
}
const actions = {}
const getters = {
    UpperCaseName(state){
        return state.userInfo.name.toUpperCase()
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
