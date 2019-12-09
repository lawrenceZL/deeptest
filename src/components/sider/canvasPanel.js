import React,{Component} from "react";
import Draw from "../../utils/draw";
import {Button,Result,message} from 'antd'
import "./Canvas.css";

message.config({
    top: 100,
    duration: 2,
    maxCount: 3,
});

class CanvasPanel extends Component {

    constructor(props){
        super(props);
        this.state = {
            result_show:"hidden"
        }
    }
    /* 重置功能 */
    reset() {
        Draw.clear();
    }

    /* 导出 */
    exp() {
        let exportImg = Draw.exportImg();
        console.log('exportImg: ', exportImg);
        if(exportImg === -1) {
            return console.log('please draw!');
        }
        let fileList = this.props.fileList;
        let item = {
            uid: exportImg.toString().slice(0,20)+Math.random(),
            name: exportImg.toString().slice(0,100)+Math.random(),
            status: 'done',
            thumbUrl: exportImg,
        }
        fileList.push(item)
        this.props.changeFile(fileList)
        message.success("generate successfully")
        // this.setState({
        //     result_show:'show'
        // })
        // setTimeout(()=>{
        //     this.setState({
        //         result_show:'hidden'
        //     })
        // },2000)
        // this.refs['imgC'].src = exportImg;
    }

    render() {
        return (
            <div className="component-canvas">
                <div className="canvas-wrap" ref='canvas-wrap'></div>
                <div className="button-wrap">
                    <span onClick={this.reset} style={{float:'left'}}><Button>cancel</Button></span>
                    <span onClick={this.exp.bind(this)} style={{float:'right'}}><Button type="primary">generate</Button></span>
                </div>
                {/*<Result*/}
                    {/*className={this.state.result_show}*/}
                    {/*status="success"*/}
                    {/*title="generate successfully"*/}
                    {/*// subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."*/}
                    {/*// extra={[*/}
                    {/*//     <Button type="primary" key="console">*/}
                    {/*//         Go Console*/}
                    {/*//     </Button>,*/}
                    {/*//     <Button key="buy">Buy Again</Button>,*/}
                    {/*// ]}*/}
                {/*/>*/}
                {/*<img ref="imgC" />*/}
            </div>
        );
    }

    componentDidMount() {
        Draw.init(this.refs['canvas-wrap']);
    }
}
export default CanvasPanel;
