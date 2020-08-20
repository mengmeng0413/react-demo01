const http = require('http');
const fs = require("fs");
const urlencode = require("urlencode");
const port = 8686;

let server = http.createServer((req, res) => {
  console.log('req:', req.url, req.method);
  res.setHeader('Content-Type','application/json;charset=utf8');
  res.setHeader('Access-Control-Allow-Origin','*');
  let reqStr = '';
  req.on('data', (chunk) => reqStr += chunk);
  if(req.url.startsWith('/api') && req.method === 'GET') {
    req.on('end', () => {
      let resData = fs.readFileSync('./stuInfo.json');
      res.end(resData)
    });
  }else if((req.url.startsWith('/add')) && req.method === 'POST'){
    req.on('end', () => {
      let reqData = urlencode.parse(reqStr)
      fs.readFile('./stuInfo.json', function(err, data){
        if(err){
          return console.error(err);
        }
        let student = data.toString();
        student = JSON.parse(student);
        let isHave = student.stu.find(item =>{
          return item.name === reqData.name
        })
        if(isHave){
          console.error('重复')
          res.end('error')
        }else{
          student.stu.push(reqData);
          let str = JSON.stringify(student);
          fs.writeFile('./stuInfo.json', str, function(err){
            if(err){
              console.err(err)
            }
            console.log("-------------新增学生成功-------------")
          })
          res.end('ok')
        }
      })
    })
  }else if(req.url.startsWith('/del') && req.method === 'POST'){
    req.on('end', () => {
      let reqData = urlencode.parse(reqStr)
      fs.readFile('./stuInfo.json', function(err, data){
        if(err){
          return console.error(err);
        }
        let student = data.toString();
        student = JSON.parse(student);
        student.stu.forEach((ele, index) => {
          if(ele.name === reqData.name){
            student.stu.splice(index,1)
          }
        });
        let str = JSON.stringify(student);
        fs.writeFile('./stuInfo.json', str, function(err){
          if(err){
            console.err(err)
          }
          console.log("-------------删除学生成功-------------")
        })
        res.end('ok')
      })
    })
  }else{
    console.log('其他请求')
  }
  return void 0;
});

server.listen(port, () => {
  console.log(`Node.js已经监听了${port}端口`);
})
