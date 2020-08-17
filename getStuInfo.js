const http = require('http');
const fs = require("fs");
const port = 8686;

let server = http.createServer((req, res) => {
  console.log('req:', req.url, req.method);
  if(req.url.startsWith('/api') && req.method === 'GET') {
    // let reqStr = '';
    req.on('data', (chunk) => reqStr += chunk);
    req.on('end', () => {
    // console.log(reqStr,'接收到的数据')
    // let reqData = JSON.parse(reqStr);
      let resData = fs.readFileSync('./stuInfo.json');
      res.setHeader('Content-Type','application/json;charset=utf8');
      res.setHeader('Access-Control-Allow-Origin','*');
      res.setHeader('Access-Control-Allow-Methods','POST');
      res.setHeader('Access-Control-Allow-Headers','x-requested-with,content-type');

      res.end(resData)
    });
    return void 0;
  }else{
    console.log('其他请求')
  }
});

server.listen(port, () => {
  console.log(`Node.js已经监听了${port}端口`);
})
