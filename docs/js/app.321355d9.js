(function(t){function e(e){for(var a,r,l=e[0],o=e[1],n=e[2],d=0,m=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);v&&v(e);while(m.length)m.shift()();return c.push.apply(c,n||[]),s()}function s(){for(var t,e=0;e<c.length;e++){for(var s=c[e],a=!0,l=1;l<s.length;l++){var o=s[l];0!==i[o]&&(a=!1)}a&&(c.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},i={app:0},c=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var n=0;n<l.length;n++)e(l[n]);var v=o;c.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0337":function(t,e,s){"use strict";var a=s("b197"),i=s.n(a);i.a},"034f":function(t,e,s){"use strict";var a=s("85ec"),i=s.n(a);i.a},"0e1e":function(t,e,s){},"120c":function(t,e,s){"use strict";var a=s("ac56"),i=s.n(a);i.a},2034:function(t,e,s){"use strict";var a=s("c7c9"),i=s.n(a);i.a},"288a":function(t,e,s){"use strict";var a=s("efc9"),i=s.n(a);i.a},"2c21":function(t,e,s){"use strict";var a=s("f0bc"),i=s.n(a);i.a},"2d6a":function(t,e,s){},"2fbc":function(t,e,s){"use strict";var a=s("a971"),i=s.n(a);i.a},"390e":function(t,e,s){"use strict";var a=s("8598"),i=s.n(a);i.a},"4ae2":function(t,e,s){"use strict";var a=s("2d6a"),i=s.n(a);i.a},"52b2":function(t,e,s){"use strict";var a=s("ca32"),i=s.n(a);i.a},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),i=s("5c96"),c=s.n(i),r=(s("0fae"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("PageHeader"),s("router-view"),s("PageFooter")],1)}),l=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("div",[s("table",[s("tr",[s("td",{on:{click:t.onClickLogo}},[s("img",{staticClass:"logo-image",attrs:{src:"https://release.bitwormhole.com/static/gllcit.com/logo.png"}})]),s("td",{on:{click:t.onClickLogo}},[s("img",{staticClass:"logo-text",attrs:{src:"https://release.bitwormhole.com/static/gllcit.com/text-lckj.svg"}})])])])]),s("div",[s("el-menu",{staticClass:"nav-bar",attrs:{mode:"horizontal","background-color":"#27aad6","text-color":"#ffffff","active-text-color":"#ffff00"},on:{select:t.onSelectItem}},[s("el-menu-item",{attrs:{index:"home"}},[t._v("首页")]),s("el-menu-item",{attrs:{index:"company"}},[t._v("公司简介")]),s("el-menu-item",{attrs:{index:"business"}},[t._v("业务介绍")]),s("el-menu-item",{attrs:{index:"projects"}},[t._v("成功案例")]),s("el-menu-item",{attrs:{index:"about"}},[t._v("联系我们")])],1)],1)])},n=[],v={name:"HelloWorld",props:{msg:String},data(){return{output:"hello"}},methods:{onSelectItem(t,e){this.$router.push("/"+t)},onClickLogo(){this.$router.push("/")}}},d=v,m=(s("4ae2"),s("2877")),p=Object(m["a"])(d,o,n,!1,null,"635bb903",null),u=p.exports,_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("div",{staticClass:"footer-1"},[s("el-row",[s("el-col",{staticClass:"box1",attrs:{span:7,xs:24,sm:24,md:8}},[s("div",{staticClass:"box1-logo"},[s("img",{staticClass:"logo-image",attrs:{src:"https://release.bitwormhole.com/static/gllcit.com/logo.png"}})]),s("div",{staticClass:"box1-logo"},[s("img",{staticClass:"logo-text",attrs:{src:"https://release.bitwormhole.com/static/gllcit.com/text-lckj.svg"}})])]),s("el-col",{staticClass:"box2",attrs:{span:10,xs:24,sm:24,md:8}},[s("div",[t._v("桂林市七星区朝阳路国家高新区信息产业园")]),s("div",[s("button",{staticClass:"btn-about",on:{click:t.onClickAbout}},[s("i",{staticClass:"el-icon-phone"}),t._v(" 联系我们 ")])])]),s("el-col",{staticClass:"box3",attrs:{span:7,xs:24,sm:24,md:8}},[s("div",{staticClass:"grid-content bg-purple"},[s("img",{attrs:{src:"https://release.bitwormhole.com/static/gllcit.com/gllcit-qrcode.png"}})])])],1),s("div",{staticClass:"keywords"},[t._v("关键字，关键字，关键字呀，关键字~")])],1),t._m(0)])},f=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer-2"},[s("span",[t._v("Copyright(C) 2020 gllcit.com All Rights Reserved .")]),s("span",[t._v("桂林联潮信息技术有限公司 版权所有")])])}],h={name:"PageFooter",props:{msg:String},methods:{onClickAbout(){this.$router.push("/about")}}},C=h,b=(s("0337"),Object(m["a"])(C,_,f,!1,null,"0536d678",null)),g=b.exports,j={name:"app",components:{PageHeader:u,PageFooter:g}},x=j,w=(s("034f"),Object(m["a"])(x,r,l,!1,null,null,null)),y=w.exports,O=s("8c4f"),$=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},k=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"client"},[s("h1",[t._v("联系我们")]),s("table",[s("tr",[s("td"),s("td",[t._v("桂林联潮信息技术有限公司")])]),s("tr",[s("td"),s("td",[t._v("Guilin Lianchao Information Technology Co., Ltd.")])]),s("tr",[s("td",[t._v("手机")]),s("td",[t._v("13687869811 （沈工）13481375437（徐工）")])]),s("tr",[s("td",[t._v("QQ")]),s("td",[t._v("120318891 （沈工） 562732822 （徐工）")])]),s("tr",[s("td",[t._v("微信公众号")]),s("td",[t._v("LianChaoTech")])]),s("tr",[s("td",[t._v("网址")]),s("td",[t._v("https://www.gllcit.com/")])]),s("tr",[s("td",[t._v("地址")]),s("td",[t._v("桂林市七星区朝阳路国家高新区信息产业园 D-08 号")])]),s("tr",[s("td",[t._v("邮编")]),s("td",[t._v("541004")])])])])}],E=(s("2fbc"),{}),D=Object(m["a"])(E,$,k,!1,null,"4c530ab9",null),I=D.exports,B=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"client"},[s("h1",[t._v("业务介绍")]),s("div",[s("h2",[t._v("1. 软件设计类")]),s("table",[s("tr",[s("th",{staticClass:"c1"},[t._v("序号")]),s("th",{staticClass:"c2"},[t._v("系统名称")]),s("th",{staticClass:"c3"},[t._v("功能概要")])]),s("tr",[s("td",[t._v("1")]),s("td",[t._v("网站管理系统")]),s("td",[t._v("一般包含政府门户网和企业门户网及其他展示性网站定制。")])]),s("tr",[s("td",[t._v("2")]),s("td",[t._v("设备管理系统")]),s("td",[t._v("用于企业或工厂对设备的日常维护管理。")])]),s("tr",[s("td",[t._v("3")]),s("td",[t._v("人事管理系统")]),s("td",[t._v("包括员工基本信息管理、工资管理、请假、考勤等内容管理。")])]),s("tr",[s("td",[t._v("4")]),s("td",[t._v("科研管理系统")]),s("td",[t._v("用于管理科研项目申报，科研任务分配，年度科研工作统计等。")])]),s("tr",[s("td",[t._v("5")]),s("td",[t._v("就业管理系统")]),s("td",[t._v("用于大专院校对毕业生就业信息进行管理，学生档案去向等内容的维护。")])]),s("tr",[s("td",[t._v("6")]),s("td",[t._v("协同办公系统")]),s("td",[t._v("用于机关单位或者企业内部员工进行协同办公，公文、任务、计划、会议、消息等一系列内容。")])]),s("tr",[s("td",[t._v("7")]),s("td",[t._v("国有资产管理系统")]),s("td",[t._v("用于单位对办公室用品或者国有资产的管理，便于借阅、盘点、维护、报废等日常维护工作。")])]),s("tr",[s("td",[t._v("8")]),s("td",[t._v("干部测评系统")]),s("td",[t._v("用于机关单位对领导年度的测评工作，可以快速生成测评项，并用计算机快速统计出测评结果。")])]),s("tr",[s("td",[t._v("9")]),s("td",[t._v("文件管理系统")]),s("td",[t._v("用于内部文件共享和分类存储管理。")])]),s("tr",[s("td",[t._v("10")]),s("td",[t._v("干部信息管理系统")]),s("td",[t._v("用于党委组织部门对干部基本信息的统计和管理。")])]),s("tr",[s("td",[t._v("11")]),s("td",[t._v("信访案件管理系统")]),s("td",[t._v("对信访案件的登记、分配、办理等全过程跟踪的内容管理系统。")])]),s("tr",[s("td",[t._v("12")]),s("td",[t._v("人才管理系统")]),s("td",[t._v("用于市直机关的人才管理部门对各行业的人才信息的收集、登记、汇总、统计等功能。")])]),s("tr",[s("td",{staticClass:"table-footer",attrs:{colspan:"3"}},[t._v("以上列出的系统为公司已有框架的项目，其他业务系统根据客户需求定制。")])])])]),s("div",[s("h2",[t._v("2.电子技术类")]),s("table",[s("tr",[s("th",{staticClass:"c1"},[t._v("序号")]),s("th",{staticClass:"c2"},[t._v("系统名称")]),s("th",{staticClass:"c3"},[t._v("功能概要")])]),s("tr",[s("td",[t._v("1")]),s("td",[t._v("平安小区")]),s("td",[t._v("作为平安城市建设的组成部分，利用无线传输技术实现小区的远距离监控，成本低组网灵活方便。")])]),s("tr",[s("td",[t._v("2")]),s("td",[t._v("智能家居")]),s("td",[t._v("实现家庭网络化、信息化和自动化，提升家居安全性、便利性、舒适性。")])]),s("tr",[s("td",[t._v("3")]),s("td",[t._v("智慧工厂/农业")]),s("td",[t._v("利用物联网的技术和设备监控技术加强信息管理和服务，对作业数据进行采集、传输和分析，提升现代化管理水平。")])]),s("tr",[s("td",[t._v("4")]),s("td",[t._v("车联网")]),s("td",[t._v("具备车辆基本信息实时采集、车辆故障告警、行车记录、位置定位、车辆定时体检、驾驶行为分析、智能休眠、快速安装、车内拾音等功能。")])]),s("tr",[s("td",{staticClass:"table-footer",attrs:{colspan:"3"}},[t._v("以上列出的系统为公司已有框架的产品，可根据客户需求定制单片机、嵌入式、无线电、工业控制、有线\\无线通信、消费类电子，以及射频电子类、数字电子类和模拟电子类等产品。")])])])]),s("div",[s("h2",[t._v("3.信息系统集成类")]),s("table",[s("tr",[s("th",{staticClass:"c1"},[t._v("序号")]),s("th",{staticClass:"c2"},[t._v("系统名称")]),s("th",{staticClass:"c3"},[t._v("功能概要")])]),s("tr",[s("td",[t._v("1")]),s("td",[t._v("高校实验室建设")]),s("td",[t._v("大数据实验室，物理网实训室，高性能计算实验室，通信研究实验室，电子实操平台等项目建设配套和培训。")])]),s("tr",[s("td",[t._v("2")]),s("td",[t._v("企业信息系统集成")]),s("td",[t._v("为企业建立ERP管理信息系统、办公自动化系统、供应链管理系统、分销管理系统等等，涵盖业务、财务、销售、客户服务等各个方面，为企业正常经营管理提供有力支撑。")])]),s("tr",[s("td",{staticClass:"table-footer",attrs:{colspan:"3"}},[t._v("以上列出的系统为公司已有框架的项目，其他相近似的项目可根据具体需求定制。")])])])]),s("div",[s("h2",[t._v("4.智能化建筑系统集成类")]),s("table",[s("tr",[s("th",{staticClass:"c1"},[t._v("序号")]),s("th",{staticClass:"c2"},[t._v("系统名称")]),s("th",{staticClass:"c3"},[t._v("功能概要")])]),s("tr",[s("td",[t._v("1")]),s("td",[t._v("机房工程")]),s("td",[t._v("为确保计算机机房的关键设备和装置能安全、稳定和可靠运行而设计配置的基础工程，涵盖了建筑装修、供电、照明、防雷、接地、UPS不间断电源、精密空调、环境监测、火灾报警及灭火、门禁、防盗、视频监控、综合布线和系统集成等技术。")])]),s("tr",[s("td",[t._v("2")]),s("td",[t._v("视频监控系统")]),s("td",[t._v("各行业重点部门或重要场所进行实时监控的物理基础，管理部门可通过它获得有效数据、图像视频监控系统原理图或声音信息，对突发性异常事件的过程进行及时的监视和记忆，用以提供高效、及时地指挥和高度、布置警力、处理案件等, 由前端监视设备、传输设备、后端存储、控制及显示设备这五大部分组成。")])]),s("tr",[s("td",[t._v("3")]),s("td",[t._v("防盗报警系统")]),s("td",[t._v("用探测器对建筑内外重要地点和区域进行布防,及时探测非法入侵，并且在探测到有非法人侵时，及时向有关人员示警。")])]),s("tr",[s("td",[t._v("4")]),s("td",[t._v("综合布线系统")]),s("td",[t._v("为计算机系统、电话系统及其它子系统提供高速和高宽带的传输平台，能够适应现代和未来技术的发展。")])]),s("tr",[s("td",[t._v("5")]),s("td",[t._v("公共广播系统")]),s("td",[t._v("具有背景音乐广播、公共事务广播、火灾事故广播功能。")])]),s("tr",[s("td",[t._v("6")]),s("td",[t._v("会议系统")]),s("td",[t._v("通过中央控制器对各种会议设备及会议环境进行集中控制的一种现代会议模式,集计算机、通讯、自动控制、多媒体、图像、音响等技术于一体的会务自动化管理系统。")])]),s("tr",[s("td",[t._v("7")]),s("td",[t._v("停车场管理系统")]),s("td",[t._v("以感应卡IC卡或ID卡为载体，通过智能设备使感应卡记录车辆及持卡人进出的相关信息，同时对其信息加以运算、传送并通过字符显示、语音播报等人机界面转化成人工能够辨别和判断的信号，从而实现计时收费、车辆管理等目地。")])]),s("tr",[s("td",[t._v("8")]),s("td",[t._v("门禁系统")]),s("td",[t._v("集微机自动识别技术和现代安全管理措施为一体,是新型现代化安全管理系统.")])]),s("tr",[s("td",[t._v("9")]),s("td",[t._v("楼宇对讲系统")]),s("td",[t._v("在各单元口安装防盗门，小区总控中心的管理员总机、楼宇出入口的对讲主机、电控锁、闭门器及用户家中的可视对讲分机通过专用网络组成。以实现访客与住户对讲，住户可遥控开启防盗门，各单元梯口访客再通过对讲主机呼叫住户，对方同意后方可进入楼内，从而限制了非法人员进入。同时，若住户在家发生抢劫或突发疾病，可通过该系统通知保安人员以得到及时的支援和处理。")])]),s("tr",[s("td",{staticClass:"table-footer",attrs:{colspan:"3"}},[t._v("以上列出的系统为公司已有框架的项目，其他相近似的项目可根据具体需求定制。")])])])])])}],S=(s("390e"),{}),M=Object(m["a"])(S,B,P,!1,null,"4160c1bb",null),T=M.exports,L=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},z=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"client"},[s("h1",{staticClass:"title"},[t._v("公司简介")]),s("p",[t._v(" 桂林联潮信息技术有限公司成立于2014年底，是一家专注于信息系统集成服务，网络信息服务，计算机软硬件及电子通信技术开发、 技术转让、技术咨询与技术服务的高科技企业，其主营业务包括计算机系统集成、工业通信电子产品研发、桌面软件设计与开发、 移动设备软件设计与开发、企业信息化管理软件设计与开发、政企门户网站和电子商务平台建设。 ")]),s("p",[t._v(" 公司立足于广西服务于广西，总部设在山水秀美的桂林，并在省会南宁、钦州、贵港、来宾、玉林、贺州、广州和北京等地设有办事处，方便各地业务的本地化实施。 公司内部组织结构设有总经办、财务部、人事部、硬件部、软件部、运维部和采购部。公司技术团队成员技术精湛，经验丰富，人员都具备本科及以上学历， 骨干人员具备硕士和博士学历，以老带新人员梯度安排合理，主要技术主管都拥有多年丰富的省市级项目主持，高新技术企业评比，专利和计算机软件著作权 等相关知识产权和软件产品申报的实战经验。公司拥有一支年轻、敏锐、朝气蓬勃、志向远大的团队。在“互联网+”和“智慧+”的时代背景下，我们秉承专业、 敬业、激情、创新的发展理念，坚持以客户为本、以信用为先的服务准则，以自身擅长的研发优势，用心解决用户最迫切、最实际的需求，以优质的产品、 先进的技术为用户提供完美的服务。 ")]),s("p",[t._v(" 联潮作为一家专业的信息系统集成和设计开发企业，在长期工程实践中对产品及应用系统有着深刻的认识，能够为用户提供贴切的服务及相关的技术支持。 现在用户对售后服务的要求越来越高，售后服务的内容也越来越广泛，不但要做好信息系统的维修维护工作，还要随着用户应用的深入、业务的发展、 技术的更新为用户提供更高层次的服务，如系统扩充升级、系统管理、应用系统开发等专业的咨询服务和技术支持服务。我们深感售后服务对用户的重要性， 一直以来非常重视售后服务工作。我们凭借自身的实力和长期积累的经验，承诺为用户提供优质的售后服务，并在每一项目生命周期里都配备有专门的项目经理负责。 公司凭借可靠的产品质量和良好的售后服务，联潮赢得了广大用户的认可与支持。 ")]),s("p",[t._v(" 自桂林联潮信息技术有限公司成立以来，公司始终坚持“规范管理，服务客户，诚信为本，开拓进取”的管理方针，坚持“以人为本、靠科技进步”的理念， 强化管理，注重软硬件基础设施条件的建设，侧重本地化服务，并已加入中国计算机学会青年计算机科技论坛桂林分论坛委员单位。公司与联想、IBM、 惠普、微软、Vmware、Citrix、Cisco和NVIDIA等知名计算机软硬件供应商、地方政府、企业及高校结成了长期而稳定的战略合作伙伴关系， 共同推动IT行业的健康发展。 ")]),s("p",[t._v("桂林联潮信息技术有限公司衷心希望与社会各界和海内外客户在平等、互惠互利的基础上保持和发展长期友好的合作关系，以达到共赢之效果。")])])}],A=(s("a34d"),{}),H=Object(m["a"])(A,L,z,!1,null,"6ef0e53b",null),F=H.exports,N=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},R=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"client"},[s("h1",[t._v("成功案例")]),s("div",{staticClass:"projects"},[s("div",{staticClass:"project"},[s("div",{staticClass:"project-title"},[t._v("干部信息管理系统")]),s("div",{staticClass:"project-description"},[t._v("该系统涵盖了干部信息管理中的主要信息内容，并具有较好的扩展性，可以在后续根据使用事情进行二次扩展开发。目前包括的主要信息项目有干部基本信息，家庭成员，简历，培训，奖惩，任免，日常考察考核，年度考核，重大事项报告，审计，群众反馈，干部相关文档等内容。")]),s("div",{staticClass:"project-image"},[s("img",{staticClass:"project-img",attrs:{src:"https://release.bitwormhole.com/static/gllcit.com/projects/gbxxglxt.png"}})])]),s("div",{staticClass:"project"},[s("div",{staticClass:"project-title"},[t._v("会议议题管理系统")]),s("div",{staticClass:"project-description"},[t._v("会议议题文档实现电子化，参会者可以很方便地浏览议题文档，图文并茂，支持包括网页、office文档、pdf文件等多种格式。完善的实时电子表决，多种方式结合使用，自动形成会议记录，可灵活查询历史信息，制作维护简便，降低办公成本。")]),s("div",{staticClass:"project-image"},[s("img",{staticClass:"project-img",attrs:{src:"https://release.bitwormhole.com/static/gllcit.com/projects/hyytglxt.jpg"}})])]),s("div",{staticClass:"project"},[s("div",{staticClass:"project-title"},[t._v("科研项目管理系统")]),s("div",{staticClass:"project-description"},[t._v("该系统主要面对科研院所的各级领导、科研项目管理部门、课题负责人、课题参加科研人员，通过对进度、资源、经费、成果等全方位的管理，不但方便课题负责人对自己的项目全面管理，同时便于各级管理部门及时掌控科研院所内部所有项目的情况，将项目的各种信息结合在一起，自动为项目建立过程档案。")]),s("div",{staticClass:"project-image"},[s("img",{staticClass:"project-img",attrs:{src:"https://release.bitwormhole.com/static/gllcit.com/projects/kyxmglxt.png"}})])]),s("div",{staticClass:"project"},[s("div",{staticClass:"project-title"},[t._v("领导干部测评系统")]),s("div",{staticClass:"project-description"},[t._v("领导干部是保持国家发展和我党组织建设中最大的和最关键的资源，而干部考评就是干部管理中最具实际意义的管理技术之一。建立了一套符合管理需要的考评体系，结合优秀的软硬件新技术作为辅助手段，完全实现自动化统计和分析。系统分为“在线测评” 和“纸质测评”两种方式，其中纸质测评可以结合高速扫描仪快速识别测评结果，并统计出最终结果。")]),s("div",{staticClass:"project-image"},[s("img",{staticClass:"project-img",attrs:{src:"https://release.bitwormhole.com/static/gllcit.com/projects/ldgbcpxt.jpg"}})])]),s("div",{staticClass:"project"},[s("div",{staticClass:"project-title"},[t._v("人才管理系统")]),s("div",{staticClass:"project-description"},[t._v("该系统主要搭建在机关单位内部服务器中，用于日常录入、维护、分析、管理等。集成人才管理工作所需信息，重点加强人才的整体分析和宏观管理，推动人才管理工作的规范化、科学化和信息化。")]),s("div",{staticClass:"project-image"},[s("img",{staticClass:"project-img",attrs:{src:"https://release.bitwormhole.com/static/gllcit.com/projects/rcglxt.png"}})])]),s("div",{staticClass:"project"},[s("div",{staticClass:"project-title"},[t._v("文件资料共享系统")]),s("div",{staticClass:"project-description"},[t._v("随着网络的发展，越来越多的人开始通过互联网来了解和获得各种自己需要的信息和资源，特别是学生和教师群体。文件资料共享平台的建设是信息化教学的基础，是为学校全体师生提供图片、文档、常用教学工具等多种文件媒体共享的综合性平台。")]),s("div",{staticClass:"project-image"},[s("img",{staticClass:"project-img",attrs:{src:"https://release.bitwormhole.com/static/gllcit.com/projects/wjzlgxxt.png"}})])]),s("div",{staticClass:"project"},[s("div",{staticClass:"project-title"},[t._v("协同办公系统")]),s("div",{staticClass:"project-description"},[t._v("改革传统办公模式，开展电子办公，使业务办公、公文流转和管理过程电子化、信息化、高速化，并通过统一办公规范，提高工作效率、降低办公成本、实现办公自动化。")]),s("div",{staticClass:"project-image"},[s("img",{staticClass:"project-img",attrs:{src:"https://release.bitwormhole.com/static/gllcit.com/projects/xtbgxt.png"}})])]),s("div",{staticClass:"project"},[s("div",{staticClass:"project-title"},[t._v("新闻发布系统")]),s("div",{staticClass:"project-description"},[t._v("新闻发布系统对外要有友好的界面和完善的系统，使用户满意。对内要有方便快捷全面的管理系统，使得更新更加简单。它应该包含有用户与管理员的登陆验证，管理员对用户的修改删除操作，新闻的录入、修改与删除，用户对相应新闻的查询等操作。")]),s("div",{staticClass:"project-image"},[s("img",{staticClass:"project-img",attrs:{src:"https://release.bitwormhole.com/static/gllcit.com/projects/xwfbxt.png"}})])]),s("div",{staticClass:"project"},[s("div",{staticClass:"project-title"},[t._v("在线考试系统")]),s("div",{staticClass:"project-description"},[t._v("在线考试系统是一种现代化，全新的考试模型。它使用户可根据自身特点快速构建考试、测评、练习、竞赛、调查、分析及管理于一体的网络化考试平台，可轻松完成全员考试、技能考核、岗位评估、能力测试、招聘评鉴、新员工入职考评、需求调研，问卷调查以及知识竞赛等工作。")]),s("div",{staticClass:"project-image"},[s("img",{staticClass:"project-img",attrs:{src:"https://release.bitwormhole.com/static/gllcit.com/projects/zxksxt.png"}})])])])])}],W={name:"HistoryProjects",data(){return{}},methods:{}},J=W,Q=(s("d70e"),Object(m["a"])(J,N,R,!1,null,"7d8af5e0",null)),V=Q.exports,q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[t._m(0),s("el-row",[s("el-col",{staticClass:"info-box",attrs:{span:12,xs:24,sm:12,md:12}},[s("CompanyInfoBox")],1),s("el-col",{staticClass:"info-box",attrs:{span:12,xs:24,sm:12,md:12}},[s("BusinessInfoBox")],1)],1),t._m(1),s("div",{staticClass:"info-box"},[s("CaseInfoBox")],1)],1)},G=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"banner"},[s("img",{staticClass:"banner-image",attrs:{src:"https://release.bitwormhole.com/static/gllcit.com/banner1.jpg"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"banner"},[s("img",{staticClass:"banner-image",attrs:{src:"https://release.bitwormhole.com/static/gllcit.com/banner2.jpg"}})])}],U=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("box-title-bar",{attrs:{title:t.title},on:{openDetail:t.onOpenDetail}}),s("div",[s("span",{staticClass:"case"},[s("a",{on:{click:t.onOpenDetail}},[s("img",{staticClass:"case-image",attrs:{src:"https://release.bitwormhole.com/static/gllcit.com/projects/kyxmglxt.png"}})])]),s("span",{staticClass:"case"},[s("a",{on:{click:t.onOpenDetail}},[s("img",{staticClass:"case-image",attrs:{src:"https://release.bitwormhole.com/static/gllcit.com/projects/wjzlgxxt.png"}})])]),s("span",{staticClass:"case"},[s("a",{on:{click:t.onOpenDetail}},[s("img",{staticClass:"case-image",attrs:{src:"https://release.bitwormhole.com/static/gllcit.com/projects/xtbgxt.png"}})])])])],1)},K=[],X={name:"CaseInfoBox",data(){return{title:"成功案例"}},methods:{onOpenDetail(){this.$router.push("/projects")}}},Y=X,Z=(s("288a"),Object(m["a"])(Y,U,K,!1,null,"3403994d",null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("box-title-bar",{attrs:{title:t.title},on:{openDetail:t.onOpenDetail}}),t._m(0),t._m(1),t._m(2),t._m(3)],1)},st=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"item"},[s("div",{staticClass:"item-icon"},[s("i",{staticClass:"el-icon-tickets"})]),s("div",{staticClass:"item-text"},[t._v("软件设计")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"item"},[s("div",{staticClass:"item-icon"},[s("i",{staticClass:"el-icon-cpu"})]),s("div",{staticClass:"item-text"},[t._v("电子技术")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"item"},[s("div",{staticClass:"item-icon"},[s("i",{staticClass:"el-icon-files"})]),s("div",{staticClass:"item-text"},[t._v("信息系统集成")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"item"},[s("div",{staticClass:"item-icon"},[s("i",{staticClass:"el-icon-office-building"})]),s("div",{staticClass:"item-text"},[t._v("智能化建筑系统集成")])])}],at={name:"BusinessInfoBox",data(){return{title:"业务介绍"}},methods:{onOpenDetail(){this.$router.push("/business")}}},it=at,ct=(s("2c21"),Object(m["a"])(it,et,st,!1,null,"1b0dd58e",null)),rt=ct.exports,lt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("box-title-bar",{attrs:{title:t.title},on:{openDetail:t.onOpenDetail}}),t._m(0)],1)},ot=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("tr",[s("td",[s("img",{staticClass:"company-img",attrs:{src:"https://release.bitwormhole.com/static/gllcit.com/company2.jpg"}})]),s("td",{staticClass:"content"},[t._v(" 桂林联潮信息技术有限公司成立于2014年底，是一家专注于信息系统集成服务，网络信息服务， 计算机软硬件及电子通信技术开发、 技术转让、技术咨询与技术服务的高科技企业，其主营业务包括计算机系统集成、 工业通信电子产品研发、桌面软件设计与开发、 移动设备软件设计与开发、企业信息化管理软件设计与开发、 政企门户网站和电子商务平台建设。 ")])])])}],nt={name:"CompanyInfoBox",data(){return{title:"公司信息"}},methods:{onOpenDetail(){this.$router.push("/company")}}},vt=nt,dt=(s("2034"),Object(m["a"])(vt,lt,ot,!1,null,"af50596c",null)),mt=dt.exports,pt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("box-title-bar",{attrs:{title:t.title}}),s("table",{staticStyle:{width:"100%"}},t._l(t.tableData,(function(e){return s("tr",{key:e.id,staticClass:"table-item"},[s("td",{staticClass:"item-title",attrs:{label:"",width:"180"}},[s("a",{attrs:{href:"#"}},[t._v(t._s(e.title))])]),s("td",{staticClass:"item-date",attrs:{label:"",width:"180"}},[t._v(t._s(e.date))])])})),0)],1)},ut=[],_t={name:"ItNewsBox",data(){return{title:"行业新闻",tableData:[{title:"t1",date:1999999}]}},mounted(){this.initTableWithMockData()},methods:{initTableWithMockData(){for(var t=[],e=1;e<10;++e){var s=e,a="title-"+e,i=1999999999+e,c={id:s,title:a,date:i};t.push(c)}this.tableData=t}}},ft=_t,ht=(s("120c"),Object(m["a"])(ft,pt,ut,!1,null,"ac1b4e58",null)),Ct=ht.exports,bt={name:"home",components:{BusinessInfoBox:rt,CaseInfoBox:tt,CompanyInfoBox:mt,ItNewsBox:Ct},data(){return{}}},gt=bt,jt=(s("96bc"),Object(m["a"])(gt,q,G,!1,null,"7df38ea8",null)),xt=jt.exports;a["default"].use(O["a"]);const wt=[{path:"/",name:"home",component:xt},{path:"/home",name:"home2",component:xt},{path:"/business",name:"business-info",component:T},{path:"/company",name:"company-info",component:F},{path:"/projects",name:"history-projects",component:V},{path:"/about",name:"about",component:I}],yt=new O["a"]({routes:wt});var Ot=yt,$t=s("2f62");a["default"].use($t["a"]);var kt=new $t["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Et=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("table",{staticClass:"box-table",attrs:{border:"0",cellspacing:"0"}},[s("tr",{staticClass:"box-row"},[s("td",{staticClass:"box-title"},[t._v(t._s(t.title))]),s("td",{staticClass:"box-more"},[s("button",{on:{click:t.onClickMore}},[t._v(" 详细 "),s("i",{staticClass:"el-icon-caret-right"})])])])])])},Dt=[],It={name:"BoxTitleBar",props:{title:String},methods:{onClickMore(){this.$emit("openDetail")}}},Bt=It,Pt=(s("52b2"),Object(m["a"])(Bt,Et,Dt,!1,null,"720490bc",null)),St=Pt.exports;a["default"].config.productionTip=!1,a["default"].use(c.a),a["default"].component("box-title-bar",St),new a["default"]({router:Ot,store:kt,render:function(t){return t(y)}}).$mount("#app")},8598:function(t,e,s){},"85ec":function(t,e,s){},"91e1":function(t,e,s){},"96bc":function(t,e,s){"use strict";var a=s("a7a5"),i=s.n(a);i.a},a34d:function(t,e,s){"use strict";var a=s("0e1e"),i=s.n(a);i.a},a7a5:function(t,e,s){},a971:function(t,e,s){},ac56:function(t,e,s){},b197:function(t,e,s){},c7c9:function(t,e,s){},ca32:function(t,e,s){},d70e:function(t,e,s){"use strict";var a=s("91e1"),i=s.n(a);i.a},efc9:function(t,e,s){},f0bc:function(t,e,s){}});
//# sourceMappingURL=app.321355d9.js.map