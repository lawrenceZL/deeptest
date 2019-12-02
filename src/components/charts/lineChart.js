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
                text: 'The sketch diagram of Crash sum',
                // subtext: 'data',
                left: 'center'
            },
            xAxis: {
                type: 'time',
                name:'time',
                axisLine:{
                    symbol:['none', 'arrow']
                }
                // data: this.state.xData
            },
            yAxis: {
                type: 'value',
                name:'sum',
                axisLine:{
                    symbol:['none', 'arrow']
                }
            },
            legend: {
                type: 'plain',          // 普通图例
                orient: 'horizontal',   // 水平
                left:450,               // 左距离
                top: 60,                // 上距离
                bottom: 20,             // 下距离
                width:300,              // 宽度
                itemGap: 20,            // 间隔
                itemWidth: 24,          // 图形宽度。
                itemHeight: 24,         // 图形高度。
                // data: data.legendData,  // 数据
                // selected: data.selected,// true为可选
                formatter: function (name) {
                    console.log(name)
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
                        max:${item[2]}</br>
                        mean:${item[3]}</br>
                        norm:${item[4]}</br>
                        <!--time:${item[5]}</br>-->
                    `
                }
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
            </div>
        )
    }
}

export default LineChart
