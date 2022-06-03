<template>
    <div class="col">
        <div class="card">
            <div class="row">
                <div class="title">
                    <input type="text" placeholder="Stopwatch">
                </div>
                <div class="time">
                    <span v-if="d>0">{{d}}:</span>
                    <span v-if="h>10">{{h}}</span>
                    <span v-else>0{{h}}</span>
                    <span v-if="m>10">:{{m}}</span>
                    <span v-else>:0{{m}}</span>
                    <span v-if="s>10">:{{s}}</span>
                    <span v-else>:0{{s}}</span>
                    <span v-if="ms>10">:{{ms}}</span>
                    <span v-else>:0{{ms}}</span>
                </div>
                <div class="panel">
                    <div class="btn-group" role="group" aria-label="button-group">
                        <button type="button" class="btn btn-dark bi bi-caret-right" @click="StopWatch('start')"></button>
                        <button type="button" class="btn btn-dark bi bi-pause" @click="StopWatch('stop')"></button>
                        <button type="button" class="btn btn-dark bi bi-bootstrap-reboot" @click="StopWatch('reset')"></button>
                        <button type="button" class="btn btn-dark bi bi-trash" @click="removeCurrentStopWatch(stopwatch.id)"></button>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapMutations, mapActions} from "vuex"
export default {
    
    data(){
        return{
            ms:0,
            s:0,
            m:0,
            h:0,
            d:0,
            interval:''
        }
    },
    props:{
        stopwatch:{
            type:Object,
            requered:true
        }
    },
    methods: {
        ...mapActions({
            removeCurrentStopWatch:'stopwatch/removeCurrentStopWatch',
            CurrentStopWatch:'stopwatch/CurrentStopWatch',
        }),
        StopWatch(action){
            try{
                let startStopWatch = () =>{
                this.ms++
                
                //ms
                if(this.ms>=99){
                    this.s++
                    this.ms=0
                }

                //s
                if(this.s>=60){
                    this.m++
                    this.s=0
                    this.ms=0
                }

                //m
                if(this.m>=60){
                    this.h++
                    this.m=0
                    this.s=0
                    this.ms=0
                }

                //h
                if(this.h>=24){
                    this.d++
                    this.h=0
                    this.m=0
                    this.s=0
                    this.ms=0
                     //(I don't know, who will use stopwatch for days and why)

                }
            }
            if(action=='start'){
                clearInterval(this.interval);
                this.interval = setInterval(startStopWatch, 10);

            }
            else if(action=='stop'){
                clearInterval(this.interval);
            }
            else if(action=='reset'){
                clearInterval(this.interval);
                this.ms=0
                this.s=0
                this.m=0
                this.h=0
            }
            }
            catch{

            }
            
        }
    }
}

</script>
<style scoped lang="scss">

.card{
    min-width: 210px;
    .title>input{
        width: 100%;
        border: none;
        text-align: center;
        outline: none;
    }
    .time{
        text-align: center;
    }
    .panel{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
}
.row-grid>.card{
    .title>input{
        font-size: 1.5em;
    }
    .time{
        font-size: 1.5em;
    }
    .panel{
        margin-top: 10px;
    }
}
.container.BIG .row-list>.card{
    padding: 0;
    .title>input{
        font-size: 2.5em;
    }
    .time{
        margin:0 0 20px 0 ;
        font-size: 3em;
        @media screen and (max-width:300px) {
            font-size: 2.5em;
        }
    }
    .panel{
        .btn-group{
            button.btn{
                font-size: 1.4em;
                }
        }
    }
}
.container.MIDDLE .row-list>.card{
    padding: 0;
    
    .row{
        .title>input{
            font-size: 1.5em;
        }
        .time{
            font-size: 1.5em;
        }
        .panel{
            margin-top: 10px;
            .btn-group{
                button.btn{
                    font-size: 1em;
                }
            }
        }
    }
    
}
.container.SMALL .row-list>.card{
    padding: 0;
    .row{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content:space-between;
        align-items: center;

        .title{
            width: auto;
        }
        .title>input{
            width: auto;
            font-size: 1em;
        }
        .time{
            width: auto;
            font-size: 1.5em;
        }
        .panel{
            width: auto;
            .btn-group{
                button.btn{
                    font-size: 1em;
                }
            }
        }
        @media screen and (max-width:770px) {
            .title, .time, .panel{
                width: 165px;
            }
        }
        @media screen and (max-width:520px) {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            justify-content:center;
            .title,.title>input, .time, .panel{
                width: 100%;
            }
        }
    }
    
}

</style>