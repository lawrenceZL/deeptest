import React,{Component} from 'react'
import ReactEcharts from 'echarts-for-react';

class LineChart extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let option = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line'
            }]
        };
        return(
            <div>
                <ReactEcharts option={option}/>
            </div>
        )
    }
}

export default LineChart
