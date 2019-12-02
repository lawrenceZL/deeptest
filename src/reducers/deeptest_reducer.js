import {
    FILE_CHANGE,
    FRAMWORK_CHANGE,
    GENERATE_CHANGE,
    OPERATOR_CHANGE,
    PRECISION_SHOW,
    RUN_CLICK,
    STORE_LINEDATA,
    TYPE_CHANGE
} from '../actions/deeptest.action'
const initialState={
    index:0,
    framwork:[],
    operator:'',
    generate:'',
    lineData:[],
    lineYData:[],
    precision_show: false,
    fileList:[
        {
            uid: '-1',
            name: 'minst_1.png',
            status: 'done',
            thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
            uid: '-2',
            name: 'cifar_1.png',
            status: 'done',
            thumbUrl: "data:image/png;base64,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",
        }
    ]
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
        case TYPE_CHANGE:{
            return Object.assign({},state,{
                index:action.index
            })
        }
        case PRECISION_SHOW:{
            return Object.assign({},state,{
                precision_show: action.precision_show
            })
        }
        case FILE_CHANGE:{
            return Object.assign({},state,{
                fileList:action.fileList
            })
        }
        default:
            return state;
    }
}

export default deeptest_reducer;
