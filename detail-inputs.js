(function(){
state.biteDetail=state.biteDetail||"";state.sightingDetail=state.sightingDetail||"";
function e(s){return String(s||"").replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function f(k,p,h){return'<div class="field compact-field"><label>补充描述</label><textarea class="textarea compact-textarea" data-text-state="'+k+'" placeholder="'+p+'">'+e(state[k])+'</textarea><p class="field-hint">'+h+"</p></div>"}
rb=renderBite;renderBite=function(){return rb().replace("</section>\n    <section class=\"section\">",f("biteDetail","例如：脚踝成串、很痒、昨晚在草地停留、红肿变大","会和地点、表现一起参与风险判断；伤口描述不作为医学诊断。")+"</section>\n    <section class=\"section\">")};
rs=renderSeen;renderSeen=function(){return rs().replace("</section>\n    <section class=\"section\">",f("sightingDetail","例如：地漏边、飞得慢、黑色小飞虫、成团绕灯","文字会辅助图片和标签判断，尤其是位置、行为、颜色和数量。")+"</section>\n    <section class=\"section\">")};
ob=bindEvents;bindEvents=function(){ob();document.querySelectorAll("[data-text-state]").forEach(function(x){x.oninput=function(){state[x.dataset.textState]=x.value}})};
render();
})();
