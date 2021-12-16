const http = require('http');

const host = 'localhost';
const port = 3000;


const server = http.createServer((req, res)=>{

   const { url } = req;
   
   
   
   
   if(url === '/data') {
      const array = {1:'uno',2:'dos',3:'tres',4:'cuatro'}
      res.setHeader('Content-Type','application/json');
      const write =JSON.stringify(array)
      res.end(write);
   }

  res.end('Welcome to Node!') 
})


server.listen(port, host,()=>{
   console.log(`Server listening on ${host}:${port} `);
})