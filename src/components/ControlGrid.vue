<template>
<div class="control-panel btn-group" role="group" aria-label="button-group">
    <button type="button" class="btn btn-dark bi bi-columns-gap" @click="ChangeType('GRID')"></button>
    <button type="button" class="btn btn-dark bi bi-view-stacked" @click="ChangeType('LIST')"></button>
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
</style>