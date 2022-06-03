<template lang>
    <div>
        <div class="container control-panel">
            <control-stop-watches/>
            <div class="sub-control">
                <control-grid class="cg"  @update="ChangeType"/>
                <control-size-list @update="ChangeSize" :type_grid="type_grid"/>
            </div>
        </div>
        <div :class="'container '+list_size">
            <div v-if="type_grid=='LIST'">
                <stop-watch  
                    class="row row-list"
                    v-for="sw in stopwatches"
                    :stopwatch="sw"
                    :key="sw.id"
                />
            </div>
            <div v-else-if="type_grid=='GRID'">
                <div class="row g-3">
                    <stop-watch class="row-grid"
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
import ControlSizeList from '@/components/ControlSizeList'
import {mapState} from "vuex"
export default {
    components:{
        StopWatch,
        ControlGrid,
        ControlStopWatches,
        ControlSizeList
    },
    data(){
        return{
            type_grid:'LIST',
            list_size:'BIG'
        }
    },
    methods:{
        ChangeType(type){
            this.type_grid=type
        },
        ChangeSize(size){
            this.list_size=size
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
        flex-wrap: wrap;
    }
    .row-list{
        margin: 5px 0 5px 0;
    }
    .sub-control{
        display: inline-flex;
        .cg{
            margin-right: 10px;
        }
    }
    
</style>