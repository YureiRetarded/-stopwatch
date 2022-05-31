import { createStore } from "vuex";

export default createStore({
    state:{
        count:1
    },
    getters:{

    },
    mutations:{
        countPlus(state){
            state.count ++
        },
        countMinus(state){
            if(state.count>1)
            state.count --
        }

    },
    actions:{
         
    }
})