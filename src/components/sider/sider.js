import React, {Component} from 'react';
import {Button, Form, Input, Select, Upload, Icon, Menu, Empty} from 'antd';
import {timeUtil} from "../../utils/timeUtil";
import CanvasPanel from './canvasPanel'
import './Canvas.css'
import {csvservice} from "../../service/csv_service";

const {Option} = Select;

class MySider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: '',
            sampleTypeSelect: 'image',
            modelTypeSelect:'mnist',
        }
        this.sampleTypeChange = this.sampleTypeChange.bind(this);
        this.imageSelect = this.imageSelect.bind(this);
        this.modelTypeChange = this.modelTypeChange.bind(this);
        this.runClick = this.runClick.bind(this);
    }

    componentDidMount() {
        let time = timeUtil.formatTimeStampToDateTime(new Date());
        this.setState({
            time: time
        })
        setInterval(() => {
            this.setState({
                time: timeUtil.formatTimeStampToDateTime(new Date())
            })
        }, 1000)

    }

    sampleTypeChange(e) {
        this.setState({
            sampleTypeSelect: e.key
        })
    }

    modelTypeChange(e) {
        this.setState({
            modelTypeSelect: e.key
        })
    }

    imageSelect(e) {
        window.open(e.thumbUrl)
    }

    runClick(e){
        this.getLineData();
    }

    getLineData(){
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
                this.props.storeLine(data,yData)
            }
        })
    }

    render() {
        let {time} = this.state;
        const run_style = {
            height: '40px',
            backgroundColor: 'white',
            boxShadow: "0px 10px 5px #cccccc",
            display: 'flex',
            position: 'fixed',
            width: 300,
            zIndex:100
        }
        const fileList = [
            {
                uid: '-1',
                name: 'xxx.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            }
        ];
        const props2 = {
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            listType: 'picture',
            defaultFileList: [...fileList],
        };
        const props = {
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            onChange({ file, fileList }) {
                if (file.status !== 'uploading') {
                    console.log(file, fileList);
                }
            },
            defaultFileList: [
                {
                    uid: '1',
                    name: 'xxx.png',
                    status: 'done',
                    response: 'Server Error 500', // custom error message to show
                    url: 'http://www.baidu.com/xxx.png',
                },
                {
                    uid: '2',
                    name: 'yyy.png',
                    status: 'done',
                    url: 'http://www.baidu.com/yyy.png',
                },
                {
                    uid: '3',
                    name: 'zzz.png',
                    status: 'error',
                    response: 'Server Error 500', // custom error message to show
                    url: 'http://www.baidu.com/zzz.png',
                },
            ],
        };

        const props3 = {
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            onChange({ file, fileList }) {
                if (file.status !== 'uploading') {
                    console.log(file, fileList);
                }
            },
            defaultFileList: [
                {
                    uid: '1',
                    name: 'xxx.png',
                    status: 'done',
                    response: 'Server Error 500', // custom error message to show
                    url: 'http://www.baidu.com/xxx.png',
                },
                {
                    uid: '2',
                    name: 'yyy.png',
                    status: 'done',
                    url: 'http://www.baidu.com/yyy.png',
                }
            ],
        };

        const item_style={
            height:'41px',display:'flex',flex:1,alignItems:'center',border:'1px solid #e6e6e6',marginTop:'4px'
        }
        const item_left={
            display:'flex',flex:1,width:'41px'
        }
        const item_right={
            display:'flex',flex:2
        }
        return (
            <div>
                <div style={run_style}>
                    <div style={{flex: 3, display: 'flex', alignItems: 'center', paddingLeft: '20px'}}>
                        {time}
                    </div>
                    <div style={{flex: 1}}>
                        <Button style={{height: '40px', float: 'right', borderRadius: '0'}} type="primary" onClick={this.runClick}>run</Button>
                    </div>
                </div>
                <div style={{padding: '60px 20px'}}>
                    <Form>
                        <Form.Item
                            label="framework select"
                        >
                            <Select mode="multiple" defaultValue={this.props.framwork} onChange={(e)=>{this.props.changeFramwork(e)}}>
                                <Option value="tensorflow">tensorflow</Option>
                                <Option value="pytorch">pytorch</Option>
                                <Option value="caffe">caffe</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            label="operator select"
                        >
                            <Select defaultValue={this.props.operator} onChange={(e)=>{this.props.changeOperator(e)}}>
                                <Option value="operator1">operator1</Option>
                                <Option value="operator2">operator2</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            label="models upload"
                        >
                            <Menu mode="horizontal" selectedKeys={[this.state.modelTypeSelect]}
                                  onClick={this.modelTypeChange}>
                                <Menu.Item key="mnist">
                                    mnist
                                </Menu.Item>
                                <Menu.Item key="cifar">
                                    cifar
                                </Menu.Item>
                                <Menu.Item key="sketchpad">
                                    sketchpad
                                </Menu.Item>
                            </Menu>
                            {this.state.modelTypeSelect === "mnist" &&
                            <div>
                                <div>upload the images to run the model</div>
                                <Upload {...props}>
                                    <Button>
                                        <Icon type="upload"/> Upload
                                    </Button>
                                </Upload>
                            </div>
                            }
                            {this.state.modelTypeSelect === "cifar" &&
                            <div>
                                <div>upload the images to run the model</div>
                                <Upload {...props3}>
                                    <Button>
                                        <Icon type="upload"/> Upload
                                    </Button>
                                </Upload>
                            </div>
                            }
                            {this.state.modelTypeSelect === "sketchpad"&&
                                <div>
                                    <CanvasPanel/>
                                </div>
                            }
                        </Form.Item>
                        {this.state.modelTypeSelect!=="sketchpad"&&
                            <div>
                                <Form.Item>
                                    <div style={{display:'flex',marginTop:'15px'}}>
                                        <Select defaultValue={this.props.generate} style={{marginRight:'15px'}} onChange={(e)=>{this.props.changeGenerate(e)}}>
                                            <Option value="generate1">generate1</Option>
                                            <Option value="generate2">generate2</Option>
                                        </Select>
                                        <Button>generate</Button>
                                    </div>
                                </Form.Item>
                                <Form.Item
                                    label="Samples"
                                >
                                    {/*<Menu mode="horizontal" selectedKeys={[this.state.sampleTypeSelect]}*/}
                                    {/*onClick={this.sampleTypeChange}>*/}
                                    {/*<Menu>*/}
                                    {/*<Menu.Item key="image">*/}
                                    {/*Image*/}
                                    {/*</Menu.Item>*/}
                                    {/*/!*<Menu.Item key="sketchpad">*!/*/}
                                    {/*/!*Sketchpad*!/*/}
                                    {/*/!*</Menu.Item>*!/*/}
                                    {/*</Menu>*/}
                                    {this.state.sampleTypeSelect === "image" &&
                                    <div style={{border:'1px solid #e6e6e6',height:'140px',overflow:'scroll'}}>
                                        <div style={item_style} className="item_select">
                                            <div style={item_left}>
                                                <img width="40px" height="40px" src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"></img>
                                            </div>
                                            <div style={item_right}>file name</div>
                                        </div>
                                        <div style={item_style}>
                                            <div style={item_left}>
                                                <img width="40px" height="40px" src="data:image/png;base64,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"></img>
                                            </div>
                                            <div style={item_right}>file name</div>
                                        </div>
                                    </div>
                                    }
                                    {this.state.sampleTypeSelect === "sketchpad" &&
                                    <div>
                                        <Empty/>
                                    </div>
                                    }
                                </Form.Item>
                            </div>
                        }

                    </Form>
                </div>
            </div>
        )
    }
}

export default MySider;
