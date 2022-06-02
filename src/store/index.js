import { createStore } from "vuex";
import { stopwatchModule } from "@/store/stopwatchModule";

export default createStore({
    modules:{
        stopwatch:stopwatchModule
    }
})