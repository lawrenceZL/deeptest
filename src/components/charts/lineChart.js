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
            xAxis: {
                type: 'time',
                // data: this.state.xData
            },
            yAxis: {
                type: 'value'
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
                        time:${item[5]}</br>
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
                <ReactEcharts style={{height:'600px'}} option={option}/>
            </div>
        )
    }
}

export default LineChart
