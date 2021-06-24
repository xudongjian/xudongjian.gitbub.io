(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21699a"],{c2c8:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("h2",[t._v("toast")]),e("demo-block",[e("div",{attrs:{slot:"source"},slot:"source"},[[e("weui-button",{attrs:{type:"default"},on:{click:function(n){return t.success()}}},[t._v("成功提示")]),e("weui-button",{attrs:{type:"default"},on:{click:function(n){return t.warn(!1)}}},[t._v("失败提示")]),e("weui-button",{attrs:{type:"default"},on:{click:function(n){return t.warn(!0)}}},[t._v("长文案提示")]),e("weui-button",{attrs:{type:"default"},on:{click:function(n){return t.loading()}}},[t._v("加载中提示")]),e("weui-button",{attrs:{type:"default"},on:{click:function(n){return t.info()}}},[t._v("文字提示")])]],2),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <weui-button type="default" @click="success()">成功提示</weui-button>\n  <weui-button type="default" @click="warn(false)">失败提示</weui-button>\n  <weui-button type="default" @click="warn(true)">长文案提示</weui-button>\n  <weui-button type="default" @click="loading()">加载中提示</weui-button>\n  <weui-button type="default" @click="info()">文字提示</weui-button>\n</template>\n<script>\n  export default {\n    methods: {\n      success: function() {\n        this.$toast.success(\'已成功\');\n      },\n      warn: function(more) {\n        if(!more) {\n          this.$toast.warn(\'获取连接失败\');\n        } else {\n          this.$toast.warn(\'此处为长文案提示详情\', { more: true });\n        }\n      },\n      loading: function() {\n        this.$toast.loading(\'加载中\', { duration: 0 });\n        setTimeout(() => {\n          this.$toast.hide()\n        }, 4000)\n      },\n      info: function() {\n        this.$toast.info(\'文字提示\', {\n          callback: () => {\n            this.$toast.info(\'执行callback\');\n          }\n        });\n      }\n    }\n  }\n<\/script>\n')])])])],2),e("h2",[t._v("Event")]),e("h3",[t._v("$toast.success(text, config)")]),e("h3",[t._v("$toast.warn(text, config)")]),e("h3",[t._v("$toast.loading(text, config)")]),e("h3",[t._v("$toast.info(text, config)")]),t._m(0),e("h3",[t._v("config")]),t._m(1),e("h3",[t._v("$toast.hide()")]),e("p",[t._v("关闭提示")])],1)},i=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("text")]),e("td",[t._v("提示内容")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("duration")]),e("td",[t._v("显示时长后自动关闭（单位：ms），0 表示永久")]),e("td",[t._v("number")]),e("td",[t._v("—")]),e("td",[t._v("2000")])]),e("tr",[e("td",[t._v("more")]),e("td",[t._v("是否为长文本，适用于 "),e("code",{pre:!0},[t._v("success")]),t._v(" "),e("code",{pre:!0},[t._v("warn")]),t._v(" "),e("code",{pre:!0},[t._v("loading")])]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("callback")]),e("td",[t._v("关闭后的回调")]),e("td",[t._v("function()")]),e("td",[t._v("—")]),e("td",[t._v("—")])])])])}],a={methods:{success:function(){this.$toast.success("已成功")},warn:function(t){t?this.$toast.warn("此处为长文案提示详情",{more:!0}):this.$toast.warn("获取连接失败")},loading:function(){var t=this;this.$toast.loading("加载中",{duration:0}),setTimeout((function(){t.$toast.hide()}),4e3)},info:function(){var t=this;this.$toast.info("文字提示",{callback:function(){t.$toast.info("执行callback")}})}}},s=a,c=e("2877"),u=Object(c["a"])(s,o,i,!1,null,null,null);n["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d21699a.580f8c26.js.map