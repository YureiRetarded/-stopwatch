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
            d:0,
            interval:''
        }
    },
    methods: {
        StopWatch(action){
            try{
                let startStopWatch = () =>{
                this.ms++
                
                //ms
                if(this.ms<=9){
                    this.ms='0'+this.ms
                }
                if(this.ms>99){
                    this.s++
                    this.ms=0
                }

                //s
                if(this.s>60){
                    this.m++
                    this.s=0
                    this.ms=0
                }

                //m
                if(this.m>60){
                    this.h++
                    this.m=0
                    this.s=0
                    this.ms=0
                }

                //h
                if(this.h>24){
                    this.d++
                    this.h=0
                    this.m=0
                    this.s=0
                    this.ms=0
                     //(I don't know, who will use stopwatch for days and why)

                }
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