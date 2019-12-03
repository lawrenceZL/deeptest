import React,{Component} from 'react'
import ReactEcharts from 'echarts-for-react';

class BarChart extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let option = {
            title: {
                text: 'The plot diagram of Crash category',
                // subtext: 'data',
                left: 'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "crash_style_type <br/>{b} : {c} ({d}%)"
            },
            legend: {
                // orient: 'vertical',
                // top: 'middle',
                bottom: 0,
                left: 'center',
                data: ['non-numeric error', 'Target deep learning framework with numerical errors','Contrast deep learning framework with numerical errors','GPU / GPU numerical error','GPU / CPU numerical error',' CPU / GPU numerical error','CPU / CPU numerical error']
            },
            series : [
                {
                    type: 'pie',
                    radius : '65%',
                    center: ['50%', '50%'],
                    selectedMode: 'single',
                    data:[
                        {value:2304, name: 'non-numeric error'},
                        {value:265, name: 'Target deep learning framework with numerical errors'},
                        {value:77, name: 'Contrast deep learning framework with numerical errors'},
                        {value:154, name: 'GPU / GPU numerical error'},
                        {value:348, name: 'GPU / CPU numerical error'},
                        {value:114, name: ' CPU / GPU numerical error'},
                        {value:502, name: 'CPU / CPU numerical error'},
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
                                formatter: '{c} ({d}%)'
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
