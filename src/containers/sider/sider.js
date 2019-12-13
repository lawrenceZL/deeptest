import connect from "react-redux/es/connect/connect";
import Sider from '../../components/sider/sider';
import {
    changeFramwork, changeOperator, changeGenerate, storeLine, changeType, changeFile, showPrecision
} from "../../actions/deeptest.action";

//映射Redux state到组件的属性
function mapStateToProps(state) {
    return {
        framwork:state.deeptest_reducer.framwork,
        operator:state.deeptest_reducer.operator,
        generate:state.deeptest_reducer.generate,
        fileList:state.deeptest_reducer.fileList,
        index:state.deeptest_reducer.index,
        precision_show:state.deeptest_reducer.precision_show,
        lineDataY:state.deeptest_reducer.lineDataY,
        lineDataY2:state.deeptest_reducer.lineDataY2,
    }
}

//映射Redux actions到组件的属性
function mapDispatchToProps(dispatch){
    return{
        changeFramwork:(framwork)=>dispatch(changeFramwork(framwork)),
        changeOperator:(operator)=>dispatch(changeOperator(operator)),
        changeGenerate:(generate)=>dispatch(changeGenerate(generate)),
        storeLine:(lineData,lineData2,lineDataY,lineDataY2)=>dispatch(storeLine(lineData,lineData2,lineDataY,lineDataY2)),
        changeType:(index)=>dispatch(changeType(index)),
        changeFile:(fileList)=>dispatch(changeFile(fileList)),
        showPrecision:(precision_show)=>dispatch(showPrecision(precision_show))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sider);
