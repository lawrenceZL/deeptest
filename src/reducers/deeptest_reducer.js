import {FRAMWORK_CHANGE,GENERATE_CHANGE,OPERATOR_CHANGE} from '../actions/deeptest.action'
const initialState={
    framwork:['caffe'],
    operator:'operator2',
    generate:'generate1'
}
const deeptest_reducer = (state = initialState , action )=>{
    console.log(action)
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
        default:
            return state;
    }
}

export default deeptest_reducer;
