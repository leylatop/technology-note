## 目标图形与css实现方式
![image.png](http://images.leyla.top/note/20260527101042.png)


实现思路：
将角标分为 2 部分
顶部矩形和底部弧线转角切角
将二者作为整体，水平倾斜

```css
.primary-capability-tab-badge {
    position: absolute;
    top: -10px;
    right: 0;
    z-index: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 16px;
    padding: 0 6px;
    border-radius: 6px 6px 6px 0px;
    font-size: 10px;
    font-weight: 500;
    line-height: 14px;
    pointer-events: none;
    // 水平向右倾斜
    transform: skewX(-8deg);

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 100%;
      width: 10px;
      height: 8px;
      // 使用 clip-path 配合贝塞尔曲线路径进行裁剪
      clip-path: path('M 0 0 L 10 0 Q 0 0 0 8 Z');
    }
  }
```

## 总结
贝塞尔区分的点，分为起点、终点、控制点
贝塞尔曲线的控制点，决定了弧线往哪个方向弯
贝塞尔曲线的起点和终点，控制了线的两端
贝塞尔曲线理论上来说可以有无数次，但是常用的是二次贝塞尔曲线和三次贝塞尔曲线
n次贝塞尔曲线有n-1 个控制点