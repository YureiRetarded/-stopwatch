<template lang>
    <div>
        <div class="container">
        <stop-watch
            v-for="sw in stopwatches"
            :stopwatch="sw"
            :key="sw.id"
        />
    </div>
    </div>
</template>
<script>
import StopWatch from '@/components/StopWatch'
import {mapState} from "vuex"
export default {
    components:{
        StopWatch
    },
    data(){
        return{

        }
    },
    methods:{
    },
    computed:{
        ...mapState({
            stopwatches:state=>state.stopwatch.stopwatches
        })
    }
}
</script>
<style>
    
</style>