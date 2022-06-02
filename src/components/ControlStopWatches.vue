<template>
    <div class="control-panel">
        <button @click="createStopWatch" class="bi bi-plus-square"></button>
        <button @click="removeStopWatch" class="bi bi-dash-square"></button>
        {{$store.state.count}}
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
.control-panel{
    font-size: 3em;
    button{
        border: none;
        background-color: white;
        padding: 0;
    }
}
</style>