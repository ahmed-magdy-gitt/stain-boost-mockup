(function(){
var $=function(s,r){return(r||document).querySelector(s)},$$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var slots=parseInt(localStorage.getItem('sb_slots')||'5',10);
function setSlots(){$$('[data-slots]').forEach(function(e){e.textContent=slots})}setSlots();
function toast(m){var t=$('#toast');t.textContent=m;t.classList.add('on');setTimeout(function(){t.classList.remove('on')},2400)}
$('#burger').onclick=function(){$('#nav').classList.toggle('on')};
$$('.ov').forEach(function(m){m.addEventListener('click',function(e){if(e.target===m||e.target.hasAttribute('data-close'))m.hidden=true})});
var claim=$('#claim');
$$('[data-claim]').forEach(function(b){b.onclick=function(){$('#cform').hidden=false;$('#cok').hidden=true;claim.hidden=false}});
$('form',claim).onsubmit=function(e){e.preventDefault();var f=e.target,d=f.d.value.trim(),er=$('.err',f);
 if(d.length<3){er.textContent='Enter your Discord username.';return}er.textContent='';
 if(slots>0){slots--;localStorage.setItem('sb_slots',slots);setSlots()}
 $('[data-who]',claim).textContent=d;$('#cform').hidden=true;$('#cok').hidden=false};
$$('.aq').forEach(function(b){b.onclick=function(){b.parentNode.classList.toggle('open')}});
if(location.hash){try{var h=$(location.hash);if(h&&h.classList.contains('ai'))h.classList.add('open')}catch(e){}}
var pt=$('#ptabs');if(pt){pt.onclick=function(e){var b=e.target.closest('button');if(!b)return;$$('button',pt).forEach(function(x){x.classList.remove('on')});b.classList.add('on');var duo=b.dataset.m==='duo';
 $$('[data-p]').forEach(function(p){var v=parseInt(p.dataset.p,10);p.textContent='$'+(duo?Math.round(v*1.4):v)});
 $('#pnote').textContent=duo?'Duo queue: play alongside Stain. Priced 40% higher.':'Solo boost: Stain plays on your account with VPN protection.'}}
var wr=$('#wr');if(wr){var rm=$('#rvm');wr.onclick=function(){$('#rf').hidden=false;$('#rok').hidden=true;rm.hidden=false};
 $('form',rm).onsubmit=function(e){e.preventDefault();var f=e.target;if(f.o.value.trim().length<4){$('.err',f).textContent='Enter a valid order ID.';return}$('.err',f).textContent='';$('#rf').hidden=true;$('#rok').hidden=false}}
var lf=$('#lform');if(lf){var mode='in';
 $$('#seg button').forEach(function(b){b.onclick=function(){mode=b.dataset.mode;$$('#seg button').forEach(function(x){x.classList.toggle('on',x===b)});$('.up',lf).hidden=mode!=='up';$('#lsub').textContent=mode==='up'?'Create Account →':'Sign In →';$('#l1').textContent=mode==='up'?'EMAIL':'EMAIL OR USERNAME'}});
 $('#eye').onclick=function(){var p=lf.p;p.type=p.type==='password'?'text':'password'};
 $('#forgot').onclick=function(e){e.preventDefault();toast('Reset link sent if the account exists.')};
 var done=function(n){lf.hidden=true;$('#seg').hidden=true;$('.oauth').hidden=true;$('.or').hidden=true;$('#lnote').hidden=true;$('[data-who]',$('#lok')).textContent=n;$('#lok').hidden=false};
 $$('[data-oauth]').forEach(function(b){b.onclick=function(){toast('Connecting with '+b.dataset.oauth+'...');setTimeout(function(){done('Player')},700)}});
 lf.onsubmit=function(e){e.preventDefault();var er=$('#lerr');if(!lf.e.value.trim()){er.textContent='Enter your email or username.';return}
  if(lf.p.value.length<6){er.textContent='Password must be at least 6 characters.';return}
  if(mode==='up'&&!lf.u.value.trim()){er.textContent='Choose a username.';return}
  er.textContent='';done(mode==='up'?lf.u.value.trim():lf.e.value.split('@')[0])}}
})();
