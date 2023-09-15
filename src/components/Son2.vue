<template>
  <div class="box">
    <h2>Son2 子组件</h2>
    从vuex中获取的值:<label>{{largeThen5List}}</label>
    <br />
    从vuex moudle 中获取的值:<label>{{UpperCaseName}}</label>
    <br />
    从vuex moudle 中获取的值:<label>{{userInfo}}</label>
    <br />
    <button @click="subtractCount">值 - 1</button>
  
    <button @click="updateUserInfo({name:'群妹妹',age:23})">修改用户信息</button>
    <button @click="setAsyncCount(300)">1秒钟之后改成300</button>
  </div>
</template>
  
  <script>
import { mapActions ,mapGetters,mapState } from "vuex";


export default {
  name: "Son2Com",
  methods: {
    subtractCount() {
      this.$store.commit("subtractCount", 5);
    },
    ...mapActions(["setAsyncCount"]),
    ...mapActions('user',["updateUserInfo"]),
  },

  computed:{
    ...mapGetters(['largeThen5List']),
    ...mapGetters('user',['UpperCaseName']),
    ...mapState('user',['userInfo'])
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