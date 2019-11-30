import React,{Component} from 'react'
import ReactEcharts from 'echarts-for-react';

class BarChart extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let option = {
            title: {
                text: 'crash_style',
                subtext: 'data',
                left: 'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "crash_style_type <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                top: 'middle',
                bottom: 10,
                right:180,
                // left: 100,
                data: ['crash_style_1', 'crash_style_2','crash_style_3','crash_style_4','crash_style_5','crash_style_6','crash_style_7','crash_style_8']
            },
            series : [
                {
                    type: 'pie',
                    radius : '65%',
                    center: ['50%', '50%'],
                    selectedMode: 'single',
                    data:[
                        {value:2304, name: 'crash_style_1'},
                        {value:265, name: 'crash_style_2'},
                        {value:77, name: 'crash_style_3'},
                        {value:154, name: 'crash_style_4'},
                        {value:348, name: 'crash_style_5'},
                        {value:114, name: 'crash_style_6'},
                        {value:502, name: 'crash_style_7'},
                        {value:78, name: 'crash_style_8'},
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        return (
            <div>
                <ReactEcharts option={option} style={{height:'550px'}}/>
            </div>
        )
    }
}
export default BarChart
