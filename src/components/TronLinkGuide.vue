<template>
<div className='tronLink' onClick={ openTronLink }>
      <div className='info'>
          <h1>TronLink Required {{ $route.params.installed }}</h1>
          <p>
              To create a post or tip others you must install TronLink. TronLink is a TRON wallet for the browser
              that can be <a href={ WEBSTORE_URL } target='_blank' rel='noopener noreferrer'>installed from the Chrome Webstore</a>.
              Once installed, return back and refresh the page.
          </p>
      </div>
</div>
</template>

<script>
const WEBSTORE_URL = 'https://chrome.google.com/webstore/detail/ibnejdfjmmkpcnlpebklmnkoeoihofec/';
export default {
  name: 'TronLinkGuide',
  methods: {
    openTronLink() {
      window.open(WEBSTORE_URL, '_blank');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1 {
  font-weight: normal;
  color: red;
  margin-bottom:40px;
}

button {
  width: 130px;
  height: 40px;
  font-size: large;
  border-radius: 0.9rem;
  background-color: red;
  color: #FFF;
}
</style>
