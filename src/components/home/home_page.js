import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {Layout, Empty, Spin, Alert, Radio,Modal,Slider} from 'antd';
import MySider from '../../containers/sider/sider'
import LineChart from '../../containers/charts/lineChart'
import BarChart from '../charts/barChart'
import PrecisionChart from '../charts/precisionChart'
import {csvservice} from "../../service/csv_service";


const {Header, Footer, Sider, Content} = Layout;

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            yData: [],
            visible:false
        }
    }

    componentDidMount() {
        // csvservice.getData('','','','').then(response=>{
        //     console.log(response)
        // })
        // this.getLineData()
    }

    getLineData() {
        csvservice.getData('', '', '', '').then(response => {
            if (response.responseCode === "RESPONSE_OK") {
                console.log(response.data.data)
                let data = response.data.data;
                // let xData=[];
                let yData = [];
                for (let i = 1; i < data.length; i++) {
                    // xData.push(timeUtil.formatTimeStampToHourSecondTime(data[i][5]))
                    let arr = []
                    arr.push(new Date(data[i][5]))
                    arr.push(i)
                    yData.push(arr)
                }
                this.setState({
                    data: data,
                    // xData:xData,
                    yData: yData,
                })
            }
        })
    }

    process_file = files => {
        let reader = new FileReader();
        let that = this;
        console.log(files)
        reader.onload = function () {

        }
        // reader.readAsText(files[0]);
    }

    render() {
        return (
            <div>
                <Layout style={{position: 'absolute', height: '100%', width: '100%'}}>
                    <Header style={{color: 'white', textAlign: 'center'}}>deeptest</Header>
                    <Layout>
                        <Sider style={{backgroundColor: 'white', overflow: 'scroll'}} width={300}><MySider/></Sider>
                        <Content style={{padding: '20px 20px', display: 'flex', flex: 1, justifyContent: 'center'}}>
                            {this.props.index === -1 &&
                            <Spin tip="Loading..." style={{marginTop: 200}} size="large">

                            </Spin>
                            }
                            {this.props.index === 0 &&
                            <div style={{marginTop: '200px'}}>
                                <Empty/>
                            </div>
                            }
                            {this.props.index !== -1 && this.props.index !== 0 &&
                                <div style={{position:'absolute',right:40,top:90,zIndex:100}}>
                                    <Radio.Group defaultValue={this.props.index} buttonStyle="solid"
                                         onChange={(e)=>{
                                             this.props.changeType(e.target.value)
                                             if(e.target.value===3){
                                                 this.setState({
                                                     visible:true
                                                 })
                                             }else {
                                                 this.props.showPrecision(false)
                                             }
                                         }}
                                    >
                                        <Radio.Button value={1}>line chart</Radio.Button>
                                        <Radio.Button value={2}>bar chart</Radio.Button>
                                        <Radio.Button value={3}>precision</Radio.Button>
                                    </Radio.Group>
                                </div>
                            }
                            {this.props.index === 1 &&
                            <div style={{flex: 1}}>
                                <LineChart/>
                            </div>
                            }
                            {this.props.index === 2 &&
                            <div style={{flex: 1, marginTop: 100}}>
                                <BarChart/>
                            </div>
                            }
                            {this.props.index === 3 &&this.props.precision_show&&
                            <div style={{flex: 1}}>
                                <PrecisionChart/>
                            </div>
                            }
                            <Modal
                                title="min-max-precision-select"
                                visible={this.state.visible}
                                onOk={()=>{this.setState({
                                    visible:false
                                });this.props.showPrecision(true)}}
                                onCancel={()=>{this.setState({
                                    visible:false
                                })}}
                            >
                                <Slider range defaultValue={[8, 64]} />
                            </Modal>
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}

export default withRouter(HomePage);
