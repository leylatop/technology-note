同样是 `<a href="#">` 标签，但a标签如果是在srcdoc中，和a标签在独立的url中再通过src嵌入到iframe中，二者表现不一样。
造成这种差异的根本原因在于 **Base URL（基准 URL）的解析规则不同**。

`<a href="#">` 的含义是，在 baseURL 后面添加 `#`
相对地址，相对当前文档的baseURL


如果作为 srcdoc 的内容嵌入到iframe中，点击a标签之后，iframe的会加载父页面的url，此时iframe的文档地址是 “about:srcdoc”。

如果是src url内的元素，点击a标签后，iframe的url不会发生变化。
因为作为src url内d元素，iframe加载的是一个独立的html。

这就涉及到 iframe 内容渲染的两种方式：


## 基于内联 html 的 iframe
没有自己的真实 URL，`srcdoc` 文档默认**使用父文档的 URL 作为其 Base URL**
使用`srcdoc`属性值承载 html 字符串，默认情况下它继承父页面的 origin，baseURL也是父页面的 url。

## 基于链接的 iframe
拥有自己的独立 URL，链接相对于**iframe 自己的 URL** 解析。使用`src` 属性指向一个具体的 url，是子页面自己的 url


