<template>
  <div class="lz-wiget-ip">
      {{ wigetIp.country }}-{{wigetIp.city}}-{{wigetIp.isp}}
  </div>
</template>

<script>
  import { getWigetIp } from '../../api/index'
  export default {
    name: "LzWigetIp",
    data() {
      return {
          wigetIp: {

          }
      }
    },
    props: {
      
    },
    created() {
        this.getIp()
    },
    methods: {
      getIp() {
        getWigetIp({t: new Date().getTime()}).then(res => {
            if(res.code === '0') {
                this.wigetIp = res.result;
                this.$emit('getIp', res.result)
            }
        })
      }
    }
  }
</script>



<style lang="less">
 .lz-wiget-ip{
     display: inline-block;
 } 

</style>