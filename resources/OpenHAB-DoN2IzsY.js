import{s as l}from"./service-BGjJGoFF.js";import{_ as d,G as f,r as g,o as i,c as _,w as o,a as c,t as n,b as a,F as h,d as r,n as p,e as y}from"./index-CbEUhx_g.js";const b={name:"OpenHAB",components:{Generic:f},mixins:[l],props:{item:Object},data:()=>({status:"",things:{count:0,online:0},items:{count:0}}),computed:{headers:function(){const t=`${this.item.apikey}:`;return{Authorization:`Basic ${btoa(t)}`}},details:function(){const t=[];return this.item.things&&t.push(`${this.things.count} things (${this.things.online} Online)`),this.item.items&&t.push(`${this.items.count} items`),t.join(", ")}},created(){this.fetchServerStatus(),!this.item.subtitle&&this.status!=="dead"&&this.fetchServerStats()},methods:{fetchServerStatus:async function(){const t=this.headers;this.fetch("/rest/systeminfo",{headers:t}).then(e=>{if(e&&e.systemInfo)this.status="running";else throw new Error}).catch(e=>{console.log(e),this.status="dead"})},fetchServerStats:async function(){const t=this.headers;if(this.item.things){const e=await this.fetch("/rest/things?summary=true",{headers:t}).catch(s=>{console.log(s)});this.things.count=e.length,this.things.online=e.filter(s=>s.statusInfo.status==="ONLINE").length}if(this.item.items){const e=await this.fetch("/rest/items",{headers:t}).catch(s=>{console.log(s)});this.items.count=e.length}}}},S={class:"title is-4"},v={class:"subtitle is-6"};function k(t,e,s,B,w,m){const u=g("Generic");return i(),_(u,{item:s.item},{content:o(()=>[c("p",S,n(s.item.name),1),c("p",v,[s.item.subtitle?(i(),a(h,{key:0},[r(n(s.item.subtitle),1)],64)):(i(),a(h,{key:1},[r(n(m.details),1)],64))])]),indicator:o(()=>[t.status?(i(),a("div",{key:0,class:p(["status",t.status])},n(t.status),3)):y("",!0)]),_:1},8,["item"])}const A=d(b,[["render",k],["__scopeId","data-v-d4edb633"]]);export{A as default};
