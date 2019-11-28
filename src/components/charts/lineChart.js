import React,{Component} from 'react'
import ReactEcharts from 'echarts-for-react';
import {csvservice} from "../../service/csv_service";
import {timeUtil} from "../../utils/timeUtil";

class LineChart extends Component{
    constructor(props){
        super(props);
        this.state={
            // xData:[],
            // yData:[],
            data:[],
        }
    }

    componentDidMount(){
        csvservice.getData('','','','').then(response=>{
            if(response.responseCode==="RESPONSE_OK"){
                console.log(response.data.data)
                let data = response.data.data;
                // let xData=[];
                let yData=[];
                for(let i=1;i<data.length;i++){
                    // xData.push(timeUtil.formatTimeStampToHourSecondTime(data[i][5]))
                    let arr = []
                    arr.push(new Date(data[i][5]))
                    arr.push(i)
                    yData.push(arr)
                }
                this.setState({
                    data:data,
                    // xData:xData,
                    yData:yData,
                })
            }
        })

        // setInterval(()=>{
        //     let data = this.state.data
        //     if(data.length>2){
        //         let xData=this.state.xData;
        //         let yData=this.state.yData;
        //         for(let i=1;i<2;i++){
        //             xData.push(timeUtil.formatTimeStampToHourSecondTime(data[i][5]))
        //             yData.push(data[i][4])
        //             data.shift();
        //         }
        //         this.setState({
        //             data:data,
        //             xData:xData,
        //             yData:yData,
        //         })
        //     }
        // },1000)
    }


    render(){
        // console.log(this.state.xData)
        console.log(this.state.yData)
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
                data: this.state.yData,
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
                    let item = that.state.data[params[0].data[1]]
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
