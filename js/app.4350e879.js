(function(t){function e(e){for(var a,r,c=e[0],o=e[1],l=e[2],b=0,d=[];b<c.length;b++)r=c[b],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,c=1;c<n.length;c++){var o=n[c];0!==s[o]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},s={app:0},i=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;i.push([2,"chunk-vendors"]),n()})({0:function(t,e){},1:function(t,e){},2:function(t,e,n){t.exports=n("56d7")},3:function(t,e){},4:function(t,e){},5:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);var a=n("7a23");const s=Object(a["g"])("div",{class:"header"},[Object(a["g"])("div",{class:"item"},[Object(a["g"])("h1",null,"DAO IPCI smart building offsetting")])],-1),i={key:1,class:"loader"};function r(t,e,n,r,c,o){const l=Object(a["m"])("Page");return Object(a["j"])(),Object(a["f"])(a["a"],null,[s,c.isReady?(Object(a["j"])(),Object(a["d"])(l,{key:0})):(Object(a["j"])(),Object(a["f"])("div",i,"..."))],64)}function c(t,e,n,s,i,r){const c=Object(a["m"])("account"),o=Object(a["m"])("subscription"),l=Object(a["m"])("pubsub"),u=Object(a["m"])("energy");return Object(a["j"])(),Object(a["f"])("div",null,[Object(a["i"])(c),Object(a["i"])(o,{onController:e[0]||(e[0]=t=>{i.controller=t}),class:"block"}),Object(a["i"])(l),i.controller?(Object(a["j"])(),Object(a["d"])(u,{key:0,controller:i.controller,class:"block"},null,8,["controller"])):Object(a["e"])("",!0)])}function o(t,e,n,s,i,r){return Object(a["j"])(),Object(a["f"])("div",null,[Object(a["g"])("p",null,Object(a["n"])(i.error),1)])}var l=n("1349"),u=n("0b67"),b=n("36ea"),d=(n("d9e2"),n("925a")),p=n("26af");function h(){return new Promise((function(t,e){const n=setTimeout(()=>(clearTimeout(n),clearInterval(a),e(new Error("Not fount polkadot.extension"))),3e3),a=setInterval(()=>{if(Object.keys(window.injectedWeb3).length>0)return clearTimeout(n),clearInterval(a),t()},100)}))}let j=[];class g extends b["a"]{constructor(t,e=null){super(t,e)}static async initPlugin(t,e={}){if(await h(),j=await Object(d["b"])("robonomics"),0===j.length)throw new Error("Allow the browser extension to interact with dapp and try again.");const n=await Object(d["a"])(),a=n.map(({address:t,meta:e})=>({address:t,meta:e}));t.loadAll({...e},a),b["a"].setReady(!0)}get extensions(){return j}static checkInstalled(t){var e,n;return!(null===(e=window)||void 0===e||null===(n=e.injectedWeb3)||void 0===n||!n[t])}static checkAllow(t){return j.findIndex(e=>e.name===t)>=0}async mixin(){if(this.account.meta.isInjected){const t=await Object(d["c"])(this.account.meta.source);this.api.setSigner(t.signer),this.account.signMsg=async e=>(await t.signer.signRaw({address:this.account.address,data:Object(p["a"])(e),type:"bytes"})).signature}else await super.mixin()}}const O={endpoint:"wss://kusama.rpc.robonomics.network/",types:{Message:{from:"AccountId",data:"Vec<u8>"}},rpc:{pubsub:{peer:{description:"",params:[],type:"String"},listen:{description:"",params:[{name:"address",type:"String"}],type:"Bool"},listeners:{description:"",params:[],type:"Vec<String>"},connect:{description:"",params:[{name:"address",type:"String"}],type:"Bool"},subscribe:{description:"",params:[{name:"topic_name",type:"String"}],pubsub:["subscribe","subscribe","unsubscribe"],type:"Message"},unsubscribe:{description:"",params:[{name:"topic_name",type:"String"}],type:"Bool"},publish:{description:"",params:[{name:"topic_name",type:"String"},{name:"message",type:"String"}],type:"Bool"}}}};console.log(O);const y=new b["b"](O);y.setAccountManager(new g(u["a"]));var f=y,m={data(){return{isReady:!1,account:null,accounts:[],unsubscribe:null,balance:"",error:""}},created(){this.connect(),f.accountManager.onReady(()=>{this.isReady=!0,console.log("allow"),console.log("polkadot-js",g.checkAllow("polkadot-js")),console.log("talisman",g.checkAllow("talisman")),console.log("subwallet-js",g.checkAllow("subwallet-js"))}),setTimeout(()=>{console.log("installed"),console.log("polkadot-js",g.checkInstalled("polkadot-js")),console.log("talisman",g.checkInstalled("talisman")),console.log("subwallet-js",g.checkInstalled("subwallet-js"))},1e3)},computed:{balancePrint(){return Object(l["a"])(this.balance,{decimals:f.api.registry.chainDecimals[0],withUnit:f.api.registry.chainTokens[0]})}},watch:{async account(t){this.unsubscribe&&this.unsubscribe(),await f.accountManager.selectAccountByAddress(t),this.unsubscribe=await f.account.getBalance(t,t=>{this.balance=t.free.sub(t.feeFrozen)})}},methods:{async connect(){this.error="";try{await g.initPlugin(f.accountManager.keyring,{isDevelopment:!0}),this.accounts=f.accountManager.getAccounts(),this.accounts.length&&(this.account=this.accounts[0].address)}catch(t){this.error=t.message}}}},v=n("6b0d"),w=n.n(v);const k=w()(m,[["render",o]]);var _=k;const A=["disabled","loading"],B={key:0},T=Object(a["g"])("h3",null,"Liability",-1),R=Object(a["g"])("b",null,"Technical",-1),S=["href"],D=Object(a["g"])("br",null,null,-1),L=Object(a["g"])("b",null,"Promisee",-1),M=Object(a["g"])("br",null,null,-1),U=Object(a["g"])("b",null,"Promisor",-1),N=Object(a["g"])("h3",null,"Report",-1),P=["href"],I={key:1},C=["href"],x=Object(a["g"])("h3",null,"Burn",-1),E=["loading"],H={key:2,class:"error"},q=Object(a["g"])("h3",null,"Energy",-1),$=["disabled"],Y={key:0,class:"error"};function z(t,e,n,s,i,r){return Object(a["j"])(),Object(a["f"])("div",null,[Object(a["g"])("div",{disabled:!n.controller,loading:i.liability&&null===i.liability.report},[i.liability?(Object(a["j"])(),Object(a["f"])("div",B,[T,Object(a["g"])("div",null,[R,Object(a["h"])(": "),Object(a["g"])("a",{href:"https://ipfs.io/ipfs/"+i.liability.technical,target:"_blank"},Object(a["n"])(i.liability.technical),9,S),D,L,Object(a["h"])(": "+Object(a["n"])(i.liability.promisee),1),M,U,Object(a["h"])(": "+Object(a["n"])(i.liability.promisor),1)]),N,Object(a["g"])("div",null,[i.liability.reportHash?(Object(a["j"])(),Object(a["f"])("a",{key:0,href:"http://ipfs.io/ipfs/"+i.liability.reportHash,target:"_blank"},Object(a["n"])(i.liability.reportHash),9,P)):i.liability.report?(Object(a["j"])(),Object(a["f"])("a",{key:2,href:i.liability.report,target:"_blank"},Object(a["n"])(i.liability.report),9,C)):(Object(a["j"])(),Object(a["f"])("div",I,"..."))])])):i.lastBurnDate?(Object(a["j"])(),Object(a["f"])(a["a"],{key:1},[x,Object(a["g"])("div",null,[Object(a["g"])("div",null,"Last compensation date: "+Object(a["n"])(i.lastBurnDate),1),Object(a["g"])("div",null,Object(a["n"])(i.kwhToBurn)+" kwh",1)]),i.isAuthorizedCrust?(Object(a["j"])(),Object(a["f"])(a["a"],{key:1},[Object(a["g"])("div",null,[Object(a["g"])("div",null,[Object(a["h"])("geo: "),Object(a["r"])(Object(a["g"])("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>i.geo=t)},null,512),[[a["p"],i.geo]])])]),Object(a["g"])("button",{onClick:e[2]||(e[2]=(...t)=>r.burn&&r.burn(...t)),loading:i.isLoadBurn},"Compensation",8,E)],64)):(Object(a["j"])(),Object(a["f"])("button",{key:0,onClick:e[0]||(e[0]=Object(a["s"])((...t)=>r.crustAuth&&r.crustAuth(...t),["stop","prevent"]))}," ipfs auth ")),i.errorBurn?(Object(a["j"])(),Object(a["f"])("div",H,Object(a["n"])(i.errorBurn),1)):Object(a["e"])("",!0)],64)):(Object(a["j"])(),Object(a["f"])(a["a"],{key:2},[q,Object(a["g"])("div",null,[Object(a["g"])("div",null,[Object(a["r"])(Object(a["g"])("input",{"onUpdate:modelValue":e[3]||(e[3]=t=>i.energy=t)},null,512),[[a["p"],i.energy]]),Object(a["h"])(" kWh")])]),Object(a["g"])("button",{onClick:e[4]||(e[4]=(...t)=>r.request&&r.request(...t)),disabled:i.isLoadRequest},"Request",8,$),i.errorRequest?(Object(a["j"])(),Object(a["f"])("div",Y,Object(a["n"])(i.errorRequest),1)):Object(a["e"])("",!0)],64))],8,A)])}var J=n("7f28"),V=n("19ef"),F={LAST_BURN_DATE_QUERY_TOPIC:"last_compensation_date_query",LAST_BURN_DATE_RESPONSE_TOPIC:"last_compensation_date_response",LIABILITY_QUERY_TOPIC:"liability_query",CONNECT_MULTIADDR:"/dns/robonomics.rpc.multi-agent.io/tcp/44440",GATEWAY:"https://ipfs-gateway.multi-agent.io"},W={props:["controller"],data(){return{energy:10,geo:"",lastBurnDate:null,kwhToBurn:null,liability:null,isLoadRequest:!1,errorRequest:null,isLoadBurn:!1,errorBurn:null,isAuthorizedCrust:!1,gateway:F.GATEWAY}},methods:{async crustAuth(){try{const t=Object(V["a"])(this.controller.address,66);let e;e=this.controller.signMsg?(await this.controller.signMsg(Object(J["a"])(t))).toString():Object(p["a"])(await this.controller.sign(t)),this.$crust.auth(t,e),this.isAuthorizedCrust=!0}catch(t){console.log(t)}},async request(){this.isLoadRequest=!0,this.errorRequest=null,this.lastBurnDate=null,this.kwhToBurn=null;const t=f.api.rpc.pubsub.subscribe(F.LAST_BURN_DATE_RESPONSE_TOPIC,e=>{try{const t=JSON.parse(e.data.toHuman());"None"===t.last_compensation_date?this.lastBurnDate="-":this.lastBurnDate=t.last_compensation_date,this.kwhToBurn=t.kwh_to_compensate}catch(n){console.log(n,e.data.toHuman())}this.isLoadRequest=!1,t.then(t=>{t()})}),e=await f.api.rpc.pubsub.publish(F.LAST_BURN_DATE_QUERY_TOPIC,JSON.stringify({timestamp:Date.now(),address:this.controller.address,kwh_current:this.energy}));console.log("pubsub publish",e.toHuman()),e.toHuman()||(this.errorRequest="Error: Message not sent",this.isLoadRequest=!1,t.then(t=>{t()}))},async burn(){this.isLoadBurn=!0,this.errorBurn=null;const t=await this.$crust.add(JSON.stringify({geo:this.geo,kwh:this.energy}),"burn",[this.gateway]),e=b["c"].cidToHex(t),n=0,a=await this.signData(e,n),s=await f.liability.on({},t=>{for(const e of t)if("NewLiability"===e.event)console.log("NewLiability",e.data),e.data.promisee===Object(V["a"])(this.controller.address,32)&&(this.isLoadBurn=!1,this.liability={...e.data,technical:b["c"].hexToCid(e.data.technical),report:null,reportHash:null},console.log("liability",this.liability));else if("NewReport"===e.event&&(console.log("NewReport",e.data),e.data.index===this.liability.index&&e.data.sender===this.liability.promisor)){this.isLoadBurn=!1;const t=b["c"].hexToCid(e.data.payload);this.$crust.catFile(t,this.gateway).then(e=>{try{console.log(e),this.liability.report=e.burn_transaction_hash}catch(n){console.log(n),this.liability.reportHash=t}}).catch(()=>{this.liability.reportHash=t}),s()}});console.log(JSON.stringify({timestamp:Date.now(),technics:t,economics:n,promisee:Object(V["a"])(this.controller.address,32),promisee_signature:{[this.controller.type.toUpperCase()]:a}}));const i=await f.api.rpc.pubsub.publish(F.LIABILITY_QUERY_TOPIC,JSON.stringify({timestamp:Date.now(),technics:t,economics:n,promisee:Object(V["a"])(this.controller.address,32),promisee_signature:{[this.controller.type.toUpperCase()]:a}}));console.log("pubsub publish",i.toHuman()),i.toHuman()||(this.errorBurn="Error: Message not sent",this.isLoadBurn=!1,s())},async signData(t,e){const{data:n}=f.liability.getDataLiability(t,e);return this.controller.signMsg?(await this.controller.signMsg(Object(J["a"])(n))).toString():Object(p["a"])(await this.controller.sign(n))}}};const Q=w()(W,[["render",z]]);var G=Q,K={data(){return{connectMultiaddr:F.CONNECT_MULTIADDR}},watch:{connectMultiaddr(){this.connect()}},created(){this.connect()},methods:{async connect(){try{const t=await f.api.rpc.pubsub.connect(this.connectMultiaddr);console.log("pubsub connect",this.connectMultiaddr,t.toHuman())}catch(t){console.log("pubsub connect",this.connectMultiaddr,t.message)}}}};const X=K;var Z=X;const tt=Object(a["g"])("div",null,[Object(a["g"])("h2",null,"Your subscription")],-1),et=Object(a["g"])("h3",null,"Owner account",-1),nt={key:0,class:"success"},at={key:1,class:"error"},st=Object(a["g"])("h3",null,"Controller",-1),it=["value"],rt={key:0,class:"success"},ct=Object(a["g"])("label",null,"Seed phrase to encrypt data:",-1),ot={key:1,class:"error"};function lt(t,e,n,s,i,r){return Object(a["j"])(),Object(a["f"])("div",null,[Object(a["g"])("div",null,[tt,Object(a["g"])("div",null,[et,Object(a["r"])(Object(a["g"])("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>s.owner=t)},null,512),[[a["p"],s.owner]]),s.subscription.isActive.value?(Object(a["j"])(),Object(a["f"])("div",nt," Subscription active till "+Object(a["n"])(t.$filters.date(s.subscription.validUntil.value)),1)):(Object(a["j"])(),Object(a["f"])("div",at,"No active subsription"))]),Object(a["g"])("div",null,[st,Object(a["g"])("div",null,[Object(a["r"])(Object(a["g"])("select",{"onUpdate:modelValue":e[1]||(e[1]=t=>s.controller=t)},[(Object(a["j"])(!0),Object(a["f"])(a["a"],null,Object(a["l"])(s.subscription.devices.value,(t,e)=>(Object(a["j"])(),Object(a["f"])("option",{key:e,value:t},Object(a["n"])(t),9,it))),128))],512),[[a["o"],s.controller]])]),s.extension?(Object(a["j"])(),Object(a["f"])("div",rt,"Account from extension")):Object(a["e"])("",!0),Object(a["g"])("div",null,[ct,Object(a["r"])(Object(a["g"])("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>s.seed=t),type:"password"},null,512),[[a["p"],s.seed]])]),s.seed&&!r.validateUri?(Object(a["j"])(),Object(a["f"])("div",ot,"Wrong seed phrase")):Object(a["e"])("",!0)])])])}var ut=n("8d9d");const bt=(t=null)=>{const e=Object(a["k"])(t),n=Object(a["k"])([]),s=async()=>{if(e.value)try{Object(ut["a"])(e.value);const t=await f.rws.getDevices(e.value);return void(n.value=t.map(t=>t.toHuman()))}catch(t){console.log(t)}n.value=[]};return Object(a["q"])(e,async()=>{await s()},{immediate:!0}),{owner:e,devices:n,loadDevices:s}},dt=async t=>{const e=await f.rws.getLedger(t);if(!e.isEmpty)return e.value},pt=864e5,ht=(t=null)=>{const e=Object(a["k"])(t),n=Object(a["k"])(null),{devices:s,loadDevices:i}=bt(e),r=Object(a["b"])(()=>{if(null===n.value)return"";const t=n.value.issueTime.toNumber();let e=0;return n.value.kind.isDaily&&(e=n.value.kind.value.days.toNumber()),t+e*pt}),c=Object(a["b"])(()=>{if(null===n.value)return 0;let t=0;return n.value.kind.isDaily&&(t=n.value.kind.value.days.toNumber()),t/30}),o=Object(a["b"])(()=>!(null===n.value||Date.now()>r.value)),l=async()=>{if(e.value)try{Object(ut["a"])(e.value);const t=await dt(e.value);if(t)return void(n.value=t)}catch(t){console.log(t)}n.value=null};return Object(a["q"])(e,async()=>{await l()},{immediate:!0}),{owner:e,rawData:n,devices:s,isActive:o,countMonth:c,validUntil:r,loadLedger:l,loadDevices:i}};var jt=n("e4fd"),gt={setup(){const t=Object(a["k"])(""),e=Object(a["k"])(""),n=Object(a["k"])(""),s=Object(a["k"])(!1),i=ht(t);return{controller:e,seed:n,owner:t,subscription:i,extension:s}},emits:["controller"],computed:{controllerAccount(){if(this.seed)try{const t=new jt["a"];return t.addFromUri(this.seed,{},"ed25519")}catch(t){console.log(t)}return null},validateUri(){return!!(this.seed&&this.controllerAccount&&this.controller&&Object(V["a"])(this.controller)===Object(V["a"])(this.controllerAccount.address))}},watch:{async controller(){if(this.controller&&f.accountManager.isReady)try{await f.accountManager.selectAccountByAddress(this.controller),this.extension=!0,this.$emit("controller",f.accountManager.account)}catch(t){this.extension=!1,console.log(t.message)}},validateUri:{immediate:!0,handler(){this.seed&&(this.validateUri?this.$emit("controller",this.controllerAccount):this.$emit("controller",null))}}}};const Ot=w()(gt,[["render",lt]]);var yt=Ot,ft={components:{Account:_,Subscription:yt,Pubsub:Z,Energy:G},data(){return{controller:null}}};const mt=w()(ft,[["render",c]]);var vt=mt,wt={components:{Page:vt},data(){return{isReady:!1}},async created(){await f.run(),this.isReady=!0}};n("f079");const kt=w()(wt,[["render",r]]);var _t=kt,At={install:t=>{t.config.globalProperties.$filters={date(t){return t?new Date(t).toLocaleDateString():"-"}}}},Bt=n("c407"),Tt={install:t=>{t.config.globalProperties.$crust=new Bt["a"]}};const Rt=Object(a["c"])(_t);Rt.use(At).use(Tt).mount("#app")},6:function(t,e){},"66c1":function(t,e,n){},c407:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return i}));n("d9e2");var a=n("cee4");const s=["https://ipfs-gw.decloud.foundation","https://gw.crustfiles.net","https://gw.crustfiles.app","https://crustipfs.xyz","https://crustwebsites.net"];class i{constructor(){this.authHeader=null,this.pinner=a["a"].create({baseURL:"https://pin.crustcode.com/psa"})}createNode(t){this.ipfs=a["a"].create({baseURL:t+"/api/v0"})}auth(e,n){const a=`sub-${e}:${n}`;this.authHeader=t.from(a).toString("base64")}async add(t,e="",n=null){const a=new FormData;"string"===typeof t?a.append("file",t):a.append("file",t,e);const i=null===n?s:n;for(const s of i){this.createNode(s);try{const t=await this.ipfs.post("/add",a,{headers:{"Content-Type":"multipart/form-data",authorization:"Basic "+this.authHeader}});if(200===t.status&&t.data.Hash)return t.data.Hash;console.log("ipfs gateway response",s,t)}catch(r){console.log("ipfs gateway error",s,r)}}throw new Error("ipfs gateway error")}pin(t,e=""){return this.pinner.post("/pins",{cid:t},{headers:{authorization:"Bearer "+this.authHeader,name:e}})}listenStatus(t){return this.pinner.get("/pins/"+t,{headers:{authorization:"Bearer "+this.authHeader}})}async catFile(t,e="https://ipfs.io",n=5){const s=new URL(e);e=s.origin,"http"===s.protocol&&(e=e.replace("http://","https://"));try{const n=await a["a"].get(`${e}/ipfs/${t}`);return n.data}catch(i){if(n<=0)throw i}return await this.catFile(t,e,n-1)}}}).call(this,n("b639").Buffer)},f079:function(t,e,n){"use strict";n("66c1")}});
//# sourceMappingURL=app.4350e879.js.map