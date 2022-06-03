<template>
    <div class="control-panel btn-group" role="group" aria-label="button-group">
        <button type="button" @click="createStopWatch" class="btn btn-dark bi bi-plus-lg"></button>
        <button type="button" @click="removeStopWatch" class="btn btn-dark bi bi-dash-lg"></button>
        <div class="btn btn-dark">{{$store.state.stopwatch.stopwatches.length}}</div>
    </div>
</template>
<script>
import {mapMutations, mapActions} from "vuex"
export default {
    methods:{
        ...mapMutations({
           
        }),
        ...mapActions({
            createStopWatch:'stopwatch/createStopWatch',
            removeStopWatch:'stopwatch/removeStopWatch'
        })
    },
}
</script>
<style scoped lang="scss">
    div.btn.btn-dark{
        &:hover{
            background-color: #212529;
            border-color: #212529;
            cursor: default;
        }
    }
</style>