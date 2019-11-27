import connect from "react-redux/es/connect/connect";
import Sider from '../../components/sider/sider';
import {
    changeFramwork,changeOperator,changeGenerate
} from "../../actions/deeptest.action";

//映射Redux state到组件的属性
function mapStateToProps(state) {
    return {
        framwork:state.deeptest_reducer.framwork,
        operator:state.deeptest_reducer.operator,
        generate:state.deeptest_reducer.generate,
    }
}

//映射Redux actions到组件的属性
function mapDispatchToProps(dispatch){
    return{
        changeFramwork:(framwork)=>dispatch(changeFramwork(framwork)),
        changeOperator:(operator)=>dispatch(changeOperator(operator)),
        changeGenerate:(generate)=>dispatch(changeGenerate(generate)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sider);
