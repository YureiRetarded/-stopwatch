<template>
    <control-stop-watches/>
    
    <stop-watch
    v-for="n in $store.state.count"
    />
    

</template>
<script>
import StopWatch from '@/components/StopWatch'
import ControlStopWatches from '@/components/ControlStopWatches'
export default {
    components:{
        StopWatch,
        ControlStopWatches
    },
    data(){
        return{

        }
    }
}
</script>
<style lang="">
    
</style>