(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0af27b"],{"0cb4":function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("h2",[t._v("dialog")]),e("demo-block",[e("div",{attrs:{slot:"source"},slot:"source"},[[e("p",[t._v("component")]),e("weui-button",{on:{click:function(n){return t.showDialog("ios1")}}},[t._v("iOS Dialog样式一")]),e("weui-button",{on:{click:function(n){return t.showDialog("ios2")}}},[t._v("iOS Dialog样式二")]),e("weui-button",{on:{click:function(n){return t.showDialog("android1")}}},[t._v("Android Dialog样式一")]),e("weui-button",{on:{click:function(n){return t.showDialog("android2")}}},[t._v("Android Dialog样式二")]),e("p",[t._v("Event")]),e("weui-button",{on:{click:function(n){return t.showDialog("ios1F")}}},[t._v("Event iOS 一")]),e("weui-button",{on:{click:function(n){return t.showDialog("ios2F")}}},[t._v("Event iOS 二")]),e("weui-button",{on:{click:function(n){return t.showDialog("android1F")}}},[t._v("Event Android 一")]),e("weui-button",{on:{click:function(n){return t.showDialog("android2F")}}},[t._v("Event Android 二")]),e("weui-dialog",{attrs:{visible:t.isVisible,type:t.type,title:t.title,cancelText:t.cancelText,okText:t.okText,showCancel:t.showCancel},on:{onCancel:function(n){return t.handleCancel(n)},onOk:function(n){return t.handleOk(n)}}},[e("p",[t._v(t._s(t.content))])])]],2),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v("<template>\n  <p>component</p>\n  <weui-button @click=\"showDialog('ios1')\">iOS Dialog样式一</weui-button>\n  <weui-button @click=\"showDialog('ios2')\">iOS Dialog样式二</weui-button>\n  <weui-button @click=\"showDialog('android1')\">Android Dialog样式一</weui-button>\n  <weui-button @click=\"showDialog('android2')\">Android Dialog样式二</weui-button>\n  <p>Event</p>\n  <weui-button @click=\"showDialog('ios1F')\">Event iOS 一</weui-button>\n  <weui-button @click=\"showDialog('ios2F')\">Event iOS 二</weui-button>\n  <weui-button @click=\"showDialog('android1F')\">Event Android 一</weui-button>\n  <weui-button @click=\"showDialog('android2F')\">Event Android 二</weui-button>\n  <weui-dialog :visible=\"isVisible\" :type=\"type\" :title=\"title\" :cancelText=\"cancelText\" :okText=\"okText\" :showCancel=\"showCancel\" @onCancel=\"handleCancel($event)\" @onOk=\"handleOk($event)\">\n    <p>{{content}}</p>\n  </weui-dialog>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        isVisible: false,\n        type: 'ios',\n        title: '',\n        content: '',\n        cancelText: '',\n        okText: '',\n        showCancel: true\n      };\n    },\n    methods: {\n      showDialog(type) {\n        switch(type) {\n          case 'ios1':\n            this.type = 'ios'\n            this.title = '弹窗标题'\n            this.content = '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内'\n            this.cancelText = '辅助操作'\n            this.okText = '主操作'\n            this.showCancel = true\n            this.isVisible = true\n            break\n          case 'ios2':\n            this.type = 'ios'\n            this.title = null\n            this.content = '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内'\n            this.okText = '知道了'\n            this.showCancel = false\n            this.isVisible = true\n            break\n          case 'android1':\n            this.type = 'android'\n            this.title = '弹窗标题'\n            this.content = '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内'\n            this.cancelText = '辅助操作'\n            this.okText = '主操作'\n            this.showCancel = true\n            this.isVisible = true\n            break\n          case 'android2':\n            this.type = 'android'\n            this.title = null\n            this.content = '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内'\n            this.cancelText = '辅助操作'\n            this.okText = '主操作'\n            this.showCancel = true\n            this.isVisible = true\n            break\n          case 'ios1F':\n            this.$dialog.show({\n              type: 'ios',\n              title: '弹窗标题',\n              content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',\n              cancelText: '辅助操作',\n              okText: '主操作',\n              onCancel: () => {\n                console.log('点击辅助操作')\n              },\n              onOk: () => {\n                console.log('点击主操作')\n              }\n            });\n            break\n          case 'ios2F':\n            this.$dialog.show({\n              type: 'ios',\n              title: null,\n              content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',\n              showCancel: false,\n              okText: '知道了'\n            });\n            break\n          case 'android1F':\n            this.$dialog.show({\n              type: 'android',\n              title: '弹窗标题',\n              content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',\n              cancelText: '辅助操作',\n              okText: '主操作'\n            });\n            break\n          case 'android2F':\n            this.$dialog.show({\n              type: 'android',\n              title: null,\n              content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',\n              cancelText: '辅助操作',\n              okText: '主操作'\n            });\n            break\n        }\n      },\n      handleCancel($event) {\n        this.isVisible = false\n      },\n      handleOk($event) {\n        this.isVisible = false\n      }\n    }\n  }\n<\/script>\n")])])])],2),e("h2",[t._v("Attributes")]),t._m(0),e("h2",[t._v("Event")]),t._m(1),e("h2",[t._v("$dialog.show(config)")]),e("h3",[t._v("config")]),t._m(2)],1)},o=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("visible")]),e("td",[t._v("是否显示弹窗")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("type")]),e("td",[t._v("类型")]),e("td",[t._v("string")]),e("td",[t._v("ios / android")]),e("td",[t._v("ios")])]),e("tr",[e("td",[t._v("title")]),e("td",[t._v("标题")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("提示")])]),e("tr",[e("td",[t._v("cancelText")]),e("td",[t._v("取消按钮文本")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("取消")])]),e("tr",[e("td",[t._v("okText")]),e("td",[t._v("确定按钮文本")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("确定")])]),e("tr",[e("td",[t._v("showCancel")]),e("td",[t._v("是否显示取消按钮")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("showOk")]),e("td",[t._v("是否显示确定按钮")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("true")])])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("table",[e("thead",[e("tr",[e("th",[t._v("事件名称")]),e("th",[t._v("说明")]),e("th",[t._v("回调参数")])])]),e("tbody",[e("tr",[e("td",[t._v("onClose")]),e("td",[t._v("取消事件回调")]),e("td",[t._v("function()")])]),e("tr",[e("td",[t._v("onOk")]),e("td",[t._v("确定事件回调")]),e("td",[t._v("function()")])])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("type")]),e("td",[t._v("类型")]),e("td",[t._v("string")]),e("td",[t._v("ios / android")]),e("td",[t._v("ios")])]),e("tr",[e("td",[t._v("title")]),e("td",[t._v("标题")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("提示")])]),e("tr",[e("td",[t._v("content")]),e("td",[t._v("内容")]),e("td",[t._v("string / html")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("cancelText")]),e("td",[t._v("取消按钮文本")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("取消")])]),e("tr",[e("td",[t._v("okText")]),e("td",[t._v("确定按钮文本")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("确定")])]),e("tr",[e("td",[t._v("showCancel")]),e("td",[t._v("是否显示取消按钮")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("showOk")]),e("td",[t._v("是否显示确定按钮")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("onClose")]),e("td",[t._v("取消事件回调")]),e("td",[t._v("function()")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("onOk")]),e("td",[t._v("确定事件回调")]),e("td",[t._v("function()")]),e("td",[t._v("—")]),e("td",[t._v("—")])])])])}],s={data:function(){return{isVisible:!1,type:"ios",title:"",content:"",cancelText:"",okText:"",showCancel:!0}},methods:{showDialog:function(t){switch(t){case"ios1":this.type="ios",this.title="弹窗标题",this.content="弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内",this.cancelText="辅助操作",this.okText="主操作",this.showCancel=!0,this.isVisible=!0;break;case"ios2":this.type="ios",this.title=null,this.content="弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内",this.okText="知道了",this.showCancel=!1,this.isVisible=!0;break;case"android1":this.type="android",this.title="弹窗标题",this.content="弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内",this.cancelText="辅助操作",this.okText="主操作",this.showCancel=!0,this.isVisible=!0;break;case"android2":this.type="android",this.title=null,this.content="弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内",this.cancelText="辅助操作",this.okText="主操作",this.showCancel=!0,this.isVisible=!0;break;case"ios1F":this.$dialog.show({type:"ios",title:"弹窗标题",content:"弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内",cancelText:"辅助操作",okText:"主操作",onCancel:function(){console.log("点击辅助操作")},onOk:function(){console.log("点击主操作")}});break;case"ios2F":this.$dialog.show({type:"ios",title:null,content:"弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内",showCancel:!1,okText:"知道了"});break;case"android1F":this.$dialog.show({type:"android",title:"弹窗标题",content:"弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内",cancelText:"辅助操作",okText:"主操作"});break;case"android2F":this.$dialog.show({type:"android",title:null,content:"弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内",cancelText:"辅助操作",okText:"主操作"});break}},handleCancel:function(t){this.isVisible=!1},handleOk:function(t){this.isVisible=!1}}},l=s,a=e("2877"),d=Object(a["a"])(l,i,o,!1,null,null,null);n["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0af27b.d1e2e0e0.js.map