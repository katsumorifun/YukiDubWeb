"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[455],{1902:(t,e,i)=>{i.d(e,{Z:()=>l});var s=i(3645),n=i.n(s)()((function(t){return t[1]}));n.push([t.id,".router-link-exact-active.router-link-active>.icon-inline>i,.router-link-exact-active.router-link-active>.icon-inline>svg,.router-link-exact-active.router-link-active>i{color:#3490dc}",""]);const l=n},6179:(t,e,i)=>{i.d(e,{Z:()=>l});var s=i(3645),n=i.n(s)()((function(t){return t[1]}));n.push([t.id,".settings>select[data-v-714eeae4]{background:#212529;border:none;border-left:6px solid #3490dc;color:#fff;height:3rem;padding-left:1rem;width:100%}",""]);const l=n},9455:(t,e,i)=>{i.r(e),i.d(e,{default:()=>m});const s={name:"settings-modal",computed:{themes:{get:function(){return[{id:1,name:"Светлая тема",selected:!1},{id:2,name:"Темная тема",selected:!0},{id:3,name:"Черная тема",selected:!1}]},set:function(t){console.log(" theme selected id: "+t)}},lang:{get:function(){return this.$store.getters.getLocale},set:function(t){this.$store.commit("updateLocale",t)}}}};var n=i(3379),l=i.n(n),a=i(6179),o={insert:"head",singleton:!1};l()(a.Z,o);a.Z.locals;var c=i(1900);const r=(0,c.Z)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"settings"},[i("p",{staticClass:"mb-2"},[t._v("Выбор языка: ")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.lang,expression:"lang"}],on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.lang=e.target.multiple?i:i[0]}}},[i("option",{attrs:{value:"en"}},[t._v(t._s("english"))]),t._v(" "),i("option",{attrs:{value:"ru"}},[t._v(t._s("русский"))]),t._v(" "),i("option",{attrs:{value:"jp"}},[t._v(t._s("日本"))])]),t._v(" "),i("p",{staticClass:"mb-2 mt-3"},[t._v("Стиль сайта: ")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.themes,expression:"themes"}],on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.themes=e.target.multiple?i:i[0]}}},[t._l(t.themes,(function(e){return i("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.name))])})),t._v(" "),i("option",[t._v("Создать собственный стиль")])],2),t._v(" "),i("p",{staticClass:"mt-1 mb-0"},[t._v("Можно создать до 3-ех собственных стилей")])])}),[],!1,null,"714eeae4",null).exports,u={methods:{showModal:function(){this.$modals.open({title:this.$t("basic site settings"),center:!0,component:r})}}};var v=i(1902),d={insert:"head",singleton:!1};l()(v.Z,d);v.Z.locals;const m=(0,c.Z)(u,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"navigation"},[i("router-link",{staticClass:"logo nav-icon",attrs:{to:{name:"home"},title:"Главная","aria-current":"page"}},[i("i",{staticClass:"bi bi-house-fill"})]),t._v(" "),i("div",{staticClass:"menu-buttons"},[i("div",{staticClass:"main-buttons"},[i("router-link",{attrs:{to:{name:"animes"},title:"Аниме"}},[i("div",{staticClass:"icon-inline button-link play"},[i("i",{staticClass:"bi bi-play-fill"})])]),t._v(" "),t._m(0),t._v(" "),i("router-link",{attrs:{to:{name:"users"},title:"Пользователи"}},[i("div",{staticClass:"icon-inline button-link users"},[i("i",{staticClass:"bi bi-people-fill"})])]),t._v(" "),i("a",{attrs:{href:"#",title:"Новости"}},[i("div",{staticClass:"wrapper-news"},[i("div",{staticClass:"new"}),i("div",{staticClass:"icon-inline button-link about"},[i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18"}},[i("path",{attrs:{fill:"#797C84","fill-rule":"evenodd",d:"M16.797 0C17.461 0 18 .579 18 1.295v14.779C18 17.138 17.185 18 16.205 18H1.19C.54 18 0 17.427 0 16.72V5.143h2.4v8.353c0 .347.268.647.598.647H3.6V1.295C3.6.58 4.147 0 4.803 0h11.994zm-5.386 12.857H7.79c-.33 0-.589.288-.589.643 0 .345.264.643.589.643h3.622c.33 0 .589-.288.589-.643 0-.345-.264-.643-.589-.643zm2.4-2.571H7.789c-.316 0-.589.288-.589.643 0 .344.264.642.59.642h6.02c.317 0 .59-.287.59-.642 0-.345-.264-.643-.59-.643zm0-6.429H7.789c-.316 0-.589.282-.589.63V8.37c0 .354.264.631.59.631h6.02c.317 0 .59-.282.59-.63V4.487c0-.354-.264-.63-.59-.63z"}})])])])])],1),t._v(" "),i("div",{staticClass:"other-buttons"},[i("div",{staticClass:"button",on:{click:t.showModal}},[i("div",{staticClass:"icon-inline settings"},[i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"19",viewBox:"0 0 18 19"}},[i("path",{attrs:{fill:"#797C84","fill-rule":"nonzero",d:"M15.73 10.078c0-.275.091-.55.091-.916 0-.367 0-.642-.091-.916l1.924-1.558c.183-.183.183-.366.091-.55l-1.832-3.206c-.092-.092-.275-.183-.55-.092l-2.29.916c-.458-.366-1.008-.641-1.558-.916L11.15.458C11.241.183 10.966 0 10.783 0H7.118c-.183 0-.458.183-.458.366L6.293 2.84c-.55.183-1.008.55-1.557.916L2.537 2.84c-.275-.091-.458 0-.641.183L.063 6.23c-.091.092 0 .366.184.55L2.17 8.246c0 .274-.091.55-.091.916s0 .641.091.916L.247 11.635c-.184.184-.184.367-.092.55l1.832 3.207c.092.091.275.183.55.091l2.29-.916c.458.367 1.008.641 1.558.916l.366 2.382c0 .184.184.367.458.367h3.665c.183 0 .458-.183.458-.367l.367-2.382c.55-.275 1.099-.55 1.557-.916l2.29.916a.44.44 0 0 0 .55-.183l1.833-3.207c.091-.183.091-.458-.092-.55l-2.107-1.465zm-6.78 2.29c-1.74 0-3.206-1.466-3.206-3.206 0-1.741 1.465-3.207 3.206-3.207 1.74 0 3.207 1.466 3.207 3.207 0 1.74-1.466 3.206-3.207 3.206z"}})])])])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"#",title:"Манга"}},[e("div",{staticClass:"icon-inline button-link manga"},[e("i",{staticClass:"bi bi-book-fill"})])])}],!1,null,null,null).exports}}]);