const Koa = require('koa');
const app = new Koa();
const route = require('koa-route');
const mySql = require('../lib/mySql.js');
const routeMap = {
  [''](ctx) {
    ctx.response.body = 'this is home'
  },
  async ['dep'](ctx) {
    await mySql.findDep().then(r => {
      ctx.response.body = r;
    })
  }

};


module.exports = {
  use(app) {
    for (let p in routeMap) {
      app.use(route.get('/' + p, routeMap[p]));
    }
  }
};
