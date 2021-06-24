(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0da3ef"],{"6b7d":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h2",[t._v("select")]),n("demo-block",[n("div",{attrs:{slot:"source"},slot:"source"},[[n("weui-form",{attrs:{title:"原生选择框"}},[n("weui-form-control",[n("weui-form-group",[n("weui-select",{attrs:{name:"type"},on:{input:function(e){return t.show("type")}},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[n("weui-option",{attrs:{value:"1",label:"微信号"}}),n("weui-option",{attrs:{value:"2",label:"QQ号"}}),n("weui-option",{attrs:{value:"3",label:"Email"}})],1),n("weui-select-group",{scopedSlots:t._u([{key:"header",fn:function(){return[n("select",{staticClass:"weui-select",attrs:{name:"select2"}},[n("option",{attrs:{value:"1"}},[t._v("+86")]),n("option",{attrs:{value:"2"}},[t._v("+80")]),n("option",{attrs:{value:"3"}},[t._v("+84")]),n("option",{attrs:{value:"4"}},[t._v("+87")])])]},proxy:!0},{key:"body",fn:function(){return[n("input",{staticClass:"weui-input",attrs:{type:"number",pattern:"[0-9]*",placeholder:"请输入号码",value:"12345678907"}})]},proxy:!0}])}),n("weui-select",{attrs:{name:"country",label:"国家"},on:{input:function(e){return t.show("country")}},model:{value:t.country,callback:function(e){t.country=e},expression:"country"}},[n("weui-option",{attrs:{value:"1",label:"中国"}}),n("weui-option",{attrs:{value:"2",label:"美国"}}),n("weui-option",{attrs:{value:"3",label:"英国"}})],1)],1)],1)],1)]],2),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <weui-form :title="\'原生选择框\'">\n    <weui-form-control>\n      <weui-form-group>\n        <weui-select :name="\'type\'" v-model="type" @input="show(\'type\')">\n          <weui-option value="1" label="微信号"></weui-option>\n          <weui-option value="2" label="QQ号"></weui-option>\n          <weui-option value="3" label="Email"></weui-option>\n        </weui-select>\n        <weui-select-group>\n          <template #header>\n            <select class="weui-select" name="select2">\n              <option value="1">+86</option>\n              <option value="2">+80</option>\n              <option value="3">+84</option>\n              <option value="4">+87</option>\n            </select>\n          </template>\n          <template #body>\n            <input\n              class="weui-input"\n              type="number"\n              pattern="[0-9]*"\n              placeholder="请输入号码"\n              value="12345678907"\n            />\n          </template>\n        </weui-select-group>\n        <weui-select :name="\'country\'" :label="\'国家\'" v-model="country" @input="show(\'country\')">\n          <weui-option value="1" label="中国"></weui-option>\n          <weui-option value="2" label="美国"></weui-option>\n          <weui-option value="3" label="英国"></weui-option>\n        </weui-select>\n      </weui-form-group>\n    </weui-form-control>\n  </weui-form>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        type: \'2\',\n        country: \'3\'\n      }\n    },\n    methods: {\n      show: function(key) {\n        console.log(this[key])\n      }\n    }\n  }\n<\/script>\n')])])])],2),n("h2",[t._v("Attributes")]),n("h3",[t._v("select")]),t._m(0),n("h3",[t._v("option")]),t._m(1),n("h3",[t._v("select-group")]),t._m(2)],1)},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),n("th",[t._v("说明")]),n("th",[t._v("类型")]),n("th",[t._v("可选值")]),n("th",[t._v("默认值")])])]),n("tbody",[n("tr",[n("td",[t._v("name")]),n("td",[t._v("下拉列表的名称")]),n("td",[t._v("string")]),n("td",[t._v("—")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("label")]),n("td",[t._v("标签名")]),n("td",[t._v("string")]),n("td",[t._v("—")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("value(v-model)")]),n("td",[t._v("当前选中的值")]),n("td",[t._v("string")]),n("td",[t._v("—")]),n("td",[t._v("—")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),n("th",[t._v("说明")]),n("th",[t._v("类型")]),n("th",[t._v("可选值")]),n("th",[t._v("默认值")])])]),n("tbody",[n("tr",[n("td",[t._v("label")]),n("td",[t._v("标签名")]),n("td",[t._v("string")]),n("td",[t._v("—")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("value")]),n("td",[t._v("选项的值")]),n("td",[t._v("string")]),n("td",[t._v("—")]),n("td",[t._v("—")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),n("th",[t._v("说明")]),n("th",[t._v("类型")]),n("th",[t._v("可选值")]),n("th",[t._v("默认值")])])]),n("tbody",[n("tr",[n("td",[t._v("label")]),n("td",[t._v("标签名")]),n("td",[t._v("string")]),n("td",[t._v("—")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("body")]),n("td",[t._v("中间区域内容")]),n("td",[t._v("string / slot")]),n("td",[t._v("—")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("isPicker")]),n("td",[t._v("是否包含模拟选择框(picker)")]),n("td",[t._v("string")]),n("td",[t._v("—")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("placement")]),n("td",[t._v("select所在位置")]),n("td",[t._v("string")]),n("td",[t._v("before / after")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("header")]),n("td",[t._v("右边区域内容")]),n("td",[t._v("slot")]),n("td",[t._v("—")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("showHeader")]),n("td",[t._v("是否显示右边区域")]),n("td",[t._v("boolean")]),n("td",[t._v("—")]),n("td",[t._v("true")])])])])}],u={data:function(){return{type:"2",country:"3"}},methods:{show:function(t){console.log(this[t])}}},i=u,r=n("2877"),a=Object(r["a"])(i,o,l,!1,null,null,null);e["default"]=a.exports}}]);
//# sourceMappingURL=chunk-2d0da3ef.02bd57ba.js.map