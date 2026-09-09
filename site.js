// year
document.getElementById('yr').textContent = new Date().getFullYear();

// mobile nav toggle
(function(){
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  if(!toggle || !links) return;
  function closeMenu(){
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded','false');
  }
  function openMenu(){
    links.classList.add('open');
    toggle.setAttribute('aria-expanded','true');
  }
  toggle.addEventListener('click', function(){
    if(links.classList.contains('open')){ closeMenu(); } else { openMenu(); }
  });
  links.addEventListener('click', function(e){
    if(e.target.tagName === 'A'){ closeMenu(); }
  });
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && links.classList.contains('open')){
      closeMenu();
      toggle.focus();
    }
  });
})();

// hero entrance sequence — runs once on load, not scroll-triggered
(function(){
  var hero = document.querySelector('.hero');
  if(!hero) return;
  requestAnimationFrame(function(){
    requestAnimationFrame(function(){
      hero.classList.add('loaded');
    });
  });
})();

// hero mountain signature-write — animates the MASK's centerline stroke, not the mountain
// itself (the mountain is a filled brush silhouette; there's no stroke on it to dasharray).
// The fill is a constant .28 opacity throughout — what changes is how much of the mask's
// centerline stroke has "written itself in," progressively revealing the fill along the
// brush's own direction of travel. Runs once, never repeats — no scroll or re-trigger hook.
(function(){
  var maskPath = document.getElementById('heroMountainMaskPath');
  if(!maskPath) return;
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var len;
  try{ len = maskPath.getTotalLength(); }catch(e){ return; }
  maskPath.style.setProperty('--mask-len', len);
  // mtn-mask-ready commits the fully-hidden state with NO transition property present —
  // declaring stroke-dashoffset and a transition in the same rule would animate FROM the
  // property's implicit initial value (0, fully revealed) TO hidden, backwards. mtn-mask-run,
  // added a frame later once mtn-mask-ready has actually painted, introduces stroke-dashoffset:0
  // and the transition together, so it animates forward from the committed hidden length down
  // to 0 (this exact bug bit the first version of this effect — fixed the same way here).
  maskPath.classList.add('mtn-mask-ready');
  requestAnimationFrame(function(){
    requestAnimationFrame(function(){
      maskPath.classList.add('mtn-mask-run');
    });
  });
})();

// reveal on scroll (also covers staggered grids and the stat-bar dividers)
(function(){
  var els = document.querySelectorAll('.rv, .stagger, .stats-grid');
  if(!('IntersectionObserver' in window)){
    els.forEach(function(e){e.classList.add('in')});
    return;
  }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); }
    });
  },{threshold:.12, rootMargin:'0px 0px -40px 0px'});
  els.forEach(function(e){io.observe(e)});
})();

// count-up stats — once only, skipped entirely under reduced motion
(function(){
  var els = document.querySelectorAll('.stat .num[data-count]');
  if(!els.length || !('IntersectionObserver' in window)) return;
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  function animateCount(el){
    var final = el.textContent.trim();
    var target = parseInt(el.getAttribute('data-count'), 10);
    if(isNaN(target)){ return; }
    var duration = 1000;
    var start = null;
    function step(ts){
      if(start === null){ start = ts; }
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if(progress < 1){
        requestAnimationFrame(step);
      } else {
        el.textContent = final;
      }
    }
    requestAnimationFrame(step);
  }

  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(en.isIntersecting){ animateCount(en.target); io.unobserve(en.target); }
    });
  }, {threshold:.6});
  els.forEach(function(e){ io.observe(e); });
})();

// scrollspy nav — IntersectionObserver only, no scroll listener
(function(){
  var sectionIds = ['capabilities','sectors','why','credentials','story'];
  var links = {};
  sectionIds.forEach(function(id){
    var link = document.querySelector('.nav-links a[href="#' + id + '"]');
    if(link){ links[id] = link; }
  });
  var targets = sectionIds.map(function(id){ return document.getElementById(id); }).filter(Boolean);
  if(!targets.length || !('IntersectionObserver' in window)) return;

  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(en.isIntersecting){
        Object.keys(links).forEach(function(key){
          links[key].classList.toggle('active', key === en.target.id);
        });
      }
    });
  }, {rootMargin:'-45% 0px -50% 0px', threshold:0});
  targets.forEach(function(t){ io.observe(t); });
})();

// hero parallax — transform only, clamped to a few px, off entirely under reduced motion
(function(){
  var bg = document.querySelector('.hero-bg');
  var hero = document.querySelector('.hero');
  if(!bg || !hero) return;
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var ticking = false;
  function update(){
    var rect = hero.getBoundingClientRect();
    if(rect.bottom > 0 && rect.top < window.innerHeight){
      var offset = Math.max(-40, Math.min(40, -rect.top * 0.3));
      bg.style.transform = 'translateY(' + offset + 'px)';
    }
    ticking = false;
  }
  window.addEventListener('scroll', function(){
    if(!ticking){ requestAnimationFrame(update); ticking = true; }
  }, {passive:true});
  update();
})();

// scroll progress bar — transform:scaleX only, no layout-triggering width changes
(function(){
  var bar = document.getElementById('scrollProgress');
  if(!bar) return;
  var ticking = false;
  function update(){
    var doc = document.documentElement;
    var max = doc.scrollHeight - doc.clientHeight;
    var progress = max > 0 ? (window.scrollY || doc.scrollTop) / max : 0;
    bar.style.transform = 'scaleX(' + progress + ')';
    ticking = false;
  }
  window.addEventListener('scroll', function(){
    if(!ticking){ requestAnimationFrame(update); ticking = true; }
  }, {passive:true});
  window.addEventListener('resize', function(){ requestAnimationFrame(update); });
  update();
})();

/* ----------------------------------------------------------------------------
   FORM — wired to Netlify Forms (see the form's netlify / netlify-honeypot
   attributes and the hidden form-name field above). Submits via fetch so we
   can show an inline confirmation instead of navigating away.

   Local testing: opening this file directly (file://) or hosting it anywhere
   other than Netlify means the fetch has nothing to POST to, so it fails —
   that's expected, and the catch below covers it. Rather than fall back to a
   mailto: for an inbox we haven't confirmed exists, it tells the visitor to
   call the one contact method on this page that's actually real.
---------------------------------------------------------------------------- */
document.getElementById('bidform').addEventListener('submit', function(e){
  e.preventDefault();
  var f = e.target;
  var msg = document.getElementById('okmsg');

  if(f['bot-field'] && f['bot-field'].value){
    return; // honeypot tripped — silently drop
  }
  if(!f.name.value.trim() || !f.company.value.trim() || !f.email.value.trim()){
    alert('Please fill in your name, company, and email.');
    return;
  }

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(new FormData(f)).toString()
  }).then(function(res){
    if(!res.ok) throw new Error('Form submission failed');
    msg.innerHTML = 'Thanks — your bid invitation was submitted. We\'ll confirm receipt the same day.';
    msg.classList.add('show');
    f.reset();
  }).catch(function(){
    msg.innerHTML = 'We couldn\'t submit this automatically. Please call ' +
      '<a href="tel:+18162564156">(816) 256-4156</a> to send your bid invitation directly.';
    msg.classList.add('show');
  });
});
