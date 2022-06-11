export const stopwatchModule = {
    state:()=>({
        stopwatches:[
            {id:0,title:''}
        ]
    }),
    getters:{
        
    },
    mutations:{
        setSW(state,sw){
            state.stopwatches=sw
        },
    },
    actions:{
        createStopWatch({state,commit}){
            let array=state.stopwatches
            let sw={id:Date.now(),title:''}
            array.push(sw)
            commit('setSW',array)
        },
        removeStopWatch({state,commit}){
            let array=state.stopwatches
            array.splice(array.length-1, 1)
            commit('setSW',array)
        },
        removeCurrentStopWatch({state,commit},id_sw){
            let array=state.stopwatches
            array.splice(array.findIndex((obj)=>{return obj.id==id_sw}), 1)
            commit('setSW',array)
        },
        changeTitleStopWatch({state,commit},data){
            let array=state.stopwatches
            let id = array.findIndex((obj)=>{return obj.id==data.id})
            array[id].title=data.title
            commit('setSW',array)
        }
    },
    namespaced:true
}