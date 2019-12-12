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
                data: ['CPU-16', 'GPU-16','CPU-32','GPU-32','CPU-64','GPU-64'],
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
                        {value:304, name: 'CPU-16'},
                        {value:225, name: 'GPU-16'},
                        {value:77, name: 'CPU-32'},
                        {value:154, name: 'GPU-32'},
                        {value:248, name: 'CPU-64'},
                        {value:114, name: 'GPU-64'},
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
