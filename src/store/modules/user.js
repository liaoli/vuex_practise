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
    },

    setUser(state, userInfo){
        state.userInfo = userInfo
    }

}
const actions = {
    updateUserInfo(context, userInfo) {
        setTimeout(() => {
          
            context.commit('setUser',userInfo)

        }, 500)

    }
}
const getters = {
    UpperCaseName(state) {
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
