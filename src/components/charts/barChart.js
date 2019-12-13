import React,{Component} from 'react'
import ReactEcharts from 'echarts-for-react';

class BarChart extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let option = {
            title: {
                text: 'The plot diagram of Discrepancy category',
                // subtext: 'data',
                left: 'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "discrepancy_style <br/>{b} : {c} ({d}%)"
            },
            legend: {
                // orient: 'vertical',
                // top: 'middle',
                bottom: 0,
                left: 'center',
                data: ['Boundary perturbation', 'Significant bit perturbation','Special value perturbation','mutate_erase_bytes','mutate_insert_bytes'],
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
                        {value:304, name: 'Boundary perturbation'},
                        {value:225, name: 'Significant bit perturbation'},
                        {value:77, name: 'Special value perturbation'},
                        {value:154, name: 'mutate_erase_bytes'},
                        {value:248, name: 'mutate_insert_bytes'},
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
