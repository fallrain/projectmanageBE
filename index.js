const Koa = require('koa');
const app = new Koa();
const route = require('./src/route');//路由
const path = require('path');
const serve = require('koa-static');
const config = require('./config/default.js');//配置文件
const session = require('koa-session-minimal');//session
const MysqlStore = require('koa-mysql-session');

route.use(app);//使用路由
app.use(serve(path.join(__dirname)));//静态资源路由

// session存储配置
const sessionMysqlConfig = {
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  host: config.database.HOST,
};
// 配置session中间件
/*app.use(session({
  key: 'USER_SID',
  store: new MysqlStore(sessionMysqlConfig)
}))*/

app.listen(3000, () => {
  console.log('server loaded');
});