import{s as a}from"./service-BGjJGoFF.js";import{_ as c,G as f,r as l,o as n,c as m,w as g,a as d,b as s,t as r,e as o}from"./index-CbEUhx_g.js";const u={name:"Medusa",components:{Generic:f},mixins:[a],props:{item:Object},data:()=>({config:null,serverError:!1}),created:function(){this.fetchConfig()},methods:{fetchConfig:function(){this.fetch("/api/v2/config",{headers:{"X-Api-Key":this.item.apikey}}).then(e=>{this.config=e}).catch(e=>{console.log(e),this.serverError=!0})}}},h={class:"notifs"},p={key:0,class:"notif news",title:"News"},_={key:1,class:"notif warnings",title:"Warning"},y={key:2,class:"notif errors",title:"Error"},k={key:3,class:"notif errors",title:"Connection error to Medusa API, check url and apikey in config.yml"};function v(e,w,t,E,C,B){const i=l("Generic");return n(),m(i,{item:t.item},{indicator:g(()=>[d("div",h,[e.config!==null&&e.config.system.news.unread>0?(n(),s("strong",p,r(e.config.system.news.unread),1)):o("",!0),e.config!==null&&e.config.main.logs.numWarnings>0?(n(),s("strong",_,r(e.config.main.logs.numWarnings),1)):o("",!0),e.config!==null&&e.config.main.logs.numErrors>0?(n(),s("strong",y,r(e.config.main.logs.numErrors),1)):o("",!0),e.serverError?(n(),s("strong",k,"?")):o("",!0)])]),_:1},8,["item"])}const M=c(u,[["render",v],["__scopeId","data-v-b88596d4"]]);export{M as default};
