(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{170:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("blockquote",[a("p",[t._v("作者：至正"),a("br"),t._v("\n原文链接："),a("a",{attrs:{href:"https://yuque.com/flying.ni/the-tower/tvzasn",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://yuque.com/flying.ni/the-tower/tvzasn"),a("OutboundLink")],1)])]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("最常见的 Web 类示例之一: TodoList = Todo list + Add todo button")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("React 只负责页面渲染, 而不负责页面逻辑, 页面逻辑可以从中单独抽取出来, 变成 store")]),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("与图一相比, 几个明显的改进点:")]),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("这样一来, 各个部分各司其职, 耦合度更低, 复用度更高, 扩展性更好")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),a("p",[t._v("上面说了, 可以使用 Middleware 拦截 action, 这样一来异步的网络操作也就很方便了, 做成一个 Middleware 就行了, 这里使用 redux-saga 这个类库, 举个栗子:")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),a("p",[t._v("有了前面的三步铺垫, Dva 的出现也就水到渠成了, 正如 Dva 官网所言, Dva 是基于 React + Redux + Saga 的最佳实践沉淀, 做了 3 件很重要的事情, 大大提升了编码体验:")]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"dva-图解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dva-图解","aria-hidden":"true"}},[this._v("#")]),this._v(" Dva 图解")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"示例背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例背景","aria-hidden":"true"}},[this._v("#")]),this._v(" 示例背景")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"图解一-react-表示法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图解一-react-表示法","aria-hidden":"true"}},[this._v("#")]),this._v(" 图解一: React 表示法")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://cdn.yuque.com/yuque/0/2018/png/103904/1528436560812-2586a0b5-7a6a-4a07-895c-f822fa85d5de.png",alt:"图片.png | left | 747x518"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("按照 React 官方指导意见, 如果多个 Component 之间要发生交互, 那么状态(即: 数据)就维护在这些 Component 的最小公约父节点上, 也即是 "),s("code",[this._v("<App/>")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("<TodoList/> <Todo/>")]),this._v(" 以及"),s("code",[this._v("<AddTodoBtn/>")]),this._v(" 本身不维持任何 state, 完全由父节点"),s("code",[this._v("<App/>")]),this._v(" 传入 props 以决定其展现, 是一个纯函数的存在形式, 即: "),s("code",[this._v("Pure Component")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"图解二-redux-表示法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图解二-redux-表示法","aria-hidden":"true"}},[this._v("#")]),this._v(" 图解二: Redux 表示法")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://cdn.yuque.com/yuque/0/2018/png/103904/1528436134375-4c15f63d-72f1-4c73-94a6-55b220d2547c.png",alt:"图片.png | left | 747x558"}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",[a("li",[t._v("状态及页面逻辑从 "),a("code",[t._v("<App/>")]),t._v("里面抽取出来, 成为独立的 store, 页面逻辑就是 reducer")]),t._v(" "),a("li",[a("code",[t._v("<TodoList/>")]),t._v(" 及"),a("code",[t._v("<AddTodoBtn/>")]),t._v("都是 Pure Component, 通过 connect 方法可以很方便地给它俩加一层 wrapper 从而建立起与 store 的联系: 可以通过 dispatch 向 store 注入 action, 促使 store 的状态进行变化, 同时又订阅了 store 的状态变化, 一旦状态有变, 被 connect 的组件也随之刷新")]),t._v(" "),a("li",[t._v("使用 dispatch 往 store 发送 action 的这个过程是可以被拦截的, 自然而然地就可以在这里增加各种 Middleware, 实现各种自定义功能, eg: logging")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"图解三-加入-saga"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图解三-加入-saga","aria-hidden":"true"}},[this._v("#")]),this._v(" 图解三: 加入 Saga")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://cdn.yuque.com/yuque/0/2018/png/103904/1528436167824-7fa834ea-aa6c-4f9f-bab5-b8c5312bcf7e.png",alt:"图片.png | left | 747x504"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("点击创建 Todo 的按钮, 发起一个 type == addTodo 的 action")]),this._v(" "),s("li",[this._v("saga 拦截这个 action, 发起 http 请求, 如果请求成功, 则继续向 reducer 发一个 type == addTodoSucc 的 action, 提示创建成功, 反之则发送 type == addTodoFail 的 action 即可")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"图解四-dva-表示法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图解四-dva-表示法","aria-hidden":"true"}},[this._v("#")]),this._v(" 图解四: Dva 表示法")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://cdn.yuque.com/yuque/0/2018/png/103904/1528436195004-cd3800f2-f13d-40ba-bb1f-4efba99cfe0d.png",alt:"图片.png | left | 747x490"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("把 store 及 saga 统一为一个 model 的概念, 写在一个 js 文件里面")]),this._v(" "),s("li",[this._v("增加了一个 Subscriptions, 用于收集其他来源的 action, eg: 键盘操作")]),this._v(" "),s("li",[this._v("model 写法很简约, 类似于 DSL 或者 RoR, coding 快得飞起✈️")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("约定优于配置, 总是好的")]),this._v("😆")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("model")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  namespace"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'count'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    record"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    current"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  reducers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("state")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" newCurrent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        record"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" newCurrent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("record "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" newCurrent "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("record"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        current"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" newCurrent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("minus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("state")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" current"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  effects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" call"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" put "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("delay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'minus'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  subscriptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("keyboardWatcher")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" dispatch "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'⌘+up, ctrl+up'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'add'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);s.default=e.exports}}]);