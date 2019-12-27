// 项目js的入口文件

// 1、导入jquery
// import *** from *** 是 es6 中导入模块的方式
import $ from 'jquery'

$(function(){
    $('li:odd').css('backgroundColor', 'lightblue')
    $('li:even').css('backgroundColor', function(){
        return '#' + 'D97634'
    })
})