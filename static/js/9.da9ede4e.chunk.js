(this["webpackJsonpindia-covid"]=this["webpackJsonpindia-covid"]||[]).push([[9],{128:function(e,t,a){},151:function(e,t,a){"use strict";a.r(t);var n=a(45),c=a(0),i=a(59),d=a.n(i),r=a(85),s=a(109),o=a.n(s),u=a(19);function l(){return _.apply(this,arguments)}function _(){return(_=Object(r.a)(d.a.mark((function e(){var t,a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("https://www.mohfw.gov.in/data/datanew.json");case 2:return t=e.sent,a=t.data.splice(-1)[0],n={confirmed_total:a.new_positive,confirmed_daily:a.new_positive-a.positive,active_cases_total:a.new_active,active_cases_daily:a.new_active-a.active,recovered_total:a.new_cured,recovered_daily:a.new_cured-a.cured,death_total:a.new_death,death_daily:a.new_death-a.death,states:[]},t.data.forEach((function(e){n.states.push({id:Object(u.d)(e),state_name:e.state_name,state_code:e.state_code,confirmed_total:e.new_positive,confirmed_daily:e.new_positive-e.positive,active_cases_total:e.new_active,active_cases_daily:e.new_active-e.active,recovered_total:e.new_cured,recovered_daily:e.new_cured-e.cured,death_total:e.new_death,death_daily:e.new_death-e.death}),"Dadra and Nagar Haveli and Daman and Diu"===e.state_name&&n.states.push({id:"DD",state_name:e.state_name,state_code:e.state_code,confirmed_total:e.new_positive,confirmed_daily:e.new_positive-e.positive,active_cases_total:e.new_active,active_cases_daily:e.new_active-e.active,recovered_total:e.new_cured,recovered_daily:e.new_cured-e.cured,death_total:e.new_death,death_daily:e.new_death-e.death})})),n.states.sort((function(e,t){return parseInt(e.confirmed_total)<parseInt(t.confirmed_total)?1:parseInt(e.confirmed_total)>parseInt(t.confirmed_total)?-1:0})),e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return p.apply(this,arguments)}function p(){return(p=Object(r.a)(d.a.mark((function e(){var t,a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("https://corona-api.com/countries/IN");case 2:return t=e.sent,a=t.data.data,n=a.timeline.reverse().map((function(e,t){var n=t>0?e.active-a.timeline[t-1].active:e.active;return{date:e.date,dateObj:e.updated_at,confirmed_total:e.confirmed,confirmed_daily:e.new_confirmed,active_cases_total:e.active,active_cases_daily:n,recovered_total:e.recovered,recovered_daily:e.new_recovered,death_total:e.deaths,death_daily:e.new_deaths}})),e.abrupt("return",{code:a.code,name:a.name,population:a.population,timeline:n,updatedAt:a.updated_at});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var b=a(94),v=(a(128),a(12)),m=Object(c.lazy)((function(){return Object(u.e)((function(){return a.e(18).then(a.bind(null,157))}))})),h=Object(c.lazy)((function(){return Object(u.e)((function(){return a.e(14).then(a.bind(null,158))}))})),C=Object(c.lazy)((function(){return Object(u.e)((function(){return Promise.all([a.e(7),a.e(21)]).then(a.bind(null,159))}))})),j=Object(c.lazy)((function(){return Object(u.e)((function(){return Promise.all([a.e(10),a.e(22)]).then(a.bind(null,160))}))})),w=Object(c.lazy)((function(){return Object(u.e)((function(){return a.e(13).then(a.bind(null,164))}))}));t.default=function(){var e=Object(c.useState)(null),t=Object(n.a)(e,2),a=t[0],i=t[1],d=Object(c.useState)("confirmed-banner"),r=Object(n.a)(d,2),s=r[0],o=r[1],_=Object(c.useState)(null),p=Object(n.a)(_,2),O=p[0],y=p[1],F=Object(c.useState)("confirmed"),x=Object(n.a)(F,2),A=x[0],D=x[1],S=Object(c.useState)([]),I=Object(n.a)(S,2),g=I[0],N=I[1],k=Object(c.useState)(b.b.confirmed),z=Object(n.a)(k,2),B=z[0],E=z[1],H=Object(c.useState)(!0),J=Object(n.a)(H,2),P=J[0],M=J[1];return Object(c.useEffect)((function(){Object(u.e)(l).then((function(e){N(e.states.map((function(e){return{id:e.id,state:e.state_name,value:parseInt(e.confirmed_daily)}}))),i(e)})),Object(u.e)(f).then(y)}),[]),Object(v.jsxs)("div",{className:"Homepage",children:[Object(v.jsx)(m,{className:s}),a&&Object(v.jsxs)(c.Suspense,{fallback:Object(v.jsx)(w,{}),children:[Object(v.jsxs)("div",{className:"homepage-left-pane",children:[Object(v.jsx)(C,{data:a,handleMapSwitch:function(e){o("".concat(e,"-banner")),D(e),E(b.b[e]),N(a.states.map((function(t){return{id:t.id,state:t.state_name,value:parseInt(t["".concat(e,P?"_total":"_daily")])}})))}}),Object(v.jsx)(j,{data:a,updatedAt:O?O.updatedAt:null})]}),Object(v.jsx)("div",{className:"homepage-right-pane",children:Object(v.jsx)(h,{timeline:O?O.timeline:[],updatedAt:O?O.updatedAt:null,mapData:g,mapColorArray:B,handleIsDailySwitch:function(e){M(e),N(a.states.map((function(t){return{id:t.id,state:t.state_name,value:parseInt(t["".concat(A,e?"_total":"_daily")])}})))}})})]})]})}},94:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return c}));var n=["#336699","#99CCFF","#999933","#666699","#CC9933","#006666","#3399FF","#993300","#CCCC99","#666666","#FFCC66","#6699CC","#663366","#9999CC","#CCCCCC","#669999","#CCCC66","#CC6600","#9999FF","#0066CC","#99CCCC","#999999","#FFCC00","#009999","#99CC33","#FF9900","#999966","#66CCCC","#339966","#CCCC33","#003f5c","#665191","#a05195","#d45087","#2f4b7c","#f95d6a","#ff7c43","#ffa600","#EF6F6C","#465775","#56E39F","#59C9A5","#5B6C5D","#0A2342","#2CA58D","#84BC9C","#CBA328","#F46197","#DBCFB0","#545775"],c={active_cases:["#007bff10","#007bff20","#007bff30","#007bff40","#007bff50","#007bff60","#007bff70","#007bff80","#007bff90","#007bff"],recovered:["#28a74510","#28a74520","#28a74530","#28a74540","#28a74550","#28a74560","#28a74570","#28a74580","#28a74590","#28a745"],death:["#6c757d10","#6c757d20","#6c757d30","#6c757d40","#6c757d50","#6c757d60","#6c757d70","#6c757d80","#6c757d90","#6c757d"],confirmed:["#dc354510","#dc354520","#dc354530","#dc354540","#dc354550","#dc354560","#dc354570","#dc354580","#dc354590","#dc3545"]}}}]);
//# sourceMappingURL=9.da9ede4e.chunk.js.map