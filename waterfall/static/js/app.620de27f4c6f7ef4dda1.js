webpackJsonp([0],{"6DeE":function(t,e){},"Ak/k":function(t,e){},DICR:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("lO7g"),s=function(t){return t&&t.__esModule?t:{default:t}}(a);e.default={name:"app",components:{Home:s.default}}},Dh8K:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{list:{type:Array,required:!0},row:{type:Boolean,default:!1},column:{type:Number,default:4},height:{type:Number,default:225}},data:function(){return{itemWidth:0,columnData:[]}},watch:{list:function(t){this.renderList()}},mounted:function(){this.renderList()},methods:{renderList:function(){var t=this;this.row||(this.columnData=[],this.itemWidth=100/this.column+"%",this.$nextTick(function(){for(var e=t.$refs.container.getElementsByClassName("column-item"),i=0;i<e.length;i++)t.setElementStyle(e[i],t.list[i],i)}))},setElementStyle:function(t,e,i){var a=this.$refs.container.offsetWidth/4,s=(a-6)/e.width*e.height+6;if(i<this.column)t.style.left=i*(100/this.column)+"%",this.columnData[i]=this.columnData[i]?this.columnData[i]+s:s;else{for(var n={},r=0;r<this.columnData.length;r++)n.hasOwnProperty("index")?this.columnData[r]<n.value&&(n={index:r,value:this.columnData[r]}):n={index:r,value:this.columnData[r]};t.style.left=n.index*(100/this.column)+"%",t.style.top=n.value+"px",this.columnData[n.index]+=s}t.style.width=this.itemWidth}}}},H3wG:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"container",class:{"waterfall-wrap":!0,row:t.row}},[t.row?[t._l(t.list,function(e,a){return i("div",{key:a,staticClass:"row-item"},[i("img",{style:{height:t.height+"px"},attrs:{src:e.url}})])}),t._v(" "),i("div",{staticClass:"last-box",style:{height:t.height+"px"}})]:t._l(t.list,function(t,e){return i("div",{key:e,staticClass:"column-item"},[i("img",{attrs:{src:t.url,alt:""}})])})],2)},s=[],n={render:a,staticRenderFns:s};e.a=n},M93x:function(t,e,i){"use strict";function a(t){i("kzKJ")}Object.defineProperty(e,"__esModule",{value:!0});var s=i("DICR"),n=i.n(s),r=i("wpCQ"),l=i("46Yf"),h=a,u=l(n.a,r.a,!1,h,null,null);e.default=u.exports},NHnr:function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var s=i("MVSX"),n=a(s),r=i("M93x"),l=a(r);n.default.config.productionTip=!1,new n.default({el:"#app",template:"<App/>",components:{App:l.default}})},NN8l:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("div",{staticClass:"options"},[t._v("\n    竖向瀑布流："),i("input",{directives:[{name:"model",rawName:"v-model",value:t.direction,expression:"direction"}],attrs:{type:"radio",name:"direction",value:"column"},domProps:{checked:t._q(t.direction,"column")},on:{change:function(e){t.direction="column"}}}),t._v("\n    　　　\n    横向瀑布流："),i("input",{directives:[{name:"model",rawName:"v-model",value:t.direction,expression:"direction"}],attrs:{type:"radio",name:"direction",value:"row"},domProps:{checked:t._q(t.direction,"row")},on:{change:function(e){t.direction="row"}}})]),t._v(" "),0!=t.list.length?[i("WaterFall",{directives:[{name:"show",rawName:"v-show",value:"row"==t.direction,expression:"direction=='row'"}],attrs:{list:t.list,row:!0}}),t._v(" "),i("WaterFall",{directives:[{name:"show",rawName:"v-show",value:"column"==t.direction,expression:"direction=='column'"}],attrs:{list:t.list}})]:t._e()],2)},s=[],n={render:a,staticRenderFns:s};e.a=n},UMej:function(t,e,i){"use strict";function a(t){i("6DeE")}Object.defineProperty(e,"__esModule",{value:!0});var s=i("Dh8K"),n=i.n(s),r=i("H3wG"),l=i("46Yf"),h=a,u=l(n.a,r.a,!1,h,"data-v-42f8086f",null);e.default=u.exports},kzKJ:function(t,e){},lO7g:function(t,e,i){"use strict";function a(t){i("Ak/k")}Object.defineProperty(e,"__esModule",{value:!0});var s=i("xM0o"),n=i.n(s),r=i("NN8l"),l=i("46Yf"),h=a,u=l(n.a,r.a,!1,h,null,null);e.default=u.exports},wpCQ:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("Home")],1)},s=[],n={render:a,staticRenderFns:s};e.a=n},xM0o:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("UMej"),s=function(t){return t&&t.__esModule?t:{default:t}}(a);e.default={data:function(){return{list:[],direction:"column",flag:!1}},created:function(){var t=this;window.onscroll=function(){t.flag||document.documentElement.scrollTop+document.body.clientHeight+150>document.documentElement.scrollHeight&&(t.flag=!0,t.list=t.list.concat([{url:"./static/images/7.jpg",height:1050,width:1680},{url:"./static/images/2.jpg",height:1134,width:808},{url:"./static/images/4.jpg",height:1e3,width:660},{url:"./static/images/6.jpg",height:750,width:500},{url:"./static/images/5.jpg",height:509,width:800},{url:"./static/images/3.jpg",height:800,width:1280}]),setTimeout(function(){t.flag=!1},500))}},mounted:function(){this.list=[{url:"./static/images/1.jpg",height:800,width:1280},{url:"./static/images/3.jpg",height:800,width:1280},{url:"./static/images/2.jpg",height:1134,width:808},{url:"./static/images/5.jpg",height:509,width:800},{url:"./static/images/4.jpg",height:1e3,width:660},{url:"./static/images/6.jpg",height:750,width:500},{url:"./static/images/7.jpg",height:1050,width:1680},{url:"./static/images/8.jpg",height:3548,width:440},{url:"./static/images/9.jpg",height:519,width:800},{url:"./static/images/1.jpg",height:800,width:1280},{url:"./static/images/2.jpg",height:1134,width:808},{url:"./static/images/3.jpg",height:800,width:1280},{url:"./static/images/4.jpg",height:1e3,width:660},{url:"./static/images/5.jpg",height:509,width:800},{url:"./static/images/6.jpg",height:750,width:500},{url:"./static/images/7.jpg",height:1050,width:1680},{url:"./static/images/3.jpg",height:800,width:1280},{url:"./static/images/4.jpg",height:1e3,width:660},{url:"./static/images/5.jpg",height:509,width:800},{url:"./static/images/6.jpg",height:750,width:500},{url:"./static/images/9.jpg",height:519,width:800},{url:"./static/images/1.jpg",height:800,width:1280},{url:"./static/images/2.jpg",height:1134,width:808},{url:"./static/images/3.jpg",height:800,width:1280},{url:"./static/images/4.jpg",height:1e3,width:660},{url:"./static/images/5.jpg",height:509,width:800},{url:"./static/images/6.jpg",height:750,width:500},{url:"./static/images/7.jpg",height:1050,width:1680},{url:"./static/images/9.jpg",height:519,width:800},{url:"./static/images/1.jpg",height:800,width:1280},{url:"./static/images/2.jpg",height:1134,width:808},{url:"./static/images/3.jpg",height:800,width:1280},{url:"./static/images/4.jpg",height:1e3,width:660},{url:"./static/images/5.jpg",height:509,width:800},{url:"./static/images/6.jpg",height:750,width:500},{url:"./static/images/7.jpg",height:1050,width:1680}]},components:{WaterFall:s.default}}}},["NHnr"]);
//# sourceMappingURL=app.620de27f4c6f7ef4dda1.js.map