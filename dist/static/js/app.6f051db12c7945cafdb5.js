webpackJsonp([0],{"69sR":function(t,e){},"7zck":function(t,e){},H62u:function(t,e){},IW8V:function(t,e,r){t.exports=r.p+"static/img/worldcup_logo.a1a49d8.png"},M7ig:function(t,e){},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("7+uW"),n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-layout",{attrs:{wrap:""}},[a("v-toolbar",{attrs:{color:"indigo darken-2",app:""}},[a("v-toolbar-side-icon",{attrs:{dark:""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),a("v-toolbar-title",{staticClass:"white--text"},[t._v("Resultados da Copa")]),t._v(" "),a("v-spacer")],1),t._v(" "),a("v-navigation-drawer",{attrs:{"disable-resize-watcher":"",temporary:"",fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{staticClass:"pa-1"},[a("v-list-tile",{attrs:{avatar:""}},[a("v-list-tile-avatar",[a("img",{attrs:{src:r("IW8V")}})]),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[t._v("Copa do Mundo 2018")])],1)],1)],1),t._v(" "),a("v-list",{staticClass:"pt-0",attrs:{dense:""}},[a("v-divider"),t._v(" "),t._l(t.items,function(e){return a("v-list-tile",{key:e.title,attrs:{to:e.path}},[a("v-list-tile-action",[a("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[t._v(t._s(e.title))])],1)],1)})],2)],1)],1),t._v(" "),a("v-layout",[a("v-content",[a("router-view")],1)],1),t._v(" "),a("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[a("div",{staticStyle:{"padding-top":"35px"}}),t._v(" "),a("v-footer",{attrs:{fixed:"",height:"auto"}},[a("v-flex",{attrs:{xs12:"","py-1":"","text-xs-center":""}},[a("strong",[t._v("Resultados da Copa 2018 - Feito com "),a("v-icon",{attrs:{color:"red"}},[t._v("favorite")]),t._v(" por @bergpb")],1)])],1)],1)],1)},staticRenderFns:[]},s=r("VU/8")({data:function(){return{title:"WorldCup 2018",fixed:!0,drawer:null,items:[{title:"Início",icon:"home",path:"/"},{title:"Em Andamento",icon:"timer",path:"/current"},{title:"Últimos Jogos",icon:"keyboard_arrow_left",path:"/last"},{title:"Jogos Futuros",icon:"keyboard_arrow_right",path:"/future"}]}},name:"App"},n,!1,null,null,null).exports,o=r("/ocq"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("v-container",{attrs:{"fill-height":""}},[e("v-layout",{attrs:{column:"","align-center":"","justify-center":""}},[e("v-flex",{staticClass:"text-xs-center"},[e("img",{attrs:{src:r("vSWQ"),width:"80%"}}),this._v(" "),e("br"),this._v(" "),e("p",[this._v("Acompanhe os resultados da copa de uma forma simples e prática. Criado com Vue.js e Flask.")])])],1)],1)],1)},staticRenderFns:[]};var l=r("VU/8")(null,i,!1,function(t){r("woim")},"data-v-44ff47d9",null).exports,c={data:function(){return{worldcups:null,loading:!0,errored:!1,error:null}},methods:{updateData:function(){var t=this;fetch("https://worldcupresults.herokuapp.com/api/worldcup").then(function(t){return t.json()}).then(function(e){t.worldcups=e.worldcup.reverse()}).catch(function(e){t.error=e,console.log("Erro: "+e),t.errored=!0}).finally(function(){return t.loading=!1})}},filters:{datalize:function(t){return t?(t=new Date(t)).toLocaleTimeString()+" - "+t.toLocaleDateString():""}},mounted:function(){this.updateData()}},u={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.loading?r("v-container",{attrs:{"fill-height":""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{staticClass:"text-xs-center"},[r("v-progress-circular",{attrs:{size:70,width:7,indeterminate:"",color:"teal"}})],1)],1)],1):t.errored?r("v-container",{attrs:{"fill-height":""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{staticClass:"text-xs-center"},[r("h2",[t._v("Ops! Falha ao recolher informações!")])])],1)],1):r("v-card",[r("v-container",{attrs:{fluid:"","grid-list-lg":""}},[r("v-slide-y-transition",{attrs:{mode:"out-in"}},[r("v-layout",{attrs:{row:"",wrap:""}},t._l(t.worldcups,function(e){return r("v-flex",{directives:[{name:"show",rawName:"v-show",value:"Finalizado"===e.status,expression:"worldcup.status === 'Finalizado'"}],key:e.id,attrs:{xs12:"",sm6:"",md3:"",lg3:"",xl3:""}},[r("v-card",{staticClass:"default",attrs:{color:"blue-grey lighten-4",height:"100%"}},[r("v-card-title",{attrs:{"primary-title":""}},[t._l(e.countries,function(e){return r("v-flex",{attrs:{xs6:"",sm6:"",md6:"",lg6:"",xl6:""}},[r("div",{staticClass:"text-xs-center"},[r("h1",[t._v(t._s(e))])])])}),t._v(" "),t._l(e.flags,function(t){return r("v-flex",{attrs:{xs6:"",sm6:"",md6:"",lg6:"",xl6:""}},[r("div",{staticClass:"text-xs-center"},[r("img",{attrs:{src:t}})])])}),t._v(" "),t._l(e.results,function(e){return r("v-flex",{attrs:{xs6:"",sm6:"",md6:"",lg6:"",xl6:""}},[r("div",{staticClass:"text-xs-center"},[r("h1",[t._v(t._s(e))])])])}),t._v(" "),r("v-card-text",[r("v-icon",[t._v("timer")]),t._v(" "+t._s(e.status)),r("br"),t._v(" "),r("v-icon",[t._v("stars")]),t._v(" "+t._s(e.winner)),r("br"),t._v(" "),r("v-icon",[t._v("calendar_today")]),t._v(" "+t._s(t._f("datalize")(e.date))),r("br"),t._v(" "),r("v-icon",[t._v("location_on")]),t._v(" "+t._s(e.localization)),r("br")],1)],2)],1)],1)}))],1)],1)],1)},staticRenderFns:[]};var v=r("VU/8")(c,u,!1,function(t){r("M7ig")},"data-v-b7500664",null).exports,d={data:function(){return{worldcups:null,loading:!0,errored:!1,error:null}},filters:{datalize:function(t){return t?(t=new Date(t)).toLocaleTimeString()+" - "+t.toLocaleDateString():""}},methods:{updateData:function(){var t=this;fetch("https://worldcupresults.herokuapp.com/api/future").then(function(t){return t.json()}).then(function(e){t.worldcups=e.worldcup}).catch(function(e){t.error=e,console.log("Erro: "+e),t.errored=!0}).finally(function(){return t.loading=!1})}},mounted:function(){this.updateData()}},p={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.loading?r("div",[r("v-container",{attrs:{"fill-height":""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{staticClass:"text-xs-center"},[r("v-progress-circular",{attrs:{size:70,width:7,indeterminate:"",color:"teal"}})],1)],1)],1)],1):t.errored?r("div",[r("v-container",{attrs:{"fill-height":""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{staticClass:"text-xs-center"},[r("h2",[t._v("Ops! Falha ao recolher informações!")])])],1)],1)],1):r("v-card",[r("v-container",{attrs:{fluid:"","grid-list-lg":""}},[r("v-slide-y-transition",{attrs:{mode:"out-in"}},[r("v-layout",{attrs:{row:"",wrap:""}},t._l(t.worldcups,function(e){return r("v-flex",{directives:[{name:"show",rawName:"v-show",value:"-"!=e.countries[0],expression:"worldcup.countries[0] != '-'"}],key:e.id,attrs:{xs12:"",sm6:"",md3:"",lg3:"",xl3:""}},[r("v-card",{staticClass:"default",attrs:{color:"blue-grey lighten-4",height:"100%"}},[r("v-card-title",{attrs:{"primary-title":""}},[t._l(e.countries,function(e){return r("v-flex",{attrs:{xs6:"",sm6:"",md6:"",lg6:"",xl6:""}},[r("div",{staticClass:"text-xs-center"},[r("h1",[t._v(t._s(e))])])])}),t._v(" "),t._l(e.flags,function(t){return r("v-flex",{attrs:{xs6:"",sm6:"",md6:"",lg6:"",xl6:""}},[r("div",{staticClass:"text-xs-center"},[r("img",{attrs:{src:t}})])])}),t._v(" "),r("v-card-text",[r("v-icon",[t._v("calendar_today")]),t._v(" "+t._s(t._f("datalize")(e.date))),r("br"),t._v(" "),r("v-icon",[t._v("location_on")]),t._v(" "+t._s(e.localization)),r("br")],1)],2)],1)],1)}))],1)],1)],1)},staticRenderFns:[]};var f=r("VU/8")(d,p,!1,function(t){r("H62u")},"data-v-3f661425",null).exports,_={data:function(){return{worldcups:[],loading:!0,errored:!1,error:null}},methods:{updateData:function(){var t=this;fetch("https://worldcupresults.herokuapp.com/api/worldcup").then(function(t){return t.json()}).then(function(e){t.worldcups=e.worldcup.reverse()}).catch(function(e){t.error=e,console.log("Erro: "+e),t.errored=!0}).finally(function(){return t.loading=!1})}},filters:{datalize:function(t){return t?(t=new Date(t)).toLocaleTimeString()+" - "+t.toLocaleDateString():""}},mounted:function(){this.updateData()}},h={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.loading?r("div",[r("v-container",{attrs:{"fill-height":""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{staticClass:"text-xs-center"},[r("v-progress-circular",{attrs:{size:70,width:7,indeterminate:"",color:"teal"}})],1)],1)],1)],1):t.errored?r("div",[r("v-container",{attrs:{"fill-height":""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{staticClass:"text-xs-center"},[r("h2",[t._v("Ops! Falha ao recolher informações!")])])],1)],1)],1):r("div",["Em Andamento"===t.worldcups[0].status?r("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},t._l(t.worldcups,function(e,a){return r("v-layout",{directives:[{name:"show",rawName:"v-show",value:"Em Andamento"===e.status,expression:"worldcup.status === 'Em Andamento'"}],key:e.id,attrs:{row:"",wrap:""}},[t._l(e.countries,function(e){return r("v-flex",{attrs:{xs6:""}},[r("h1",[t._v(t._s(e))])])}),t._v(" "),t._l(e.flags,function(t){return r("v-flex",{attrs:{xs6:""}},[r("img",{attrs:{src:t}})])}),t._v(" "),t._l(e.results,function(e){return r("v-flex",{attrs:{xs6:""}},[r("h1",[t._v(t._s(e))])])}),t._v(" "),r("v-flex",[r("h2",[t._v("Tempo decorrido: "+t._s(e.time))])]),t._v(" "),r("hr")],2)})):r("v-container",[r("v-layout",[r("v-flex",{staticClass:"text-xs-center"},[r("h2",[t._v("Ops, não há nenhuma partida em andamento.")])])],1)],1)],1)},staticRenderFns:[]};var m=r("VU/8")(_,h,!1,function(t){r("69sR")},"data-v-a7caad76",null).exports;a.a.use(o.a);var x=new o.a({routes:[{path:"/",name:"Home",component:l},{path:"/last",name:"Last",component:v},{path:"/future",name:"Future",component:f},{path:"/current",name:"Current",component:m}]}),w=r("3EgV"),g=r.n(w);r("7zck");a.a.use(g.a),a.a.config.productionTip=!1,new a.a({el:"#app",router:x,components:{App:s},template:"<App/>"})},vSWQ:function(t,e,r){t.exports=r.p+"static/img/fifa2018.5f50839.png"},woim:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.6f051db12c7945cafdb5.js.map