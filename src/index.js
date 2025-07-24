// 入口文件
// 导入样式文件
import './css/index.less';
import './css/index.css';

console.log('Webpack 应用已成功加载！');

const img = document.createElement('img');
img.src = require('/public/imgs/1e12a9ebbbedbf9b4947b9c0fcc74f34.jpg');
document.body.appendChild(img);

// 添加一些基本的 DOM 操作
document.addEventListener('DOMContentLoaded', () => {
  const app = document.createElement('div');
  app.id = 'app';
  app.textContent = 'Hello, Webpack 5!';
  document.body.appendChild(app);
});