<template>
  <div id="app">
    <h1>根组件 -{{ count }} - {{ title }}</h1>
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
      this.$store.commit("inputCount", num);
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
