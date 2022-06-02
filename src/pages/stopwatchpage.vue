<template lang="">
    <div>
        Страница с секундомерами
        <control-stop-watches/>
    </div>
    <div class="container">
        <stop-watch
            v-for="n in $store.state.count"
            :key="n"
        />
    </div>
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