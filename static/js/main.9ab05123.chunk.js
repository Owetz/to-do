(this["webpackJsonpto-do"]=this["webpackJsonpto-do"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(3),r=a.n(c),s=(a(14),a(4)),l=a(5),i=a(7),u=a(6),d=a(8),m=(a(15),a(1)),f=(a(16),a(17),a(18),function(e){var t=Object(n.useState)(e.completed),a=Object(m.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(e.content),l=Object(m.a)(s,2),i=l[0],u=l[1],d=Object(n.useState)(!1),f=Object(m.a)(d,2),v=f[0],p=f[1];return o.a.createElement("div",{className:c?"todo-entry completed":"todo-entry"},o.a.createElement("i",{className:c?"far fa-check-square":"far fa-square",onClick:function(){return r(!c)}}),v?o.a.createElement("input",{type:"text",value:i,autoFocus:!0,onKeyPress:function(e){"Enter"===e.key&&p(!v)},onChange:function(e){return u(e.target.value)}}):o.a.createElement("p",null,i),o.a.createElement("div",{className:"todo-utils"},c?"":o.a.createElement("i",{className:"fas fa-pen",onClick:function(){return p(!v)}}),o.a.createElement("i",{className:"far fa-trash-alt",onClick:function(e){e.target.parentNode.parentNode.remove()}})))}),v=function(e){var t=e.todos.map((function(e,t){var a=e.content,n=e.completed;return o.a.createElement(f,{key:t,completed:n,content:a})}));return o.a.createElement("div",{className:"todolist"},t)},p=(a(19),function(e){var t=e.addTodo,a=e.list;return o.a.createElement("div",{className:"todo-entry placeholder"},o.a.createElement("input",{type:"text",placeholder:"Add To-Do...",onKeyPress:function(e){if("Enter"===e.key&&e.target.value){var n={completed:!1,content:e.target.value},o=a.push(n);t(o),e.target.value=""}}}),o.a.createElement("i",{className:"fas fa-plus",onClick:function(e){if(e.target.previousSibling.value){var n={completed:!1,content:e.target.previousSibling.value},o=a.push(n);t(o),e.target.previousSibling.value=""}}}))}),E=function(e){var t=Object(n.useState)(e.todos[0]),a=Object(m.a)(t,2),c=a[0],r=(a[1],Object(n.useState)(c)),s=Object(m.a)(r,2),l=(s[0],s[1]);return o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-header"},o.a.createElement("h1",null,"To-Do List:")),o.a.createElement("div",{className:"card-body"},o.a.createElement(v,{todos:c.todos}),o.a.createElement(p,{list:c.todos,addTodo:l})))},h=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).state={todoLists:[{listName:"Test1",todos:[{completed:!1,content:"Testcontent1"},{completed:!0,content:"Testcontent2"}]},{listName:"Test2",todos:[{completed:!0,content:"Testcontent3"}]}]},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.todoLists;return o.a.createElement(E,{todos:e})}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.9ab05123.chunk.js.map