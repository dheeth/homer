import{s as c}from"./service-BGjJGoFF.js";import{_ as n,G as m,r as l,o as s,c as u,w as f,a as _,b as a,t as d,e as r}from"./index-CbEUhx_g.js";const h={name:"Tautulli",components:{Generic:m},mixins:[c],props:{item:Object},data:()=>({stats:null,error:!1}),computed:{streams:function(){return this.stats?this.stats.stream_count:""}},created(){this.fetchStatus()},methods:{fetchStatus:async function(){try{const t=await this.fetch(`/api/v2?apikey=${this.item.apikey}&cmd=get_activity`);this.error=!1,this.stats=t.response.data}catch(t){this.error=!0,console.error(t)}}}},p={class:"notifs"},y=["title"],k={key:1,class:"notif error fa-solid fa-triangle-exclamation",title:"Unable to fetch current status"};function v(t,g,i,x,b,e){const o=l("Generic");return s(),u(o,{item:i.item},{indicator:f(()=>[_("div",p,[e.streams>0?(s(),a("strong",{key:0,class:"notif playing",title:`${e.streams} active stream${e.streams>1?"s":""}`},d(e.streams),9,y)):r("",!0),t.error?(s(),a("i",k)):r("",!0)])]),_:1},8,["item"])}const w=n(h,[["render",v],["__scopeId","data-v-ae55b7a8"]]);export{w as default};
