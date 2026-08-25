<script>
 // Typing animation for hero code panel
 const lines = [
   { text: 'const ', cls: 'c1' },
   { text: 'techie', cls: 'c2' },
   { text: ' = ', cls: 'c2' },
   { text: 'new', cls: 'c1' },
   { text: ' BeTechified', cls: 'c3' },
   { text: '();\n\n', cls: 'c2' },
   { text: 'techie', cls: 'c2' },
   { text: '.enroll(', cls: 'c2' },
   { text: '"Frontend Dev"', cls: 'c4' },
   { text: ');\n', cls: 'c2' },
   { text: 'techie', cls: 'c2' },
   { text: '.build(', cls: 'c2' },
   { text: 'realProjects', cls: 'c3' },
   { text: ');\n\n', cls: 'c2' },
   { text: 'techie', cls: 'c2' },
   { text: '.status ', cls: 'c2' },
   { text: '=== ', cls: 'c1' },
   { text: '"job-ready"', cls: 'c4' },
   { text: '; ', cls: 'c2' },
   { text: '// true', cls: 'c1' }
 ];
 const el = document.getElementById('typer');
 let full = '';
 lines.forEach(l => { full += `<span class="${l.cls}">${l.text}</span>`; });
 // Split into characters while preserving span structure roughly
 const container = document.getElementById('typer');
 let flatText = lines.map(l => l.text).join('');
 let idx = 0;
 let spanQueueIdx = 0;
 let charInLine = 0;
 function renderProgress(){
   let html = '';
   let remaining = idx;
   for(const l of lines){
     if(remaining <= 0) break;
     const take = Math.min(remaining, l.text.length);
     html += `<span class="${l.cls}">${l.text.slice(0, take).replace(/\n/g, '<br>')}</span>`;
     remaining -= take;
   }
   container.innerHTML = html + '<span class="caret"></span>';
 }
 function typeStep(){
   if(idx <= flatText.length){
     renderProgress();
     idx++;
     setTimeout(typeStep, 22);
   }
 }
 typeStep();
 // Scroll reveal
 const revealEls = document.querySelectorAll('.reveal');
 const observer = new IntersectionObserver((entries) => {
   entries.forEach(entry => {
     if(entry.isIntersecting){
       entry.target.classList.add('in');
       observer.unobserve(entry.target);
     }
   });
 }, { threshold: 0.15 });
 revealEls.forEach(e => observer.observe(e));
 // Stagger program cards / step rows
 document.querySelectorAll('.program-card, .step-row, .stat').forEach((el, i) => {
   el.style.transitionDelay = `${(i % 4) * 0.08}s`;
 });
</script>