import connect from "react-redux/es/connect/connect";
import Home from '../../components/home/home_page';
import {
    changeType,showPrecision
} from "../../actions/deeptest.action";

//映射Redux state到组件的属性
function mapStateToProps(state) {
    return {
        index:state.deeptest_reducer.index,
        precision_show:state.deeptest_reducer.precision_show,
    }
}

//映射Redux actions到组件的属性
function mapDispatchToProps(dispatch){
    return{
        changeType:(index)=>dispatch(changeType(index)),
        showPrecision:(precision_show)=>dispatch(showPrecision(precision_show)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
