import{s as f}from"./service-BGjJGoFF.js";import{_ as p,G as _,r as b,o as s,c as g,w as r,b as n,n as T,t as a,e as k,a as m,F as l,d as u}from"./index-CbEUhx_g.js";const y={name:"Ping",components:{Generic:_},mixins:[f],props:{item:Object},data:()=>({status:null,rtt:null}),computed:{rttLabel:function(){return this.status==="online"?`${this.rtt}ms`:"unavailable"}},created(){this.fetchStatus()},methods:{fetchStatus:async function(){const t=typeof this.item.method=="string"?this.item.method.toUpperCase():"HEAD";if(!["GET","HEAD","OPTION"].includes(t)){console.error(`Ping: ${t} is not a supported HTTP method`);return}const i=performance.now(),e=parseInt(this.item.timeout,10)||2e3,o={method:t,cache:"no-cache",signal:AbortSignal.timeout(e)};this.fetch("/",o,!1).then(()=>{this.status="online";const c=performance.now();this.rtt=Math.round(c-i)}).catch(()=>{this.status="offline",this.rtt=null})}}},v={class:"title is-4"},C={class:"subtitle is-6"};function G(t,i,e,o,c,h){const d=b("Generic");return s(),g(d,{item:e.item},{indicator:r(()=>[t.status?(s(),n("div",{key:0,class:T(["status",t.status])},a(t.status),3)):k("",!0)]),content:r(()=>[m("p",v,a(e.item.name),1),m("p",C,[e.item.subtitle?(s(),n(l,{key:0},[u(a(e.item.subtitle),1)],64)):(s(),n(l,{key:1},[u(a(h.rttLabel),1)],64))])]),_:1},8,["item"])}const B=p(y,[["render",G],["__scopeId","data-v-ea71286a"]]);export{B as default};
