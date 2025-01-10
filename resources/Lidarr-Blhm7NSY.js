import{s as c}from"./service-BGjJGoFF.js";import{_ as h,G as l,r as m,o as i,c as d,w as f,a as p,b as r,t as o,e as n}from"./index-CbEUhx_g.js";const g={name:"Lidarr",components:{Generic:l},mixins:[c],props:{item:Object},data:()=>({activity:null,missing:null,warnings:null,errors:null,serverError:!1}),created:function(){this.fetchConfig()},methods:{fetchConfig:function(){const t=e=>{console.error(e),this.serverError=!0};this.fetch(`/api/v1/health?apikey=${this.item.apikey}`).then(e=>{this.warnings=0,this.errors=0;for(var s=0;s<e.length;s++)e[s].type=="warning"?this.warnings++:e[s].type=="error"&&this.errors++}).catch(t),this.fetch(`/api/v1/queue/status?apikey=${this.item.apikey}`).then(e=>{this.activity=e.totalCount}).catch(t),this.fetch(`/api/v1/wanted/missing?apikey=${this.item.apikey}`).then(e=>{this.missing=e.totalRecords}).catch(t)}}},u={class:"notifs"},y={key:0,class:"notif activity",title:"Activity"},v={key:1,class:"notif missing",title:"Missing"},_={key:2,class:"notif warnings",title:"Warning"},k={key:3,class:"notif errors",title:"Error"},w={key:4,class:"notif errors",title:"Connection error to Lidarr API, check url and apikey in config.yml"};function C(t,e,s,E,$,B){const a=m("Generic");return i(),d(a,{item:s.item},{indicator:f(()=>[p("div",u,[t.activity>0?(i(),r("strong",y,o(t.activity),1)):n("",!0),t.missing>0?(i(),r("strong",v,o(t.missing),1)):n("",!0),t.warnings>0?(i(),r("strong",_,o(t.warnings),1)):n("",!0),t.errors>0?(i(),r("strong",k,o(t.errors),1)):n("",!0),t.serverError?(i(),r("strong",w,"?")):n("",!0)])]),_:1},8,["item"])}const b=h(g,[["render",C],["__scopeId","data-v-d14e9ce7"]]);export{b as default};
