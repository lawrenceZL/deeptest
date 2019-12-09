import React, {Component} from 'react'

import {Button, Col, DatePicker, Table, Input, Icon, Row, Select, Radio,Layout} from 'antd'
import moment from 'moment'
import {tweakers_service} from "../../service/tweakers_service";
import {timeUtil} from "../../utils/timeUtil";

class Tweakers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
            date: moment(new Date())
        }

        this.download = this.download.bind(this)
        this.dateChange = this.dateChange.bind(this)
    }

    componentDidMount() {
        this.getTweakers()
    }

    getTweakers(){
        let time = timeUtil.formatTimeStampToDate(this.state.date)
        tweakers_service.getTweakers(time).then(response => {
            if (response.responseCode === "RESPONSE_OK") {
                let list = response.data;
                for (let i = 0; i < list.length; i++) {
                    list[i]['key'] = list[i].id;
                    list[i]['createAt'] = timeUtil.formatTimeStampToDate(list[i].createAt)
                }
                this.setState({
                    list: list
                })
            }else {
                this.setState({
                    list:[]
                })
            }
        })
    }

    download() {
        let time = timeUtil.formatTimeStampToDate(this.state.date)
        window.open("http://www.njuzlh.cn:8022/python/tweakers/download?time="+time);
    }

    dateChange(e){
        this.setState({
            date:moment(e._d)
        },this.getTweakers)
    }

    render() {
        console.log(this.state.date)
        const columns = [
            {
                title: 'id',
                dataIndex: 'id',
                key: 'id'
            }, {
                title: '产品类型',
                dataIndex: 'type',
                key: 'type'
            }, {
                title: '产品名',
                dataIndex: 'product',
                key: 'product'
            }, {
                title: '供应商',
                dataIndex: 'name',
                key: 'name'
            }, {
                title: '价格',
                dataIndex: 'price',
                key: 'price'
            },
            {
                title: '时间',
                dataIndex: 'createAt',
                key: 'createAt'
            }];

        return (
            <Layout>
            <div style={{margin: '0px 120px',backgroundColor: `white`,padding:'20px 60px',minHeight:window.innerHeight}}>
                <div style={{textAlign: `center`,marginBottom:'30px'}}>
                    <Row align="middle" type="flex">
                        <Col span={8}>
                        </Col>
                        <Col span={4}>
                            <DatePicker defaultValue={this.state.date} onChange={this.dateChange} allowClear={false}/>
                        </Col>
                        <Col span={4}>
                            <Button onClick={this.download}>
                                <Icon type="download"/>下载
                            </Button>
                        </Col>
                        <Col span={8}>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Table columns={columns} dataSource={this.state.list}/>
                </div>
            </div>
            </Layout>
        );
    }

}

export default Tweakers
