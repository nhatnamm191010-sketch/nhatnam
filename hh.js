// app.js
const express = require('express');
const app = express();
const PORT = 3000;

// middleware để parse JSON body
app.use(express.json());

// route GET
app.get('/', (req, res) => {
  res.send('Xin chào từ Express!');
});

// route POST ví dụ
app.post('/echo', (req, res) => {
  // gửi lại body người dùng gửi lên
  res.json({ youSent: req.body });
});

// error handler đơn giản
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Có lỗi máy chủ' });
});

app.listen(PORT, () => {
  console.log(`Express server chạy tại http://localhost:${PORT}`);
});
