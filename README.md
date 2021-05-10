<!--
 * @Author: czj
 * @Date: 2021-05-10 10:53:44
 * @LastEditors: czj
 * @LastEditTime: 2021-05-10 11:06:41
 * @Description:
-->
# 配置文件
## 常用的配置文件

```
{
  "source": {
    "include": [ "src/utils" ],
    "exclude": [ "src/view" ]
  },
  "opts": {
    "template": "templates/default",
    "encoding": "utf8",
    "destination": "./docs/",
    "recurse": true,
    "verbose": false
  }
}
```
- source 表示传递给 JSDOC 的文件
- source.include 表示 JSDOC 需要扫描哪些文件
- source.exclude 表示 JSDOC 需要排除哪些文件
- opts 表示传递给 JSDOC 的选项
- opts.template 生成文档的模板，默认是 templates/default
- opts.encoding 读取文件的编码，默认是 utf8
- opts.destination 生成文档的路径，默认是 ./out/
- opts.recurse 运行时是否递归子目录
- opts.verbose 运行时是否输出详细信息，默认是 false

## 级块标签：
- @author 该类/方法的作者。
- @class 表示这是一个类。
- @function/@method 表示这是一个函数/方法(这是同义词)。
- @private 表示该类/方法是私有的，JSDOC 不会为其生成文档。
- @name 该类/方法的名字。
- @description 该类/方法的描述。
- @param 该类/方法的参数，可重复定义。
- @return 该类/方法的返回类型。
- @link 创建超链接，生成文档时可以为其链接到其他部分。
- @example 创建例子。

# 主题
JSDoc 默认的主题可能不近如人意，不过大型交友网站上给我们提供了还不错的主题，只要我们对应 install 下来配置就行。推荐两款还不错的主题：

docdash
minami

---

## 配置主题
### 下载
```
npm install docdash --save-dev
```
### 在 `jsdoc.json` 文件中配置
```
{
  "opts": {
    "template": "node_modules/docdash"
  }
}
```

# 模板
## 指定自己的模版
对主题还是不满意，我们也可以在 `jsdoc.json`  中指定自己的模版

```
{
  "templates": {
    "cleverLinks": true,
    "default": {
      "layoutFile": "plugins/layout.tmpl"
    }
  }
}
```
