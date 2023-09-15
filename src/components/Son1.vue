<template>
  <div class="box">
    <h2>Son1 子组件 -{{ $store.state.count }}</h2>
    从vuex中获取的值: <label> {{$store.getters.largeThen5List}}</label>
    <br />
    从vuex moudle中获取的值: <label> {{$store.getters['user/UpperCaseName']}}</label>
    <br />
    <h2>moudle 的使用 {{userInfo}} </h2><br />
    <h2>moudle 的使用 {{theme}} - {{desc}} </h2>
    <button @click="handleAdd">值 + 1</button>
    <button @click="setAsyncCount">1秒钟之后改成5555</button>
  </div>
</template>
  
  <script>
import { mapState } from 'vuex';
export default {
  name: "Son1Com",
  created() {
    console.log("Son1----->" + this.$store.state.count);
  },

  methods: {
    handleAdd() {
      // this.$store.state.count++
      this.$store.commit("addCount", 10);
    },
    setAsyncCount() {
      this.$store.dispatch("setAsyncCount", 5555);
    },
  },
  computed:{
    ...mapState('user',['userInfo']),
    ...mapState('setting',['theme','desc']),
  }
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
  