import React,{Component} from 'react'
import ReactEcharts from 'echarts-for-react';

class BarChart extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let option = {
            title: {
                text: 'The plot diagram of Exception category',
                // subtext: 'data',
                left: 'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "exception_style_type <br/>{b} : {c} ({d}%)"
            },
            legend: {
                // orient: 'vertical',
                // top: 'middle',
                bottom: 0,
                left: 'center',
                data: ['non-numeric exception', 'Target deep learning framework with numerical exception','Contrast deep learning framework with numerical exception','GPU / GPU numerical exception','GPU / CPU numerical exception',' CPU / GPU numerical exception','CPU / CPU numerical exception'],
                textStyle:{
                    fontWeight:500
                }
            },
            series : [
                {
                    type: 'pie',
                    radius : '65%',
                    center: ['50%', '50%'],
                    selectedMode: 'single',
                    data:[
                        {value:2304, name: 'non-numeric exception'},
                        {value:265, name: 'Target deep learning framework with numerical exception'},
                        {value:77, name: 'Contrast deep learning framework with numerical exception'},
                        {value:154, name: 'GPU / GPU numerical exception'},
                        {value:348, name: 'GPU / CPU numerical exception'},
                        {value:114, name: ' CPU / GPU numerical exception'},
                        {value:502, name: 'CPU / CPU numerical exception'},
                        // {value:78, name: 'crash_style_8'},
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        },
                        normal:{
                            label:{
                                show: true,
                                formatter: '{c} ({d}%)',
                                fontWeight: 500
                            },
                            labelLine :{show:true}
                        }
                    }
                }
            ]
        };
        return (
            <div>
                <ReactEcharts option={option} style={{height:'560px'}}/>
            </div>
        )
    }
}
export default BarChart
