import axios from 'axios';
import qs from 'qs'
import router from '@/router';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
import store from '@/store';
import {
  Toast
} from 'vant';
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  store.dispatch('showLoading');
  return config;
}, function (error) {
  // 对请求错误做些什么
  Toast({
    message: '数据请求错误',
    position: 'bottom'
  })
  store.dispatch('hideLoading');
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  store.dispatch('hideLoading');
  if (response.status !== 200) {
    store.commit('editState', response.status);
    router.push({
      path: '/' + response.status
    })
  }
  return response;
}, function (error) {
  // 对响应错误做点什么
  store.dispatch('hideLoading');
  return Promise.reject(error);
});


export const http = {
  get(url) {
    return new Promise((resolve, reject) => {
      axios.get(url).then(function (data) {
        resolve(data);
      }).catch((error) => {
        reject(error)
      })
    })
  },
  delete(url, params) {
    return new Promise((resolve, reject) => {
      axios.delete(url, params).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error)
      })
    })
  },
  post(url, params) {
    return new Promise((resolve, reject) => {
      axios.post(url, qs.stringify(params)).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error)
      })
    })
  },
  put(url, params) {
    return new Promise((resolve, reject) => {
      axios.put(url, params).then(function (data) {
        resolve(data);
      }).catch((error) => {
        reject(error)
      })
    })
  },
}
