<template>
  <div id="app">
    <h1>根组件 -{{ count }} - {{ title }}</h1>
    <h1>
      用户信息 - {{ $store.state.user.userInfo.name }} -
      {{ $store.state.user.userInfo.age }} - {{ $store.state.user.msg }}
    </h1>
    <br />
    <button @click="updeteUserInfo">更新用户信息</button>
    <Son1></Son1>
    <input type="text" :value="count" @input="handleInput" />
    <hr />
    <Son2></Son2>
  </div>
</template>

<script>
import Son1 from "./components/Son1.vue";
import Son2 from "./components/Son2.vue";
import { mapState } from "vuex";
import { mapMutations } from "vuex";

export default {
  name: "App",
  components: {
    Son1,
    Son2,
  },
  created() {
    console.log(this.$store.state.count);
  },
  computed: {
    ...mapState(["count", "title"]),
  },
  methods: {
    handleInput(e) {
      const num = +e.target.value;
      // this.$store.commit("inputCount", num);
      this.inputCount(num);

      // this.$store.commit('user/updateMsg','牛逼啊')

      this.updateMsg("瞅啥瞅");
    },
    ...mapMutations(["inputCount"]),
    ...mapMutations("user", ["updateMsg"]),

    updeteUserInfo() {
      this.$store.dispatch("user/updateUserInfo", {
        name: "杨群",
        age: 22,
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
