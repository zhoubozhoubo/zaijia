webpackJsonp([0],{"2JL+":function(t,a){},"4ml/":function(t,a){},CARu:function(t,a){},E995:function(t,a){},HCVs:function(t,a){},Ifl5:function(t,a){},Jqai:function(t,a){},KoQq:function(t,a){},LBIJ:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAMAAAANf8AYAAAAwFBMVEUAwdoAwdoAAAAAwdoAwdoAwdoAwdoAwdoAwdoAwdoAwdoAwdoAwdoAwdoAwdoAwdoAwdr///8Gw9v8/v8Qxd3x/P3u+/34/v7q+vwlyuAcyN4Wx95z3etU1ucKxNxe2OhN1OYpzOHA8Pev7PSp6/Mhyt/1/P7g+PvT9fmc6PFj2ektzeHZ9vrN8/i87/a07fR43uwyzuK57/WF4u5n2+nl+fzG8vei6fKN5O9u3Opq2+pE0uQ50ON/4O1I0+VB0OODLyOKAAAAEHRSTlPt2wD587u0j3Y2Ckz7nx5LjwWK/gAAAhVJREFUSMe9lmmPokAQhhu8dcaV5pD7Vg4VEPE+9v//q21KspOVxGlIdt4vGpPHetLVqS7EsuPRsM90Z9+ny/SHozHLInY6GfQY1KFgOojpDSZTFo0nn2hGH/Q5GaPRAH00YD7QYISGvVmz9IaozzRkmD5iUEOGEN1OQ6bTRbPm+a+MsLKdhox50/2Lipsw5vYUSG6mNmCE22nDc7JbONQMvmUBz3Gc5Nu0jLnaBXOOZH/fUjLCdkfESNbRVaNj8FYHMV6OribdGWBntwYx+fQABJjvxA7zp9hDo+spXp2hCi8fHwLd3cHKfb0EscgmyAuDNfuq4Noh3yuxo63W76j2249iFb+IXcJKjFSpMdjw9/LBWvyDLLIQxKSjQZBXRrAj0mkpLRb4S8zJXBALfEOd1Rl1F3KlRGr91cNO/BSTfKhSr2N4PFi4xqJCVD1clr8BUmNA/ZKKAHnPgzAVPQEk8Mi/1BmIYh0A4j2DQFixNksQ8yyoUmegUpxXegTS9I0IYgTBdear5edEhGZ4xU3PQWyfWsr7ueMUG4Dm+SmEL2Iaa29nFRxEwpUR5TlffqSWht8y0BLdJQWq7HMQe8uA3hn0QCw/a1RzFCu6+2TEJNYwBQO3P3PLxshJ4dDP65UeypKU6CBGyWAlizwfxCgZGM1X21Z+/v2pp8172ubdbrMftNlD2uw7bfaqxvvbrynbZk/8A5Bjt1aryTuSAAAAAElFTkSuQmCC"},NHnr:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=n("7+uW"),e={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]};var o=n("VU/8")({name:"App"},e,!1,function(t){n("YYLC")},null,null).exports,i=n("/ocq"),c={name:"Index",data:function(){return{bannerList:[{src:"static/images/banner1.jpg",url:""},{src:"static/images/banner2.jpg",url:""}],linkList:[{src:"static/images/checkboxed.png",url:""},{src:"static/images/checkboxed.png",url:""},{src:"static/images/checkboxed.png",url:""},{src:"static/images/checkboxed.png",url:""}],taskList:[{src:"static/images/checkboxed.png",url:""},{src:"static/images/checkboxed.png",url:""},{src:"static/images/checkboxed.png",url:""},{src:"static/images/checkboxed.png",url:""}],list:[],loading:!1,finished:!1,county:"成都",areaShow:!1,areaList:{province_list:{110000:"北京市",120000:"天津市"},city_list:{110100:"北京市",110200:"县",120100:"天津市",120200:"县"},county_list:{110101:"东城区",110102:"西城区",110105:"朝阳区",110106:"丰台区",120101:"和平区",120102:"河东区",120103:"河西区",120104:"南开区",120105:"河北区"}},order:"默认排序",orderShow:!1,orderList:[{name:"默认排序"},{name:"最新发布"},{name:"人气"}]}},methods:{onLoad:function(){var t=this;setTimeout(function(){for(var a=0;a<10;a++)t.list.push(t.list.length+1);t.loading=!1,t.list.length>=40&&(t.finished=!0)},500)},goUser:function(){console.log("goUser"),this.$router.push({name:"User"})},showArea:function(){console.log("showArea"),this.areaShow=!0},confirmArea:function(t){console.log("confirmArea"),this.county=t[1].name,this.areaShow=!1},cancelArea:function(){console.log("cancelArea"),this.areaShow=!1},showOrder:function(){console.log("showOrder"),this.orderShow=!0},selectOrder:function(t){console.log("selectOrder"),this.order=t.name,this.orderShow=!1},goTaskDetails:function(){console.log("goTaskDetails"),this.$router.push({name:"TaskDetails",params:{id:12}})}}},l={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"index"},[n("van-row",{staticClass:"locationRow"},[n("van-col",{attrs:{span:"6",offset:"1"}},[n("div",{on:{click:t.showArea}},[n("van-icon",{staticClass:"location",attrs:{name:"location",size:"20px"}}),t._v(" "),n("span",[t._v(t._s(t.county))]),t._v(" "),n("van-icon",{staticClass:"select",attrs:{name:"arrow-down",size:"20px"}})],1)]),t._v(" "),n("van-col",{attrs:{span:"1",offset:"15"}},[n("van-icon",{staticClass:"user",attrs:{name:"manager",size:"20px"},on:{click:t.goUser}})],1)],1),t._v(" "),n("van-row",{staticClass:"bannerRow"},[n("van-col",{attrs:{span:"24"}},[n("van-swipe",{attrs:{autoplay:3e3,height:200}},t._l(t.bannerList,function(t,a){return n("van-swipe-item",{key:a},[n("img",{attrs:{src:t.src}})])}),1)],1)],1),t._v(" "),n("van-row",{staticClass:"linkRow"},t._l(t.linkList,function(t,a){return n("van-col",{key:a,attrs:{span:"6"}},[n("img",{attrs:{src:t.src}})])}),1),t._v(" "),n("van-row",{staticClass:"orderRow"},[n("van-col",{attrs:{span:"6",offset:"17"}},[n("div",{staticClass:"orderSelect",on:{click:t.showOrder}},[n("span",[t._v(t._s(t.order))]),t._v(" "),n("van-icon",{attrs:{name:"arrow-down"}})],1)])],1),t._v(" "),n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(a){t.loading=a},expression:"loading"}},t._l(t.taskList,function(a,s){return n("van-row",{key:s,staticClass:"taskRow"},[n("div",{on:{click:t.goTaskDetails}},[n("van-col",{attrs:{span:"3",offset:"1"}},[n("img",{attrs:{src:a.src}})]),t._v(" "),n("van-col",{staticClass:"taskContent",attrs:{span:"18",offset:"1"}},[n("h1",[t._v("【360借条】新人注册+红包")]),t._v(" "),n("h2",[n("span",{staticClass:"money"},[t._v("20元/次")]),t._v("剩余29次")])])],1)])}),1),t._v(" "),n("van-popup",{attrs:{position:"bottom",overlay:!0},model:{value:t.areaShow,callback:function(a){t.areaShow=a},expression:"areaShow"}},[n("van-area",{attrs:{"area-list":t.areaList,value:"110101",title:"城市","columns-num":2},on:{confirm:t.confirmArea,cancel:t.cancelArea}})],1),t._v(" "),n("van-actionsheet",{attrs:{actions:t.orderList},on:{select:t.selectOrder},model:{value:t.orderShow,callback:function(a){t.orderShow=a},expression:"orderShow"}})],1)},staticRenderFns:[]};var r=n("VU/8")(c,l,!1,function(t){n("szYa")},"data-v-5d92f14c",null).exports,v={name:"TaskDetails",data:function(){return{id:this.$route.params.id,status:0,taskImgList:[{id:1,src:"static/images/checkboxed.png",url:""},{id:2,src:"static/images/checkboxed.png",url:""},{id:3,src:"static/images/checkboxed.png",url:""},{id:4,src:"static/images/checkboxed.png",url:""}],imgList:[{id:5,src:"static/images/checkboxed.png",url:""},{id:6,src:"static/images/checkboxed.png",url:""},{id:7,src:"static/images/checkboxed.png",url:""},{id:8,src:"static/images/checkboxed.png",url:""}]}},methods:{goBack:function(){this.$router.back()},receiveTask:function(){console.log("receiveTask"),this.status=1},submitData:function(){console.log("submitData"),this.$router.push({name:"TaskSubmit",params:{id:12}})}},created:function(){}},_={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"taskDetails"},[n("van-row",{staticClass:"navRow"},[n("van-col",{attrs:{span:"2",offset:"1"}},[n("van-icon",{staticClass:"nav_icon",attrs:{name:"arrow-left",size:"20px"},on:{click:t.goBack}})],1),t._v(" "),n("van-col",{staticClass:"nav_title",attrs:{span:"18"}},[n("span",[t._v("任务详情")])])],1),t._v(" "),n("div",{staticClass:"nav_block"}),t._v(" "),n("van-row",[n("van-col",{attrs:{span:"22",offset:"1"}},[n("van-row",[n("van-col",{staticClass:"title",attrs:{span:"18"}},[t._v("\n          【百度口碑】好评即可不下载\n        ")]),t._v(" "),n("van-col",{staticClass:"money",attrs:{span:"6"}},[t._v("\n          ￥1"),n("span",[t._v("/次")])]),t._v(" "),n("van-col",{staticClass:"label_title",attrs:{span:"6"}},[t._v("\n          截止日期：\n        ")]),t._v(" "),n("van-col",{staticClass:"label_content",attrs:{span:"18"}},[t._v("\n          2019-06-30\n        ")]),t._v(" "),n("van-col",{staticClass:"label_title",attrs:{span:"6"}},[t._v("\n          审核时长：\n        ")]),t._v(" "),n("van-col",{staticClass:"label_content",attrs:{span:"18"}},[t._v("\n          72小时\n        ")]),t._v(" "),n("van-col",{staticClass:"label_title",attrs:{span:"6"}},[t._v("\n          完成时间：\n        ")]),t._v(" "),n("van-col",{staticClass:"label_content",attrs:{span:"18"}},[t._v("\n          2小时\n        ")]),t._v(" "),n("van-col",{staticClass:"label_title",attrs:{span:"6"}},[t._v("\n          重复执行：\n        ")]),t._v(" "),n("van-col",{staticClass:"label_content",attrs:{span:"18"}},[t._v("\n          是\n        ")]),t._v(" "),n("van-col",{staticClass:"label_title",attrs:{span:"24"}},[t._v("\n          任务说明\n        ")]),t._v(" "),n("van-col",{staticClass:"label_content text_content",attrs:{span:"1"}},[t._v("\n          1、\n        ")]),t._v(" "),n("van-col",{staticClass:"label_content text_content",attrs:{span:"23"}},[t._v("\n          （评语请加微信号377047364，备注：百度口碑+你的手机品牌，客服通过你的好友验证发评语给你）\n        ")]),t._v(" "),n("van-col",{staticClass:"label_content text_content",attrs:{span:"1"}},[t._v("\n          2、\n        ")]),t._v(" "),n("van-col",{staticClass:"label_content text_content",attrs:{span:"23"}},[t._v("\n          一定要加客服等客服给你评语在做任务，不是客服给的评语不合格\n        ")]),t._v(" "),n("van-col",{staticClass:"label_content text_content",attrs:{span:"1"}},[t._v("\n          3、\n        ")]),t._v(" "),n("van-col",{staticClass:"label_content text_content",attrs:{span:"23"}},[t._v("\n          （复制注意事项中的链接到浏览器进入，点击登陆账号，给五星好评+评语+上传图片即可\n        ")]),t._v(" "),n("van-col",{staticClass:"label_content text_content",attrs:{span:"1"}},[t._v("\n          4、\n        ")]),t._v(" "),n("van-col",{staticClass:"label_content text_content",attrs:{span:"23"}},[t._v("\n          （需要有百度账号，如已有账号，直接登录评价，如果没有自行注册一个号\n        ")]),t._v(" "),n("van-col",{staticClass:"label_content text_content",attrs:{span:"1"}},[t._v("\n          5、\n        ")]),t._v(" "),n("van-col",{staticClass:"label_content text_content",attrs:{span:"23"}},[t._v("\n          一人只能评论一次，设置不限次数是因为怕有的超时没办法提交\n        ")]),t._v(" "),t._l(t.taskImgList,function(t,a){return n("van-col",{key:t.id,staticClass:"task_img",attrs:{span:"6"}},[n("img",{attrs:{src:t.src}})])}),t._v(" "),n("van-col",{staticClass:"label_title",attrs:{span:"24"}},[t._v("\n          提交说明\n        ")]),t._v(" "),n("van-col",{staticClass:"label_content text_content",attrs:{span:"1"}},[t._v("\n          1、\n        ")]),t._v(" "),n("van-col",{staticClass:"label_content text_content",attrs:{span:"23"}},[t._v("\n          必须扫图中二维码\n        ")]),t._v(" "),n("van-col",{staticClass:"label_content text_content",attrs:{span:"1"}},[t._v("\n          2、\n        ")]),t._v(" "),n("van-col",{staticClass:"label_content text_content",attrs:{span:"23"}},[t._v("\n          成功之后必须有当天赠送的卡券\n        ")]),t._v(" "),t._l(t.imgList,function(t,a){return n("van-col",{key:t.id,staticClass:"task_img",attrs:{span:"6"}},[n("img",{attrs:{src:t.src}})])}),t._v(" "),n("van-col",{staticClass:"label_title",attrs:{span:"24"}},[t._v("\n          注意事项\n        ")]),t._v(" "),n("van-col",{staticClass:"label_content text_content red_content",attrs:{span:"1"}},[t._v("\n          1、\n        ")]),t._v(" "),n("van-col",{staticClass:"label_content text_content red_content",attrs:{span:"23"}},[t._v("\n          一个手机只能注册一次，注册过的用户不能再注册，新用户收到借条额度通过通知和成功借款的用户才有奖励，\n        ")]),t._v(" "),n("van-col",{staticClass:"label_content text_content red_content",attrs:{span:"1"}},[t._v("\n          2、\n        ")]),t._v(" "),n("van-col",{staticClass:"label_content text_content red_content",attrs:{span:"23"}},[t._v("\n          可以随意借一笔款，几天后还款，利息按日计算，红包可以抵扣利息。\n        ")])],2)],1)],1),t._v(" "),n("div",{staticClass:"block"}),t._v(" "),n("van-row",{staticClass:"receive_row"},[n("van-col",{attrs:{span:"22",offset:"1"}},[0===t.status?n("van-button",{staticClass:"receive_task",on:{click:t.receiveTask}},[t._v("领取任务")]):t._e(),t._v(" "),1===t.status?n("van-button",{staticClass:"submit_data",on:{click:t.submitData}},[t._v("提交材料\n        "),n("span",{staticClass:"time"},[n("van-icon",{staticClass:"clock",attrs:{name:"underway-o"}}),t._v("1:00:57\n        ")],1)]):t._e()],1)],1)],1)},staticRenderFns:[]};var u=n("VU/8")(v,_,!1,function(t){n("E995"),n("Jqai")},"data-v-5e8a6595",null).exports,d={name:"TaskSubmit",data:function(){return{submitImgList:[{id:1,src:"static/images/checkboxed.png",url:""},{id:2,src:"static/images/checkboxed.png",url:""},{id:3,src:"static/images/checkboxed.png",url:""},{id:4,src:"static/images/checkboxed.png",url:""}],areaPlaceholder:"1、新人注册领红包页面截图\n2、借条审核通过通知短信截图\n3、借款成功短信截图\n文字提交：姓名+手机号"}},methods:{goBack:function(){this.$router.back()},onRead:function(t){console.log("onRead"),console.log(t)},submitData:function(){console.log("submitData"),this.$router.push({name:"SubmitSuccess",params:{id:12}})}},created:function(){}},m={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"taskSubmit"},[n("van-row",{staticClass:"navRow"},[n("van-col",{attrs:{span:"2",offset:"1"}},[n("van-icon",{staticClass:"nav_icon",attrs:{name:"arrow-left",size:"20px"},on:{click:t.goBack}})],1),t._v(" "),n("van-col",{staticClass:"nav_title",attrs:{span:"18"}},[n("span",[t._v("提交材料")])])],1),t._v(" "),n("div",{staticClass:"nav_block"}),t._v(" "),n("van-row",[n("van-col",{attrs:{span:"22",offset:"1"}},[n("van-row",[n("van-col",{staticClass:"title",attrs:{span:"24"}},[t._v("\n          注意\n        ")]),t._v(" "),n("van-col",{staticClass:"content",attrs:{span:"24"}},[t._v("\n          请详细阅读任务说明，并严格按照任务要求进行任务提交，随意填写会导致您本次任务提交无法通过审核，最终导致通过率下降；\n        ")])],1),t._v(" "),n("van-row",[n("van-col",{staticClass:"title",attrs:{span:"24"}},[t._v("\n          提交说明\n        ")]),t._v(" "),n("van-col",{staticClass:"content",attrs:{span:"24"}},[t._v("\n          1、新人注册领红包页面截图\n          2、借条审核通过通知短信截图\n          3、借款成功短信截图\n          文字提交：姓名+手机号\n        ")])],1),t._v(" "),n("van-row",[n("van-col",{staticClass:"title",attrs:{span:"24"}},[t._v("\n          提交图片\n        ")]),t._v(" "),t._l(t.submitImgList,function(t,a){return n("van-col",{key:t.id,staticClass:"submit_img",attrs:{span:"6"}},[n("img",{attrs:{src:t.src}})])})],2),t._v(" "),n("van-row",[n("van-col",{staticClass:"title",attrs:{span:"24"}},[t._v("\n          上传图片\n        ")]),t._v(" "),n("van-col",{staticClass:"upload_img",attrs:{span:"6"}},[n("van-uploader",{attrs:{"after-read":t.onRead}},[n("van-icon",{staticClass:"add_icon",attrs:{name:"plus",size:"30px",color:"#fff"}})],1)],1)],1),t._v(" "),n("van-row",[n("van-col",{staticClass:"title",attrs:{span:"24"}},[t._v("\n          上传文本\n        ")]),t._v(" "),n("van-col",{staticClass:"text_area",attrs:{span:"24"}},[n("van-field",{attrs:{placeholder:t.areaPlaceholder,type:"textarea"}})],1)],1)],1)],1),t._v(" "),n("div",{staticClass:"block"}),t._v(" "),n("van-row",{staticClass:"receive_row"},[n("van-col",{attrs:{span:"22",offset:"1"}},[n("van-button",{staticClass:"submit_data",on:{click:t.submitData}},[t._v("提交材料\n        "),n("span",{staticClass:"time"},[n("van-icon",{staticClass:"clock",attrs:{name:"underway-o"}}),t._v("1:00:57\n        ")],1)])],1)],1)],1)},staticRenderFns:[]};var p=n("VU/8")(d,m,!1,function(t){n("u2fx"),n("KoQq")},"data-v-346da384",null).exports,f={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"submitSuccess"},[a("van-row",{staticClass:"navRow"},[a("van-col",{attrs:{span:"2",offset:"1"}},[a("van-icon",{staticClass:"nav_icon",attrs:{name:"cross",size:"20px"},on:{click:this.goIndex}})],1),this._v(" "),a("van-col",{staticClass:"nav_title",attrs:{span:"18"}},[a("span",[this._v("提交成功")])])],1),this._v(" "),a("div",{staticClass:"nav_block"}),this._v(" "),a("van-row",[a("van-col",{staticClass:"success_img",attrs:{span:"6",offset:"9"}},[a("img",{attrs:{src:n("LBIJ")}}),this._v(" "),a("p",[this._v("提交成功")])])],1)],1)},staticRenderFns:[]};var h=n("VU/8")({name:"SubmitSuccess",data:function(){return{}},methods:{goIndex:function(){this.$router.push({name:"Index"})}},created:function(){}},f,!1,function(t){n("Ifl5"),n("UGFz")},"data-v-453319ee",null).exports,g={name:"User",data:function(){return{skillShow:!1,serviceShow:!1}},methods:{goMyIncome:function(){console.log("goMyIncome"),this.$router.push({name:"MyIncome"})},goTeamIncome:function(){console.log("goTeamIncome"),this.$router.push({name:"TeamIncome"})},goWithdraw:function(){console.log("goWithdraw"),this.$router.push({name:"MyWithdraw"})},goMyTask:function(){console.log("goMyTask"),this.$router.push({name:"MyTask"})},goMyNotice:function(){console.log("goMyNotice"),this.$router.push({name:"Notice"})},goMyQr:function(){console.log("goMyQr"),this.$router.push({name:"MyQr"})},showSkill:function(){console.log("showSkill"),this.skillShow=!0},showService:function(){console.log("showService"),this.serviceShow=!0},goMyTeam:function(){console.log("goMyTeam"),this.$router.push({name:"MyTeam"})}},created:function(){}},k={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"user"},[s("van-row",{staticClass:"user_info"},[s("van-col",{attrs:{span:"4",offset:"1"}},[s("img",{attrs:{src:n("LBIJ")}})]),t._v(" "),s("van-col",{attrs:{span:"17",offset:"1"}},[s("h1",[t._v("昵称")]),t._v(" "),s("h2",[s("span",[t._v("工号:")]),t._v("12351234")]),t._v(" "),s("h2",[s("span",[t._v("推荐人:")]),t._v("慧元财富")])])],1),t._v(" "),s("van-row",{staticClass:"user_income"},[s("van-col",{staticClass:"income_content",attrs:{span:"12"}},[s("h2",[t._v("总收入")]),t._v(" "),s("h1",[t._v("￥0.00")])]),t._v(" "),s("van-col",{staticClass:"income_content",attrs:{span:"12"}},[s("div",{on:{click:t.goMyIncome}},[s("h2",[t._v("个人收入")]),t._v(" "),s("h1",[t._v("￥0.00"),s("van-icon",{attrs:{name:"eye-o",size:"20px"}})],1)])]),t._v(" "),s("van-col",{staticClass:"income_content",attrs:{span:"12"}},[s("div",{on:{click:t.goTeamIncome}},[s("h2",[t._v("团队收入")]),t._v(" "),s("h1",[t._v("￥0.00"),s("van-icon",{attrs:{name:"eye-o",size:"20px"}})],1)])]),t._v(" "),s("van-col",{staticClass:"income_content",attrs:{span:"12"}},[s("van-button",{on:{click:t.goWithdraw}},[t._v("提现")])],1)],1),t._v(" "),s("van-row",{staticClass:"handle"},[s("van-col",{staticClass:"handle_content my_qr",attrs:{span:"12"}},[s("div",{on:{click:t.goMyQr}},[s("van-icon",{attrs:{name:"gift-card-o",size:"30px",color:"#FF0000"}}),t._v(" "),s("h2",[t._v("邀请有礼")])],1)]),t._v(" "),s("van-col",{staticClass:"handle_content my_qr",attrs:{span:"12"}},[s("div",{on:{click:t.showSkill}},[s("van-icon",{attrs:{name:"aim",size:"30px",color:"#00FFFF"}}),t._v(" "),s("h2",[t._v("邀请技巧")])],1)]),t._v(" "),s("van-col",{staticClass:"handle_content my_task",attrs:{span:"12"}},[s("div",{on:{click:t.goMyTask}},[s("van-icon",{attrs:{name:"notes-o",size:"30px",color:"#FFA500"}}),t._v(" "),s("h2",[t._v("我的任务")])],1)]),t._v(" "),s("van-col",{staticClass:"handle_content my_team",attrs:{span:"12"}},[s("div",{on:{click:t.goMyTeam}},[s("van-icon",{attrs:{name:"friends-o",size:"30px",color:"#0000FF"}}),t._v(" "),s("h2",[t._v("我的团队")])],1)]),t._v(" "),s("van-col",{staticClass:"handle_content my_notice",attrs:{span:"12"}},[s("div",{on:{click:t.goMyNotice}},[s("van-icon",{attrs:{name:"chat-o",size:"30px",color:"#00FF00",info:"9"}}),t._v(" "),s("h2",[t._v("最新通知")])],1)]),t._v(" "),s("van-col",{staticClass:"handle_content my_notice",attrs:{span:"12"}},[s("div",{on:{click:t.showService}},[s("van-icon",{attrs:{name:"phone-circle-o",size:"30px",color:"#808000"}}),t._v(" "),s("h2",[t._v("联系客服")])],1)])],1),t._v(" "),s("van-row",[s("van-col",{staticClass:"other_info",attrs:{span:"24"}},[s("h1",[t._v("慧元财富")]),t._v(" "),s("h2",[t._v("做任务赚现金，真的可以‘躺着赚’")])])],1),t._v(" "),s("van-popup",{staticClass:"skill",model:{value:t.skillShow,callback:function(a){t.skillShow=a},expression:"skillShow"}},[s("van-row",[s("van-col",{attrs:{span:"24"}},[s("h1",[t._v("邀请技巧")])]),t._v(" "),s("van-col",{attrs:{span:"24"}},[s("p",[t._v("1. 自己先做任务赚钱，并提现，然后分享赚钱乐趣；")]),t._v(" "),s("p",[t._v("2. 私下邀请家人、朋友、同学、同事加入赚钱行列，成为你的队员；")]),t._v(" "),s("p",[t._v("3. 分享到3个以上微信群，每天坚持发朋友圈，成功邀请几率提升200%；")]),t._v(" "),s("p",[t._v("4. 告诉好友：在家就能兼职赚钱，推广拿高额团队佣金；")]),t._v(" "),s("p",[t._v("5. 合伙人永享一级队员22%的团队佣金，永享二级队员3%的团队佣金;")])])],1)],1),t._v(" "),s("van-popup",{staticClass:"service",model:{value:t.serviceShow,callback:function(a){t.serviceShow=a},expression:"serviceShow"}},[s("van-row",[s("van-col",{attrs:{span:"24"}},[s("h1",[t._v("联系客服")])]),t._v(" "),s("van-col",{attrs:{span:"24"}},[s("p",[t._v("客服 QQ：2332155808")]),t._v(" "),s("p",[t._v("合作邮箱：2332155808@qq.com")])])],1)],1)],1)},staticRenderFns:[]};var C=n("VU/8")(g,k,!1,function(t){n("oF2H"),n("lOLQ")},"data-v-868bf67a",null).exports,w={name:"MyTask",data:function(){return{list:[],loading:!1,finished:!1,currentStatus:1,statusList:[{name:"执行中",value:1},{name:"审核中",value:2},{name:"已通过",value:3},{name:"未通过",value:4},{name:"已放弃",value:5}],taskList:[{name:"兴业信用卡1",money:"50.00",number:3,ratio:100},{name:"兴业信用卡2",money:"50.00",number:3,ratio:100},{name:"兴业信用卡3",money:"50.00",number:3,ratio:100}],giveUpShow:!1}},methods:{goBack:function(){this.$router.back()},onLoad:function(){var t=this;setTimeout(function(){for(var a=0;a<10;a++)t.list.push(t.list.length+1);t.loading=!1,t.list.length>=40&&(t.finished=!0)},500)},selectStatus:function(t){this.currentStatus=this.statusList[t].value},giveUp:function(){console.log("giveUp"),this.giveUpShow=!0},goOn:function(){console.log("goOn"),this.$router.push({name:"TaskDetails",params:{id:12}})},confirmGiveUp:function(){console.log("confirmGiveUp")}},created:function(){}},b={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"myTask"},[s("van-row",{staticClass:"navRow"},[s("van-col",{attrs:{span:"2",offset:"1"}},[s("van-icon",{staticClass:"nav_icon",attrs:{name:"arrow-left",size:"20px"},on:{click:t.goBack}})],1),t._v(" "),s("van-col",{staticClass:"nav_title",attrs:{span:"18"}},[s("span",[t._v("我的任务")])])],1),t._v(" "),s("div",{staticClass:"nav_block"}),t._v(" "),s("van-row",{staticClass:"task_nav"},t._l(t.statusList,function(a,n){return s("div",{key:n,on:{click:function(a){return t.selectStatus(n)}}},[s("van-col",{staticClass:"task_nav_item",class:{actice:a.value===t.currentStatus}},[s("span",[t._v(t._s(a.name))])])],1)}),0),t._v(" "),s("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(a){t.loading=a},expression:"loading"}},t._l(t.taskList,function(a,e){return s("van-row",{key:e,staticClass:"task_row"},[s("van-col",{staticClass:"task_list",attrs:{span:"22",offset:"1"}},[s("van-row",[s("van-col",{staticClass:"img",attrs:{span:"4",offset:"1"}},[s("img",{attrs:{src:n("LBIJ")}})]),t._v(" "),s("van-col",{staticClass:"content",attrs:{span:"17",offset:"1"}},[s("h1",[t._v(t._s(a.name)),s("span",{staticClass:"number"},[t._v("/次")]),s("span",{staticClass:"money"},[t._v("￥"+t._s(a.money))])]),t._v(" "),s("h2",[t._v("已领取"+t._s(a.number)+"次 通过率"+t._s(a.ratio)+"%")])]),t._v(" "),s("div",{staticClass:"clear"}),t._v(" "),s("van-row",{staticClass:"handle"},[s("van-col",{attrs:{span:"6",offset:"1"}},[s("h1",[s("van-icon",{attrs:{name:"underway-o"}}),t._v("1:00:57")],1)]),t._v(" "),s("van-col",{attrs:{span:"6",offset:"5"}},[s("h3",{on:{click:t.giveUp}},[t._v("放弃任务")])]),t._v(" "),s("van-col",{attrs:{span:"6"}},[s("van-button",{on:{click:t.goOn}},[t._v("继续任务")])],1)],1)],1)],1)],1)}),1),t._v(" "),s("van-dialog",{attrs:{title:"确定放弃任务吗？","show-cancel-button":""},on:{confirm:t.confirmGiveUp},model:{value:t.giveUpShow,callback:function(a){t.giveUpShow=a},expression:"giveUpShow"}})],1)},staticRenderFns:[]};var x=n("VU/8")(w,b,!1,function(t){n("US8m"),n("VVQu")},"data-v-5bd1b842",null).exports,y={name:"Notice",data:function(){return{list:[],loading:!1,finished:!1,noticeList:[{name:"消息通知1",time:"2019-06-05 12:00",content:"消息通知消息通知消息通知消息通知",is_read:0},{name:"消息通知2",time:"2019-06-05 12:00",content:"消息通知消息通知消息通知消息通知消息通知消息通知消息通知消息通知",is_read:0},{name:"消息通知3",time:"2019-06-05 12:00",content:"消息通知消息通知消息通知消息通知消息通知消息通知消息通知消息通知",is_read:1}]}},methods:{goBack:function(){this.$router.back()},onLoad:function(){var t=this;setTimeout(function(){for(var a=0;a<10;a++)t.list.push(t.list.length+1);t.loading=!1,t.list.length>=40&&(t.finished=!0)},500)},readNotice:function(t){console.log("readNotice"),this.noticeList[t].is_read=1}},created:function(){}},A={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"notice"},[n("van-row",{staticClass:"navRow"},[n("van-col",{attrs:{span:"2",offset:"1"}},[n("van-icon",{staticClass:"nav_icon",attrs:{name:"arrow-left",size:"20px"},on:{click:t.goBack}})],1),t._v(" "),n("van-col",{staticClass:"nav_title",attrs:{span:"18"}},[n("span",[t._v("最新通知")])])],1),t._v(" "),n("div",{staticClass:"nav_block"}),t._v(" "),n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(a){t.loading=a},expression:"loading"}},t._l(t.noticeList,function(a,s){return n("van-row",{key:s,staticClass:"taskRow"},[n("div",{on:{click:function(a){return t.readNotice(s)}}},[n("van-col",{attrs:{span:"22",offset:"1"}},[n("h1",{class:{not_read:0===a.is_read}},[t._v(t._s(a.name)),n("span",[t._v(t._s(a.time))])]),t._v(" "),n("p",[t._v(t._s(a.content))])])],1)])}),1)],1)},staticRenderFns:[]};var L=n("VU/8")(y,A,!1,function(t){n("CARu"),n("WoPd")},"data-v-59b019cc",null).exports,S={name:"MyTeam",data:function(){return{list:[],loading:!1,finished:!1,currentGrade:1,gradeList:[{name:"一级团队",value:1},{name:"二级团队",value:2}],userList:[{nickname:"成员a",avatarurl:"static/images/checkboxed.png"},{nickname:"成员b",avatarurl:"static/images/checkboxed.png"},{nickname:"成员c",avatarurl:"static/images/checkboxed.png"},{nickname:"成员d",avatarurl:"static/images/checkboxed.png"}]}},methods:{goBack:function(){this.$router.back()},onLoad:function(){var t=this;setTimeout(function(){for(var a=0;a<10;a++)t.list.push(t.list.length+1);t.loading=!1,t.list.length>=40&&(t.finished=!0)},500)},selectGrade:function(t){this.currentGrade=this.gradeList[t].value}},created:function(){}},T={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"myTeam"},[n("van-row",{staticClass:"navRow"},[n("van-col",{attrs:{span:"2",offset:"1"}},[n("van-icon",{staticClass:"nav_icon",attrs:{name:"arrow-left",size:"20px"},on:{click:t.goBack}})],1),t._v(" "),n("van-col",{staticClass:"nav_title",attrs:{span:"18"}},[n("span",[t._v("我的团队")])])],1),t._v(" "),n("div",{staticClass:"nav_block"}),t._v(" "),n("van-row",{staticClass:"team_nav"},t._l(t.gradeList,function(a,s){return n("div",{key:s,on:{click:function(a){return t.selectGrade(s)}}},[n("van-col",{staticClass:"team_nav_item",class:{actice:a.value===t.currentGrade}},[n("span",[t._v(t._s(a.name))])])],1)}),0),t._v(" "),n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(a){t.loading=a},expression:"loading"}},t._l(t.userList,function(a,s){return n("van-row",{key:s,staticClass:"user_list"},[n("van-col",{attrs:{span:"4",offset:"1"}},[n("img",{attrs:{src:a.avatarurl}})]),t._v(" "),n("van-col",{attrs:{span:"18"}},[n("h1",[t._v(t._s(a.nickname))])])],1)}),1)],1)},staticRenderFns:[]};var U=n("VU/8")(S,T,!1,function(t){n("HCVs"),n("x/+u")},"data-v-4863967a",null).exports,M={name:"TeamIncome",data:function(){return{list:[],loading:!1,finished:!1,currentGrade:1,gradeList:[{name:"一级团队",value:1},{name:"二级团队",value:2}],incomeList:[{nickname:"成员a",time:"2019-06-05 12:34",money:"23.12"},{nickname:"成员a",time:"2019-06-05 12:34",money:"23.12"},{nickname:"成员c",time:"2019-06-05 12:34",money:"23.12"},{nickname:"成员d",time:"2019-06-05 12:34",money:"23.12"}]}},methods:{goBack:function(){this.$router.back()},onLoad:function(){var t=this;setTimeout(function(){for(var a=0;a<10;a++)t.list.push(t.list.length+1);t.loading=!1,t.list.length>=40&&(t.finished=!0)},500)},selectGrade:function(t){this.currentGrade=this.gradeList[t].value}},created:function(){}},R={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"teamIncome"},[n("van-row",{staticClass:"navRow"},[n("van-col",{attrs:{span:"2",offset:"1"}},[n("van-icon",{staticClass:"nav_icon",attrs:{name:"arrow-left",size:"20px"},on:{click:t.goBack}})],1),t._v(" "),n("van-col",{staticClass:"nav_title",attrs:{span:"18"}},[n("span",[t._v("团队收入")])])],1),t._v(" "),n("div",{staticClass:"nav_block"}),t._v(" "),n("van-row",{staticClass:"team_nav"},t._l(t.gradeList,function(a,s){return n("div",{key:s,on:{click:function(a){return t.selectGrade(s)}}},[n("van-col",{staticClass:"team_nav_item",class:{actice:a.value===t.currentGrade}},[n("span",[t._v(t._s(a.name))])])],1)}),0),t._v(" "),n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(a){t.loading=a},expression:"loading"}},t._l(t.incomeList,function(a,s){return n("van-row",{key:s,staticClass:"income_list"},[n("van-col",{attrs:{span:"16",offset:"1"}},[n("h1",[t._v('"'+t._s(a.nickname)+'"在 '+t._s(a.time)+" 完成了任务")])]),t._v(" "),n("van-col",{staticClass:"money",attrs:{span:"5",offset:"1"}},[n("span",[t._v("+"+t._s(a.money))])])],1)}),1)],1)},staticRenderFns:[]};var F=n("VU/8")(M,R,!1,function(t){n("Xsl2"),n("2JL+")},"data-v-609efb4a",null).exports,z={name:"MyIncome",data:function(){return{list:[],loading:!1,finished:!1,incomeList:[{time:"2019-06-05 12:34",money:"23.12"},{time:"2019-06-05 12:34",money:"23.12"},{time:"2019-06-05 12:34",money:"23.12"},{time:"2019-06-05 12:34",money:"23.12"}]}},methods:{goBack:function(){this.$router.back()},onLoad:function(){var t=this;setTimeout(function(){for(var a=0;a<10;a++)t.list.push(t.list.length+1);t.loading=!1,t.list.length>=40&&(t.finished=!0)},500)}},created:function(){}},I={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"myIncome"},[n("van-row",{staticClass:"navRow"},[n("van-col",{attrs:{span:"2",offset:"1"}},[n("van-icon",{staticClass:"nav_icon",attrs:{name:"arrow-left",size:"20px"},on:{click:t.goBack}})],1),t._v(" "),n("van-col",{staticClass:"nav_title",attrs:{span:"18"}},[n("span",[t._v("个人收入")])])],1),t._v(" "),n("div",{staticClass:"nav_block"}),t._v(" "),n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(a){t.loading=a},expression:"loading"}},t._l(t.incomeList,function(a,s){return n("van-row",{key:s,staticClass:"income_list"},[n("van-col",{attrs:{span:"16",offset:"1"}},[n("h1",[t._v("在 "+t._s(a.time)+" 完成了任务")])]),t._v(" "),n("van-col",{staticClass:"money",attrs:{span:"5",offset:"1"}},[n("span",[t._v("+"+t._s(a.money))])])],1)}),1)],1)},staticRenderFns:[]};var B=n("VU/8")(z,I,!1,function(t){n("gBVp"),n("XwvV")},"data-v-55f2fdc2",null).exports,V={name:"MyWithdraw",data:function(){return{list:[],loading:!1,finished:!1,withdrawList:[{time:"2019-06-05 12:34:45",money:"23.12"},{time:"2019-06-05 12:34:45",money:"23.12"},{time:"2019-06-05 12:34:45",money:"23.12"},{time:"2019-06-05 12:34:45",money:"23.12"}]}},methods:{goBack:function(){this.$router.back()},onLoad:function(){var t=this;setTimeout(function(){for(var a=0;a<10;a++)t.list.push(t.list.length+1);t.loading=!1,t.list.length>=40&&(t.finished=!0)},500)}},created:function(){}},N={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"myWithdraw"},[n("van-row",{staticClass:"navRow"},[n("van-col",{attrs:{span:"2",offset:"1"}},[n("van-icon",{staticClass:"nav_icon",attrs:{name:"arrow-left",size:"20px"},on:{click:t.goBack}})],1),t._v(" "),n("van-col",{staticClass:"nav_title",attrs:{span:"18"}},[n("span",[t._v("提现记录")])])],1),t._v(" "),n("div",{staticClass:"nav_block"}),t._v(" "),n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(a){t.loading=a},expression:"loading"}},t._l(t.withdrawList,function(a,s){return n("van-row",{key:s,staticClass:"withdraw_list"},[n("van-col",{attrs:{span:"16",offset:"1"}},[n("h1",[t._v(t._s(a.time))])]),t._v(" "),n("van-col",{staticClass:"money",attrs:{span:"5",offset:"1"}},[n("span",[t._v("-"+t._s(a.money))])])],1)}),1)],1)},staticRenderFns:[]};var E=n("VU/8")(V,N,!1,function(t){n("p0N5"),n("VSLq")},"data-v-34260839",null).exports;s.a.use(i.a);var O=new i.a({routes:[{path:"/",name:"Index",component:r},{path:"/TaskDetails",name:"TaskDetails",component:u},{path:"/TaskSubmit",name:"TaskSubmit",component:p},{path:"/SubmitSuccess",name:"SubmitSuccess",component:h},{path:"/User",name:"User",component:C},{path:"/MyTask",name:"MyTask",component:x},{path:"/Notice",name:"Notice",component:L},{path:"/MyTeam",name:"MyTeam",component:U},{path:"/TeamIncome",name:"TeamIncome",component:F},{path:"/MyIncome",name:"MyIncome",component:B},{path:"/MyWithdraw",name:"MyWithdraw",component:E}]}),$=n("Fd2+");n("4ml/");s.a.use($.b),s.a.use($.a),s.a.config.productionTip=!1,new s.a({el:"#app",router:O,components:{App:o},template:"<App/>"})},UGFz:function(t,a){},US8m:function(t,a){},VSLq:function(t,a){},VVQu:function(t,a){},WoPd:function(t,a){},Xsl2:function(t,a){},XwvV:function(t,a){},YYLC:function(t,a){},gBVp:function(t,a){},lOLQ:function(t,a){},oF2H:function(t,a){},p0N5:function(t,a){},szYa:function(t,a){},u2fx:function(t,a){},"x/+u":function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.47b8f0642f0faafe8c53.js.map