import React,{Component} from 'react'
import ReactEcharts from 'echarts-for-react';
import {csvservice} from "../../service/csv_service";
import {timeUtil} from "../../utils/timeUtil";

class LineChart extends Component{
    constructor(props){
        super(props);

    }

    componentDidMount(){

    }


    render(){
        // console.log(this.state.yData)
        let that = this;
        let option = {
            title: {
                text: 'The sketch diagram of Exception sum',
                // subtext: 'data',
                left: 'center'
            },
            xAxis: {
                type: 'time',
                name:'time',
                axisLine:{
                    symbol:['none', 'arrow']
                },
                nameTextStyle:{
                    fontWeight:500
                }
                // data: this.state.xData
            },
            yAxis: {
                type: 'value',
                name:'sum',
                axisLine:{
                    symbol:['none', 'arrow']
                },
                nameTextStyle:{
                    fontWeight:500
                }
            },
            series: [{
                data: this.props.lineDataY,
                type: 'line',
                animation:true,
                animationThreshold:4000,
                animationEasing:'linear',
                animationDuration: function (idx) {
                    // 越往后的数据延迟越大
                    return idx * 10000;
                }
            }],
            tooltip : {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                },
                showContent:true,
                formatter: function (params) {
                    let item = that.props.lineData[params[0].data[1]]
                    // console.log(item)
                    return `
                        <span style="color:#ff8080">max:${item[2]}</span></br>
                        <span style="color:#99bbff">mean:${item[3]}</span></br>
                        <span style="color:#ffd480">normal:${item[4]}</span></br>
                        <!--time:${item[5]}</br>-->
                    `
                },
            },
            dataZoom: [
                {
                    type:`slider`,
                    show: true,
                    realtime: true,
                    start: 0,
                    end: 20
                },
                {
                    type: 'inside',
                    realtime: true,
                    start: 0,
                    end: 20
                }
            ],
        };

        return(
            <div>
                <ReactEcharts style={{height:'550px'}} option={option}/>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <div style={{flex:1,display:'flex',justifyContent:'flex-end',height:20}}>
                        <div style={{width:22,height:15,background:'#ff8080',borderRadius:'4px'}}>

                        </div>
                        <div style={{lineHeight:'15px',marginLeft:'4px'}}>
                            max
                        </div>
                    </div>
                    <div style={{flex:1,display:'flex',justifyContent:'center',height:20}}>
                        <div style={{width:22,height:15,background:'#99bbff',borderRadius:'4px'}}>

                        </div>
                        <div style={{lineHeight:'15px',marginLeft:'4px'}}>
                            mean
                        </div>
                    </div>
                    <div style={{flex:1,display:'flex',justifyContent:'flex-start',height:20}}>
                        <div style={{width:22,height:15,background:'#ffd480',borderRadius:'4px'}}>

                        </div>
                        <div style={{lineHeight:'15px',marginLeft:'4px'}}>
                            normal
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LineChart
