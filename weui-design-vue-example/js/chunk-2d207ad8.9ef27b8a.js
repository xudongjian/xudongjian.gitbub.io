(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d207ad8"],{a20a:function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("Page",{attrs:{title:"Dialog",desc:"对话框",type:"white"}},[e("weui-button",{attrs:{type:"default"},on:{click:function(i){return t.showDialog("ios1")}}},[t._v(" iOS Dialog样式一 ")]),e("weui-button",{attrs:{type:"default"},on:{click:function(i){return t.showDialog("ios2")}}},[t._v(" iOS Dialog样式二 ")]),e("weui-button",{attrs:{type:"default"},on:{click:function(i){return t.showDialog("android1")}}},[t._v(" Android Dialog样式一 ")]),e("weui-button",{attrs:{type:"default"},on:{click:function(i){return t.showDialog("android2")}}},[t._v(" Android Dialog样式二 ")]),e("weui-button",{attrs:{type:"default"},on:{click:function(i){return t.showDialog("ios1F")}}},[t._v(" Event iOS 一 ")]),e("weui-button",{attrs:{type:"default"},on:{click:function(i){return t.showDialog("ios2F")}}},[t._v(" Event iOS 二 ")]),e("weui-button",{attrs:{type:"default"},on:{click:function(i){return t.showDialog("android1F")}}},[t._v(" Event Android 一 ")]),e("weui-button",{attrs:{type:"default"},on:{click:function(i){return t.showDialog("android2F")}}},[t._v(" Event Android 二 ")]),e("weui-dialog",{attrs:{visible:t.isVisible,type:t.type,title:t.title,cancelText:t.cancelText,okText:t.okText,showCancel:t.showCancel},on:{onCancel:function(i){return t.handleCancel(i)},onOk:function(i){return t.handleOk(i)}}},[t._v(" "+t._s(t.content)+" ")])],1)},o=[],s=e("2b0e"),a=e("9973"),l=s["a"].extend({components:{Page:a["a"]},data:function(){return{isVisible:!1,type:"ios",title:"",content:"",cancelText:"",okText:"",showCancel:!0}},methods:{showDialog:function(t){var i=this;switch(t){case"ios1":this.type="ios",this.title="弹窗标题",this.content="弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内",this.cancelText="辅助操作",this.okText="主操作",this.showCancel=!0,this.isVisible=!0;break;case"ios2":this.type="ios",this.title="",this.content="弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内",this.okText="知道了",this.showCancel=!1,this.isVisible=!0;break;case"android1":this.type="android",this.title="弹窗标题",this.content="弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内",this.cancelText="辅助操作",this.okText="主操作",this.showCancel=!0,this.isVisible=!0;break;case"android2":this.type="android",this.title="",this.content="弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内",this.cancelText="辅助操作",this.okText="主操作",this.showCancel=!0,this.isVisible=!0;break;case"ios1F":this.$dialog.show({type:"ios",title:"弹窗标题",content:"弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内",cancelText:"辅助操作",okText:"主操作",onCancel:function(){i.$toast.info("点击辅助操作")},onOk:function(){i.$toast.info("点击主操作")}});break;case"ios2F":this.$dialog.show({type:"ios",title:null,content:"弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内",showCancel:!1,okText:"知道了"});break;case"android1F":this.$dialog.show({type:"android",title:"弹窗标题",content:"弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内",cancelText:"辅助操作",okText:"主操作"});break;case"android2F":this.$dialog.show({type:"android",title:null,content:"弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内",cancelText:"辅助操作",okText:"主操作"});break}},handleCancel:function(){this.isVisible=!1},handleOk:function(){this.isVisible=!1}}}),c=l,h=e("2877"),r=Object(h["a"])(c,n,o,!1,null,null,null);i["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d207ad8.9ef27b8a.js.map