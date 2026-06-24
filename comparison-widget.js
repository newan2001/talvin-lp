(function(){
var __css="\n#tvc-root{--p:#6300FF;--ink:#141414;--mut:#6b6b78;--line:rgba(99,0,255,.15);--soft:#f6f3ff;font-family:'Inter',-apple-system,sans-serif;max-width:760px;margin:0 auto;color:var(--ink);}\n#tvc-root *{box-sizing:border-box;}\n.tvc-card{background:#fff;border:1px solid var(--line);border-radius:20px;padding:32px 30px;box-shadow:0 10px 40px rgba(99,0,255,.06);}\n.tvc-bar{height:6px;background:var(--soft);border-radius:99px;overflow:hidden;margin-bottom:22px;}\n.tvc-bar>i{display:block;height:100%;background:var(--p);width:0;transition:width .3s;}\n.tvc-step{font-size:13px;font-weight:600;color:var(--p);margin-bottom:10px;}\n.tvc-q{font-size:21px;font-weight:700;line-height:1.3;margin:0 0 8px;}\n.tvc-sub{font-size:14.5px;color:var(--mut);margin:0 0 20px;line-height:1.5;}\n.tvc-chips{display:flex;flex-wrap:wrap;gap:10px;}\n.tvc-chip{padding:11px 16px;border:1.5px solid var(--line);border-radius:99px;background:#fff;font:inherit;font-size:14.5px;font-weight:600;color:var(--ink);cursor:pointer;transition:all .15s;}\n.tvc-chip:hover{border-color:var(--p);background:var(--soft);}\n.tvc-chip.sel{border-color:var(--p);background:var(--p);color:#fff;}\n.tvc-chip.lock{background:var(--p);border-color:var(--p);color:#fff;opacity:.9;cursor:default;}\n.tvc-opts{display:flex;flex-direction:column;gap:10px;}\n.tvc-opt{text-align:left;width:100%;padding:14px 18px;border:1.5px solid var(--line);border-radius:12px;background:#fff;font:inherit;font-size:15px;font-weight:500;color:var(--ink);cursor:pointer;transition:all .15s;display:flex;align-items:center;gap:12px;}\n.tvc-opt:hover{border-color:var(--p);background:var(--soft);}\n.tvc-opt.sel{border-color:var(--p);background:var(--soft);}\n.tvc-box{flex:0 0 20px;width:20px;height:20px;border:1.5px solid var(--line);border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:13px;color:#fff;}\n.tvc-opt.sel .tvc-box{background:var(--p);border-color:var(--p);}\n.tvc-in{width:100%;padding:13px 16px;border:1.5px solid var(--line);border-radius:12px;font:inherit;font-size:15px;margin-top:12px;}\n.tvc-in:focus{outline:none;border-color:var(--p);}\n.tvc-btn{background:var(--p);color:#fff;border:0;border-radius:99px;padding:14px 30px;font:inherit;font-size:16px;font-weight:700;cursor:pointer;transition:transform .15s,opacity .15s;text-decoration:none;display:inline-block;}\n.tvc-btn:hover{transform:translateY(-1px);}\n.tvc-btn:disabled{opacity:.4;cursor:default;transform:none;}\n.tvc-back{background:none;border:0;color:var(--mut);font:inherit;font-weight:600;cursor:pointer;padding:8px 4px;}\n.tvc-micro{font-size:13px;color:var(--mut);margin-top:8px;line-height:1.5;}\n.tvc-nav{display:flex;justify-content:space-between;align-items:center;margin-top:22px;}\n.tvc-tablewrap{overflow-x:auto;-webkit-overflow-scrolling:touch;margin:0 -6px;}\ntable.tvc-tbl{border-collapse:collapse;width:100%;font-size:13.5px;}\n.tvc-tbl th,.tvc-tbl td{border:1px solid var(--line);padding:10px 12px;text-align:left;vertical-align:top;line-height:1.4;}\n.tvc-tbl th{background:var(--soft);font-weight:700;font-size:13px;}\n.tvc-tbl th.tvc-feat,.tvc-tbl td.tvc-feat{background:rgba(99,0,255,.06);}\n.tvc-tbl th.tvc-feat{background:var(--p);color:#fff;}\n.tvc-tbl td.tvc-crit{font-weight:600;background:#fafafa;white-space:nowrap;}\n.tvc-badge{display:inline-block;background:var(--soft);color:var(--p);font-weight:700;font-size:13px;padding:6px 14px;border-radius:99px;margin-bottom:14px;}\n.tvc-talvin{background:var(--soft);border-radius:14px;padding:16px 18px;font-size:14.5px;line-height:1.6;margin:20px 0;}\n.tvc-sent{font-size:13.5px;color:var(--mut);margin-top:14px;}\n.tvc-err{color:#c0392b;font-size:14px;}\n";
try{var st=document.createElement('style');st.textContent=__css;document.head.appendChild(st);}catch(e){}
function __mount(){
  var __r=document.getElementById('tvc-root');
  if(!__r || __r.dataset.mounted){ return; }
  __r.dataset.mounted='1';
  try{

  var root=document.getElementById('tvc-root');
  if(!root) return;
  var ENDPOINT=root.getAttribute('data-endpoint')||'';
  var BOOK=root.getAttribute('data-book-url')||'#';
  var DATAURL=root.getAttribute('data-data-url')||'/vendors.json';

  var DB=null, CRITERIA=[], VENDORS=[];
  var selV=[], selC=[], prof={}, email="", name="", requested="";
  var i=0;
  var PROFILE=[
    {k:"region",q:"Where are you primarily hiring?",o:["Singapore","Malaysia","USA","Other"]},
    {k:"industry",q:"What industry?",o:["Tech / SaaS","Staffing / Recruitment","Retail / F&B / Hospitality","Logistics","Financial Services","Healthcare","Education","Other"]}
  ];
  var totalSteps=2+PROFILE.length+1;
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}
  function pct(){return Math.round((i/totalSteps)*100);}
  function vBySlug(s){return VENDORS.filter(function(v){return v.slug===s;})[0];}

  root.innerHTML='<div class="tvc-card"><p class="tvc-sub">Loading the comparison…</p></div>';
  fetch(DATAURL,{cache:"no-store"}).then(function(r){return r.json();}).then(function(d){
    DB=d; CRITERIA=d.criteria||[]; VENDORS=d.vendors||[];
    selC=CRITERIA.map(function(c){return c.key;}); // default all criteria
    var t=VENDORS.filter(function(v){return v.featured;})[0];
    if(t) selV=[t.slug];
    render();
  }).catch(function(){
    root.innerHTML='<div class="tvc-card"><p class="tvc-err">Couldn\'t load the comparison data. Please refresh and try again.</p></div>';
  });

  function render(){
    var html='<div class="tvc-bar"><i style="width:'+pct()+'%"></i></div><div class="tvc-card">';
    if(i===0){
      var featured=VENDORS.filter(function(v){return v.featured;})[0];
      html+='<div class="tvc-step">Step 1 of '+totalSteps+'</div>';
      html+='<h3 class="tvc-q">Which tools are you comparing?</h3>';
      html+='<p class="tvc-sub">Pick up to 3 to compare against Talvin.</p>';
      html+='<div class="tvc-chips">';
      VENDORS.forEach(function(v){
        if(v.featured){ html+='<button class="tvc-chip lock" disabled>'+esc(v.name)+' ✓</button>'; return; }
        var on=selV.indexOf(v.slug)>=0;
        html+='<button class="tvc-chip'+(on?' sel':'')+'" data-v="'+esc(v.slug)+'">'+esc(v.name)+'</button>';
      });
      html+='</div>';
      html+='<input class="tvc-in" id="tvc-req" placeholder="Don\'t see your tool? Type it and we\'ll add it" value="'+esc(requested)+'">';
      var others=selV.filter(function(s){return !(vBySlug(s)||{}).featured;}).length;
      html+='<div class="tvc-nav"><span></span><button class="tvc-btn" id="tvc-n0"'+((others>0||requested)?'':' disabled')+'>Next →</button></div></div>';
      root.innerHTML=html;
      root.querySelectorAll('.tvc-chip[data-v]').forEach(function(b){b.addEventListener('click',function(){
        var s=b.getAttribute('data-v'); var idx=selV.indexOf(s);
        if(idx>=0) selV.splice(idx,1);
        else { var others=selV.filter(function(x){return !(vBySlug(x)||{}).featured;}); if(others.length>=3){return;} selV.push(s); }
        requested=document.getElementById('tvc-req').value; render();
      });});
      var nb=document.getElementById('tvc-n0');
      document.getElementById('tvc-req').addEventListener('input',function(e){requested=e.target.value; nb.disabled=!(selV.filter(function(s){return !(vBySlug(s)||{}).featured;}).length>0||requested.trim());});
      if(nb) nb.addEventListener('click',function(){ if(nb.disabled) return; requested=document.getElementById('tvc-req').value.trim(); i=1; render(); });
      return;
    }
    if(i===1){
      html+='<div class="tvc-step">Step 2 of '+totalSteps+'</div><h3 class="tvc-q">What matters most in your decision?</h3>';
      html+='<p class="tvc-sub">We\'ll focus the comparison on what you pick.</p><div class="tvc-opts">';
      CRITERIA.forEach(function(c){
        var on=selC.indexOf(c.key)>=0;
        html+='<button class="tvc-opt'+(on?' sel':'')+'" data-c="'+esc(c.key)+'"><span class="tvc-box">'+(on?'✓':'')+'</span>'+esc(c.label)+'</button>';
      });
      html+='</div><div class="tvc-nav"><button class="tvc-back">← Back</button><button class="tvc-btn" id="tvc-n1"'+(selC.length?'':' disabled')+'>Next →</button></div></div>';
      root.innerHTML=html;
      root.querySelectorAll('.tvc-opt').forEach(function(b){b.addEventListener('click',function(){
        var k=b.getAttribute('data-c'); var idx=selC.indexOf(k); if(idx>=0) selC.splice(idx,1); else selC.push(k); render();
      });});
      root.querySelector('.tvc-back').addEventListener('click',function(){i=0;render();});
      var nb=document.getElementById('tvc-n1'); if(nb&&!nb.disabled) nb.addEventListener('click',function(){i=2;render();});
      return;
    }
    if(i>=2 && i<2+PROFILE.length){
      var p=PROFILE[i-2];
      html+='<div class="tvc-step">A couple of details</div><h3 class="tvc-q">'+esc(p.q)+'</h3><div class="tvc-opts">';
      p.o.forEach(function(t){html+='<button class="tvc-opt'+(prof[p.k]===t?' sel':'')+'" data-p="'+esc(t)+'"><span class="tvc-box">'+(prof[p.k]===t?'✓':'')+'</span>'+esc(t)+'</button>';});
      html+='</div><div class="tvc-nav"><button class="tvc-back">← Back</button><span class="tvc-micro">'+pct()+'%</span></div></div>';
      root.innerHTML=html;
      root.querySelectorAll('.tvc-opt').forEach(function(b){b.addEventListener('click',function(){prof[p.k]=b.getAttribute('data-p');i++;render();});});
      root.querySelector('.tvc-back').addEventListener('click',function(){i--;render();});
      return;
    }
    // email gate
    html+='<div class="tvc-step">Almost there</div><h3 class="tvc-q">Where should we send your full comparison?</h3>';
    html+='<input class="tvc-in" id="tvc-name" placeholder="First name (optional)" value="'+esc(name)+'" style="margin-top:0;margin-bottom:12px;">';
    html+='<input class="tvc-in" id="tvc-email" type="email" placeholder="Work email" value="'+esc(email)+'" style="margin-top:0;">';
    html+='<p class="tvc-micro">Your comparison shows on the next screen. We\'ll also email it so you can share it with your team.</p>';
    html+='<div class="tvc-nav"><button class="tvc-back">← Back</button><button class="tvc-btn" id="tvc-go">Show my comparison →</button></div></div>';
    root.innerHTML=html;
    root.querySelector('.tvc-back').addEventListener('click',function(){i--;render();});
    document.getElementById('tvc-go').addEventListener('click',function(){
      var em=document.getElementById('tvc-email').value.trim(); name=document.getElementById('tvc-name').value.trim();
      if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)){document.getElementById('tvc-email').style.borderColor='#e23';return;}
      email=em; submitAndShow();
    });
  }

  function submitAndShow(){
    var vendorNames=selV.map(function(s){return (vBySlug(s)||{}).name;}).filter(Boolean);
    if(requested) vendorNames.push(requested+" (requested)");
    var critLabels=selC.map(function(k){var c=CRITERIA.filter(function(x){return x.key===k;})[0];return c?c.label:k;});
    var payload={email:email,name:name,vendors:vendorNames,criteria:critLabels,profile:prof,track:"vendor-comparison"};
    if(ENDPOINT){try{fetch(ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)}).catch(function(){});}catch(e){}}
    showResult();
  }

  function showResult(){
    var cols=selV.map(vBySlug).filter(Boolean);
    var rows=CRITERIA.filter(function(c){return selC.indexOf(c.key)>=0;});
    var html='<div class="tvc-card"><div class="tvc-badge">Your comparison</div>';
    html+='<h2 class="tvc-q" style="font-size:22px;">'+cols.map(function(v){return esc(v.name);}).join(' vs ')+'</h2>';
    html+='<div class="tvc-tablewrap"><table class="tvc-tbl"><thead><tr><th>Criteria</th>';
    cols.forEach(function(v){html+='<th class="'+(v.featured?'tvc-feat':'')+'">'+esc(v.name)+'</th>';});
    html+='</tr></thead><tbody>';
    rows.forEach(function(c){
      html+='<tr><td class="tvc-crit">'+esc(c.label)+'</td>';
      cols.forEach(function(v){html+='<td class="'+(v.featured?'tvc-feat':'')+'">'+esc(v[c.key]||'—')+'</td>';});
      html+='</tr>';
    });
    html+='</tbody></table></div>';
    if(requested) html+='<p class="tvc-micro">We don\'t have <strong>'+esc(requested)+'</strong> in the comparison yet — we\'ve noted it and will add it, and include it in your emailed version once ready.</p>';
    html+='<div class="tvc-talvin">This is a starting point, not the whole story. The criteria that trip teams up later — bias explainability, candidate experience, real voice depth, pricing at volume — are best pressure-tested live. Bring your shortlist to a call and we\'ll go deep on the ones that matter to you.</div>';
    html+='<a class="tvc-btn" href="'+esc(BOOK)+'">Book a comparison call →</a>';
    html+='<p class="tvc-sent">✉ Full comparison'+(email?' on its way to '+esc(email):'')+'.</p></div>';
    root.innerHTML=html;
    window.scrollTo({top:root.getBoundingClientRect().top+window.scrollY-40,behavior:'smooth'});
  }

  }catch(e){ try{__r.dataset.mounted='';}catch(_){}}
}
var __iv=setInterval(__mount,150);
setTimeout(function(){clearInterval(__iv);},20000);
if(document.readyState!=='loading'){__mount();}
document.addEventListener('DOMContentLoaded',__mount);
window.addEventListener('load',__mount);
})();
