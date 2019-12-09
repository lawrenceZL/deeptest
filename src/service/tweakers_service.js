import axios from 'axios'
// let server_url="http://www.njuzlh.cn:8022/python/tweakers"
let server_url="http://localhost:8022/python/tweakers"

function getTweakers(time) {
    let url = server_url+'/list/byTime?time='+time
    return axios.get(url).then(response=>{
        return response.data
    }).catch(()=>{
        return {message:'error'}
    })
}

export const tweakers_service = {
    getTweakers
}
