<template>
    <div v-if="type_grid=='LIST'" class="control-panel btn-group" role="group" aria-label="button-group">
        <button type="button" class="btn btn-dark" @click="ChangeTypeSize('BIG')">B</button>
        <button type="button" class="btn btn-dark" @click="ChangeTypeSize('MIDDLE')">M</button>
        <button type="button" class="btn btn-dark" @click="ChangeTypeSize('SMALL')">S</button>
    </div>
    <div v-else class="control-panel btn-group" role="group" aria-label="button-group">
        <div type="button" class="btn btn-secondary">B</div>
        <div type="button" class="btn btn-secondary">M</div>
        <div type="button" class="btn btn-secondary">S</div>
    </div>
</template>
<script>
export default {
    props:{
        type_grid:{
            type:String,
            requred:true
        }
    },
    methods:{
        ChangeTypeSize(size){
            this.$emit('update',size)
        }
    }
}
</script>
<style lang="scss" scoped>
    .control-panel.btn-group{
        div.btn-secondary{
            cursor: default;
            &:hover{
                background-color: #6C757D;
                outline: none;
                border-color: #6C757D;
            }
        }
    }
</style>