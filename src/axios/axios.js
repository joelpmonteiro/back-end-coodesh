const axios = require('axios');

axios.defaults.baseURL = 'https://api.spaceflightnewsapi.net/v3';

// const requestAxios = axios.create({
//     baseURL: 'https://api.spaceflightnewsapi.net/v3',
// });
const requestAxios = axios.create({
  baseURL: 'https://api.spaceflightnewsapi.net/v3',
});


module.exports = {
  async getArticleById(id) {
    try {
      const test = await requestAxios.get(`/articles/${id}/`);

      if (test.status === 200) {
        return test.data;
      }
      return []
    } catch (error) {
      throw new Error(error)

    }

  },
  async getArticleForInsert() {
    try {
      const count = await requestAxios.get('/articles/count');
      let counter = 0
      if (count.data > 0) {
        counter = count.data
      } else {
        counter = 50
      }

      const insert = await requestAxios.get(`/articles?_limit=${counter}`);
      if (insert.status === 200) {
        return insert.data
      }
      return []
    } catch (error) {
      throw new Error(error)
    }
  }
}