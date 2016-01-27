# Rhea
上海大学课程助手 -- chrome插件(chrome extension)

- [实现功能](#实现功能)
- [如何安装](#如何安装)
- [使用说明](#使用说明)
- [实现原理](#实现原理)
- [致谢](#致谢)
- [License](#license)

## 实现功能
- 模拟点击提交按钮自动刷课「暂未实现」
- 教学评估辅助选中
- 课程表简单美化

## 如何安装
- 点击右上角的Download ZIP，解压的到任意的地方
- 打开chrome的扩展程序，选中“开发者模式”，然后点击“加载已解压的扩展程序”按钮，选择你解压得到的目录
- 如果看到chrome右上角多了![icon](icons/Aristotle_24.png)图标，就OK了!
- 安装本软件后，每次打开浏览器会建议关闭开发者模式安装的插件，这时点取消可以保持本插件继续运行，如果想暂时停用，请在扩展程序管理页面取消“已启用”前的对勾即可。

## 使用说明
- 已经在页面上添加了相应的按钮，根据名字选择就好
- __关于停止选课__
	- 点击浏览器右上角的插件图标，弹出的页面有___停止选课的按钮___
	- 在选课系统首页也有___停止选课的按钮___方便大家操作

## 实现原理
- 调用JavaScript的setInterval方法点击提交按钮
- 关于提交表单session并没有刷新的问题，只是粗糙的刷新的整个页面，利用插件支持的本地存储，将保存的课程号再次填入继续提交
- 其他就是一些jQuery控制页面元素的调用没什么可说的

## 致谢
- 图标来自于[ICONFINDER](https://www.iconfinder.com/)的[https://www.iconfinder.com/icons/362069/aristotle_avatar_beard_face_greece_greek_philosopher_platonic_scientist_icon#size=128](https://www.iconfinder.com/icons/362069/aristotle_avatar_beard_face_greece_greek_philosopher_platonic_scientist_icon#size=128)
- [jQuery](http://jquery.com)
- [Bootstrap](http://getbootstrap.com)

## License
- MIT licensed


