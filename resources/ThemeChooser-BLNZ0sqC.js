import{_ as d,G as h,r as u,o as c,c as p,w as v,a as e,t as l,b as _,F as f,d as b,e as w,g as T,v as k}from"./index-CbEUhx_g.js";let o;const m=document.getElementById("app"),C={name:"ThemeChooser",components:{Generic:h},props:{item:Object},data:()=>({theme:null}),created:function(){o=Array.from(m.classList).filter(s=>s.startsWith("theme-"))[0],this.theme=o},methods:{switchTheme:function(){m.classList.replace(o,this.theme),o=this.theme}}},g={class:"title is-4"},x={class:"subtitle is-6"},B={class:"select is-small"};function y(s,t,a,G,V,n){const r=u("Generic");return c(),p(r,{item:a.item},{content:v(()=>[e("p",g,l(a.item.name),1),e("div",x,[a.item.subtitle?(c(),_(f,{key:0},[b(l(a.item.subtitle),1)],64)):w("",!0),e("div",B,[T(e("select",{"onUpdate:modelValue":t[0]||(t[0]=i=>s.theme=i),onChange:t[1]||(t[1]=(...i)=>n.switchTheme&&n.switchTheme(...i))},t[2]||(t[2]=[e("option",{value:"",disabled:"",selected:""},"Available themes",-1),e("option",{value:"theme-classic"},"classic",-1),e("option",{value:"theme-neon"},"neon",-1),e("option",{value:"theme-walkxcode"},"walkxcode",-1)]),544),[[k,s.theme]])])])]),_:1},8,["item"])}const A=d(C,[["render",y],["__scopeId","data-v-1eb80107"]]);export{A as default};
