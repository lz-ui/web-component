<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <LzSwitch v-model="isSwitch">
      <span class="text">{{switchText}}</span>
    </LzSwitch>
    <LzWigetIp></LzWigetIp>
  </div>
</template>

<script>
import LzSwitch from './packages/switch/switch.vue'
import LzWigetIp from './packages/wiget-ip/wiget-ip.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isSwitch: true,
    }
  },
  components:{
    LzSwitch,
    LzWigetIp
  },
  computed: {
    switchText() {
      return this.isSwitch ? '开' : '关';
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
