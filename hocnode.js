// server.js
const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  // đường dẫn và phương thức
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Xin chào từ Node.js HTTP server!');
    return;
  }

  // 404 cho các route khác
  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Không tìm thấy');
});

server.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
