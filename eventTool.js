/**
 * Created by hyd on 2017/8/7.
 */
/**
 * 封装了一个事件工具的对象，里面是获取页面x y坐标的方法
 * @type {{getScroll: evenTool.getScroll, getEvent: evenTool.getEvent, getClientX: evenTool.getClientX, getClientY: evenTool.getClientY, getPageX: evenTool.getPageX, getPageY: evenTool.getPageY}}
 */
var eventTool={
    getScroll:function () {
        return {
            top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,
            left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0
        }
    },
    getEvent:function (e) {
        return e||window.event;
    },
    getClientX:function (e) {
        return this.getEvent(e).clientX;
    },
    getClientY:function (e) {
        return this.getEvent(e).clientY;
    },
    getPageX:function (e) {
        return this.getEvent(e).pageX||this.getClientX(e)+this.getScroll().left;
    },
    getPageY:function (e) {
        return this.getEvent(e).pageY||this.getClientY(e)+this.getScroll().top;
    }

};

// var eventTool = {
//     //先兼容的获取事件对象
//     getEvent : function(e){
//         return e || window.event;
//     },
//     getClientX : function(e){
//         return this.getEvent(e).clientX;
//     },
//     getPageX: function(e){
//         return this.getEvent(e).pageX || (this.getClientX(e) + (window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft || 0));
//     },
//     getClientY : function(e){
//         return this.getEvent(e).clientY;
//     },
//     getPageY: function(e){
//         return this.getEvent(e).pageY || (this.getClientY(e) + (window.pageYOffset || document.body.scrolltop || document.documentElement.scrollTop || 0));
//     }
// }

function getStyle(element,attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(element,null)[attr];
    }else {
        return element.currentStyle[attr];
    }
}
function getStyle(element,attr) {
    return window.getComputedStyle(element,null)[attr]||element.currentStyle[attr];
}
