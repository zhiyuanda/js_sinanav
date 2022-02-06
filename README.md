>  参考来源：
>
> [JavaScript基础语法-dom-bom-js-es6新语法-jQuery-数据可视化echarts黑马pink老师前端入门基础视频教程(500多集)持续_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Sy4y1C7ha?p=231&spm_id_from=pageDriver)

### 网页GitHub地址如下：（若加载较慢建议刷新后耐心等待一会~）

[js_sinanav](https://jiang-lijun.github.io/js_sinanav/)

### 网页代码如下：

HTML：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>js_sinanav</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <div class="nav">
        <div class="nav_con">
            <ul class="nav-left">
                <li class="shouye">
                    <span>设为首页</span>
                </li>
                <li class="phone">
                    <span>手机新浪网</span>
                </li>
                <li class="h5">
                    <span>移动客户端<span class="jiantou"></span></span>
                    <ul>
                        <li>新浪微博</li>
                        <li>新浪新闻</li>
                        <li>新浪财经</li>
                        <li>新浪体育</li>
                        <li>黑猫投诉</li>
                        <li>新浪博客</li>
                        <li>新浪游戏</li>
                        <li>新浪众测</li>
                        <li>新浪邮箱客户端</li>
                    </ul>
                </li>
            </ul>
            <ul class="nav-right">
                <li class="web">
                    <span>网站导航</span>
                </li>
                <li class="email">
                    <span>邮箱<span class="jiantou"></span></span>
                    <ul>
                        <li>免费邮箱</li>
                        <li>VIP邮箱</li>
                        <li>企业邮箱</li>
                        <li>新浪邮箱</li>
                    </ul>
                </li>
                <li class="boke">
                    <span>博客<span class="jiantou"></span></span>
                    <ul>
                        <li>博客评论</li>
                        <li>未读提醒</li>
                    </ul>
                </li>
                <li class="weibo">
                    <span>微博<span class="jiantou"></span></span>
                    <ul>
                        <li>私信</li>
                        <li>评论</li>
                        <li>@我</li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
    <script type="text/javascript" src="index.js"></script>
</body>
</html>
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

CSS:

```css
* {
    margin: 0;
    padding: 0;
}
ul,
li {
    list-style: none;
    margin: 0 auto;
    cursor: pointer;
}
.nav {
    height: 44px;
    font-size: 12px;
    color: #333;
    border-top: 3px solid #ff8500;
    border-bottom: 1px solid #edeef0;
    background-color: #fcfcfc;
    box-sizing: border-box;
}
.nav_con {
    width: 1000px;
    margin: 0 auto;
}
.nav_con ul>li:hover {
    background-color: #eee;
    color: #ff8500;
    box-sizing: border-box;
}
.nav-left>li {
    float: left;
    padding: 0 2px 0 0;
    line-height: 16px;
}
.nav-right>li {
    float: right;
    padding: 0 2px 0 0;
}
.nav-left>li span{
    line-height: 41px;
    padding: 12px 9px 12px 16px;
}
.nav-right>li span{
    line-height: 41px;
    padding: 12px 9px 12px 16px;
}
.jiantou {
    display: inline-block;
    width: 8px;
    height: 5px;
    margin: 0 0 0 5px;
    overflow: hidden;
    vertical-align: middle;
    font-size: 12px;
    line-height: 13px;
    background: url(icon.png) 0 -966px no-repeat;
}
.nav_con ul li ul {
    display: none;

}
.nav_con ul li ul li{
    border: 1px solid #fecc5b;
    padding: 8px 0 8px 10px;
    font-size: 12px;
    color: #4c4c4c;
    background-color: #fff;
}
.nav_con ul li ul li:hover {
    background-color: rgb(255,245,218);
}
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

JavaScript:

```javascript
var uls_left = document.querySelector('.nav-left');
var uls_right = document.querySelector('.nav-right');
var lis_left = uls_left.children;
var lis_right = uls_right.children;
for (var i = 0;i < lis_left.length;i++) {
    lis_left[i].onmouseover = function() {
        this.children[1].style.display = 'block';
    }
    lis_left[i].onmouseout = function() {
        this.children[1].style.display = 'none';
    }
}
for (var i = 0;i < lis_right.length;i++) {
    lis_right[i].onmouseover = function() {
        this.children[1].style.display = 'block';
    }
    lis_right[i].onmouseout = function() {
        this.children[1].style.display = 'none';
    }
}
```

