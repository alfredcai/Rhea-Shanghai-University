# Rhea
上海大学刷课助手 -- chrome插件(Chrome extension)

由于本人于2017.6毕业离开上大，这个项目也算是再也没有人维护了。我最后添加了注释，希望对以后看到的同学有用。也欢迎大家来贡献代码继续维护。

- [实现功能](#实现功能)
- [如何安装](#如何安装)
- [使用说明](#使用说明)
- [实现原理](#实现原理)
- [致谢](#致谢)
- [License](#license)

## 实现功能
- 选课页面（xk.autoisp.shu.edu.cn:*/CourseSelectionStudent/FastInput）模拟点击提交按钮自动刷课
- 教学评估页面（cj.shu.edu.cn/StudentPortal/Evaluate）简化打分
- 课程表页面（xk.autoisp.shu.edu.cn:*/StudentQuery/QueryCourseTable）简单美化填入课程内容

## 如何安装
- __方法一__
	- 点击右上角的Download ZIP，解压的到任意的地方
	- 打开chrome的扩展程序，选中“开发者模式”，然后点击“加载已解压的扩展程序”按钮，选择你解压得到的目录
	- 如果看到chrome右上角多了![icon](icons/Aristotle_24.png)图标，就OK了!
- __方法二__
	- 如果对程序放心的话，可以直接下载[crx文件](https://github.com/alfredcai/Rhea-Shanghai-University/releases)
	- 打开chrome的扩展程序，将文件拖入就可以了！	
- 安装本软件后，每次打开浏览器会建议关闭开发者模式安装的插件，这时点取消可以保持本插件继续运行
- 如果想 __暂时停用__ ，请在扩展程序管理页面取消“已启用”前的对勾即可
- 如果想 __卸载__ ，请在扩展程序管理页面点击垃圾桶图标即可

## 使用说明
- 已经在页面上添加了相应的按钮，根据名字选择就好
- 刷课时想看到更多详细信息，可以打开浏览器控制台查看
- 当前设定为每8秒点击一次提交按钮

## __关于停止选课__
- 点击浏览器右上角的插件图标![icon](icons/Aristotle_24.png)，弹出的页面有 __停止选课的按钮__

## 实现原理
- 调用JavaScript的setTimeOut方法点击提交按钮
- 关于提交表单session并没有刷新的问题，只是粗糙的刷新的整个页面，利用插件支持的本地存储，将保存的课程号再次填入继续提交

## 致谢
- 图标来自于[ICONFINDER](https://www.iconfinder.com/)的[beard_face_greece_greek_philosopher_platonic_scientist](https://www.iconfinder.com/icons/362069/aristotle_avatar_beard_face_greece_greek_philosopher_platonic_scientist_icon)
- [jQuery](http://jquery.com)
- [Bootstrap](http://getbootstrap.com)

## License

[MIT licensed](LICENSE)
