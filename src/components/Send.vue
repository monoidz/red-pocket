<template>
  <div class="send">
    <h1>{{ msg }}</h1>
    <div>
      {{ txt1 }}: <input type="text" name="total" v-model='total_money' v-on:input='listenMoney'><br>
      {{ txt2 }}: <input type="text" name="amount" v-model='total_amount' v-on:input='listenAmount'><br>
      <button @click="sendSuccess">{{ txt3 }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Send',
  data () {
    return {
      msg: '发红包',
      txt1: '总金额',
      txt2: '红包总数',
      txt3: '塞钱进红包',
      total_money: '',
      total_amount: ''
    }
  },
  methods:{
    listenMoney(e){
      this.total_money = e.target.value;
    },
    listenAmount(e){
      this.total_amount = e.target.value;
    },
    sendSuccess(){
      if(this.total_amount.length==0 || this.total_money.length==0){
        alert("输入错误！");
      } else{
        alert("红包已发送！");
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1 {
  font-weight: normal;
  color: red;
}

input{
  margin-top: 30px;
}

button {
  width: 130px;
  height: 40px;
  font-size: large;
  border-radius: 0.5rem;
  background-color: red;
  color: #FFF;
  margin-top:50px;
}
</style>