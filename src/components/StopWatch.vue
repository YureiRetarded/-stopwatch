<template>
    <span>{{h}}:{{m}}:{{s}}:{{ms}}</span>
    <div>
        <button @click="StopWatch('start')">Start</button>
        <button @click="StopWatch('stop')">Stop</button>
        <button @click="StopWatch('reset')">Reset</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            ms:0,
            s:0,
            m:0,
            h:0,
            interval:''
        }
    },
    methods: {
        StopWatch(action){
            try{
                let startStopWatch = () =>{
                this.ms++
            }
            if(action=='start'){
                clearInterval(this.interval);
                this.interval = setInterval(startStopWatch, 10);

            }
            else if(action=='stop'){
                clearInterval(this.interval);
            }
            else if(action=='reset'){
                clearInterval(this.interval);
                this.ms=0
                this.s=0
                this.m=0
                this.h=0
            }
            }
            catch{

            }
            
        }
    }
}

</script>
<style scoped>
    
</style>