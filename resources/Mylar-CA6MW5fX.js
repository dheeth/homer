import{s as c}from"./service-BGjJGoFF.js";import{_ as l,G as m,r as h,o as n,c as p,w as d,a as u,b as o,t as r,e as s}from"./index-CbEUhx_g.js";const f={name:"Mylar",components:{Generic:m},mixins:[c],props:{item:Object},data:()=>({upcoming:null,wanted:null,warnings:null,errors:null,serverError:!1}),created:function(){this.fetchConfig()},methods:{fetchConfig:function(){const e=t=>{console.error(t),this.serverError=!0};this.fetch(`/api?cmd=getUpcoming&apikey=${this.item.apikey}`).then(t=>{this.upcoming=t.length}).catch(e),this.fetch(`/api?cmd=getWanted&apikey=${this.item.apikey}`).then(t=>{this.wanted=t.issues.length+t.annuals.length}).catch(e)}}},g={class:"notifs"},_={key:0,class:"notif wanted",title:"Wanted"},y={key:1,class:"notif upcoming",title:"Upcoming"},k={key:2,class:"notif errors",title:"Connection error to Mylar API, check url and apikey in config.yml"};function v(e,t,i,w,C,E){const a=h("Generic");return n(),p(a,{item:i.item},{indicator:d(()=>[u("div",g,[e.wanted>0?(n(),o("strong",_,r(e.wanted),1)):s("",!0),e.upcoming>0?(n(),o("strong",y,r(e.upcoming),1)):s("",!0),e.serverError?(n(),o("strong",k," ? ")):s("",!0)])]),_:1},8,["item"])}const G=l(f,[["render",v],["__scopeId","data-v-3095524e"]]);export{G as default};
