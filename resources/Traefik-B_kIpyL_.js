import{s as f}from"./service-BGjJGoFF.js";import{_ as h,G as d,r as _,o as s,c as k,w as c,a as o,t as a,b as i,F as r,d as l,e as m,n as p}from"./index-CbEUhx_g.js";const v={name:"Traefik",components:{Generic:d},mixins:[f],props:{item:Object},data:()=>({fetchOk:null,versionstring:null}),computed:{status:function(){return this.fetchOk?"online":"offline"}},created(){this.fetchStatus()},methods:{fetchStatus:async function(){this.fetch("/api/version").then(e=>{this.fetchOk=!0,this.versionstring=e.Version}).catch(e=>{this.fetchOk=!1,console.log(e)})}}},g={class:"title is-4"},b={class:"subtitle is-6"};function y(e,O,t,V,x,n){const u=_("Generic");return s(),k(u,{item:t.item},{content:c(()=>[o("p",g,a(t.item.name),1),o("p",b,[t.item.subtitle?(s(),i(r,{key:0},[l(a(t.item.subtitle),1)],64)):e.versionstring?(s(),i(r,{key:1},[l(" Version "+a(e.versionstring),1)],64)):m("",!0)])]),indicator:c(()=>[n.status?(s(),i("div",{key:0,class:p(["status",n.status])},a(n.status),3)):m("",!0)]),_:1},8,["item"])}const G=h(v,[["render",y],["__scopeId","data-v-8e509b2d"]]);export{G as default};
