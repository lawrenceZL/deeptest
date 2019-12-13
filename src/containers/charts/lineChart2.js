import connect from "react-redux/es/connect/connect";
import LineChart2 from '../../components/charts/lineChart2';
import {
    storeLine
} from "../../actions/deeptest.action";

//映射Redux state到组件的属性
function mapStateToProps(state) {
    return {
        lineData:state.deeptest_reducer.lineData,
        lineDataY:state.deeptest_reducer.lineDataY,
        lineDataY2:state.deeptest_reducer.lineDataY2,
    }
}

//映射Redux actions到组件的属性
function mapDispatchToProps(dispatch){
    return{
        storeLine:(lineData,lineDataY)=>dispatch(storeLine(lineData,lineDataY)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LineChart2);
