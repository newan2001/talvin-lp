(function(){
var __css="\n#tva-root{--p:#6300FF;--ink:#141414;--mut:#6b6b78;--line:rgba(99,0,255,.15);--soft:#f6f3ff;font-family:'Inter',-apple-system,sans-serif;max-width:680px;margin:0 auto;color:var(--ink);}\n#tva-root *{box-sizing:border-box;}\n.tva-card{background:#fff;border:1px solid var(--line);border-radius:20px;padding:36px 32px;box-shadow:0 10px 40px rgba(99,0,255,.06);}\n.tva-bar{height:6px;background:var(--soft);border-radius:99px;overflow:hidden;margin-bottom:24px;}\n.tva-bar>i{display:block;height:100%;background:var(--p);width:0;transition:width .3s;}\n.tva-step{font-size:13px;font-weight:600;color:var(--p);margin-bottom:10px;letter-spacing:.02em;}\n.tva-q{font-size:22px;font-weight:700;line-height:1.3;margin:0 0 22px;}\n.tva-opts{display:flex;flex-direction:column;gap:10px;}\n.tva-opt{text-align:left;width:100%;padding:15px 18px;border:1.5px solid var(--line);border-radius:12px;background:#fff;font:inherit;font-size:15.5px;font-weight:500;color:var(--ink);cursor:pointer;transition:all .15s;}\n.tva-opt:hover{border-color:var(--p);background:var(--soft);}\n.tva-opt.sel{border-color:var(--p);background:var(--p);color:#fff;}\n.tva-nav{display:flex;justify-content:space-between;align-items:center;margin-top:22px;}\n.tva-back{background:none;border:0;color:var(--mut);font:inherit;font-weight:600;cursor:pointer;padding:8px 4px;}\n.tva-back:disabled{opacity:0;cursor:default;}\n.tva-btn{background:var(--p);color:#fff;border:0;border-radius:99px;padding:14px 30px;font:inherit;font-size:16px;font-weight:700;cursor:pointer;transition:transform .15s,opacity .15s;}\n.tva-btn:hover{transform:translateY(-1px);}\n.tva-btn:disabled{opacity:.45;cursor:default;transform:none;}\n.tva-in{width:100%;padding:15px 18px;border:1.5px solid var(--line);border-radius:12px;font:inherit;font-size:16px;margin-bottom:12px;}\n.tva-in:focus{outline:none;border-color:var(--p);}\n.tva-micro{font-size:13.5px;color:var(--mut);margin-top:6px;line-height:1.5;}\n.tva-badge{display:inline-block;background:var(--soft);color:var(--p);font-weight:700;font-size:14px;padding:7px 16px;border-radius:99px;margin-bottom:16px;}\n.tva-lvl{font-size:30px;font-weight:800;line-height:1.15;margin:0 0 8px;}\n.tva-diag{font-size:17px;color:var(--mut);line-height:1.6;margin:0 0 24px;}\n.tva-moves{list-style:none;padding:0;margin:0 0 28px;}\n.tva-moves li{position:relative;padding:14px 14px 14px 46px;border:1px solid var(--line);border-radius:12px;margin-bottom:10px;font-weight:500;font-size:15px;}\n.tva-moves li::before{content:counter(m);counter-increment:m;position:absolute;left:14px;top:13px;width:24px;height:24px;background:var(--p);color:#fff;border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;}\n.tva-moves{counter-reset:m;}\n.tva-sent{font-size:14px;color:var(--mut);margin-top:14px;}\n";
try{var st=document.createElement('style');st.textContent=__css;document.head.appendChild(st);}catch(e){}
function __mount(){
  var __r=document.getElementById('tva-root');
  if(!__r || __r.dataset.mounted){ return; }
  __r.dataset.mounted='1';
  try{

  var root=document.getElementById('tva-root');
  if(!root) return;
  var ENDPOINT=root.getAttribute('data-endpoint')||'';
  var BOOK=root.getAttribute('data-book-url')||'#';

  var SCORED=[
    {q:"When a role opens, how does first-round screening actually happen today?",o:[["A recruiter reads every CV and runs every first call by hand",1],["Basic keyword/ATS filters, then a human screens the rest",2],["An automated step screens applicants before a human gets involved",3],["Screening adapts to the role and ranks candidates automatically",4],["The funnel screens and ranks end-to-end; humans only see the shortlist",5]]},
    {q:"How long from “application received” to “qualified shortlist”?",o:[["More than 2 weeks",1],["1–2 weeks",2],["3–6 days",3],["1–2 days",4],["Same day / automatic",5]]},
    {q:"How consistent are first-round screens across candidates and recruiters?",o:[["Every recruiter does it their own way",1],["A rough template, but it varies",2],["A standard set of questions, applied manually",3],["Structured and scored against a rubric",4],["Fully standardised and automatically scored every time",5]]},
    {q:"How do hiring managers and recruiters compare candidates?",o:[["Gut feel / memory",1],["Notes in email or spreadsheets",2],["Notes in the ATS, inconsistently",3],["A shared scorecard per role",4],["Ranked, comparable scores generated automatically",5]]},
    {q:"Where does AI sit in your hiring process right now?",o:[["Nowhere",1],["Trialled a tool or two, nothing stuck",2],["AI helps with one step (CV ranking, scheduling)",3],["AI runs first-round screening or interviews",4],["AI runs and adapts most of the top-of-funnel",5]]},
    {q:"How does your team feel about AI in hiring?",o:[["Skeptical / avoiding it",1],["Curious but unsure where to start",2],["Experimenting in pockets",3],["Actively rolling it out",4],["It’s core to how we operate",5]]},
    {q:"How fast do candidates hear back after applying?",o:[["Often never",1],["Days to weeks, inconsistent",2],["Within a few days",3],["Within 24 hours",4],["Instantly / automatically",5]]},
    {q:"What’s your first-round completion / drop-off like?",o:[["We lose a lot of candidates before first round",1],["Noticeable drop-off",2],["Average — haven’t measured closely",3],["We measure it and it’s healthy",4],["High completion, actively optimised",5]]},
    {q:"Can you explain why a candidate was advanced or rejected?",o:[["Not really",1],["Sometimes, from memory/notes",2],["Usually, from ATS notes",3],["Yes, from a consistent rubric",4],["Yes — every decision is logged and auditable",5]]},
    {q:"How do you guard against bias in screening?",o:[["No process for it",1],["Aware, but ad hoc",2],["Some structured questions help",3],["Structured, and we review outcomes",4],["Structured, audited, and monitored for bias",5]]}
  ];
  var PROFILE=[
    {k:"industry",q:"What industry are you hiring in?",o:["Tech / SaaS","Staffing / Recruitment","Retail / F&B / Hospitality","Logistics","Financial Services","Healthcare","Education","Other"]},
    {k:"region",q:"Where are you primarily hiring?",o:["Singapore","Malaysia","USA","Other"]},
    {k:"size",q:"How big is your company?",o:["1–49","50–199","200–999","1,000+"]},
    {k:"volume",q:"Roles hired per year?",o:["Under 20","20–100","100–500","500+"]}
  ];
  var RESULTS={
    1:{n:"Manual",d:"You’re doing by hand what the teams ahead of you have handed to software. Every CV and first call is a person’s hour. The fastest gain isn’t hiring more recruiters — it’s removing the first round from their plate.",m:["Automate first-round screening for your highest-volume role.","Standardise your screening questions into one rubric.","Set an auto-acknowledgement so no candidate waits."]},
    2:{n:"Assisted",d:"You’ve got filters and templates, but a human still carries the weight. You’re one step from letting screening run without a recruiter in the room.",m:["Move first-round screening to an automated step for one role, and measure the time saved.","Score candidates against a shared rubric.","Cut time-to-first-response to under 24 hours."]},
    3:{n:"Automated",d:"First-round screening runs without you — good. The next level is screening that adapts to the role and ranks people, so your shortlist is ordered, not just filtered.",m:["Add role-aware ranking, not just pass/fail.","Make every decision explainable from a logged rubric.","Measure and lift first-round completion."]},
    4:{n:"Intelligent",d:"You’re ahead of most teams. Screening adapts and ranks. The last step is autonomy — a funnel that runs end-to-end so your team only ever meets people worth meeting.",m:["Close the last manual gaps in the top-of-funnel.","Add bias monitoring across outcomes.","Push toward same-day, automatic shortlists."]},
    5:{n:"Autonomous",d:"You’re operating where almost no one is. Your funnel runs itself and your team spends its time closing, not screening. The work now is keeping the edge.",m:["Continuously audit for bias and drift.","Benchmark against your own best quarters.","Extend autonomy to adjacent stages (offers, onboarding)."]}
  };
  function level(s){return s<=17?1:s<=25?2:s<=33?3:s<=41?4:5;}

  var ans=new Array(SCORED.length).fill(null);
  var prof={}; var email="",name="";
  var steps=SCORED.length+PROFILE.length+1; // +email
  var i=0;

  function pct(){return Math.round((i/(steps))*100);}
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}

  function render(){
    var html='<div class="tva-bar"><i style="width:'+pct()+'%"></i></div><div class="tva-card">';
    if(i<SCORED.length){
      var q=SCORED[i];
      html+='<div class="tva-step">Question '+(i+1)+' of '+SCORED.length+'</div><h3 class="tva-q">'+esc(q.q)+'</h3><div class="tva-opts">';
      q.o.forEach(function(o,idx){html+='<button class="tva-opt'+(ans[i]===o[1]?' sel':'')+'" data-v="'+o[1]+'">'+esc(o[0])+'</button>';});
      html+='</div>';
    } else if(i<SCORED.length+PROFILE.length){
      var p=PROFILE[i-SCORED.length];
      html+='<div class="tva-step">A few details for your benchmark</div><h3 class="tva-q">'+esc(p.q)+'</h3><div class="tva-opts">';
      p.o.forEach(function(t){html+='<button class="tva-opt'+(prof[p.k]===t?' sel':'')+'" data-p="'+esc(t)+'">'+esc(t)+'</button>';});
      html+='</div>';
    } else {
      html+='<div class="tva-step">Almost there</div><h3 class="tva-q">Where should we send your full scorecard?</h3>';
      html+='<input class="tva-in" id="tva-name" placeholder="First name (optional)" value="'+esc(name)+'">';
      html+='<input class="tva-in" id="tva-email" type="email" placeholder="Work email" value="'+esc(email)+'">';
      html+='<p class="tva-micro">Your score is on the next screen. We’ll also email the full benchmark report and your three priority moves.</p>';
      html+='<div class="tva-nav"><button class="tva-back">← Back</button><button class="tva-btn" id="tva-go">Show my score →</button></div></div>';
      root.innerHTML=html;
      bindEmail(); return;
    }
    html+='<div class="tva-nav"><button class="tva-back"'+(i===0?' disabled':'')+'>← Back</button><span class="tva-micro">'+pct()+'% complete</span></div>';
    html+='</div>';
    root.innerHTML=html;
    bindChoice();
  }

  function bindChoice(){
    root.querySelectorAll('.tva-opt').forEach(function(b){
      b.addEventListener('click',function(){
        if(i<SCORED.length){ans[i]=parseInt(b.getAttribute('data-v'));}
        else{prof[PROFILE[i-SCORED.length].k]=b.getAttribute('data-p');}
        render(); setTimeout(function(){i++;render();window.scrollTo({top:root.getBoundingClientRect().top+window.scrollY-40,behavior:'smooth'});},220);
      });
    });
    var back=root.querySelector('.tva-back');
    if(back) back.addEventListener('click',function(){if(i>0){i--;render();}});
  }
  function bindEmail(){
    root.querySelector('.tva-back').addEventListener('click',function(){i--;render();});
    root.querySelector('#tva-go').addEventListener('click',function(){
      var em=root.querySelector('#tva-email').value.trim();
      name=root.querySelector('#tva-name').value.trim();
      if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)){root.querySelector('#tva-email').style.borderColor='#e23';return;}
      email=em; submitAndShow();
    });
  }

  function submitAndShow(){
    var score=ans.reduce(function(a,b){return a+(b||0);},0);
    var lv=level(score);
    var payload={email:email,name:name,score:score,level:lv,levelName:RESULTS[lv].n,answers:ans,profile:prof,track:"hiring-maturity-audit"};
    if(ENDPOINT){try{fetch(ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)}).catch(function(){});}catch(e){}}
    showResult(score,lv);
  }

  function showResult(score,lv){
    var r=RESULTS[lv];
    var html='<div class="tva-card"><div class="tva-badge">Your AI Hiring Maturity Score: '+score+'/50</div>';
    html+='<h2 class="tva-lvl">Level '+lv+' — '+esc(r.n)+'</h2>';
    html+='<p class="tva-diag">'+esc(r.d)+'</p>';
    html+='<h3 class="tva-q" style="font-size:18px;">Your 3 priority moves</h3><ul class="tva-moves">';
    r.m.forEach(function(m){html+='<li>'+esc(m)+'</li>';});
    html+='</ul>';
    html+='<a class="tva-btn" href="'+esc(BOOK)+'" style="text-decoration:none;display:inline-block;">Book a 20-minute teardown →</a>';
    html+='<p class="tva-sent">✉ Full report'+(email?' on its way to '+esc(email):'')+'. No commitment — if there’s nothing worth fixing, we’ll tell you.</p>';
    html+='</div>';
    root.innerHTML=html;
    window.scrollTo({top:root.getBoundingClientRect().top+window.scrollY-40,behavior:'smooth'});
  }

  render();

  }catch(e){ try{__r.dataset.mounted='';}catch(_){}}
}
var __iv=setInterval(__mount,150);
setTimeout(function(){clearInterval(__iv);},20000);
if(document.readyState!=='loading'){__mount();}
document.addEventListener('DOMContentLoaded',__mount);
window.addEventListener('load',__mount);
})();
