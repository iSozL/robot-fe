import axios from 'axios';
export default {
  fetchData(url, methods, datas) {
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    return new Promise((resolve, reject) => {
      axios({
        url: url,
        method: methods,
        data: datas
      })
        .then(res => {
          resolve(res);
        })
        .catch(function(error) {
          reject(error.response.data);
        });
    });
  },
  mainData(url, methods, datas) {
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    return new Promise((resolve, reject) => {
      axios({
        url: url,
        method: methods,
        data: datas
      })
        .then(res => {
          resolve(res);
        })
        .catch(error => {
          reject(error)
        });
    });
  }
};
