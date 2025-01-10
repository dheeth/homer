import{_ as d,o as a,b as o,a as i,n as r,e as m,t as c}from"./index-CbEUhx_g.js";const h={name:"OpenWeather",props:{item:Object},data:()=>({id:null,icon:null,name:null,temp:null,conditions:null,error:!1,timezoneOffset:0}),computed:{temperature:function(){if(!this.temp)return"";let t="K";return this.item.units==="metric"?t="°C":this.item.units==="imperial"&&(t="°F"),`${this.temp} ${t}`},locationTime:function(){return this.calcTime(this.timezoneOffset)}},created(){this.fetchWeather()},methods:{fetchWeather:async function(){let t;this.item.locationId?t=`id=${this.item.locationId}`:t=`q=${this.item.location}`;const n=this.item.apikey||this.item.apiKey;let s=`https://api.openweathermap.org/data/2.5/weather?${t}&appid=${n}&units=${this.item.units}`;this.item.endpoint&&(s=this.item.endpoint),fetch(s).then(e=>{if(!e.ok)throw Error(e.statusText);return e.json()}).then(e=>{this.id=e.id,this.name=e.name,this.temp=parseInt(e.main.temp).toFixed(1),this.icon=e.weather[0].icon,this.conditions=e.weather[0].description,this.timezoneOffset=e.timezone}).catch(e=>{console.log(e),this.error=!0})},calcTime:t=>{const n=new Date,s=n.getTime()+n.getTimezoneOffset()*6e4;return new Date(s+1e3*t).toLocaleString([],{hour:"2-digit",minute:"2-digit"})}}},u=["href","target"],f={class:"card-content"},p={class:"media"},_={class:"image is-48x48"},g=["src","alt","title"],y={class:"media-content"},T={key:0,class:"error"},v={key:1},k={class:"title is-4"},O={class:"subtitle is-6"},z={class:"location-time"},b={class:"tag-text"};function w(t,n,s,e,$,l){return a(),o("div",null,[i("div",{class:r(["card",s.item.class])},[i("a",{href:`https://openweathermap.org/city/${t.id}`,target:s.item.target,rel:"noreferrer"},[i("div",f,[i("div",p,[t.icon?(a(),o("div",{key:0,class:r(["media-left",s.item.background])},[i("figure",_,[i("img",{src:`https://openweathermap.org/img/wn/${t.icon}@2x.png`,alt:t.conditions,title:t.conditions},null,8,g)])],2)):m("",!0),i("div",y,[t.error?(a(),o("p",T,"Data could not be retrieved")):(a(),o("div",v,[i("p",k,c(t.name),1),i("p",O,[i("span",null,c(l.temperature),1),i("span",z,c(l.locationTime),1)])]))])]),s.item.tag?(a(),o("div",{key:0,class:r(["tag",s.item.tagstyle])},[i("strong",b,"#"+c(s.item.tag),1)],2)):m("",!0)])],8,u)],2)])}const I=d(h,[["render",w],["__scopeId","data-v-cf273e11"]]);export{I as default};
