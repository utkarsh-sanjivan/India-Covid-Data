(this["webpackJsonpindia-covid"]=this["webpackJsonpindia-covid"]||[]).push([[13],{107:function(e,t,a){},120:function(e,t,a){"use strict";a.r(t);var n=a(45),c=a(0),i=a(67),r=a.n(i),o=a(68),s=a(88),d=a.n(s);function u(){return l.apply(this,arguments)}function l(){return(l=Object(o.a)(r.a.mark((function e(){var t,a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://www.mohfw.gov.in/data/datanew.json");case 2:return t=e.sent,a=t.data.splice(-1)[0],n={confirmed_total:a.new_positive,confirmed_daily:a.new_positive-a.positive,active_cases_total:a.new_active,active_cases_daily:a.new_active-a.active,recovered_total:a.new_cured,recovered_daily:a.new_cured-a.cured,death_total:a.new_death,death_daily:a.new_death-a.death,states:[]},t.data.forEach((function(e){n.states.push({state_name:e.state_name,state_code:e.state_code,confirmed_total:e.new_positive,confirmed_daily:e.new_positive-e.positive,active_cases_total:e.new_active,active_cases_daily:e.new_active-e.active,recovered_total:e.new_cured,recovered_daily:e.new_cured-e.cured,death_total:e.new_death,death_daily:e.new_death-e.death})})),n.states.sort((function(e,t){return parseInt(e.confirmed_total)<parseInt(t.confirmed_total)?1:parseInt(e.confirmed_total)>parseInt(t.confirmed_total)?-1:0})),e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){return p.apply(this,arguments)}function p(){return(p=Object(o.a)(r.a.mark((function e(){var t,a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://corona-api.com/countries/IN");case 2:return t=e.sent,a=t.data.data,n=a.timeline.reverse().map((function(e,t){var n=t>0?e.active-a.timeline[t-1].active:e.active;return{date:e.date,dateObj:e.updated_at,confirmed_total:e.confirmed,confirmed_daily:e.new_confirmed,active_cases_total:e.active,active_cases_daily:n,recovered_total:e.recovered,recovered_daily:e.new_recovered,death_total:e.deaths,death_daily:e.new_deaths}})),e.abrupt("return",{code:a.code,name:a.name,population:a.population,timeline:n});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f=a(18),v=(a(107),a(11)),h=Object(c.lazy)((function(){return Object(f.d)((function(){return Promise.all([a.e(8),a.e(18)]).then(a.bind(null,123))}))})),b=Object(c.lazy)((function(){return Object(f.d)((function(){return Promise.all([a.e(6),a.e(17)]).then(a.bind(null,126))}))})),j=Object(c.lazy)((function(){return Object(f.d)((function(){return a.e(12).then(a.bind(null,124))}))})),m=Object(c.lazy)((function(){return Object(f.d)((function(){return a.e(11).then(a.bind(null,127))}))}));t.default=function(){var e=Object(c.useState)(null),t=Object(n.a)(e,2),a=t[0],i=t[1],r=Object(c.useState)(null),o=Object(n.a)(r,2),s=o[0],d=o[1],l=Object(c.useState)([]),p=Object(n.a)(l,2),O=p[0],w=p[1],y=Object(c.useState)([]),x=Object(n.a)(y,2),g=x[0],I=x[1],S=Object(c.useState)([]),k=Object(n.a)(S,2),z=k[0],N=k[1];return Object(c.useEffect)((function(){Object(f.d)(u).then((function(e){w(e.states.map((function(e){return e.state_name}))),I(e.states.map((function(e){return parseInt(e.active_cases_daily)}))),N(e.states.map((function(e){return parseInt(e.active_cases_total)}))),i(e)})),Object(f.d)(_).then(d)}),[]),Object(v.jsx)("div",{className:"Homepage",children:a&&Object(v.jsxs)(c.Suspense,{fallback:Object(v.jsx)(m,{}),children:[Object(v.jsxs)("div",{className:"homepage-left-pane",children:[Object(v.jsx)(b,{data:a,handleMapSwitch:function(e){console.log(e),I(a.states.map((function(t){return parseInt(t["".concat(e,"_daily")])}))),N(a.states.map((function(t){return parseInt(t["".concat(e,"_total")])})))}}),Object(v.jsx)(h,{data:a})]}),Object(v.jsx)("div",{className:"homepage-right-pane",children:Object(v.jsx)(j,{timeline:s?s.timeline:[],donughtLabel:O,donughtDailyData:g,donughtTotalData:z})})]})})}}}]);
//# sourceMappingURL=13.2c85c438.chunk.js.map