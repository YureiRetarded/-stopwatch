<template>
    <div class="control-panel">
        <button @click="$store.commit('countPlus')" class="bi bi-plus-square"></button>
        <button @click="$store.commit('countMinus')" class="bi bi-dash-square"></button>
        {{$store.state.count}}
    </div>
</template>
<script>
export default {
    
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