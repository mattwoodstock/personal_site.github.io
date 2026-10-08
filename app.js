(function () {
  var root = document.documentElement;
  function sysDark(){ return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches; }
  function cur(){ var t = root.getAttribute('data-theme'); return t ? t : (sysDark() ? 'dark' : 'light'); }
  try { var saved = localStorage.getItem('mw-theme'); if (saved) root.setAttribute('data-theme', saved); } catch (e) {}

  var tog = document.getElementById('themeToggle');
  function setIcon(){
    var u = tog && tog.querySelector('use');
    if (u) u.setAttribute('href', cur() === 'dark' ? '#i-sun' : '#i-moon');
  }
  setIcon();
  if (tog) tog.addEventListener('click', function () {
    var next = cur() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('mw-theme', next); } catch (e) {}
    setIcon();
  });

  var cb = document.getElementById('copyEmail');
  if (cb) cb.addEventListener('click', function () {
    var txt = 'msw200@miami.edu';
    function sel(){ try { var el=document.getElementById('email'); var r=document.createRange(); r.selectNode(el); var s=getSelection(); s.removeAllRanges(); s.addRange(r); } catch(e){} }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(txt).then(function(){ cb.textContent='Copied'; setTimeout(function(){cb.textContent='Copy';},1500); }).catch(sel);
    } else { sel(); }
  });

  // mark active nav link
  var here = (location.pathname.split('/').pop() || 'index.html');
  var links = document.querySelectorAll('.nav a.navlink');
  for (var i=0;i<links.length;i++){
    var href = links[i].getAttribute('href') || '';
    if (href === here || (here === 'index.html' && href === 'index.html')) links[i].classList.add('active');
  }
})();
