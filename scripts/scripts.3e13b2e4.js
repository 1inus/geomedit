"use strict";angular.module("geomeditApp",["ui.router","ngAnimate","mgcrea.ngStrap","pascalprecht.translate","LocalStorageModule"]).config(["$stateProvider","$urlRouterProvider","localStorageServiceProvider",function(a,b,c){a.state("home",{url:"/",templateUrl:"views/home.html"}).state("blog",{url:"/blog",templateUrl:"views/home.html"}).state("sketch",{url:"/sketch",templateUrl:"views/sketch.html",controller:"MainCtrl"}).state("sketch.toolbox",{templateUrl:"views/toolbox.html"}).state("sketch.properties",{templateUrl:"views/properties.html",controller:"PropCtrl"}),b.otherwise("/"),c.setPrefix("geomedit")}]),angular.module("geomeditApp").config(["$translateProvider",function(a){var b=navigator?navigator.language||navigator.userLanguage:null;a.translations("en",{Languages:"UI language",SnapOptions:"Snapping options",SnapVertex:"Snap to vertex",SnapMid:"Snap to midpoint",SnapCross:"Snap to intersection",SnapGlider:"Snap to edge",ProjectMode:"Large screen projection",ProjectName:"Geometry Online",ProjectDesc:"Dynamic Mathematics with JSXGraph",Blog:"Blog",StartSketch:"Start for sketch",Loading:"Loading...",Cmd_:"Select",CmdPoint:"Point",CmdMidpoint:"Midpoint",CmdIntersection:"Intersection",CmdPerpPoint:"Perpendicular point",CmdReflection:"Reflected point",CmdInCenter:"Inscribed center",CmdSegment:"Segment",CmdRay:"Half-line",CmdLine:"Infinite line",CmdTriangle:"Triangle",CmdQuadrangle:"Quadrangle",CmdCircle2p:"Circle with center",CmdCircle3p:"Circle through 3 points",CmdInCircle:"Inscribed circle",SelectShape:"Please select a shape.",SelectOption:"Select",FaceCircle:"Circle",FaceCross:"Cross",FacePlus:"Plus",FaceDiamond:"Diamond",FaceSquare:"Square",FaceUpTriangle:"Up triangle",FaceDownTriangle:"Down triangle",FaceLeftTriangle:"Left triangle",FaceRightTriangle:"Right triangle",PropLabel:"Label",PropText:"Text",PropFontSize:"Text size",PropTextColor:"Text color",PropFixed:"Fixed",PropTrace:"Trace",PropRange:"Range",PropSnapWidth:"Snap width",PropFace:"Face",PropSize:"Size",PropStrokeWidth:"Stroke width",PropStrokeColor:"Stroke color",PropStrokeOpacity:"Stroke opacity",PropFillColor:"Fill color",PropFillOpacity:"Fill opacity",PropColor:"Color",PropOpacity:"Opacity",PropCoords:"Coords",PropLineEndings:"Line endings",PropRadius:"Radius",PropCenterVisible:"Show center",PropFunctionTerm:"Function term",ShowSidebar:"Show sidebar",HideSidebar:"Hide sidebar",CancelCmd:"Cancel the current command.",Toolbox:"Toolbox view",Properties:"Properties view",ShowAllObjects:"List all objects",HideObject:"Hide object",ShowObject:"Show object",HideLabel:"Hide label",ShowLabel:"Show label",ArrowLast:"Line has an arrow head at the second point.",ArrowFirst:"Line has an arrow head at the first point.",RestrictLast:"Line stops at the second point.",RestrictFirst:"Line stops at the first point.",Undo:"Undo",Redo:"Redo",DraggingMode:"Enable to drag objects.",Options:"Options",Home:"Home"}).translations("cn",{Languages:"界面语言",SnapOptions:"捕捉选项",SnapVertex:"允许捕捉顶点",SnapMid:"允许捕捉中点",SnapCross:"允许捕捉交点",SnapGlider:"允许捕捉线上点",ProjectMode:"大屏投影模式",ProjectName:"几何绘图",ProjectDesc:"基于 JSXGraph 的在线动态几何编辑平台",Blog:"博客",StartSketch:"开始绘图",Loading:"正在加载...",Cmd_:"选择",Point:"点",CmdPoint:"点",CmdMidpoint:"中点",CmdIntersection:"交点",CmdPerpPoint:"垂足",CmdReflection:"对称点",CmdInCenter:"三点内心",Line:"直线",CmdSegment:"线段",CmdRay:"射线",CmdLine:"直线",Polygon:"多边形",CmdTriangle:"三角形",CmdQuadrangle:"四边形",Circle:"圆",CmdCircle2p:"圆心圆",CmdCircle3p:"过三点画圆",CmdInCircle:"三点内切圆",SelectShape:"请选择一个图形",SelectOption:"选择",FaceCircle:"圆点",FaceCross:"叉号",FacePlus:"加号",FaceDiamond:"菱形",FaceSquare:"方形",FaceUpTriangle:"上三角形",FaceDownTriangle:"下三角形",FaceLeftTriangle:"左三角形",FaceRightTriangle:"右三角形",PropLabel:"标签",PropText:"文字",PropFontSize:"文字大小",PropTextColor:"文字颜色",PropFixed:"固定",PropTrace:"跟踪位置",PropRange:"变化范围",PropSnapWidth:"捕捉宽度",PropFace:"外观",PropSize:"大小",PropStrokeWidth:"线宽",PropStrokeColor:"线条颜色",PropStrokeOpacity:"线条不透明度",PropFillColor:"填充颜色",PropFillOpacity:"填充不透明度",PropColor:"颜色",PropOpacity:"不透明度",PropCoords:"坐标",PropLineEndings:"线端类型",PropRadius:"半径",PropCenterVisible:"显示圆心",PropFunctionTerm:"函数式",ShowSidebar:"展开操作面板",HideSidebar:"收起操作面板",CancelCmd:"取消当前工具",Toolbox:"工具",Properties:"属性",ShowAllObjects:"列出所有图形",HideObject:"隐藏本图形",ShowObject:"显示本图形",HideLabel:"隐藏标签",ShowLabel:"显示标签",ArrowLast:"终点有箭头",ArrowFirst:"起点有箭头",RestrictLast:"终点不延长",RestrictFirst:"起点不延长",Undo:"撤销",Redo:"重做",DraggingMode:"允许拖动图形",Options:"选项",Home:"首页"}).preferredLanguage(b&&b.toLowerCase().indexOf("cn")>=0?"cn":"en").useSanitizeValueStrategy(null)}]),angular.module("geomeditApp").controller("RootCtrl",["$scope","$state","$translate","localStorageService",function(a,b,c,d){c.use(d.get("lang")),a.switchLanguage=function(a){c.use(a),d.set("lang",a)}}]),angular.module("geomeditApp").factory("options",function(){return{draggable:!0,gestureMode:!0,activeTool:"",snap:{vertex:!0,mid:!0,cross:!0,glider:!0,project:!1,items:[{type:"switch",id:"vertex",title:"SnapVertex"},{type:"switch",id:"mid",title:"SnapMid"},{type:"switch",id:"cross",title:"SnapCross"},{type:"switch",id:"glider",title:"SnapGlider"},{type:"switch",id:"project",title:"ProjectMode"}]}}}),angular.module("geomeditApp").factory("board",function(){return{initAttr:{originX:100,originY:400,unitX:50,unitY:50,keepAspectRatio:!0,axis:!0,grid:!0,showCopyright:!1,showNavigation:!1,registerEvents:!1},initOptions:{precision:{hasPoint:8},point:{withLabel:!1},midpoint:{size:4,face:"^",fillColor:"none"},intersection:{face:"x"},glider:{face:"diamond",fillColor:"#00dd00",strokeColor:"#00dd00"},polygon:{hasInnerPoints:!0},regularPolygon:{hasInnerPoints:!0}},uiOptions:{highlightColor:"#ddd",highlightSize:12,highlightOpacity:.8},board:null,drafts:[],snaps:[],pendings:null,propObj:null,selection:[],commands:[],cmdGroups:[],command:null,create:function(a,b,c){return this.board.create(a,b,c)},findCommand:function(a){var b,c;for(b=0,c=this.commands.length;c>b;b++)if(this.commands[b].id===a)return this.commands[b];return null},findCommandGroup:function(a){var b,c;for(b=0,c=this.cmdGroups.length;c>b;b++)if(this.cmdGroups[b].name===a)return this.cmdGroups[b];return null},addCommand:function(a,b){if(b&&b.id&&JXG.isString(b.id)&&a&&JXG.isString(a)){var c=this.findCommand(b.id);if(c)JXG.extend(c,b);else{this.commands.push(b);var d=this.findCommandGroup(a);d||(d={name:a,commands:[]},this.cmdGroups.push(d)),d.commands.push(b)}}}}}),angular.module("geomeditApp").controller("MainCtrl",["$scope","$state","localStorageService","header","commands","properties","options","boardUI",function(a,b,c,d,e,f,g,h){a.leftButtons=d.leftButtons,a.rightButtons=d.rightButtons,a.toolbox=e,a.snap=g.snap,d.homeBtn.click=function(){b.go("home")},d.cancelBtn.click=function(){e.cancel()},d.cancelBtn.hide=function(){return d.cancelBtn.disabled()},d.dragBtn.hide=function(){return d.dragBtn.disabled()},a.sidebar={views:[{state:"toolbox",icon:"wrench"},{state:"properties",icon:"sliders"}],state:c.get("sideView"),hidden:c.get("sidebarHidden"),go:function(a){this.state=a,b.go("sketch."+a),c.set("sideView",a)},toggleVisible:function(){this.hidden=!this.hidden,c.set("sidebarHidden",this.hidden)}},b.get("sketch").onExit=function(){h.freeBoard()};var i=b.get("sketch.properties");i.onEnter=f.onEnter,i.onExit=f.onExit,a.sidebar.go(a.sidebar.state||"toolbox")}]),angular.module("geomeditApp").service("header",["options","board",function(a,b){var c=!1,d=!1,e={tooltip:"Undo",icon:"reply",disabled:function(){return!c},click:function(){this.disabled()||(c=!c)}},f={tooltip:"Redo",icon:"share",disabled:function(){return!d},click:function(){this.disabled()||(d=!d)}},g={tooltip:"Options",icon:"cog",popover:"options",click:function(a){a.showOptionsPopover()}};this.cancelBtn={tooltip:"CancelCmd",icon:"times-circle",disabled:function(){return!b.command}},this.dragBtn={tooltip:"DraggingMode",icon:"arrows",disabled:function(){return!!b.command},checked:function(){return!b.command&&a.draggable},click:function(){this.disabled()||(a.draggable=!a.draggable)}},this.homeBtn={tooltip:"Home",icon:"home"},this.leftButtons=[e,f,this.dragBtn,this.cancelBtn],this.rightButtons=[g,this.homeBtn]}]),angular.module("geomeditApp").directive("edPopover",["$popover",function(a){function b(b,c,d,e){return a(c,{contentTemplate:e,html:!0,trigger:"manual",placement:"bottom",autoClose:!0,scope:b})}return{link:function(a,c,d){switch(d.edPopover){case"options":var e=b(a,c,"Options","views/options.html");a.showOptionsPopover=function(){e.show()}}}}}]),angular.module("geomeditApp").directive("leftExpandable",["boardUI",function(a){return{link:function(b,c){var d=parseFloat(c.css("margin-left"))+1;b.$watch("sidebar.hidden",function(b){c.css("margin-left",b?0:d),b&&a.resizeBoard(c.width(),c.height())}),b.$watchGroup([function(){return c.width()},function(){return c.height()}],function(c){b.sidebar.hidden||a.resizeBoard(c[0],c[1])});var e=window.onresize||angular.noop;window.onresize=function(){e(),a.resizeBoard(c.width(),c.height())}}}}]),angular.module("geomeditApp").factory("properties",["board","eventHandler","commands","select",function(a,b,c,d){function e(a,b,c){var d=["label","fontSize","textColor","fixed","trace"];return"slider"===c?d=["range","snapWidth","face","size","label","fontSize","textColor","strokeWidth","strokeColor","strokeOpacity","fillColor","fillOpacity"]:a===JXG.OBJECT_CLASS_POINT?d=["coords","face","size","color","opacity"].concat(d):b===JXG.OBJECT_TYPE_AXIS?d=["strokeWidth","strokeColor","strokeOpacity","label","fontSize","textColor"]:a===JXG.OBJECT_CLASS_LINE?d=["lineEndings","strokeWidth","strokeColor","strokeOpacity"].concat(d):a===JXG.OBJECT_CLASS_CIRCLE?d=["radius","centerVisible","strokeWidth","strokeColor","strokeOpacity","fillColor","fillOpacity"].concat(d):b===JXG.OBJECT_TYPE_POLYGON?d=["strokeWidth","strokeColor","strokeOpacity","fillColor","fillOpacity"].concat(d):b===JXG.OBJECT_TYPE_ANGLE?d=["radius","label","fontSize","textColor","strokeWidth","strokeColor","strokeOpacity","fillColor","fillOpacity"]:b===JXG.OBJECT_TYPE_SECTOR?d=["label","fontSize","textColor","strokeWidth","strokeColor","strokeOpacity","fillColor","fillOpacity"]:b===JXG.OBJECT_TYPE_GRID?d=["strokeWidth","strokeColor","strokeOpacity"]:a===JXG.OBJECT_CLASS_CURVE?d=["functionTerm","strokeWidth","strokeColor","strokeOpacity","fillColor","fillOpacity"].concat(d):b===JXG.OBJECT_TYPE_TEXT&&(d=["text","fontSize","textColor","fixed"]),d}function f(b,c){var d=a.propObj.setAttribute(b);return a.propObj.borders&&a.propObj.borders.forEach(function(a){a.setAttribute(b)}),c&&a.propObj.vertices&&a.propObj.vertices.forEach(function(a){a.setAttribute(b)}),d}function g(a,b,c){var d=/^-?\d+\.?\d*$/,e=parseFloat(a);return JXG.exists(a)&&d.test(a)&&e>b-1e-5&&c+1e-5>e}function h(a){return a&&"none"!==a&&a.indexOf("#")<0?JXG.rgb2hex(a):a}function i(a){return"none"===a||3===JXG.rgbParser(a).length}var j=!1,k={},l={};return l.faces=[{id:"",title:"SelectOption"},{id:"o",title:"FaceCircle"},{id:"x",title:"FaceCross"},{id:"+",title:"FacePlus"},{id:"<>",title:"FaceDiamond"},{id:"[]",title:"FaceSquare"},{id:"^",title:"FaceUpTriangle"},{id:"v",title:"FaceDownTriangle"},{id:"<",title:"FaceLeftTriangle"},{id:">",title:"FaceRightTriangle"}],l.colors=["none","#000000","#eeeeee","#808080","#ff00ff","#cc0000","#ffa500","#ffff00","#3366ff","#00ffff","#006400","#00ff00"],l.id="",l.items=[],l.updateView=angular.noop,l.onEnter=function(){j=!0,c.cancel(),l.fetch()},l.onExit=function(){j=!1,a.propObj=null,l.fetch()},b.customDownHandlers.push(function(){j&&(a.propObj=a.board.downObjects[0],l.fetch())}),b.customMoveHandlers.push(function(){j&&a.propObj&&l.fetch()}),l.fetch=function(){var b,c=[];l.id=a.propObj?a.propObj.id:"",l.id&&e(a.propObj.elementClass,a.propObj.type,a.propObj.elType).forEach(function(a){b=k[a],b&&b.get&&b.get()!==!1&&(b.oldValue=JXG.isObject(b.value)?JXG.deepCopy({},b.value):b.value,b.id=a,c.push(b))}),l.items.length=0,JXG.extend(l.items,c),l.updateView(),d.select(a.propObj,!0)},l.needSave=function(){var b=0;return a.propObj&&l.items.forEach(function(a){JSON.stringify(a.value)!==JSON.stringify(a.oldValue)&&b++}),b>0},l.save=function(){if(a.propObj){var b,c=0;l.items.forEach(function(a){JSON.stringify(a.value)!==JSON.stringify(a.oldValue)&&(b=a.set(),void 0!==b&&b!==!1&&(a.oldValue=JXG.isObject(a.value)?JXG.deepCopy({},a.value):a.value,c++))}),c>0&&a.board.update()}},k.snapWidth={type:"range",min:1,max:100,get:function(){this.value=a.propObj.getAttribute("snapWidth")},set:function(){return g(this.value,this.min,this.max)?a.propObj.setAttribute({snapWidth:parseInt(this.value)}):void 0}},k.strokeWidth={type:"range",unit:"px",min:.5,max:50,step:.5,get:function(){this.value=a.propObj.getAttribute("strokeWidth")},set:function(){return g(this.value,this.min,this.max)?f({strokeWidth:parseFloat(this.value)}):void 0}},k.strokeOpacity={type:"range",unit:"%",min:1,max:100,get:function(){this.value=Math.round(100*a.propObj.getAttribute("strokeOpacity"))},set:function(){return f({strokeOpacity:.01*this.value})}},k.fillOpacity={type:"range",unit:"%",min:1,max:100,get:function(){this.value=Math.round(100*a.propObj.getAttribute("fillOpacity"))},set:function(){return a.propObj.setAttribute({fillOpacity:.01*this.value})}},k.opacity={type:"range",unit:"%",min:1,max:100,get:function(){this.value=Math.round(100*a.propObj.getAttribute("fillOpacity"))},set:function(){return a.propObj.setAttribute({strokeOpacity:.01*this.value,fillOpacity:.01*this.value})}},k.size={type:"size",unit:"px",min:.5,max:50,step:.5,get:function(){this.value={size:a.propObj.getAttribute("size"),zoom:a.propObj.getAttribute("zoom")},this.value.size=a.propObj.getAttribute("size"),this.value.zoom=a.propObj.getAttribute("zoom")},set:function(){if(g(this.value.size,this.min,this.max)){var b=parseFloat(this.value.size);return a.propObj.setAttribute({zoom:this.value.zoom,size:b,strokeWidth:b/10})}}},k.coords={type:"coords",get:function(){this.value={x:a.propObj.coords.usrCoords[1],y:a.propObj.coords.usrCoords[2],snapToGrid:a.propObj.getAttribute("snapToGrid"),snapToPoints:a.propObj.getAttribute("snapToPoints")}},set:function(){var b=/^-?\d+\.?\d*$/,c=parseFloat(this.value.x),d=parseFloat(this.value.y),e=function(a){return Math.abs(a)<1e3},f=a.propObj.getAttribute("attractorDistance"),g=a.propObj.getAttribute("attractorUnit");return this.value.snapToPoints&&1e-5>f&&(f=Math.max(a.board.options.precision.hasPoint,10),g="screen"),b.test(this.value.x)&&b.test(this.value.y)&&e(c)&&e(d)?(a.propObj.setAttribute({snapToGrid:this.value.snapToGrid,snapToPoints:this.value.snapToPoints,attractorDistance:f,attractorUnit:g}),a.propObj.setPositionDirectly(JXG.COORDS_BY_USER,[c,d])):void 0}},k.lineEndings={type:"lineEndings",get:function(){var b=a.propObj.visProp;this.value={restrictFirst:!b.straightfirst,restrictLast:!b.straightlast,arrowFirst:b.firstarrow,arrowLast:b.lastarrow}},set:function(){var b=this.value;return a.propObj.setAttribute({straightFirst:!b.restrictFirst,straightLast:!b.restrictLast,firstArrow:b.arrowFirst,lastArrow:b.arrowLast})}},k.face={type:"face",get:function(){this.value=a.propObj.getAttribute("face")},set:function(){return this.value?a.propObj.setAttribute({face:this.value}):void 0}},k.fixed={type:"checkbox",icon1:"lock",icon0:"unlock",get:function(){this.value=a.propObj.getAttribute("fixed")},set:function(){return f({fixed:this.value},!0)}},k.trace={type:"checkbox",get:function(){this.value=a.propObj.getAttribute("trace")},set:function(){return a.propObj.setAttribute({trace:this.value})}},k.strokeColor={type:"color",get:function(){this.value=h(a.propObj.getAttribute("strokeColor"))},set:function(){return i(this.value)?f({strokeColor:this.value}):void 0}},k.fillColor={type:"color",get:function(){this.value=h(a.propObj.getAttribute("fillColor"))},set:function(){return i(this.value)?a.propObj.setAttribute({fillColor:this.value}):void 0}},k.color={type:"color",get:function(){this.value=h(a.propObj.getAttribute("fillColor"))},set:function(){return i(this.value)?a.propObj.setAttribute({strokeColor:this.value,fillColor:this.value}):void 0}},k.radius={type:"number",step:.1,get:function(){this.value=a.propObj.Radius(),this.readonly=a.propObj.method&&"pointRadius"!==a.propObj.method},set:function(){return"pointRadius"===a.propObj.method?a.propObj.setRadius(this.value):void 0}},k.centerVisible={type:"checkbox",get:function(){this.value=a.propObj.center.getAttribute("visible")},set:function(){return a.propObj.center.setAttribute({visible:this.value})}},k.label={type:"label",get:function(){this.value={withLabel:!!a.propObj.getAttribute("withLabel"),name:a.propObj.getName()}},set:function(){this.value.name=this.value.name.replace(/(^\s*)|(\s*$)/g,"");var b=!(!this.value.withLabel||!this.value.name);return this.value.name&&this.value.name!==this.oldValue.name&&(a.propObj.setName(this.value.name),b=!0,this.value.withLabel=!0),a.propObj.setAttribute({withLabel:b}),!b||k.fontSize.value&&k.textColor.value||(k.fontSize.get(),k.textColor.get(),l.updateView()),!0}},k.fontSize={type:"number",min:1,max:500,step:.5,get:function(){this.value=this.element()?this.element().getAttribute("fontSize"):""},set:function(){return this.element()&&g(this.value,this.min,this.max)?this.element().setAttribute({fontSize:parseFloat(this.value)}):void 0},element:function(){return a.propObj?a.propObj.type===JXG.OBJECT_TYPE_TEXT?a.propObj:a.propObj.label:null}},k.textColor={type:"color",get:function(){this.value=this.element()?this.element().getAttribute("strokeColor"):""},set:function(){return this.element()&&this.value?this.element().setAttribute({strokeColor:this.value}):void 0},element:function(){return a.propObj?a.propObj.type===JXG.OBJECT_TYPE_TEXT?a.propObj:a.propObj.label:null}},l}]),angular.module("geomeditApp").controller("PropCtrl",["$scope","properties","board","select",function(a,b,c,d){a.faces=b.faces,a.colors=b.colors,a.items=b.items,a.trimID=function(a){return a.replace(/.*Board\d*/,"")},a.info=function(){var d={id:b.id};return c.propObj&&(d.type=c.propObj.elType,d.description=a.trimID(d.id)+": "+d.type,d.visible=c.propObj.getAttribute("visible")),d},a.objects=function(){var b=(c.board?c.board.objectsList:[]).filter(function(b){var c=a.trimID(b.id);return 0!==c.indexOf("_")&&!c.match(/_ticks_/)});return b.reverse()},a.clearSelection=function(){c.propObj=null,b.fetch()},a.selectObject=function(a){c.propObj=a,b.fetch()},a.switchVisible=function(a){a=a?a:c.propObj,a.setAttribute({visible:!a.getAttribute("visible")})},a.removeObject=function(a){d.resetSelection(),c.board.removeObject(a)},a.highlight=function(){return d.highlight.apply(d,arguments)},b.updateView=function(){a.$applyAsync()},a.$watch(b.needSave,function(a){a&&b.save()})}]),angular.module("geomeditApp").filter("concatUnit",function(){return function(a,b,c){return c=c?c:14,a+(b&&a.length<c?"("+b+")":"")}}),angular.module("geomeditApp").filter("truncate",function(){return function(a,b,c){return a?(b=b?b:10,c=JXG.def(c,"…"),a.length<=b||a.length-c.length<=b?a:a.substring(0,b-c.length)+c):a}}),angular.module("geomeditApp").filter("camelCase",function(){return function(a,b){return a=b?a:"_"+a,a.replace(/_(.)/g,function(a,b){return b.toUpperCase()})}}),angular.module("geomeditApp").service("boardUI",["board","eventHandler","select",function(a,b,c){function d(a,b){return Math.abs(a-b)<.1}this.initBoard=function(c){a.board=JXG.JSXGraph.initBoard(c,a.initAttr),a.board.moveOrigin(a.board.canvasWidth/2,a.board.canvasHeight/2),a.board.options=JXG.deepCopy(a.board.options,a.initOptions),b.registerHandlers()},this.freeBoard=function(){var d;return a.board&&(d=a.board.containerObj.id,b.unregisterHandlers(),a.propObj=null,c.resetSelection(),JXG.JSXGraph.freeBoard(a.board),a.board=null),d},this.resizeBoard=function(b,c){if(a.board&&(!d(a.board.canvasWidth,b)||!d(a.board.canvasHeight,c))){var e=d(a.board.origin.scrCoords[1],a.board.canvasWidth/2),f=d(a.board.origin.scrCoords[2],a.board.canvasHeight/2);a.board.resizeContainer(b,c,!1,!0),a.board.applyZoom(),e&&f&&a.board.moveOrigin(a.board.canvasWidth/2,a.board.canvasHeight/2)}}}]),angular.module("geomeditApp").service("loader",["$q","$timeout",function(a,b){this.load=function(){var c=a.defer();return b(function(){c.resolve()},50),c.promise}}]),angular.module("geomeditApp").directive("newBoard",["loader","boardUI",function(a,b){return{link:function(c,d,e){a.load().then(function(){b.initBoard(e.id)})}}}]),angular.module("geomeditApp").service("snap",["board","options",function(a,b){function c(b,c){var d=a.board.options.precision.hasPoint;return{coords:b,hits:[],masks:c,snapSize:d,minDist:d,dist:0,snapped:null,glider:null}}function d(){var b=a.drafts.map(function(a){return a.id});return a.snaps.forEach(function(a){a.created&&b.push(a.created.id)}),b}function e(b,c){function d(a){var c=!1;return a.forEach(function(a){c=c||b.draftIDs&&b.draftIDs.indexOf(a)>=0}),c}b.coords&&a.board&&a.board.objectsList.forEach(function(e){e!==b.created&&a.drafts.indexOf(e)<0&&e.visProp.visible&&!d(e.parents)&&c(e)})}function f(a){function b(a){return a===JXG.OBJECT_CLASS_LINE||a===JXG.OBJECT_CLASS_CIRCLE||a===JXG.OBJECT_CLASS_CURVE}function c(b){return a.masks&&a.masks.filter&&JXG.isPoint(b)}e(a,function(d){(c(d)||b(d.elementClass))&&d.hasPoint(a.coords.scrCoords[1],a.coords.scrCoords[2])&&a.hits.push(d)})}function g(a){e(a,function(b){JXG.isPoint(b)&&b.hasPoint(a.coords.scrCoords[1],a.coords.scrCoords[2])&&(a.dist=b.coords.distance(JXG.COORDS_BY_SCREEN,a.coords),a.minDist>a.dist&&(a.minDist=a.dist,a.snapped=b))})}function h(b){var c;b.hits.forEach(function(d){d.elementClass!==JXG.OBJECT_CLASS_LINE||d.straightFirst||d.straightLast||d.visProp.lastarrow||(c=a.create("midpoint",[d],a.board.options.midpoint),b.dist=c.coords.distance(JXG.COORDS_BY_SCREEN,b.coords),b.minDist>b.dist?(b.minDist=b.dist,b.snapped=d,b.mid&&a.board.removeObject(b.mid),b.mid=c):a.board.removeObject(c))})}function i(b){b.hits.forEach(function(c){var d,e=b.snapSize/2+1;b.glider&&b.glider.slideObject===c?(d=b.glider,d.setPositionDirectly(JXG.COORDS_BY_SCREEN,[b.coords.scrCoords[1],b.coords.scrCoords[2]]),e=1):d=a.create("glider",b.coords.usrCoords.slice(1).concat(c)),b.dist=d.coords.distance(JXG.COORDS_BY_SCREEN,b.coords)+e,b.minDist>b.dist?(b.minDist=b.dist,b.snapped=c,b.glider&&b.glider!==d&&a.board.removeObject(b.glider),b.glider=d):d!==b.glider&&a.board.removeObject(d)})}function j(b){var c,d,e,f=function(a){return a.elementClass===JXG.OBJECT_CLASS_LINE||a.elementClass===JXG.OBJECT_CLASS_CIRCLE};b.hits.forEach(function(g,h){b.hits.forEach(function(i,j){if(h>j&&f(g)&&f(i)){if(c=a.create("intersection",[g,i,0]),JXG.cmpArrays(c.coords.usrCoords,[0,0,0]))return void a.board.removeObject(c);b.dist=c.coords.distance(JXG.COORDS_BY_SCREEN,b.coords),(g.elementClass===JXG.OBJECT_CLASS_CIRCLE||i.elementClass===JXG.OBJECT_CLASS_CIRCLE)&&(d=a.create("intersection",[g,i,1]),e=d.coords.distance(JXG.COORDS_BY_SCREEN,b.coords),b.dist>e?(b.dist=e,a.board.removeObject(c),c=d):a.board.removeObject(d)),b.minDist>b.dist?(b.minDist=b.dist,b.snapped=g,b.cross&&a.board.removeObject(b.cross),b.cross=c):a.board.removeObject(c)}})})}this.snapCoords=function(e,k,l){var m,n=c(e,l),o=b.snap;return JXG.extend(n,{draftIDs:d(),mid:null,cross:null,created:k?k.glider:null,glider:k?k.glider:null}),k&&(k.created&&!k.glider&&a.board.removeObject(k.created),n.masks=l||k.masks),n.masks&&(m=a.board.options.precision.hasPoint,n.snapSize=Math.max(n.snapSize,60),n.minDist=n.snapSize,a.board.options.precision.hasPoint=n.snapSize,o.vertex=o.vertex||n.masks.vertex,o.mid=o.mid||n.masks.mid,o.cross=o.cross||n.masks.cross,o.glider=o.glider||n.masks.glider),n.masks&&JXG.isFunction(n.masks.filter)?(f(n),n.masks.filter(n)):(!b.snap.vertex||n.masks&&!n.masks.vertex||g(n),n.minDist>n.snapSize/4&&(f(n),!b.snap.mid||n.masks&&!n.masks.mid||h(n),!b.snap.cross||n.mid||n.masks&&!n.masks.cross||j(n),!b.snap.glider||n.snapped||n.masks&&!n.masks.glider||i(n))),n.glider&&(n.mid||n.cross||n.glider.slideObject!==n.snapped)&&(a.board.removeObject(n.glider),n.glider=null),n.created=n.mid||n.cross||n.glider||n.created,m&&(a.board.options.precision.hasPoint=m),{coords:(n.created||n.snapped||n).coords,created:n.created,snapped:n.snapped,mid:n.mid,cross:n.cross,glider:n.glider,masks:n.masks,clear:function(){n.created&&(a.board.removeObject(n.created),n.created=null,n.mid=null,n.cross=null,n.glider=null),n.snapped=null},detach:function(){var a=n.created;return n.created=null,n.mid=null,n.cross=null,n.glider=null,n.snapped=null,a}}},this.hitTest=function(b){var d=c(b);return g(d),d.minDist>d.snapSize/4&&(f(d),1===d.hits.length?d.snapped=d.hits[0]:d.hits.length>1&&(i(d),a.board.removeObject(d.glider))),d.snapped}}]),angular.module("geomeditApp").service("select",["board",function(a){function b(c){var e,f;switch(f={id:d(),name:"",layer:1,withLabel:!1,highlighted:!0,strokeOpacity:a.uiOptions.highlightOpacity,strokeWidth:c.getAttribute("strokeWidth")+a.uiOptions.highlightSize,strokeColor:a.uiOptions.highlightColor},c.elementClass){case JXG.OBJECT_CLASS_POINT:f.size=a.uiOptions.highlightSize,f.strokeWidth=0,f.snapToGrid=!1,f.fillColor=a.uiOptions.highlightColor,f.fillOpacity=a.uiOptions.highlightOpacity,e=a.create("point",[function(){return c.coords.usrCoords[1]},function(){return c.coords.usrCoords[2]}],f);break;case JXG.OBJECT_CLASS_CIRCLE:e=a.create("circle",[c.center,c],f);break;case JXG.OBJECT_CLASS_LINE:f.straightFirst=c.getAttribute("straightFirst"),f.straightLast=c.getAttribute("straightLast"),e=a.create("line",[c.point1,c.point2],f);break;case JXG.OBJECT_CLASS_CURVE:c.type===JXG.OBJECT_TYPE_GRID&&(f.strokeOpacity/=2),c.type===JXG.OBJECT_TYPE_ANGLE||c.type===JXG.OBJECT_TYPE_ARC||c.type===JXG.OBJECT_TYPE_SECTOR?(e=a.create("curve",[c.dataX,c.dataY],f),e.bezierDegree=3,e.prepareUpdate().update().updateRenderer()):e=a.create("curve",JXG.coordsArrayToMatrix(c.points,!0),f)}switch(c.type){case JXG.OBJECT_TYPE_POLYGON:e=c.borders.map(function(a){return b(a)});break;case JXG.OBJECT_TYPE_TEXT:e=b(c.element)}return e}var c=1,d=function(){return"_aux"+c++};this.select=function(c,d){d&&this.resetSelection();var e=c?b(c):null,f=function(b){b.highlight=angular.noop,b.reference=c,a.selection.push(b)};e&&(JXG.isArray(e)?e.forEach(f):f(e))},this.resetSelection=function(){for(;a.selection.length>0;)a.board.removeObject(a.selection.pop())},this.highlight=function(b,c){if(c)this.select(b);else if(b!==a.propObj)for(var d=a.selection.length-1;d>=0;d--)a.selection[d].reference===b&&a.board.removeObject(a.selection.splice(d,1)[0])}}]),angular.module("geomeditApp").service("motion",["board","snap",function(a,b){this.startPt=null,this.lastPt=null,this.pt=null,this.dragging=!1,this.updateStartCoords=function(a){this.startPt=this.lastPt=this.pt=this.getEventCoords(a)},this.updateCoords=function(a){this.pt=this.getEventCoords(a)},this.clear=function(){this.clearDrafts(),this.clearDraftCoords()},this.clearDraftCoords=function(){for(;a.snaps.length>0;)a.snaps.pop().clear();this.startPt=this.lastPt=this.pt=null},this.clearDrafts=function(){for(;a.drafts.length>0;)a.board.removeObject(a.drafts.pop())},this.getDraftCoords=function(b){return b=JXG.def(b,-1),b=0>b?a.snaps.length+b:b,a.snaps[b]},this.setDraftCoords=function(c,d){c=0>c?a.snaps.length+c:c,a.snaps[c]=b.snapCoords(this.pt,a.snaps[c],d)},this.updateDraftCoords=function(){var c=a.snaps.length-1;a.snaps[c]=b.snapCoords(this.pt,a.snaps[c])},this.addDraftCoords=function(c){return a.snaps.push(b.snapCoords(this.pt,null,c))},this.draftCoordsCount=function(){return a.snaps.length},this.hasDraftCoords=function(){return a.snaps.length>0},this.lastDraftCoordsIsNew=function(){var b=0;return a.snaps.length>1&&(b=this.getDraftCoords(-1).coords.distance(JXG.COORDS_BY_SCREEN,this.getDraftCoords(-2).coords)),b>5},this.createDraftPoint=function(b){function c(){var c=Math.min(b,a.snaps.length-1),d=c>=0&&a.snaps[c].snapped,e=d?a.snaps[c].created:null;g.setAttribute({size:d?i:h.size,fillopacity:e&&a.snaps[c].glider?.1:d?.3:1,strokecolor:e?e.visProp.strokecolor:h.strokecolor})}var d=function(c){var d=Math.min(b,a.snaps.length-1),e=0>d?null:a.snaps[d];return e?(e.created?e.created.coords:e.coords).usrCoords[c]:0},e=function(){return d(1)},f=function(){return d(2)},g=a.create("point",[e,f],{withLabel:!1}),h=JXG.deepCopy({},g.visProp),i=Math.max(a.board.options.precision.hasPoint,h.size+4);return g.coords.on("update",c,g),c(),a.drafts.push(g),g},this.createDraftPoints=function(a){var b=this;return a=JXG.isArray(a)?a:Array.prototype.slice.call(arguments),a.map(function(a){return b.createDraftPoint(a)})},this.createPoint=function(b,c,d){var e=JXG.isObject(b)?b:a.snaps[b];if(c&&e.snapped&&!e.created)return e.snapped;var f=e.detach()||!e.snapped&&a.create("point",e.coords.usrCoords.slice(1),d);return f&&a.pendings&&a.pendings.push(f),f},this.createPoints=function(b){var c=this,d=a.snaps.map(function(a){return c.createPoint(a,!0,b)});return a.snaps.length=0,d},this.submit=function(b){var c,d=this;try{d.clearDrafts(),a.pendings=[],c=b(),c&&(a.pendings.indexOf(c)<0&&a.pendings.push(c),a.propObj=c)}catch(e){for(;a.pendings.length>0;)a.board.removeObject(a.pendings.pop());throw e}finally{a.pendings=null,d.clearDraftCoords()}},this.getMouseCoords=function(b){var c=JXG.getPosition(b),d=a.board.getCoordsTopLeftCorner(),e=c[0]-d[0],f=c[1]-d[1];return new JXG.Coords(JXG.COORDS_BY_SCREEN,[e,f],a.board)},this.getTouchCoords=function(b,c){var d=JXG.getPosition(b,c),e=a.board.getCoordsTopLeftCorner(),f=d[0]-e[0],g=d[1]-e[1];return new JXG.Coords(JXG.COORDS_BY_SCREEN,[f,g],a.board)},this.getEventCoords=function(a){return a[JXG.touchProperty]?this.getTouchCoords(a,-1):this.getMouseCoords(a)}}]),angular.module("geomeditApp").service("eventHandler",["board","options","motion",function(a,b,c){function d(a){a.preventDefault()}function e(c){c?a.board.options.precision.hasPoint=a.board.options.precision.touch:b.snap.project&&(a.board.options.precision.hasPoint=a.board.options.precision.touch/2)}var f,g,h;this.touchMode=!1,this.customDownHandlers=[],this.customMoveHandlers=[],this.registerHandlers=function(){JXG.supportsPointerEvents()?(window.navigator.pointerEnabled?(f="pointerdown",g="pointerup",h="pointermove"):(f="MSPointerDown",g="MSPointerUp",h="MSPointerMove"),JXG.Options.device="msie"):JXG.isTouchDevice()||JXG.isFirefoxOS()?(f="touchstart",g="touchend",h="touchmove",JXG.Options.device="tablet"):(f="mousedown",g="mouseup",h="mousemove",JXG.Options.device="pc"),JXG.supportsPointerEvents()?this.addPointerHandlers():(this.addMouseHandlers(),this.addTouchHandlers()),JXG.addEvent(a.board.containerObj,f,this.downEventHandler,this),JXG.addEvent(a.board.containerObj,h,this.moveEventHandler,this),JXG.addEvent(a.board.containerObj,g,this.upEventHandler,this)},this.unregisterHandlers=function(){this.removePointerHandlers(),this.removeMouseHandlers(),this.removeTouchHandlers(),JXG.removeEvent(a.board.containerObj,f,this.downEventHandler,this),JXG.removeEvent(a.board.containerObj,h,this.moveEventHandler,this),JXG.removeEvent(a.board.containerObj,g,this.upEventHandler,this),c.clear()},this.addPointerHandlers=function(){!a.board.hasPointerHandlers&&JXG.isBrowser&&(JXG.addEvent(a.board.containerObj,h,a.board.pointerMoveListener,a.board),a.board.containerObj.addEventListener("MSHoldVisual",d,!1),a.board.containerObj.addEventListener("contextmenu",d,!1),a.board.containerObj.addEventListener("selectstart",d,!1),this.jxgDownHandler=function(){return a.board.pointerDownListener.apply(a.board,arguments)},a.board.hasPointerHandlers=!0,this.touchMode=!0)},this.addMouseHandlers=function(){!a.board.hasMouseHandlers&&JXG.isBrowser&&(JXG.addEvent(a.board.containerObj,"mousemove",a.board.mouseMoveListener,a.board),a.board.containerObj.addEventListener("contextmenu",d,!1),this.jxgDownHandler=function(){a.board.mouseDownListener.apply(a.board,arguments)},a.board.hasMouseHandlers=!0)},this.addTouchHandlers=function(){!a.board.hasTouchHandlers&&JXG.isBrowser&&(JXG.addEvent(a.board.containerObj,"touchmove",a.board.touchMoveListener,a.board),a.board.hasTouchHandlers=!0)},this.removePointerHandlers=function(){a.board.hasPointerHandlers&&(JXG.removeEvent(a.board.containerObj,h,a.board.pointerMoveListener,a.board),
a.board.containerObj.removeEventListener("MSHoldVisual",d,!1),a.board.containerObj.removeEventListener("contextmenu",d,!1),a.board.containerObj.removeEventListener("selectstart",d,!1),a.board.hasPointerHandlers=!1)},this.removeMouseHandlers=function(){a.board.hasMouseHandlers&&(JXG.removeEvent(a.board.containerObj,"mousemove",a.board.mouseMoveListener,a.board),a.board.containerObj.removeEventListener("contextmenu",d,!1),a.board.hasMouseHandlers=!1)},this.removeTouchHandlers=function(){a.board.hasTouchHandlers&&(JXG.removeEvent(a.board.containerObj,"touchmove",a.board.touchMoveListener,a.board),a.board.hasTouchHandlers=!1)},this.downEventHandler=function(d){a.board.hasMouseHandlers&&d[JXG.touchProperty]&&(this.removeMouseHandlers(),this.jxgDownHandler=function(){a.board.touchStartListener.apply(a.board,arguments)},a.board.hasMouseHandlers=!1,this.touchMode=!0),e(this.touchMode),c.updateStartCoords(d),c.dragging=!0,a.command?((a.command.downHandler||angular.noop)(),a.board.update()):b.draggable&&(this.jxgDownHandler||angular.noop)(d),angular.element("body").click(),this.customDownHandlers.forEach(function(a){a(d)})},this.moveEventHandler=function(b){c.dragging&&(e(this.touchMode),c.updateCoords(b),this.customMoveHandlers.forEach(function(a){a(b)}),a.command&&(a.command.moveHandler?a.command.moveHandler():c.hasDraftCoords()&&c.updateDraftCoords(),a.board.update(),c.lastPt=c.pt))},this.upEventHandler=function(b){c.dragging&&(c.updateCoords(b),c.dragging=!1,a.command&&((a.command.upHandler||angular.noop)(),a.board.update()))}}]),angular.module("geomeditApp").service("commands",["board","motion","select",function(a,b,c){var d=0,e=null;this.groups=function(){return d!==a.commands.length&&(d=a.commands.length,e=a.cmdGroups.map(function(a){return{name:a.name,commands:a.commands.map(function(a){return a.id})}})),e},this.active=function(){return a.command?a.command.id:""},this.cancel=function(){var c=!!a.command;return a.command&&((a.command.cancelled||angular.noop)(),a.command=null,b.clearDrafts()),c},this.start=function(b,c){if(c||this.resetSelection(),b===this.active())return this.cancel();var d=this.cancel();if(a.command=a.findCommand(b),a.command){var e=(a.command.inited||angular.noop)();"boolean"!=typeof e||e?d=!0:a.command=null}return d},this.resetSelection=function(){a.propObj=null,c.resetSelection()}}]),angular.module("geomeditApp").run(["board","motion",function(a,b){function c(c,d){function e(){b.setDraftCoords(0,d),b.createDraftPoint(0)}function f(){b.submit(function(){var a=b.getDraftCoords().created;return(!d||JXG.isPoint(a))&&b.createPoint(0)})}a.addCommand("point",{id:c,downHandler:e,upHandler:f})}function d(c,d){function e(){b.hasDraftCoords()?b.updateDraftCoords():(b.addDraftCoords(),b.addDraftCoords({filter:d}),a.drafts.push(a.create("segment",b.createDraftPoints(0,1))))}function f(){b.submit(function(){var c=b.getDraftCoords().created;if(b.lastDraftCoordsIsNew()&&JXG.isPoint(c)){var d=[b.createPoint(0,!0),b.getDraftCoords().snapped];return"mirrorpoint"===c.elType&&d.reverse(),a.create(c.elType,d)}})}a.addCommand("point",{id:c,downHandler:e,upHandler:f})}c("point"),c("midpoint",{mid:!0}),c("intersection",{cross:!0}),d("perpPoint",function(b){var c;b.hits.forEach(function(d){a.drafts[0]&&d.elementClass===JXG.OBJECT_CLASS_LINE&&(c=a.create("perpendicularPoint",[a.drafts[0],d]),b.dist=c.coords.distance(JXG.COORDS_BY_SCREEN,b.coords),b.minDist>b.dist?(b.minDist=b.dist,b.snapped=d,b.created&&a.board.removeObject(b.created),b.created=c):a.board.removeObject(c))})}),d("reflection",function(b){var c,d,e,f=function(a,b,c){return(a.coords.scrCoords[c]+b.coords.scrCoords[c])/2},g=function(c){return d=f(c,a.drafts[0],1)-b.coords.scrCoords[1],e=f(c,a.drafts[0],2)-b.coords.scrCoords[2],Math.sqrt(d*d+e*e)};b.hits.forEach(function(d){a.drafts[0]&&d.elementClass===JXG.OBJECT_CLASS_LINE?(c=a.create("reflection",[a.drafts[0],d]),b.dist=g(c),b.minDist>b.dist?(b.minDist=b.dist,b.snapped=d,b.created&&a.board.removeObject(b.created),b.created=c):a.board.removeObject(c)):a.drafts[0]&&JXG.isPoint(d)&&(c=a.create("mirrorPoint",[d,a.drafts[0]]),b.dist=g(c),b.minDist>b.dist?(b.minDist=b.dist,b.snapped=d,b.created&&a.board.removeObject(b.created),b.created=c):a.board.removeObject(c))})})}]),angular.module("geomeditApp").run(["board","motion",function(a,b){function c(c,d,e){function f(){b.hasDraftCoords()?b.updateDraftCoords():(b.addDraftCoords(),b.addDraftCoords(),a.drafts.push(a.create(d,b.createDraftPoints(0,1),e)))}function g(){b.lastDraftCoordsIsNew()&&b.submit(function(){return a.create(d,b.createPoints(),e)})}a.addCommand("line",{id:c,downHandler:f,upHandler:g})}c("segment","segment"),c("ray","line",{straightFirst:!1}),c("line","line")}]),angular.module("geomeditApp").run(["board","motion",function(a,b){function c(c,d,e){function f(){b.hasDraftCoords()?b.lastDraftCoordsIsNew()?(b.addDraftCoords(),b.lastDraftCoordsIsNew()&&b.draftCoordsCount()<d&&b.addDraftCoords()):b.updateDraftCoords():(b.addDraftCoords(),b.addDraftCoords(),a.drafts.push(a.create("polygon",b.createDraftPoints(e))))}function g(){b.draftCoordsCount()===d&&b.lastDraftCoordsIsNew()&&b.submit(function(){return a.create("polygon",b.createPoints())})}a.addCommand("polygon",{id:c,downHandler:f,upHandler:g})}c("triangle",3,[0,1,2]),c("quadrangle",4,[0,1,2,3])}]),angular.module("geomeditApp").run(["board","motion",function(a,b){function c(c,d,e){function f(){b.hasDraftCoords()?b.lastDraftCoordsIsNew()?b.addDraftCoords():b.updateDraftCoords():(b.addDraftCoords(),b.addDraftCoords(),a.drafts.push(a.create(d,b.createDraftPoints(0,1,2))))}function g(){3===b.draftCoordsCount()&&b.lastDraftCoordsIsNew()&&b.submit(function(){return a.create(d,b.createPoints())})}a.addCommand(e||"circle",{id:c,downHandler:f,upHandler:g})}c("circle3p","circumCircle"),c("in_circle","incircle"),c("in_center","incenter","point"),function(){function c(){b.hasDraftCoords()?b.updateDraftCoords():(b.addDraftCoords(),b.addDraftCoords(),a.drafts.push(a.create("circle",b.createDraftPoints(0,1))))}function d(){b.lastDraftCoordsIsNew()&&b.submit(function(){return a.create("circle",b.createPoints())})}a.addCommand("circle",{id:"circle2p",downHandler:c,upHandler:d})}()}]);