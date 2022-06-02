<template>
    <div>
        <i @click="$store.commit('countPlus')" class="bi bi-plus-square"></i>
        <i @click="$store.commit('countMinus')" class="bi bi-dash-square"></i>
        {{$store.state.count}}
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>