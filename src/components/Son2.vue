<template>
  <div class="box">
    <h2>Son2 子组件</h2>
    从vuex中获取的值:<label></label>
    <br />
    <button @click="subtractCount">值 - 1</button>
    <button @click="setAsyncCount(300)">1秒钟之后改成300</button>
  </div>
</template>
  
  <script>
import { mapActions } from "vuex";
export default {
  name: "Son2Com",
  methods: {
    subtractCount() {
      this.$store.commit("subtractCount", 5);
    },
    ...mapActions(["setAsyncCount"]),
  },
};
</script>
  
  <style lang="css" scoped>
.box {
  border: 3px solid #ccc;
  width: 400px;
  padding: 10px;
  margin: 20px;
}
h2 {
  margin-top: 10px;
}
</style>