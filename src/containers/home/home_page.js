import connect from "react-redux/es/connect/connect";
import Home from '../../components/home/home_page';
import {
    changeType
} from "../../actions/deeptest.action";

//映射Redux state到组件的属性
function mapStateToProps(state) {
    return {
        index:state.deeptest_reducer.index,
    }
}

//映射Redux actions到组件的属性
function mapDispatchToProps(dispatch){
    return{
        changeType:(index)=>dispatch(changeType(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
