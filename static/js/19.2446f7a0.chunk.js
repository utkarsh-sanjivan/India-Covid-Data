(this["webpackJsonpindia-covid"]=this["webpackJsonpindia-covid"]||[]).push([[19],{125:function(e,a,t){"use strict";t.r(a);var s=t(47),c=t(62),i=t(45),n=t(0),d=t(113),l=t(19),o=t(12),r=[{name:"State/UT",sortId:"regionName"},{name:"Confirmed",sortId:"confirmed_total"},{name:"Active",sortId:"active_cases_total"},{name:"Recovered",sortId:"recovered_total"},{name:"Deceased",sortId:"death_total"}];a.default=function(e){var a=e.data,t=e.updatedAt,v=Object(n.useState)({sortColumn:"confirmed_total",isAscending:!1}),j=Object(i.a)(v,2),m=j[0],y=j[1],u=Object(n.useState)({states:[]}),b=Object(i.a)(u,2),h=b[0],_=b[1];Object(n.useEffect)((function(){var e=[],t=h.states.length?h.states:a.states;if(0===h.states.length){t.forEach((function(a){e.push(a.state_name),e.push({daily:a.confirmed_daily,total:a.confirmed_total,varyingIcons:!1,className:"confirmed-daily"}),e.push({daily:a.active_cases_daily,total:a.active_cases_total,varyingIcons:!0,className:a.active_cases_daily>0?"active-cases-daiy-up":"active-cases-daiy-down"}),e.push({daily:a.recovered_daily,total:a.recovered_total,varyingIcons:!1,className:"recovered-daily"}),e.push({daily:a.death_daily,total:a.death_total,varyingIcons:!1,className:"death-daily"})}));var s=Object(c.a)(Object(c.a)({},a),{},{viewData:e});_(s)}}),[a,h.states,h,_]);var O=function(e){var a=[],t=Object(s.a)(h.states);m.sortColumn!==e?(y({sortColumn:e,isAscending:!0}),"regionName"===e?t.sort((function(e,a){return e.state_name.localeCompare(a.state_name)})):t.sort((function(a,t){return parseInt(a[e])>parseInt(t[e])?1:parseInt(a[e])<parseInt(t[e])?-1:0}))):(y({sortColumn:m.sortColumn,isAscending:!m.isAscending}),t.reverse()),t.forEach((function(e){a.push(e.state_name),a.push({daily:e.confirmed_daily,total:e.confirmed_total,varyingIcons:!1,className:"confirmed-daily"}),a.push({daily:e.active_cases_daily,total:e.active_cases_total,varyingIcons:!0,className:e.active_cases_daily>0?"active-cases-daiy-up":"active-cases-daiy-down"}),a.push({daily:e.recovered_daily,total:e.recovered_total,varyingIcons:!1,className:"recovered-daily"}),a.push({daily:e.death_daily,total:e.death_total,varyingIcons:!1,className:"death-daily"})})),_(Object(c.a)(Object(c.a)({},h),{},{states:t,viewData:a}))};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"last-update-text above-table",children:["Last Updated on ",Object(l.b)(t)]}),Object(o.jsxs)("div",{className:"table fadeInUp",children:[r.map((function(e){return Object(o.jsxs)("div",{className:"cell heading",style:{textAlign:"start",justifyContent:"space-around"},onClick:O.bind(undefined,e.sortId),children:[Object(o.jsx)("div",{children:e.name}),m.sortColumn===e.sortId&&Object(o.jsx)("div",{className:"sort-icon",children:m.isAscending?Object(o.jsx)(d.c,{size:12}):Object(o.jsx)(d.d,{size:12})})]})})),h.viewData&&h.viewData.map((function(e){return e.daily||e.total?Object(o.jsxs)("div",{className:"cell body",children:[Object(o.jsx)("div",{className:e.className,children:e.daily?Object(o.jsxs)(o.Fragment,{children:[e.varyingIcons?e.daily>0?Object(o.jsx)(d.b,{size:16}):Object(o.jsx)(d.a,{size:16}):Object(o.jsx)(d.b,{size:16}),Object(l.a)(e.daily)]}):null},e.total),Object(o.jsx)("div",{children:Object(l.c)(e.total)})]}):Object(o.jsx)("div",{className:"cell body",style:{justifyContent:"center"},children:Object(o.jsx)("div",{style:{textAlign:"start"},children:e},e)})}))]})]})}}}]);
//# sourceMappingURL=19.2446f7a0.chunk.js.map