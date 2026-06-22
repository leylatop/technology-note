- AI 生成的文件名中有乱码
- 防止AI 生成的 html 跳转出站外
- 防止 AI 生成的 html 中有死循环调用

```
<img class="w-full h-full object-contain" onerror="this.src='https://img.icons8.com/color/96/medical-bag.png'" src="https://img.icons8.com/color/96/medical-bag.png">
```