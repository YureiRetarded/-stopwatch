<template>
<div class="control-panel">
    <button class="bi bi-columns-gap" @click="ChangeType('GRID')"></button>
    <button class="bi bi-view-stacked" @click="ChangeType('LIST')"></button>
</div>
    
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        ChangeType(type){
            this.$emit('update',type)
        }
    }
}
</script>
<style scoped lang="scss">
.control-panel{
    font-size: 2em;
    vertical-align: middle;
    button{
        border: none;
        background-color: white;
        padding: 0;
    }
}
</style>