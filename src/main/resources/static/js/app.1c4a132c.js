(function(){"use strict";var e={6178:function(e,t,l){var s=l(144),i=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},r=[],a=l(1001),o={},n=(0,a.Z)(o,i,r,!1,null,null,null),c=n.exports,u=l(8345),d=l(6154),p=l(4720),m=l.n(p);const h=d.Z.create({baseURL:"http://localhost:8090",timeout:1e5,withCredentials:!0});h.interceptors.request.use((e=>{let t=sessionStorage.getItem("token")?sessionStorage.getItem("token"):null;return t&&(e.headers["token"]=t),e}),(e=>Promise.reject(e))),h.interceptors.response.use((e=>{let t=e.data;return"blob"===e.config.responseType||("string"===typeof t&&(t=t?JSON.parse(t):t),401===t.code&&(m().Message({message:t.msg,type:"error"}),I.replace("/login"))),t}),(e=>(console.log("err"+e),Promise.reject(e))));var f=h,g=(l(7658),function(){var e=this,t=e._self._c;return t("div",{staticClass:"wrapper"},[t("el-form",{ref:"loginForm",staticClass:"login-box",staticStyle:{"background-color":"#fff","border-radius":"10px",position:"relative",top:"100px"},attrs:{model:e.form,rules:e.rules,label:"",width:" 80px","status-icon":""}},[t("h3",{staticClass:"login-title"},[e._v("欢迎登录")]),t("el-form-item",{attrs:{label:"用户名",prop:"username"}},[t("el-input",{attrs:{"prefix-icon":"el-icon-sysUser",type:"text",placeholder:" 请输入用户名"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),t("el-form-item",{attrs:{label:"密码",prop:"password"}},[t("el-input",{attrs:{"prefix-icon":"el-icon-lock",type:"password",placeholder:" 请输入密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:" form.password"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.onSubmit("loginForm")}}},[e._v("登录")]),t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.$router.push("/register")}}},[e._v("注册")])],1)],1),t("el-dialog",{attrs:{title:"温馨提示",visible:e.dialogVisible,width:"30%","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[t("span",[e._v("请输入用户名和密码")]),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确 定")])],1)])],1)}),b=[],v={name:"Login",data(){return{form:{username:"",password:""},rules:{username:[{required:!0,message:"账号不可为空",trigger:"blur"}],password:[{required:!0,message:"密码不可为空",trigger:"blur"}]},dialogVisible:!1}},methods:{handleClose:function(){console.log("Handle Close，空函数")},onSubmit(e){this.$refs[e].validate((e=>{if(!e)return this.dialogVisible=!0,!1;this.request.post("/login",{username:this.form.username,password:this.form.password}).then((e=>{200===e.code?(console.log(e),sessionStorage.setItem("sysUser",e.data.username),sessionStorage.setItem("token",e.data.token),this.$router.replace("/index"),this.$message.success("用户'"+e.data.username+"'"+e.msg)):this.$message.error(this.form.username+e.msg)})).catch((e=>{console.log(e)}))}))}}},y=v,_=(0,a.Z)(y,g,b,!1,null,"31835441",null),w=_.exports,k=function(){var e=this,t=e._self._c;return t("div",{staticClass:"wrapper"},[t("el-form",{ref:"loginForm",staticClass:"login-box",staticStyle:{"background-color":"#fff","border-radius":"10px",position:"relative",top:"100px"},attrs:{model:e.form,"status-icon":"",rules:e.rules,label:"",width:" 80px"}},[t("h3",{staticClass:"login-title"},[e._v("欢迎注册")]),t("el-form-item",{attrs:{label:"用户名",prop:"username"}},[t("el-input",{attrs:{"prefix-icon":"el-icon-sysUser",type:"text",placeholder:" 请输入用户名"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),t("el-form-item",{attrs:{label:"密码",prop:"password"}},[t("el-input",{attrs:{"prefix-icon":"el-icon-lock",type:"password",placeholder:" 请输入密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:" form.password"}})],1),t("el-form-item",{attrs:{label:"确认密码",prop:"checkPass"}},[t("el-input",{attrs:{"prefix-icon":"el-icon-lock",type:"password",placeholder:" 请确认密码"},model:{value:e.form.checkPass,callback:function(t){e.$set(e.form,"checkPass",t)},expression:"form.checkPass"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.onSubmit("loginForm")}}},[e._v("注册")]),t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.$router.push("/login")}}},[e._v("去登录")])],1)],1),t("el-dialog",{attrs:{title:"温馨提示",visible:e.dialogVisible,width:"30%","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[t("span",[e._v("请输入用户名和密码")]),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确 定")])],1)])],1)},x=[],F={name:"Login",data(){var e=(e,t,l)=>{t&&this.request.get("/check?username="+t).then((e=>{if(console.log(e),200!==e.code)return l(new Error(e.msg));l()}))},t=(e,t,l)=>{""===t?l(new Error("请再次输入密码")):t!==this.form.password?l(new Error("两次输入密码不一致!")):l()};return{form:{username:"",password:"",checkPass:""},rules:{username:[{required:!0,message:"用户名不可为空",trigger:"blur"},{min:3,max:10,message:"长度在 3 到 5 个字符",trigger:"blur"},{validator:e,trigger:"blur"}],password:[{required:!0,message:"密码不可为空",trigger:"blur"},{min:1,max:20,message:"长度在 1 到 20 个字符",trigger:"blur"}],checkPass:[{validator:t,trigger:"blur"},{min:1,max:20,message:"长度在 1 到 20 个字符",trigger:"blur"}]},dialogVisible:!1}},methods:{handleClose:function(){console.log("Handle Close，空函数")},onSubmit(e){this.$refs[e].validate((e=>{if(!e)return this.dialogVisible=!0,!1;this.request.post("/register",{username:this.form.username,password:this.form.password}).then((e=>{200===e.code?(this.$router.push("/login"),this.$message.success(e.msg)):(console.log(e.data),this.$message.error(this.form.username+"已被注册"))}))}))}},created(){console.log(this)}},S=F,C=(0,a.Z)(S,k,x,!1,null,"d513c516",null),T=C.exports,V=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticStyle:{width:"90%",margin:"30px auto"}},[t("el-row",{attrs:{gutter:20}},[t("el-col",[t("h1",[e._v("区块链电子存证平台")])]),t("el-col",[t("h4",[t("em",[e._v("欢迎用户‘"+e._s(e.username)+"’")])])]),t("el-col",{attrs:{align:"right"}},[t("el-button",{attrs:{type:"danger"},on:{click:e.logout}},[e._v("退出登录")])],1)],1)],1),t("div",{staticStyle:{width:"90%",height:"auto",margin:"auto"}},[t("el-card",[t("el-descriptions",{attrs:{column:3}},[t("el-descriptions-item",[t("el-upload",{ref:"upload",staticClass:"upload-demo",staticStyle:{margin:"auto"},attrs:{action:"","on-preview":e.handlePreview,"on-remove":e.handleRemove,"http-request":e.submitUpload,"on-change":e.handleChange,"file-list":e.uploadFile,"auto-upload":!1,limit:1}},[t("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v("选取文件")]),t("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"success"},on:{click:e.submitUpload}},[e._v("上传到服务器")]),t("div",{staticClass:"el-upload__tip",staticStyle:{"margin-left":"0"},attrs:{slot:"tip"},slot:"tip"},[e._v("选取文件，点击上传到服务器完成上传（限单个文件）")])],1)],1),t("el-descriptions-item",[t("div",{staticStyle:{margin:"auto"}},[t("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"输入文件Hash查询...","prefix-icon":"el-icon-search",autosize:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchClick.apply(null,arguments)}},model:{value:e.keywords,callback:function(t){e.keywords=t},expression:"keywords"}}),t("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"primary",icon:"el-icon-search"},on:{click:function(t){return e.searchClick(e.keywords)}}},[e._v("查询文件")])],1)]),t("el-descriptions-item",[t("el-upload",{ref:"verify",staticClass:"verify-demo",staticStyle:{margin:"auto",position:"relative",top:"20%"},attrs:{action:"","http-request":e.submitVerify,"on-change":e.verifyChange,"file-list":e.newFile,limit:1}},[t("el-button",{attrs:{size:"small",type:"warning"},on:{click:e.submitVerify}},[e._v("点击验证")])],1)],1)],1)],1)],1),t("div",{staticStyle:{"margin-bottom":"30px",display:"flex","justify-content":"center","align-items":"center"}},[t("el-dialog",{attrs:{title:"文件信息",visible:e.searchTableVisible},on:{"update:visible":function(t){e.searchTableVisible=t}}},[t("el-descriptions",{attrs:{border:"",column:1}},[t("el-descriptions-item",[t("template",{slot:"label"},[e._v("文件名")]),e._v(e._s(0===e.searchFile.length?null:e.searchFile[0].filename)+" ")],2),t("el-descriptions-item",[t("template",{slot:"label"},[e._v("文件大小")]),e._v(e._s(0===e.searchFile.length?null:e.searchFile[0].filesize)+" ")],2),t("el-descriptions-item",[t("template",{slot:"label"},[e._v("文件上传时间")]),e._v(e._s(0===e.searchFile.length?null:e.searchFile[0].lastUpdateTime)+" ")],2),t("el-descriptions-item",[t("template",{slot:"label"},[e._v("文件Hash")]),e._v(e._s(0===e.searchFile.length?null:e.searchFile[0].filehash)+" ")],2),t("el-descriptions-item",[t("template",{slot:"label"},[e._v("文件状态")]),[t("el-tag",{attrs:{type:0!==e.searchFile.length&&"未上链"===e.searchFile[0].status?"danger":"success","disable-transitions":""}},[e._v(e._s(0===e.searchFile.length?null:e.searchFile[0].status))])]],2)],1),[t("el-button",{attrs:{size:"small",type:"success",loading:e.loadingTxt},on:{click:function(t){return e.deployClick(e.searchFile[0])}}},[e._v("上链")]),t("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(t){e.searchTableVisible=!1,e.keywords=""}}},[e._v("返回")])]],2)],1),t("div",{staticStyle:{width:"90%",margin:"10px auto"}},[t("el-card",[t("el-table",{attrs:{data:e.fileData,stripe:"","header-cell-style":e.headStyle,"cell-style":e.headStyle}},[t("el-table-column",{attrs:{label:"序号",type:"index",index:e.indexMethod}}),t("el-table-column",{attrs:{prop:"filename",label:"文件名"}}),t("el-table-column",{attrs:{prop:"filehash",label:"文件Hash"}}),t("el-table-column",{attrs:{prop:"filesize",label:"文件大小"}}),t("el-table-column",{attrs:{prop:"lastUpdateTime",label:"文件上传时间"}}),t("el-table-column",{attrs:{prop:"status",label:"文件状态",filters:[{text:"未上链",value:"未上链"},{text:"已上链",value:"已上链"}],"filter-method":e.filterStatus,"filter-placement":"bottom-end"},scopedSlots:e._u([{key:"default",fn:function(l){return[t("el-tag",{attrs:{type:"未上链"===l.row.status?"danger":"success","disable-transitions":""}},[e._v(e._s(l.row.status)+" ")])]}}])}),t("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(l){return[t("el-button",{attrs:{size:"mini",type:"success",loading:l.row.loading},on:{click:function(t){return e.deployClick(l.row)}}},[e._v("上链")]),t("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){return e.searchClick(l.row.filehash)}}},[e._v("查看")])]}}])})],1)],1)],1),t("div",{staticClass:"verifyDialog",staticStyle:{"margin-bottom":"30px",display:"flex","justify-content":"center","align-items":"center"}},[t("el-dialog",{attrs:{title:"验证结果",visible:e.verifyTableVisible},on:{"update:visible":function(t){e.verifyTableVisible=t}}},[t("el-descriptions",{attrs:{title:"验证文件",border:"",column:1}},[t("el-descriptions-item",[t("template",{slot:"label"},[e._v("文件名")]),e._v(e._s(0===e.newFile.length?null:e.newFile[0].raw.name)+" ")],2),t("el-descriptions-item",[t("template",{slot:"label"},[e._v("文件Hash")]),e._v(e._s(0===e.oldFile.length?null:e.oldFile.filehash)+" ")],2)],1),t("el-descriptions",{attrs:{title:"原始文件",border:"",column:1}},[t("el-descriptions-item",[t("template",{slot:"label"},[e._v("文件名")]),e._v(e._s(0===e.oldFile.length?null:e.oldFile.filename)+" ")],2),t("el-descriptions-item",[t("template",{slot:"label"},[e._v("文件大小")]),e._v(e._s(0===e.oldFile.length?null:e.oldFile.filesize)+" ")],2),t("el-descriptions-item",[t("template",{slot:"label"},[e._v("文件上传时间")]),e._v(e._s(0===e.oldFile.length?null:e.oldFile.lastUpdateTime)+" ")],2),t("el-descriptions-item",[t("template",{slot:"label"},[e._v("文件Hash")]),e._v(e._s(0===e.oldFile.length?null:e.oldFile.filehash)+" ")],2),t("el-descriptions-item",[t("template",{slot:"label"},[e._v("文件状态")]),[t("el-tag",{attrs:{type:0!==e.oldFile.length&&"未上链"===e.oldFile.status?"danger":"success","disable-transitions":""}},[e._v(e._s(0===e.oldFile.length?null:e.oldFile.status))])]],2)],1),[t("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(t){e.verifyTableVisible=!1,e.newFile=[],e.oldFile=[]}}},[e._v("返回")])]],2)],1),t("div",{staticClass:"deployDialog",staticStyle:{"margin-bottom":"30px",display:"flex","justify-content":"center","align-items":"center"}},[t("el-dialog",{attrs:{title:"存证信息",visible:e.deployTableVisible},on:{"update:visible":function(t){e.deployTableVisible=t}}},[t("el-descriptions",{attrs:{border:"",column:1}},[t("el-descriptions-item",[t("template",{slot:"label"},[e._v("文件Hash")]),e._v(e._s(0===e.evidence.length?null:e.evidence[0].filehash)+" ")],2),t("el-descriptions-item",[t("template",{slot:"label"},[e._v("合约地址")]),t("el-link",{attrs:{type:"primary",href:e.adrHref,target:"_blank"}},[e._v(e._s(0===e.evidence.length?null:e.evidence[0].contractAddress))])],2),t("el-descriptions-item",[t("template",{slot:"label"},[e._v("存证时间戳")]),e._v(e._s(0===e.evidence.length?null:e.evidence[0].timeStamp)+" ")],2),t("el-descriptions-item",[t("template",{slot:"label"},[e._v("存证交易Hash")]),t("el-link",{attrs:{type:"primary",href:e.txHref,target:"_blank"}},[e._v(e._s(0===e.evidence.length?null:e.evidence[0].transactionHash))])],2),t("el-descriptions-item",[t("template",{slot:"label"},[e._v("区块号")]),e._v(e._s(0===e.evidence.length?null:e.evidence[0].blockNumber)+" ")],2)],1),[t("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(t){e.deployTableVisible=!1}}},[e._v("返回")])]],2)],1)])},$=[],P={name:"Index",data(){return{uploadFile:[],formData:new FormData,fileData:[],searchTableVisible:!1,searchFile:[],keywords:"",newFile:[],oldFile:[],verifyTableVisible:!1,deployTableVisible:!1,evidence:[],adrHref:"",txHref:"",loadingTxt:!1}},mounted(){this.fetchData()},methods:{logout(){sessionStorage.clear(),this.$router.replace("/login")},handleChange(e,t){this.uploadFile.push(e),console.log(this.uploadFile)},submitUpload(e){this.formData.append("file",this.uploadFile[0].raw),this.request.post("/file/upload",this.formData,{headers:{"Content-Type":"multipart/form-data; charset=utf-8"}}).then((e=>{200===e.code?(this.$message.success(e.msg),this.fetchData(),this.uploadFile=[]):(this.formData.delete("file"),this.$message.error(this.uploadFile[0].raw.name+"文件已存在"),this.uploadFile=[])}))},handleRemove(e,t){console.log(e,t)},handlePreview(e){console.log(e)},indexMethod(e){return e+1},filterStatus(e,t){return t.status===e},fetchData(){this.request.get("/file/list").then((e=>{200===e.code&&(this.fileData=e.data,this.fileData.map((e=>(this.$set(e,"loading",!1),e))))}))},headStyle(){return"text-align:center"},searchClick(e){this.request.get("/file/search?filehash="+e).then((e=>{200===e.code?(console.log(e),this.searchTableVisible=!0,this.searchFile.push(e.data)):(this.$message.error(e.data),this.keywords="")}))},verifyChange(e,t){this.newFile.push(e),console.log(this.newFile)},submitVerify(){this.formData.append("file",this.newFile[0].raw),this.request.post("/file/verify",this.formData,{headers:{"Content-Type":"multipart/form-data; charset=utf-8"}}).then((e=>{200===e.code?(this.$message.success("验证成功"),console.log(e.data),this.oldFile=e.data,this.verifyTableVisible=!0,this.formData.delete("file")):(this.formData.delete("file"),this.$message.error(this.newFile[0].raw.name+"文件不存在，验证失败"),this.newFile=[])}))},deployClick(e){e.loading=!0,this.loadingTxt=!0,this.request.post("/chain/deploy?filehash="+e.filehash).then((t=>{200===t.code?(console.log(t),e.loading=!1,this.loadingTxt=!1,this.$message.success("文件‘"+e.filename+"'上链成功！"),this.evidence.push(t.data),this.adrHref="https://goerli.etherscan.io/address/"+this.evidence[0].contractAddress,this.txHref="https://goerli.etherscan.io/tx/"+this.evidence[0].transactionHash,this.deployTableVisible=!0,this.fetchData()):this.$message.error(t.data)}))}},created(){this.username=sessionStorage.getItem("sysUser")}},D=P,H=(0,a.Z)(D,V,$,!1,null,"6d08ade5",null),O=H.exports;s["default"].use(u.ZP);const q=[{path:"/",redirect:"/index"},{path:"/login",name:"Login",component:w},{path:"/register",name:"Register",component:T},{path:"/index",name:"Index",component:O}],z=new u.ZP({routes:q,mode:"hash"}),j=u.ZP.prototype.push,Z=u.ZP.prototype.replace;function U(e){const t=["/login","/register","/404"],l=t.find((t=>{const l=new RegExp("^"+t);return l.test(e)}));return!!l}u.ZP.prototype.push=function(e,t,l){return t||l?j.call(this,e,t,l):j.call(this,e).catch((e=>e))},u.ZP.prototype.replace=function(e,t,l){return t||l?Z.call(this,e,t,l):Z.call(this,e).catch((e=>e))},z.beforeEach(((e,t,l)=>{const s=sessionStorage.getItem("token");U(e.path)?l():s?f.post("/authentication").then((e=>{200===e.code?l():l("/login")})):l("/login")}));var I=z,E=l(629);s["default"].use(E.ZP);var M=new E.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}});s["default"].config.productionTip=!1,s["default"].prototype.request=f,s["default"].use(m()),new s["default"]({router:I,store:M,render:e=>e(c)}).$mount("#app")}},t={};function l(s){var i=t[s];if(void 0!==i)return i.exports;var r=t[s]={id:s,loaded:!1,exports:{}};return e[s].call(r.exports,r,r.exports,l),r.loaded=!0,r.exports}l.m=e,function(){l.amdO={}}(),function(){var e=[];l.O=function(t,s,i,r){if(!s){var a=1/0;for(u=0;u<e.length;u++){s=e[u][0],i=e[u][1],r=e[u][2];for(var o=!0,n=0;n<s.length;n++)(!1&r||a>=r)&&Object.keys(l.O).every((function(e){return l.O[e](s[n])}))?s.splice(n--,1):(o=!1,r<a&&(a=r));if(o){e.splice(u--,1);var c=i();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[s,i,r]}}(),function(){l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,{a:t}),t}}(),function(){l.d=function(e,t){for(var s in t)l.o(t,s)&&!l.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){l.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};l.O.j=function(t){return 0===e[t]};var t=function(t,s){var i,r,a=s[0],o=s[1],n=s[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(i in o)l.o(o,i)&&(l.m[i]=o[i]);if(n)var u=n(l)}for(t&&t(s);c<a.length;c++)r=a[c],l.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return l.O(u)},s=self["webpackChunkelec_dep_frontend"]=self["webpackChunkelec_dep_frontend"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=l.O(void 0,[998],(function(){return l(6178)}));s=l.O(s)})();
//# sourceMappingURL=app.1c4a132c.js.map