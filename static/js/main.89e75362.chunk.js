(this["webpackJsonpmake-the-bigger-sum"]=this["webpackJsonpmake-the-bigger-sum"]||[]).push([[0],{319:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=319},339:function(e,t,a){e.exports=a(405)},405:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),l=a.n(c),i=a(81),o=a(117),m=a(423),u=a(87),s=a(182),f=a(290),h=Object(f.a)((function(e){return{paper:{display:"flex",alignItems:"center",justifyContent:"center",height:50,width:50},colorPaper:{display:"flex",alignItems:"center",justifyContent:"center",height:50,width:50,backgroundColor:"yellow"}}})),y=function(e){var t=h(),a=e.num,n=e.setSelectedNum,c=e.selectPlayer,l=e.player,i=e.changeNum;return r.a.createElement(m.a,{item:!0},r.a.createElement(m.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",spacing:1},a.map((function(e,o){return r.a.createElement(m.a,{key:o,item:!0,onClick:function(e){return function(e,t){t.preventDefault(),console.log("key==>",e),console.log("num==>",a),0!==e&&e!==a.length-1||(c(!l),0===e?(n(a.shift()),i(a)):(n(a.pop()),i(a)))}(o,e)}},r.a.createElement(s.a,{className:0===o||o===a.length-1?t.colorPaper:t.paper,elevation:3},r.a.createElement(u.a,{variant:"h4"},e)))}))))},E=function(e){return r.a.createElement(m.a,{item:!0},r.a.createElement(u.a,{variant:"h4"},"Player ".concat(e.player?2:1,"'s Turn")))},d=function(e){var t=e.player,a=e.selectedNum,c=e.num,l=Object(n.useState)(0),o=Object(i.a)(l,2),s=o[0],f=o[1],h=Object(n.useState)(0),y=Object(i.a)(h,2),E=y[0],d=y[1],g=!1;return Object(n.useEffect)((function(){t?f(s+a):d(E+a),g=s>E}),[t,a,f,d]),r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{item:!0},r.a.createElement(m.a,{container:!0,spacing:4},r.a.createElement(m.a,{item:!0},r.a.createElement(u.a,{variant:"h4"},"Players")),r.a.createElement(m.a,{item:!0},r.a.createElement(u.a,{variant:"h4"},"Player 1")),r.a.createElement(m.a,{item:!0},r.a.createElement(u.a,{variant:"h4"},"Player 2")))),r.a.createElement(m.a,{item:!0},r.a.createElement(m.a,{container:!0,item:!0,spacing:7},r.a.createElement(m.a,{item:!0},r.a.createElement(u.a,{variant:"h4"},"Total Score")),r.a.createElement(m.a,{item:!0},r.a.createElement(u.a,{variant:"h4"},s)),r.a.createElement(m.a,{item:!0},r.a.createElement(u.a,{variant:"h4"},E)))),c.length?r.a.createElement(r.a.Fragment,null):r.a.createElement(m.a,{item:!0},r.a.createElement(u.a,{variant:"h2"},"".concat(g?"Player 1":"Player 2"," Wins"))))},g=a(100),p=a(222),b=a.n(p);function O(){var e=r.a.useState({columns:[{title:"#",field:"sno",type:"numeric"},{title:"Name",field:"name"},{title:"Email",field:"email"}],data:[{sno:1,name:"Mayank",email:"Mm@gmail"},{sno:2,name:"Manas",email:"manas@gmail"}]}),t=Object(i.a)(e,2),a=t[0],n=t[1];return r.a.createElement(b.a,{title:"Table",columns:a.columns,data:a.data,options:{search:!1,actionsColumnIndex:-1},editable:{onRowAdd:function(e){return new Promise((function(t){setTimeout((function(){t(),n((function(t){var a=Object(o.a)(t.data);return a.push(e),Object(g.a)(Object(g.a)({},t),{},{data:a})}))}),600)}))},onRowUpdate:function(e,t){return new Promise((function(a){setTimeout((function(){a(),t&&n((function(a){var n=Object(o.a)(a.data);return n[n.indexOf(t)]=e,Object(g.a)(Object(g.a)({},a),{},{data:n})}))}),600)}))},onRowDelete:function(e){return new Promise((function(t){setTimeout((function(){t(),n((function(t){var a=Object(o.a)(t.data);return a.splice(a.indexOf(e),1),Object(g.a)(Object(g.a)({},t),{},{data:a})}))}),600)}))}}})}var j=a(426),v=a(105),w=Object(v.a)({typography:{h2:{fontFamily:"Raleway",fontWeight:700,fontSize:"2.5rem",color:"black",lineHeight:1.5},h3:{fontFamily:"Raleway",fontSize:"1.75rem",color:"black",fontWeight:700},h4:{fontFamily:"Raleway",fontSize:"1.25rem",color:"black",fontWeight:550},h5:{fontFamily:"Raleway",fontSize:"1.25rem",color:"black",fontWeight:550},h6:{fontFamily:"Raleway",fontSize:"1.0rem",color:"black",fontWeight:600,marginTop:"8px",textAlign:"center"},subtitle1:{fontFamily:"Raleway",fontSize:"1.25rem",fontWeight:550,color:"red"},subtitle2:{fontFamily:"Raleway",fontSize:"1.25rem",fontWeight:500,color:"red"}}}),S=Object(o.a)(Array(10)).map((function(){return Math.floor(9*Math.random())+1})),k=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),o=Object(i.a)(l,2),u=o[0],s=o[1],f=Object(n.useState)(S),h=Object(i.a)(f,2),g=h[0],p=h[1];return r.a.createElement(j.a,{theme:w},r.a.createElement(m.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",spacing:2},r.a.createElement(y,{num:g,changeNum:p,setSelectedNum:c,player:u,selectPlayer:s}),g.length?r.a.createElement(E,{player:u}):r.a.createElement(r.a.Fragment,null),r.a.createElement(d,{player:u,selectedNum:a,num:g})),r.a.createElement(O,null))};l.a.hydrate(r.a.createElement(k,null),document.getElementById("root"))}},[[339,1,2]]]);
//# sourceMappingURL=main.89e75362.chunk.js.map