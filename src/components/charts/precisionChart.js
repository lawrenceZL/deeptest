import React,{Component} from 'react'
import ReactEcharts from 'echarts-for-react';
import {csvservice} from "../../service/csv_service";
import {timeUtil} from "../../utils/timeUtil";

class PrecisionChart extends Component{
    constructor(props){
        super(props);

    }

    componentDidMount(){

    }


    render(){
        // console.log(this.state.yData)
        let that = this;
        let x = [8, 9, 12, 15, 16, 17, 18, 20, 21, 24, 29, 33, 34, 37, 38, 40, 44,46, 48, 52, 54, 58, 61, 62, 64]
        let y = [3750.0, 3333.3333333333335, 2500.0, 2000.0, 1875.0, 1764.7058823529412, 1666.6666666666667, 1578.9473684210527, 1304.3478260869565, 1250.0, 1034.4827586206898, 937.5, 882.3529411764706, 823.3333333333334, 739.4736842105264, 743.2307692307693, 701.7073170731708, 689.2857142857143, 699.8181818181819, 671.6666666666666, 652.1739130434783, 638.2978723404256, 642.2448979591836, 555.5555555555555, 500.0]
        console.log(x.length)
        console.log(y.length)
        let option = {
            xAxis: {
                type: 'category',
                data: x,
                min: function(value) {
                    return value.min-2;
                },
                name:'precision',
                axisLine:{
                    symbol:['none', 'arrow']
                },
                nameTextStyle:{
                    fontWeight:500
                }
            },
            grid: {
                // x:100,      //坐标轴左边与边框的距离
                // top: 80,      //坐标轴顶端与边框的距离
                x2: 80,     //坐标轴右边与边框的距离
                // y2:100,     //坐标轴底端与边框的距离
            },
            yAxis: {
                type: 'value',
                name:'exception',
                axisLine:{
                    symbol:['none', 'arrow']
                },
                nameTextStyle:{
                    fontWeight:500
                }
            },
            series: [{
                data: y,
                type: 'line',
                smooth: true
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
                    console.log(params[0])
                    // console.log(item)
                    return `
                       exception:${params[0].data}</br>
                       precision:${params[0].axisValue}
                    `
                }
            },
        };

        return(
            <div>
                <ReactEcharts style={{height:'500px'}} option={option}/>
            </div>
        )
    }
}

export default PrecisionChart
