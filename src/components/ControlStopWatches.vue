<template>
    <div>
        {{$store.state.count}}
        <button @click="$store.commit('countPlus')">+</button>
        <button @click="$store.commit('countMinus')">-</button>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>