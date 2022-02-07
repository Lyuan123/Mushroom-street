<template>
  <div class="toast" v-show="isshow">
      <div>{{message}}</div>
  </div>
</template>

<script>
export default {
    // props:{
    //     message:{
    //         type:Sring,
    //         default:''
    //     },
    //     show:{
    //         type:Boolean,
    //         default:false
    //     }
    // },
    data() {
        return {
            message: '',
            isshow:false
        };
    },
    methods: {
        show(message,duration=2000) {
            this.isshow = true
            this.message = message
            setTimeout(() =>{
                this.isshow=false;
                this.message=''
            },duration)
        },
    },

}
</script>

<style scoped>
.toast{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 8px 10px;
    z-index: 999;
    color: #fff;
    background-color: rgb(0, 0, 0,.75);
}
</style>