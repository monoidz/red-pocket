<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <button @click="goS">{{ txt1 }}</button>
    <button @click="goQ">{{ txt2 }}</button>
  </div>
</template>

<script>
const TronWeb = require("tronweb");
import Utils from "../utils";

const FOUNDATION_ADDRESS = 'TWiWt5SEDzaEqS6kE5gandWMNfxR2B5xzg';

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '欢迎来到红包广场^_^',
      txt1: '发红包',
      txt2: '有效红包列表',
      loading: false,

      tronWeb: {
        installed: false,
        loggedin: false
      }
    }
  },
  mounted(){
    this.loading = true;


    this.fetchData();
  },
  methods:{
    goS(){
      this.$router.push('/Send')
    },
    goQ(){
      this.$router.push('/Query')
    },
    goTronLinkGuide(){
      this.$router.push('/TronLinkGuide')
    },
    async fetchData() {
      console.log("I am fetching data......")
    },
    async checkTronLink() {
      await new Promise(resolve => {
        const tronWebState = {
            installed: !!window.tronWeb,
            loggedIn: window.tronWeb && window.tronWeb.ready
        };

        if(tronWebState.installed) {
            this.tronWeb = tronWebState;
            return resolve();
        }

        let tries = 0;

        const timer = setInterval(() => {
          if(tries >= 10) {
              const TRONGRID_API = 'https://api.trongrid.io';

              window.tronWeb = new TronWeb(
                  TRONGRID_API,
                  TRONGRID_API,
                  TRONGRID_API
              );

              this.tronWeb.installed = false;
              this.tronWeb.loggedIn = false;

              clearInterval(timer);
              return resolve();
          }

          tronWebState.installed = !!window.tronWeb;
          tronWebState.loggedIn = window.tronWeb && window.tronWeb.ready;

          if(!tronWebState.installed)
              return tries++;

          this.tronWeb = tronWebState

          resolve();
        }, 100);
      });

      if(!this.state.tronWeb.loggedIn) {
        // Set default address (foundation address) used for contract calls
        // Directly overwrites the address object as TronLink disabled the
        // function call
        window.tronWeb.defaultAddress = {
            hex: window.tronWeb.address.toHex(FOUNDATION_ADDRESS),
            base58: FOUNDATION_ADDRESS
        };

        window.tronWeb.on('addressChanged', () => {
            if(this.tronWeb.loggedIn)
                return;

            this.tronWeb.installed = true;
            this.tronWeb.loggedIn = true;
        });
      }
      await Utils.setTronWeb(window.tronWeb);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tronLink {
    margin: 0 10px;
    background: #ffffff;
    border-radius: 4px;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
    padding: 40px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;

    h1 {
        margin: 0;
        margin-bottom: 10px;
    }

    p {
        padding: 0;
        margin: 0;
    }

    .info {
        flex: 1;
    }

    .logo {
        margin-left: 30px;
    }
}

.tronLink.hover {
    transition: all 200ms ease;
    cursor: pointer;
}

.tronLink:hover {
    transform: translateY(-2px);
    box-shadow: 0px 4px 9px 0px rgba(0, 0, 0, 0.12);
}
</style>
