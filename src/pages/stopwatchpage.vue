<template lang="">
    <div>
        Страница с секундомерами
    </div>
    <div>
        <control-stop-watches/>
    </div>
    <div>
        <stop-watch-list/>
    </div>
</template>
<script>

import StopWatchList from '@/components/StopWatchList'
import ControlStopWatches from '@/components/ControlStopWatches'
export default {
    components:{
        StopWatchList,
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