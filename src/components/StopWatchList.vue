<template lang>
    <div>
        <div class="container control-panel">
            <control-stop-watches/>
            <control-grid  @update="ChangeType"/>

        </div>
        <div class="container">
            <div v-if="type_grid=='LIST'">
                <stop-watch class="row row-list"
                    v-for="sw in stopwatches"
                    :stopwatch="sw"
                    :key="sw.id"
                />
            </div>
            <div v-else-if="type_grid=='GRID'">
                <div class="row g-3">
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
import ControlStopWatches from '@/components/ControlStopWatches'
import StopWatch from '@/components/StopWatch'
import ControlGrid from '@/components/ControlGrid'
import {mapState} from "vuex"
export default {
    components:{
        StopWatch,
        ControlGrid,
        ControlStopWatches
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
<style scoped lang="scss">
    .control-panel{
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
    }
    .row-list{
        margin: 5px 0 5px 0;
    }
</style>