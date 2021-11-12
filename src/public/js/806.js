"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[806],{2456:(t,a,e)=>{e.d(a,{Z:()=>r});var i=e(3645),n=e.n(i)()((function(t){return t[1]}));n.push([t.id,'.anime>.content-header>.row-container>.row-information>.row>p[data-v-cab313f2]{color:#fff;font-weight:400}.anime>.content-header>.row-container>.row-information>.row>.rating[data-v-cab313f2]{margin:-5rem}.anime>.content-header>.row-container>.row-information>.row>.rating>p[data-v-cab313f2]{font-size:1.2rem;font-weight:700;margin-left:10rem}.anime>.content-header>.cover[data-v-cab313f2]:after{background-image:linear-gradient(180deg,rgba(35,40,51,0) 36%,rgba(35,40,51,.9) 58%,#353944 66%);content:" ";height:100%;left:0;top:0;width:100%;z-index:0}.anime>.content-header>.row-container[data-v-cab313f2]{margin:0 auto;max-width:1224px;min-height:598px;position:relative}.anime>.content-header>.row-container>.row-information[data-v-cab313f2]{display:flex;position:relative;z-index:1}@media(max-width:769.98px){.anime>.content-header>.row-container>.row-information[data-v-cab313f2]{align-items:center;flex-direction:column}}.anime>.content-header>.row-container>.row-information>.warp-poster[data-v-cab313f2]{flex:0 0 276px;margin-right:40px;position:relative}.anime-container-btn[data-v-cab313f2]{height:2.4rem;width:100%}@media(max-width:769.98px){.anime>.content-header>.row-container>.row-information>.warp-poster[data-v-cab313f2]{margin-right:0}}.anime>.content-header>.row-container>.row-information>.warp-poster>.poster[data-v-cab313f2]{background-position:50%;background-size:cover;border-radius:4px;cursor:pointer;height:398px;margin-bottom:15px;position:relative;width:276px}.anime>.content-header.loading>.row-container>.row-information>.warp-poster[data-v-cab313f2]{-webkit-animation:background-data-v-cab313f2 3s infinite alternate;animation:background-data-v-cab313f2 3s infinite alternate;background:#363944;border-radius:4px;box-shadow:inset 0 -200px 100px -120px #1f2631;height:398px;width:276px}@-webkit-keyframes background-data-v-cab313f2{50%{background:#1f2631;box-shadow:inset 0 -200px 100px -100px #363944}to{background:#363944;box-shadow:inset 0 -200px 100px -100px #1f2631}}@keyframes background-data-v-cab313f2{50%{background:#1f2631;box-shadow:inset 0 -200px 100px -100px #363944}to{background:#363944;box-shadow:inset 0 -200px 100px -100px #1f2631}}',""]);const r=n},7806:(t,a,e)=>{e.r(a),e.d(a,{default:()=>c});var i=e(629);const n={name:"index",data:function(){return{loading:!0}},mounted:function(){this.loadAnime(this.$route.params.id)},watch:{animeItem:function(t){t&&(this.loading=!1)}},computed:(0,i.Se)(["animeItem"]),methods:(0,i.nv)(["loadAnime"])};var r=e(3379),s=e.n(r),o=e(2456),l={insert:"head",singleton:!1};s()(o.Z,l);o.Z.locals;const c=(0,e(1900).Z)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"anime"},[t.loading?e("div",{staticClass:"content-header loading"},[e("div",{staticClass:"cover",style:{"background-image":"url(/storage/images/animes/original/8.jpg)"}}),t._v(" "),t._m(1)]):e("div",{staticClass:"content-header"},[e("div",{staticClass:"cover",style:{"background-image":"url(/storage/images/animes/original/8.jpg)"}}),t._v(" "),e("div",{staticClass:"row-container"},[e("div",{staticClass:"row-information"},[e("div",{staticClass:"warp-poster"},[e("div",{staticClass:"poster",style:{"background-image":"url(/storage/images/animes/original/8.jpg)"}}),t._v(" "),e("button",{staticClass:"btn anime-container-btn"},[t._v("Смотреть")])]),t._v(" "),e("div",{staticClass:"row"},[e("h1",{staticClass:"pt-3 text-sm-start"},[t._v(t._s(t.animeItem.name_en)+" / "+t._s(t.animeItem.name_ru))]),t._v(" "),e("div",{staticClass:"col-12 col-lg-7"},[e("p",[t._v("\n              Тип: "),t._l(t.animeItem.type,(function(a){return e("a",{attrs:{href:"#"}},[t._v(t._s(a.name)+" ")])})),e("br"),t._v("\n              Статус: "),e("a",{attrs:{href:"#"}}),t._v(t._s(t.animeItem.status)),e("br"),t._v(" "),t.animeItem.studios?e("span",[t._v("Студия: "),t._l(t.animeItem.studios,(function(a){return e("a",{attrs:{href:"#"}},[t._v(t._s(a.name)+" ")])})),t._v(" "),e("br")],2):t._e(),t._v(" "),t.animeItem.episodes_released?e("span",[t._v("Эпизоды: "),t.animeItem.episodes?e("span",[t._v(t._s(t.animeItem.episodes)+"\\")]):t._e(),t._v(" "+t._s(t.animeItem.episodes_released)+" "),e("br")]):t._e(),t._v(" "),t.animeItem.episode_duration?e("span",[t._v("Продолжительность эпизода: "+t._s(t.animeItem.episode_duration)),e("br")]):t._e(),t._v(" "),t.animeItem.genres?e("span",[t._v("\n                Жанры:\n                "),t._l(t.animeItem.genres,(function(a){return e("router-link",{key:a.id,attrs:{to:{name:"animes",query:{genres:a.name_en}}}},[t._v(t._s(a.name_ru))])})),t._v(" "),e("br")],2):t._e(),t._v(" "),t.animeItem.age_rating?e("span",[t._v("Возрастной рейтинг: "+t._s(t.animeItem.age_rating)+" "),e("br")]):t._e(),t._v(" "),t.animeItem.aired_on?e("span",[t._v("Дата начала премьеры: "+t._s(t.animeItem.aired_on)),e("br")]):t._e(),t._v(" "),t.animeItem.released_on?e("span",[t._v("Дата выхода: "+t._s(t.animeItem.released_on)),e("br")]):t._e(),t._v(" "),t.animeItem.shiki_score?e("span",[t._v("Оценка на MyAnimeList: "+t._s(t.animeItem.shiki_score)+" "),e("br")]):t._e()],2)]),t._v(" "),e("div",{staticClass:"col-12 col-lg-2 rating"},[e("p",[t._v("Рейтинг")]),t._v(" "),e("svg",{attrs:{width:"386",height:"68",viewBox:"0 0 386 68",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("g",{attrs:{"clip-path":"url(#clip0)"}},[e("path",{attrs:{d:"M342.085 21.1159L351.094 3.267C351.267 2.90793 351.538 2.60466 351.875 2.39171C352.212 2.17877 352.602 2.0647 353 2.0625C353.755 2.0625 354.51 2.46263 354.918 3.267L363.927 21.1159L384.132 23.9869C384.635 24.066 385.096 24.3165 385.436 24.696C385.777 25.0755 385.976 25.5608 386 26.07C386.028 26.409 385.98 26.7499 385.859 27.0677C385.737 27.3854 385.546 27.6718 385.299 27.9056L370.766 41.7491L374.19 61.2604C374.512 63.0877 372.705 64.5191 371.113 63.7024L353 54.3964L334.895 63.7024C334.706 63.8008 334.503 63.8703 334.293 63.9086C332.887 64.1561 331.538 62.8609 331.818 61.2604L335.242 41.7491L320.714 27.9056C320.489 27.6916 320.31 27.4336 320.189 27.1476C320.067 26.8617 320.006 26.5539 320.008 26.2432C320.009 25.8044 320.129 25.3739 320.355 24.9975C320.517 24.7255 320.739 24.4935 321.003 24.3186C321.267 24.1437 321.567 24.0303 321.881 23.9869L342.085 21.1159ZM353 49.6114C353.33 49.6114 353.66 49.6856 353.957 49.8424L369.162 57.6551L366.299 41.3325C366.232 40.9568 366.258 40.5702 366.375 40.2069C366.492 39.8436 366.697 39.5148 366.971 39.2494L378.959 27.8231L362.244 25.4471C361.898 25.3949 361.57 25.2595 361.288 25.0526C361.005 24.8457 360.777 24.5734 360.623 24.2591L353.008 9.16988L353 9.18225V49.6073V49.6114Z",fill:"white"}})]),t._v(" "),e("g",{attrs:{"clip-path":"url(#clip1)"}},[e("path",{attrs:{d:"M14.8998 63.7024C13.3076 64.5192 11.5008 63.0878 11.8226 61.2604L15.2463 41.7492L0.71393 27.9057C-0.643195 26.6104 0.0621798 24.2427 1.8813 23.9869L22.0856 21.1159L31.0946 3.26705C31.9072 1.6583 34.1058 1.6583 34.9184 3.26705L43.9274 21.1159L64.1317 23.9869C65.9508 24.2427 66.6562 26.6104 65.2991 27.9057L50.7667 41.7492L54.1904 61.2604C54.5122 63.0878 52.7054 64.5192 51.1132 63.7024L33.0003 54.3964L14.8957 63.7024H14.8998Z",fill:"white"}})]),t._v(" "),e("g",{attrs:{"clip-path":"url(#clip2)"}},[e("path",{attrs:{d:"M94.8998 63.7024C93.3076 64.5192 91.5008 63.0878 91.8226 61.2604L95.2463 41.7492L80.7139 27.9057C79.3568 26.6104 80.0622 24.2427 81.8813 23.9869L102.086 21.1159L111.095 3.26705C111.907 1.6583 114.106 1.6583 114.918 3.26705L123.927 21.1159L144.132 23.9869C145.951 24.2427 146.656 26.6104 145.299 27.9057L130.767 41.7492L134.19 61.2604C134.512 63.0878 132.705 64.5192 131.113 63.7024L113 54.3964L94.8957 63.7024H94.8998Z",fill:"white"}})]),t._v(" "),e("g",{attrs:{"clip-path":"url(#clip3)"}},[e("path",{attrs:{d:"M254.9 65.7024C253.308 66.5192 251.501 65.0878 251.823 63.2604L255.246 43.7492L240.714 29.9057C239.357 28.6104 240.062 26.2427 241.881 25.9869L262.086 23.1159L271.095 5.26705C271.907 3.6583 274.106 3.6583 274.918 5.26705L283.927 23.1159L304.132 25.9869C305.951 26.2427 306.656 28.6104 305.299 29.9057L290.767 43.7492L294.19 63.2604C294.512 65.0878 292.705 66.5192 291.113 65.7024L273 56.3964L254.896 65.7024H254.9Z",fill:"white"}})]),t._v(" "),e("g",{attrs:{"clip-path":"url(#clip4)"}},[e("path",{attrs:{d:"M174.9 65.7024C173.308 66.5192 171.501 65.0878 171.823 63.2604L175.246 43.7492L160.714 29.9057C159.357 28.6104 160.062 26.2427 161.881 25.9869L182.086 23.1159L191.095 5.26705C191.907 3.6583 194.106 3.6583 194.918 5.26705L203.927 23.1159L224.132 25.9869C225.951 26.2427 226.656 28.6104 225.299 29.9057L210.767 43.7492L214.19 63.2604C214.512 65.0878 212.705 66.5192 211.113 65.7024L193 56.3964L174.896 65.7024H174.9Z",fill:"white"}})]),t._v(" "),e("defs",[e("clipPath",{attrs:{id:"clip0"}},[e("rect",{attrs:{width:"66",height:"66",fill:"white",transform:"translate(320)"}})]),t._v(" "),e("clipPath",{attrs:{id:"clip1"}},[e("rect",{attrs:{width:"66",height:"66",fill:"white"}})]),t._v(" "),e("clipPath",{attrs:{id:"clip2"}},[e("rect",{attrs:{width:"66",height:"66",fill:"white",transform:"translate(80)"}})]),t._v(" "),e("clipPath",{attrs:{id:"clip3"}},[e("rect",{attrs:{width:"66",height:"66",fill:"white",transform:"translate(240 2)"}})]),t._v(" "),e("clipPath",{attrs:{id:"clip4"}},[e("rect",{attrs:{width:"66",height:"66",fill:"white",transform:"translate(160 2)"}})])])])]),t._v(" "),e("p",[t._v("Описание:")]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"tab-content",attrs:{id:"pills-tabContent"}},[e("div",{staticClass:"tab-pane fade show active",attrs:{id:"pills-home",role:"tabpanel","aria-labelledby":"pills-home-tab"}},[e("p",[t._v(t._s(t.animeItem.description_ru))]),t._v(" "),e("p",{staticClass:"text-right"},[t._v("Автор: "+t._s(t.animeItem.description_ru_source))])]),t._v(" "),e("div",{staticClass:"tab-pane fade",attrs:{id:"pills-profile",role:"tabpanel","aria-labelledby":"pills-profile-tab"}},[e("p",[t._v(t._s(t.animeItem.description_en))]),t._v(" "),e("p",{staticClass:"text-right"},[t._v("Автор: "+t._s(t.animeItem.description_en_source))])])])])])])])])}),[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",{staticClass:"nav nav-pills mb-3",attrs:{id:"pills-tab",role:"tablist"}},[e("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[e("button",{staticClass:"nav-link active",attrs:{id:"pills-home-tab","data-bs-toggle":"pill","data-bs-target":"#pills-home",type:"button",role:"tab","aria-controls":"pills-home","aria-selected":"true"}},[t._v("русское")])]),t._v(" "),e("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[e("button",{staticClass:"nav-link",attrs:{id:"pills-profile-tab","data-bs-toggle":"pill","data-bs-target":"#pills-profile",type:"button",role:"tab","aria-controls":"pills-profile","aria-selected":"false"}},[t._v("английское")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row-container"},[e("div",{staticClass:"row-information"},[e("div",{staticClass:"warp-poster"},[e("div",{staticClass:"poster"}),t._v(" "),e("button",{staticClass:"btn anime-container-btn"},[t._v("Смотреть")])]),t._v(" "),e("div",{staticClass:"row"},[e("h1",{staticClass:"pt-3 text-sm-start"},[t._v("Идет загрузка")]),t._v(" "),e("div",{staticClass:"col-12 col-lg-7"},[e("p")])])])])}],!1,null,"cab313f2",null).exports}}]);