import connect from "react-redux/es/connect/connect";
import CanvasPanel from '../../components/sider/canvasPanel';
import {
    changeFile, changeOperator, changeGenerate, storeLine,changeType
} from "../../actions/deeptest.action";

//映射Redux state到组件的属性
function mapStateToProps(state) {
    return {
        fileList:state.deeptest_reducer.fileList,
    }
}

//映射Redux actions到组件的属性
function mapDispatchToProps(dispatch){
    return{
        changeFile:(fileList)=>dispatch(changeFile(fileList)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CanvasPanel);
