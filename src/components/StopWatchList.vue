<template lang>
    <div>
        <control-grid  @update="ChangeType"/>
        <div class="container">
            <div v-if="type_grid=='LIST'">
                <stop-watch class="row"
                    v-for="sw in stopwatches"
                    :stopwatch="sw"
                    :key="sw.id"
                />
            </div>
            <div v-else-if="type_grid=='GRID'">
                <div class="row">
                    <stop-watch
                    v-for="sw in stopwatches"
                    :stopwatch="sw"
                    :key="sw.id"
                />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import StopWatch from '@/components/StopWatch'
import ControlGrid from '@/components/ControlGrid'
import {mapState} from "vuex"
export default {
    components:{
        StopWatch,
        ControlGrid
    },
    data(){
        return{
            type_grid:'LIST'
        }
    },
    methods:{
        ChangeType(type){
            this.type_grid=type
        }
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