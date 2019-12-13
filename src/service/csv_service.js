import axios from 'axios'
let server_url="http://www.njuzlh.cn:8019/deeptest"
// let server_url="http://localhost:8019/deeptest"

function getData(framwork1,framwork2,operator,generate,type) {
    let url = server_url+'/file/get'
    let form = new FormData();
    form.append("framwork1",framwork1)
    form.append("framwork2",framwork2)
    form.append("operator",operator)
    form.append("generate",generate)
    form.append("type",type)
    return axios.post(url,form).then(response=>{
        return response.data
    }).catch(()=>{
        return {message:'error'}
    })
}

export const csvservice = {
    getData
}
