export default {
    namespace : "counter" ,
    state : {
        "v" : 100
    },
    //同步
    reducers : {
        add(state,action){
            return {
                ...state , 
                "v": state.v + action.payload.number
            }
        },
        minus(state, action) {
            return {
                ...state,
                "v": state.v - 1
            }
        }
    },
    //异步
    effects : {
        //姑且把*当做async，yield当做await。
        //有兴趣可以看看ES8产生器：http://es6.ruanyifeng.com/#docs/generator
        *addFile(action , {call , put}){
            //写异步语句
            const {result} = yield fetch("/api").then((data)=>data.json());
            //put表示
            yield put({"type":"add" , "payload" : {"number" : result}});
        }
    }
}