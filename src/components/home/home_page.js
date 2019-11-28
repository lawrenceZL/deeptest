import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import { Layout,Empty  } from 'antd';
import MySider from '../../containers/sider/sider'
import LineChart from '../charts/lineChart'
import BarChart from '../charts/barChart'
import {csvservice} from "../../service/csv_service";


const { Header, Footer, Sider, Content } = Layout;

class HomePage extends Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        // csvservice.getData('','','','').then(response=>{
        //     console.log(response)
        // })
    }

    process_file = files => {
        let reader = new FileReader();
        let that = this;
        console.log(files)
        reader.onload = function () {

        }
        // reader.readAsText(files[0]);
    }

    render(){
        return (
            <div>
                <Layout style={{position:'absolute',height:'100%',width:'100%'}}>
                    <Header style={{color:'white',textAlign:'center'}}>deeptest</Header>
                    <Layout>
                        <Sider style={{backgroundColor:'white',overflow:'scroll'}} width={300}><MySider/></Sider>
                        <Content style={{padding:'20px 20px',display:'flex',flex:1}}>
                            <div style={{flex:1}}>
                                <LineChart/>
                            </div>
                            {/*<div style={{flex:1.5}}>*/}
                                {/*<BarChart/>*/}
                            {/*</div>*/}

                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}

export default withRouter(HomePage);
