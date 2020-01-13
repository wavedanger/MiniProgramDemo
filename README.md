# MiniProgramDemo
记录自己小程序使用历程
<details>
  <summary>注意点</summary>
  
### 1. 全局配置与页面配置
页面配置会覆盖全局配置，如未设置页面配置会使用全局配置
例如：app.json和page.json下的navigationBarBackgroundColor,page.json会覆盖app.json
  
### 2. 绝对路径与相对路径
绝对路径以"/"开头，相对路径以"../"开头，一般可以相互通用
  
### 3. wx.navigateTo与wx.redirectTo差异
跳转时，调用的生命周期不同，前者会调用onHide后者会调用onUnload
  
### 4. catchtap与bindtap
非冒泡与冒泡
  
### 5. template与component
相同：都是组件化
不同：template主要是展示，而component拥有自己的js
使用：普通展示用template，较强逻辑使用component

### 6. wxs
常用场景：数字，时间规范
格式：{{wxsname.func(data)}}//wxsname为module名，data为数据，func为规范方法
```
//定义
<wxs module="wxsname">
var func=(data){
  return data.toFixed(2)
}
module.exports={
func:func
}
</wxs>
//引用
<wxs src="相对路径" module="wxsname"/>
<view>{{wxsname.func(1.222222)}}</view>//显示为1.22
```
</details>

## hold on

<details>
  <summary>常见组件</summary>
  
### 1. 跑马灯(pages/marquee)
* 单文本循环播放
* 单文本循环衔接播放
* 单文本左右横跳

### 2. 视图选择器(pages/pickerview)
* 地区选择器

### 3. 登录页(pages/login)
* 一般登录页

### 4. 列表选择(pages/checkbox)
* 单选
* 多选
</details>
