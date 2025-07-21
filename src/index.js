// 入口文件
console.log('Webpack 应用已成功加载！');

// 添加一些基本的 DOM 操作
document.addEventListener('DOMContentLoaded', () => {
  const app = document.createElement('div');
  app.id = 'app';
  app.textContent = 'Hello, Webpack 5!';
  document.body.appendChild(app);
});