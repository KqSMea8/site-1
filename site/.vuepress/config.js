module.exports={"title":"Tiny.js","description":"一款轻量级 HTML5 2D 游戏引擎","dest":"/Users/yiqi/git/tiny/site/site/.vuepress/dist","ga":"UA-101161440-1","themeConfig":{"algolia":{"apiKey":"b23658d51c5050259f4a14b6ca16929e","indexName":"tinyjs"},"nav":[{"text":"文档","link":"/guide/"},{"text":"API","link":"/api/"},{"text":"Playground","link":"/playground/"},{"text":"示例","link":"/examples/"},{"text":"插件","link":"/plugins/"},{"text":"工具","link":"/tools/"},{"text":"博客","link":"/blogs/"}],"sidebar":{"/guide/":["","start","basics","changelog","advanced-startup",{"title":"Application","children":["advanced-application-intro","advanced-application-control","advanced-application-scheduling","advanced-application-scene","advanced-application-renderer","advanced-application-fps"]},{"title":"纹理","children":["advanced-texture-cache","advanced-texture-create"]},{"title":"显示对象","children":["advanced-displays-intro","advanced-displays-container","advanced-displays-bounds","advanced-displays-sprite","advanced-displays-position","advanced-displays-size","advanced-displays-scale","advanced-displays-rotation","advanced-displays-globallocal","advanced-displays-addremove"]},{"title":"图形","children":["advanced-graphics-intro","advanced-graphics-rect","advanced-graphics-circle","advanced-graphics-ellipse","advanced-graphics-roundedrect","advanced-graphics-star","advanced-graphics-line","advanced-graphics-polygon","advanced-graphics-mask"]},{"title":"文字","children":["advanced-text-basic","advanced-text-style"]},{"title":"转场","children":["advanced-transition-stage","advanced-transition-scene","advanced-transition-animation","advanced-transition-qa"]},"advanced-animatedsprite",{"title":"动作","children":["advanced-actions-basic","advanced-actions-repeat","advanced-actions-delay","advanced-actions-easing","advanced-actions-interpolation","advanced-actions-callback","advanced-actions-list","advanced-actions-extras"]},{"title":"Ticker","children":["advanced-ticker-basic","advanced-ticker-countdown"]},{"title":"事件机制","children":["advanced-events-addremove","advanced-events-list","advanced-events-ee","advanced-events-qa"]},"advanced-loader","advanced-decide",{"title":"公共方法","children":["advanced-utils-utils","advanced-utils-ismobile","advanced-utils-objectassign"]},"advanced-screen",{"title":"扩展","children":["extras-particlecontainer","extras-tilingsprite","extras-bitmaptext","extras-extract","extras-dust","extras-media","extras-keyboard","extras-scroller"]},"qa","resources"],"/playground/":["",{"title":"简单实现","children":["realize-p2balllottery","realize-claw","realize-starry"]},{"title":"显示对象","children":["displays-container","displays-getbounds","displays-tileset","displays-removeaction"]},{"title":"动作","children":["actions-moveto","actions-moveby","actions-scaleto","actions-scaleby","actions-rotateto","actions-rotateby","actions-jumpto","actions-tinto","actions-tintby","actions-back","actions-blink","actions-fadein","actions-fadeout","actions-fadeto","actions-fadeinfadeout","actions-onupdate","actions-oncomplete","actions-sequence","actions-spawn","actions-pauseresume","actions-clone","actions-delay","actions-easing","actions-interpolation","actions-repeat","actions-repeatforever","actions-repeatback","actions-repeatclone","actions-repeatdelay","actions-repeatoncomplete"]},{"title":"Application","children":["application-control","application-fps","application-rendererlisten"]},{"title":"纹理","children":["texture-swap","texture-basicrendertexture","texture-rendertexture"]},{"title":"UI","children":["ui-button","ui-dom"]},{"title":"帧动画","children":["animatedsprite-playstop","animatedsprite-tileset","animatedsprite-reverse","animatedsprite-onframechange"]},{"title":"音频","children":["audios-simple","audios-analyser"]},{"title":"简单粒子","children":["dusts-simple"]},{"title":"事件","children":["events-dragging","events-addremove"]},{"title":"图形","children":["graphics-basic","graphics-animate","graphics-complex","graphics-progress"]},{"title":"加载器","children":["loaders-basic","loaders-binary","loaders-jsonobjectloader"]},{"title":"文字","children":["texts-basic","texts-bitmaptext","texts-rich","texts-movetext"]},{"title":"Ticker","children":["ticker-basic","ticker-binary"]},{"title":"滚动","children":["scroller-simple","scroller-horizontal","scroller-timeline"]},{"title":"碰撞检测","children":["decide-simple"]},{"title":"场景切换","children":["transition-basic","transition-endevent"]},{"title":"视频","children":["videos-simple"]},{"title":"ParticleContainer","children":["particles-basic","particles-getbounds"]},{"title":"瓷砖","children":["tiling-basic","tiling-update"]},{"title":"遮罩","children":["mask-basic","mask-rendertexture","mask-imageshape","mask-lightsweep","mask-reverse"]},{"title":"物理引擎","children":["physics-antbasic","physics-p2basic","physics-p2jump","physics-p2material","physics-p2polygon","physics-p2spring"]},{"title":"骨骼动画","children":["dragonbones-basic"]},{"title":"网格","children":["mesh-rope","mesh-ninesliceplane"]},{"title":"其他","children":["others-performance","others-xhr"]}],"/examples/":["","snake","doodle-jump","protectbee","running","flappybird","airplane","cuo-money"],"/plugins/":["","tinyjs-plugin-ui","tinyjs-plugin-extract","tinyjs-plugin-audio","tinyjs-plugin-bitmap-text","tinyjs-plugin-scroller","tinyjs-plugin-tiling","tinyjs-plugin-dust","tinyjs-plugin-mesh","tinyjs-plugin-particles","tinyjs-plugin-keyboard","tinyjs-plugin-dragonbones","tinyjs-plugin-p2","tinyjs-plugin-ant","tinyjs-plugin-worldwrap","tinyjs-plugin-weapon"],"/tools/":["","tinyjs-resource-loader","tinyjs-types"],"/blogs/":["",{"title":"仿微信「跳一跳」","children":["jump-1","jump-2","jump-3","jump-4","jump-5"]},"mole","snake","doodle","bone"]}},"less":{"rules":[{"test":{},"loader":"less-loader"}]}}