(this.webpackJsonptest=this.webpackJsonptest||[]).push([[5],{294:function(a,e,t){a.exports={dialogs:"Dialogs_dialogs__1xeva",active:"Dialogs_active__3O7IF",dialogsItems:"Dialogs_dialogsItems__3u4-g",dialog:"Dialogs_dialog__2gAUV",massages:"Dialogs_massages__aier5",massage:"Dialogs_massage__y2kKE",img:"Dialogs_img__1vUxO",link:"Dialogs_link__ngBKM"}},296:function(a,e,t){a.exports={img:"Massage_img__1gOfE",wrapper:"Massage_wrapper__2xH8K",massage:"Massage_massage__2IC4F"}},309:function(a,e,t){"use strict";t.r(e);var s=t(0),n=t.n(s),i=t(129),l=t(294),m=t.n(l),g=t(15),r=function(a){var e="/dialogs/"+a.id;return n.a.createElement("div",{className:m.a.dialog},n.a.createElement("img",{className:m.a.img,src:a.avatar,alt:""}),n.a.createElement(g.b,{className:m.a.link,to:e,activeClassName:m.a.active},a.name))},c=t(296),o=t.n(c),d=function(a){return n.a.createElement("div",{className:o.a.wrapper},n.a.createElement("img",{className:o.a.img,src:a.avatar,alt:""}),n.a.createElement("div",{className:o.a.massage}," ",a.massage))},u=t(84),_=t(130),v=t(45),E=t(54),f=Object(E.a)(100),p=Object(v.a)("textarea"),b=Object(_.a)({form:"addMessage"})((function(a){return n.a.createElement("form",{onSubmit:a.handleSubmit},n.a.createElement("div",null,n.a.createElement(u.a,{validate:[E.b,f],name:"newMessageBody",component:p,placeholder:"Enter you new message..."})),n.a.createElement("div",null,n.a.createElement("button",null,"Send")))})),D=function(a){var e=a.dialogPage.dialogData.map((function(a){return n.a.createElement(r,{name:a.name,id:a.id,avatar:a.avatar,key:a.id})})),t=a.dialogPage.massageData.map((function(a){return n.a.createElement(d,{massage:a.massage,id:a.id,avatar:a.avatar,key:a.id})}));return n.a.createElement("div",{className:m.a.dialogs},n.a.createElement("div",{className:m.a.dialogsItems},e),n.a.createElement("div",{className:m.a.massages},t,n.a.createElement(b,{onSubmit:function(e){a.addMassage(e.newMessageBody)}})))},N=t(13),M=t(100),O=t(8);e.default=Object(O.d)(Object(N.b)((function(a){return{dialogPage:a.dialogPage}}),(function(a){return{addMassage:function(e){a(Object(i.a)(e))}}})),M.a)(D)}}]);
//# sourceMappingURL=5.938a2665.chunk.js.map