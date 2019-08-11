
import returnCode from './services.returnCode'
// import _service from './request.js'
import _service from 'axios'

const service = {
    baseURL: process.env.BASE_API + 20006,
    getAllEnvoys () {
      var url = '' + this.baseURL + '/api/admin/envoys'
      const res = _service.get(url, {  }).then(function (res) {
        if(res.data.returnCode.startsWith('200')) {
          return res.data.data
        }else {
          return {}
        }
      })
      return res     

    },
    getEnvoy(id) {
      var url = '' + this.baseURL + '/api/admin/envoys/' + id
      const res = _service.get(url, {  }).then(function (res) {
        if(res.data.returnCode.startsWith('200')) {
          return res.data.data
        }else {
          return {}
        }
      })
      return res
    },
    getItemConfigs() {
      var url = '' + this.baseURL + '/api/admin/all-config'
      const res = _service.get(url, {  }).then(function (res) {
        if(res.data.returnCode.startsWith('200')) {
          return res.data.data
        }else {
          return {}
        }
      })
      return res
    },
    saveEnvoy(info) {
      var url = '' + this.baseURL + '/api/admin/admin-envoy'
      const res = _service.post(url, info).then(function (res) {
        if(res.data.returnCode.startsWith('200')) {
          return res.data.data
        }else {
          return {}
        }
      })
      return res
    },
    getMessageByCode(code) {
      if (returnCode[code] === undefined) {
        return '未知错误'
      } else {
        if (code === '3008') {
          this.logout()
        }
        return returnCode[code]
      }
    }
}
export default service