<template>
  <div class="box">
    <h2>Son1 子组件 -{{ $store.state.count }}</h2>
    从vuex中获取的值: <label></label>
    <br />
    <button @click="handleAdd">值 + 1</button>
  </div>
</template>
  
  <script>
export default {
  name: "Son1Com",
  created() {
    console.log("Son1----->" + this.$store.state.count);
  },

  methods: {
    handleAdd() {
      // this.$store.state.count++
      this.$store.commit("addCount",10);
    },
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
  