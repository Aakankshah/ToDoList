(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(4),r=a.n(c),o=a(6),u=a(5),i=a(1);a(2),a(15);var m=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),m=Object(i.a)(r,2),d=m[0],s=m[1];return l.a.createElement("div",{className:"App"},l.a.createElement("h1",{className:"heading"},"To-Do List"),l.a.createElement("div",{className:"inputBox"},l.a.createElement("input",{className:"input",onChange:function(e){c(e.target.value)},placeholder:"Add your tasks"}),l.a.createElement("button",{className:"addTaskButton",onClick:function(){var e={id:0===d.length?1:d[d.length-1].id+1,taskName:a,completed:!1};s([].concat(Object(u.a)(d),[e]))}},"+")),l.a.createElement("div",null,d.map(function(e){return l.a.createElement("div",{className:"show",style:{backgroundColor:!0===e.completed?"green":"white"}},l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("h2",null,e.taskName)),l.a.createElement("td",null,l.a.createElement("button",{className:"deleteButton",onClick:function(){return t=e.id,void s(d.filter(function(e){return e.id!==t}));var t}},"Remove")),l.a.createElement("td",null,l.a.createElement("button",{className:"done",onClick:function(){return t=e.id,void s(d.map(function(e){return e.id===t?Object(o.a)({},e,{completed:!0}):{task:e}}));var t}},"Done")))))})))};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(m,null)))},7:function(e,t,a){e.exports=a(18)}},[[7,2,1]]]);
//# sourceMappingURL=main.ef1e302c.chunk.js.map