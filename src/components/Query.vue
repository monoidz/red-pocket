<template>
  <div class="send">
    <h1>{{ msg }}</h1>
    <div>
      <table>
        <tr v-for='list in lists'>
          <td>{{list.userId}}</td>
          <td>红包金额：{{list.total_money}}</td>
          <td>抢红包人数：{{list.total_number}}</td>
          <td>红包地址：<input type="text" name="address" v-model='address' v-on:input='listenAdress'></td>
          <td><button @click="add" onclick="">抢红包</button></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
const TronWeb = require("tronweb");
const fullNode = "https://api.shasta.trongrid.io";
const solidityNode = "https://api.shasta.trongrid.io";
const eventServer = "https://api.shasta.trongrid.io";
const privateKey = "bd8d98aab1b44f9cd7bca3099e32dfc7f155e2569b20268cedbe4dc3082e36ad"


const tronWeb = new TronWeb(
  fullNode, 
  solidityNode, 
  eventServer, 
  privateKey
);
const MyContract = require("../../build/contracts/MyContract.json");
const abi = MyContract.abi;

export default {
  name: 'Send',
  data () {
    return {
      msg: '有效红包列表',
      txt1: '总金额',
      txt2: '红包总数',
      txt3: '塞钱进红包',
      lists: [
        {
          userId: '毛线团儿',
          total_money: '100',
          total_number: '10',
        },
        {
          userId: '毛线圈儿',
          total_money: '100',
          total_number: '1',
        }        
      ],
      address: ''
    }
  },
  mounted() {
    this.getValue();
  },
  methods:{
    listenAdress(e){
      this.address = e.target.value;
    },
    add(){
      if (this.address.length==0) {
        alert('请输入有效的红包地址');
      }else{
        alert('已加入抢红包队列');
        this.total_number++;
      }
    },
    async getValue() {
      let contractInstance = await tronWeb.contract().at("TE6TkZr7aSkrbECUEAzpj3zTGT7W7AwshB");
      let currentValue = await contractInstance.get().call();
      //this.msg = currentValue; 

      const address = 'TX9Gvw9dtfUi57VanG426ktcXmVRes8PDM';
      const balance = await tronWeb.trx.getBalance(address);
      this.msg = balance
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
div {
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}
table{
  width: 100%;
  justify-content: space-around;
}
td {
  vertical-align: middle;
  text-align: center;
}

button {
  width: 90px;
  height: 35px;
  font-size: large;
  border-radius: 0.5rem;
  background-color: red;
  color: #FFF;
}
</style>