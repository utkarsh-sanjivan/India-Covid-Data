(this["webpackJsonpindia-covid"]=this["webpackJsonpindia-covid"]||[]).push([[13],{107:function(e,t,a){},120:function(e,t,a){"use strict";a.r(t);var n=a(45),c=a(0),r=a(67),i=a.n(r),d=a(68),s=a(88),o=a.n(s);function u(){return l.apply(this,arguments)}function l(){return(l=Object(d.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("https://www.mohfw.gov.in/data/datanew.json");case 2:return t=e.sent,a=t.data.splice(-1)[0],n={confirmed_total:a.new_positive,confirmed_daily:a.new_positive-a.positive,active_cases_total:a.new_active,active_cases_daily:a.new_active-a.active,recovered_total:a.new_cured,recovered_daily:a.new_cured-a.cured,death_total:a.new_death,death_daily:a.new_death-a.death,states:[]},t.data.forEach((function(e){n.states.push({state_name:e.state_name,state_code:e.state_code,confirmed_total:e.new_positive,confirmed_daily:e.new_positive-e.positive,active_cases_total:e.new_active,active_cases_daily:e.new_active-e.active,recovered_total:e.new_cured,recovered_daily:e.new_cured-e.cured,death_total:e.new_death,death_daily:e.new_death-e.death})})),n.states.sort((function(e,t){return parseInt(e.confirmed_total)<parseInt(t.confirmed_total)?1:parseInt(e.confirmed_total)>parseInt(t.confirmed_total)?-1:0})),e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return _.apply(this,arguments)}function _(){return(_=Object(d.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("https://corona-api.com/countries/IN");case 2:return t=e.sent,a=t.data.data,n=a.timeline.reverse().map((function(e,t){var n=t>0?e.active-a.timeline[t-1].active:e.active;return{date:e.date,dateObj:e.updated_at,confirmed_total:e.confirmed,confirmed_daily:e.new_confirmed,active_cases_total:e.active,active_cases_daily:n,recovered_total:e.recovered,recovered_daily:e.new_recovered,death_total:e.deaths,death_daily:e.new_deaths}})),e.abrupt("return",{code:a.code,name:a.name,population:a.population,timeline:n,updatedAt:a.updated_at});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f=a(19),b=(a(107),a(12)),j=Object(c.lazy)((function(){return Object(f.d)((function(){return a.e(15).then(a.bind(null,123))}))})),v=Object(c.lazy)((function(){return Object(f.d)((function(){return a.e(12).then(a.bind(null,124))}))})),m=Object(c.lazy)((function(){return Object(f.d)((function(){return Promise.all([a.e(6),a.e(18)]).then(a.bind(null,127))}))})),h=Object(c.lazy)((function(){return Object(f.d)((function(){return Promise.all([a.e(8),a.e(19)]).then(a.bind(null,125))}))})),O=Object(c.lazy)((function(){return Object(f.d)((function(){return a.e(11).then(a.bind(null,128))}))})),w={active_cases:"Active Cases",recovered:"Recovered",death:"Death",confirmed:"Confirmed"};t.default=function(){var e=Object(c.useState)(null),t=Object(n.a)(e,2),a=t[0],r=t[1],i=Object(c.useState)("confirmed-banner"),d=Object(n.a)(i,2),s=d[0],o=d[1],l=Object(c.useState)(null),_=Object(n.a)(l,2),y=_[0],x=_[1],S=Object(c.useState)("Confirmed"),I=Object(n.a)(S,2),g=I[0],A=I[1],k=Object(c.useState)([]),z=Object(n.a)(k,2),N=z[0],D=z[1],C=Object(c.useState)([]),E=Object(n.a)(C,2),J=E[0],P=E[1],H=Object(c.useState)([]),L=Object(n.a)(H,2),M=L[0],R=L[1];return Object(c.useEffect)((function(){Object(f.d)(u).then((function(e){D(e.states.map((function(e){return e.state_name}))),P(e.states.map((function(e){return parseInt(e.confirmed_daily)}))),R(e.states.map((function(e){return parseInt(e.confirmed_total)}))),r(e)})),Object(f.d)(p).then(x)}),[]),Object(b.jsxs)("div",{className:"Homepage",children:[Object(b.jsx)(j,{className:s}),a&&Object(b.jsxs)(c.Suspense,{fallback:Object(b.jsx)(O,{}),children:[Object(b.jsxs)("div",{className:"homepage-left-pane",children:[Object(b.jsx)(m,{data:a,handleMapSwitch:function(e){o("".concat(e,"-banner")),A(w[e]),P(a.states.map((function(t){return parseInt(t["".concat(e,"_daily")])}))),R(a.states.map((function(t){return parseInt(t["".concat(e,"_total")])})))}}),Object(b.jsx)(h,{data:a,updatedAt:y?y.updatedAt:null})]}),Object(b.jsx)("div",{className:"homepage-right-pane",children:Object(b.jsx)(v,{timeline:y?y.timeline:[],updatedAt:y?y.updatedAt:null,currentStatistic:g,pieLabel:N,pieDailyData:J,pieTotalData:M})})]})]})}}}]);
//# sourceMappingURL=13.ddbe4069.chunk.js.map