import {FRAMWORK_CHANGE,GENERATE_CHANGE,OPERATOR_CHANGE,RUN_CLICK,STORE_LINEDATA} from '../actions/deeptest.action'
const initialState={
    framwork:['caffe'],
    operator:'operator2',
    generate:'generate1',
    lineData:[],
    lineYData:[],
}
const deeptest_reducer = (state = initialState , action )=>{
    // console.log(action)
    switch(action.type){
        case FRAMWORK_CHANGE:{
            return Object.assign({},state,{
                framwork: action.framwork,
            })
        }
        case OPERATOR_CHANGE:{
            return Object.assign({},state,{
                operator:action.operator,
            })
        }
        case GENERATE_CHANGE:{
            return Object.assign({},state,{
                generate:action.generate,
            })
        }
        case RUN_CLICK:{
            return Object.assign({},state,{})
        }
        case STORE_LINEDATA:{
            return Object.assign({},state,{
                lineData:action.lineData,
                lineDataY:action.lineDataY,
            })
        }
        default:
            return state;
    }
}

export default deeptest_reducer;
