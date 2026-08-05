/* =========================================================
   DATA — content is defined once here and rendered by JS
   ========================================================= */
const academicsData = [
  {img:"https://images.pexels.com/photos/10638213/pexels-photo-10638213.jpeg?auto=compress&cs=tinysrgb&w=700", icon:"fa-child-reaching", title:"Primary School", desc:"Play-based, foundational learning for Grades 1–5 that builds curiosity and core skills."},
  {img:"https://images.pexels.com/photos/8363021/pexels-photo-8363021.jpeg?auto=compress&cs=tinysrgb&w=700", icon:"fa-book-open", title:"Middle School", desc:"Grades 6–8 balance rigorous academics with exploration across arts and sciences."},
  {img:"https://images.pexels.com/photos/8423020/pexels-photo-8423020.jpeg?auto=compress&cs=tinysrgb&w=700", icon:"fa-user-graduate", title:"Secondary School", desc:"Grades 9–10 prepare students for board examinations with focused subject mastery."},
  {img:"https://images.pexels.com/photos/5539293/pexels-photo-5539293.jpeg?auto=compress&cs=tinysrgb&w=700", icon:"fa-graduation-cap", title:"Senior Secondary", desc:"Grades 11–12 offer Science, Commerce and Humanities streams with career counselling."},
  {img:"https://images.pexels.com/photos/8471835/pexels-photo-8471835.jpeg?auto=compress&cs=tinysrgb&w=700", icon:"fa-flask-vial", title:"STEM Education", desc:"Dedicated labs and project-based learning in robotics, coding and applied sciences."},
  {img:"https://images.pexels.com/photos/10643463/pexels-photo-10643463.jpeg?auto=compress&cs=tinysrgb&w=700", icon:"fa-laptop-code", title:"Digital Learning", desc:"A blended platform gives students and parents access to lessons, grades and resources."}
];

const facilitiesData = [
  {img:"https://images.pexels.com/photos/8926887/pexels-photo-8926887.jpeg?auto=compress&cs=tinysrgb&w=700", icon:"fa-book", title:"Library"},
  {img:"https://images.pexels.com/photos/8471835/pexels-photo-8471835.jpeg?auto=compress&cs=tinysrgb&w=700", icon:"fa-flask", title:"Science Labs"},
  {img:"https://images.pexels.com/photos/10643463/pexels-photo-10643463.jpeg?auto=compress&cs=tinysrgb&w=700", icon:"fa-desktop", title:"Computer Labs"},
  {img:"https://images.pexels.com/photos/758976/pexels-photo-758976.jpeg?auto=compress&cs=tinysrgb&w=700", icon:"fa-theater-masks", title:"Auditorium"},
  {img:"https://images.pexels.com/photos/8858970/pexels-photo-8858970.jpeg?auto=compress&cs=tinysrgb&w=700", icon:"fa-futbol", title:"Sports Complex"},
  {img:"https://images.pexels.com/photos/261060/pexels-photo-261060.jpeg?auto=compress&cs=tinysrgb&w=700", icon:"fa-person-swimming", title:"Swimming Pool"},
  {img:"https://images.pexels.com/photos/7653118/pexels-photo-7653118.jpeg?auto=compress&cs=tinysrgb&w=700", icon:"fa-briefcase-medical", title:"Medical Room"},
  {img:"https://images.pexels.com/photos/6440089/pexels-photo-6440089.jpeg?auto=compress&cs=tinysrgb&w=700", icon:"fa-bus", title:"Transport"},
  {img:"https://images.pexels.com/photos/4846308/pexels-photo-4846308.jpeg?auto=compress&cs=tinysrgb&w=700", icon:"fa-utensils", title:"Cafeteria"},
  {img:"https://images.pexels.com/photos/558630/pexels-photo-558630.jpeg?auto=compress&cs=tinysrgb&w=700", icon:"fa-video", title:"Security & CCTV"}
];

const lifeData = [
  {icon:"fa-futbol", title:"Sports"},
  {icon:"fa-music", title:"Music"},
  {icon:"fa-person-running", title:"Dance"},
  {icon:"fa-robot", title:"Robotics"},
  {icon:"fa-code", title:"Coding Club"},
  {icon:"fa-palette", title:"Art Club"},
  {icon:"fa-comments", title:"Debate"},
  {icon:"fa-hands-helping", title:"Community Service"}
];

const testiData = [
  {img:"https://images.pexels.com/photos/16152597/pexels-photo-16152597.jpeg?auto=compress&cs=tinysrgb&w=200", name:"Meera Kapoor", role:"Parent, Grade 4", msg:"The teachers know my daughter by name and by nature — that personal attention is rare to find."},
  {img:"https://images.pexels.com/photos/8301098/pexels-photo-8301098.jpeg?auto=compress&cs=tinysrgb&w=200", name:"Arjun Rao", role:"Student, Grade 11", msg:"The STEM labs turned robotics from a hobby into something I want to study in college."},
  {img:"https://images.pexels.com/photos/30004322/pexels-photo-30004322.jpeg?auto=compress&cs=tinysrgb&w=200", name:"Dr. Anjali Mehra", role:"Principal", msg:"Every year I watch quiet, unsure children become confident young adults — that's why this work matters."}
];

const newsData = [
  {img:"https://images.pexels.com/photos/5539293/pexels-photo-5539293.jpeg?auto=compress&cs=tinysrgb&w=700", day:"12", month:"AUG", title:"Admissions Open for Session 2026–27"},
  {img:"https://images.pexels.com/photos/8924160/pexels-photo-8924160.jpeg?auto=compress&cs=tinysrgb&w=700", day:"03", month:"SEP", title:"Annual Science Exhibition Showcases Student Projects"},
  {img:"https://images.pexels.com/photos/5896822/pexels-photo-5896822.jpeg?auto=compress&cs=tinysrgb&w=700", day:"21", month:"SEP", title:"Inter-House Sports Meet Kicks Off This Weekend"},
  {img:"https://images.pexels.com/photos/19658083/pexels-photo-19658083.jpeg?auto=compress&cs=tinysrgb&w=700", day:"15", month:"OCT", title:"Annual Function Rehearsals Begin Across Grades"},
  {img:"https://images.pexels.com/photos/12197311/pexels-photo-12197311.jpeg?auto=compress&cs=tinysrgb&w=700", day:"02", month:"NOV", title:"Robotics Team Advances to Regional Competition"}
];

const faqData = [
  {q:"How can I apply for admission?", a:"Applications open in August each year via our admissions office or the online enquiry form on this page. Our team will guide you through document submission, entrance interaction (where applicable), and seat confirmation."},
  {q:"What curriculum is followed?", a:"Springfield Public School follows the CBSE curriculum from Kindergarten through Grade 12, supplemented with project-based and digital learning modules."},
  {q:"Is transport available?", a:"Yes. GPS-tracked buses cover over 40 routes across the city, each staffed with a trained attendant for student safety."},
  {q:"Do you provide scholarships?", a:"We offer merit-based and need-based scholarships to eligible students, assessed annually by our admissions and academics committee."},
  {q:"What extracurricular activities are offered?", a:"Students can join sports teams, music and dance ensembles, robotics and coding clubs, art, debate, and community service programs."}
];

const galleryData = [
  {img:"https://images.pexels.com/photos/7972512/pexels-photo-7972512.jpeg?auto=compress&cs=tinysrgb&w=500", cat:"campus", tall:true, title:"Main Campus Building"},
  {img:"https://images.pexels.com/photos/5896822/pexels-photo-5896822.jpeg?auto=compress&cs=tinysrgb&w=500", cat:"sports", title:"Annual Sports Day"},
  {img:"https://images.pexels.com/photos/8924160/pexels-photo-8924160.jpeg?auto=compress&cs=tinysrgb&w=500", cat:"events", tall:true, title:"Science Fair"},
  {img:"https://images.pexels.com/photos/10638213/pexels-photo-10638213.jpeg?auto=compress&cs=tinysrgb&w=500", cat:"classrooms", title:"Classroom Learning"},
  {img:"https://images.pexels.com/photos/8926887/pexels-photo-8926887.jpeg?auto=compress&cs=tinysrgb&w=500", cat:"library", tall:true, title:"Library Reading Hour"},
  {img:"https://images.pexels.com/photos/356086/pexels-photo-356086.jpeg?auto=compress&cs=tinysrgb&w=500", cat:"campus", title:"Campus Grounds"},
  {img:"https://images.pexels.com/photos/19658083/pexels-photo-19658083.jpeg?auto=compress&cs=tinysrgb&w=500", cat:"events", title:"Annual Day Celebration"},
  {img:"https://images.pexels.com/photos/8471835/pexels-photo-8471835.jpeg?auto=compress&cs=tinysrgb&w=500", cat:"labs", tall:true, title:"Science Laboratory"},
  {img:"https://images.pexels.com/photos/8858970/pexels-photo-8858970.jpeg?auto=compress&cs=tinysrgb&w=500", cat:"sports", title:"Football Practice"},
  {img:"https://images.pexels.com/photos/8423020/pexels-photo-8423020.jpeg?auto=compress&cs=tinysrgb&w=500", cat:"classrooms", tall:true, title:"Teacher-led Discussion"},
  {img:"https://images.pexels.com/photos/10643463/pexels-photo-10643463.jpeg?auto=compress&cs=tinysrgb&w=500", cat:"labs", title:"Computer Lab Session"},
  {img:"https://images.pexels.com/photos/12064/pexels-photo-12064.jpeg?auto=compress&cs=tinysrgb&w=500", cat:"library", title:"Library Stacks"}
];

/* =========================================================
   RENDER FUNCTIONS
   ========================================================= */
function renderAcademics(){
  const el = document.getElementById('academicsGrid');
  el.innerHTML = academicsData.map((a,i)=>`
    <div class="acad-card" data-aos="fade-up" data-aos-delay="${(i%3)*80}">
      <div class="acad-media">
        <img loading="lazy" src="${a.img}" alt="${a.title} at Springfield Public School">
        <div class="acad-icon"><i class="fa-solid ${a.icon}"></i></div>
      </div>
      <div class="acad-body">
        <h3>${a.title}</h3>
        <p>${a.desc}</p>
        <a href="#" class="acad-link">Learn More <i class="fa-solid fa-arrow-right"></i></a>
      </div>
    </div>`).join('');
}

function renderFacilities(){
  const el = document.getElementById('facilitiesGrid');
  el.innerHTML = facilitiesData.map((f,i)=>`
    <div class="fac-card" data-aos="zoom-in" data-aos-delay="${(i%4)*80}">
      <img loading="lazy" src="${f.img}" alt="${f.title} facility at Springfield Public School">
      <div class="fac-overlay"><i class="fa-solid ${f.icon}"></i><h3>${f.title}</h3></div>
    </div>`).join('');
}

function renderLife(){
  const el = document.getElementById('lifeGrid');
  el.innerHTML = lifeData.map((l,i)=>`
    <div class="life-card" data-aos="fade-up" data-aos-delay="${(i%4)*70}">
      <i class="fa-solid ${l.icon}"></i><h4>${l.title}</h4>
    </div>`).join('');
}

function renderTestimonials(){
  const el = document.getElementById('testiGrid');
  el.innerHTML = testiData.map((t,i)=>`
    <div class="testi-card" data-aos="fade-up" data-aos-delay="${i*100}">
      <i class="fa-solid fa-quote-left quote-icon"></i>
      <div class="stars">★★★★★</div>
      <p class="msg">"${t.msg}"</p>
      <div class="testi-person">
        <img loading="lazy" src="${t.img}" alt="Portrait of ${t.name}">
        <div><strong>${t.name}</strong><span>${t.role}</span></div>
      </div>
    </div>`).join('');
}

function renderNews(){
  const el = document.getElementById('newsGrid');
  el.innerHTML = newsData.map((n,i)=>`
    <div class="news-card" data-aos="fade-up" data-aos-delay="${(i%3)*100}">
      <div class="news-media">
        <img loading="lazy" src="${n.img}" alt="${n.title}">
        <div class="news-date">${n.day}<br>${n.month}</div>
      </div>
      <div class="news-body">
        <h3>${n.title}</h3>
        <a href="#">Read More <i class="fa-solid fa-arrow-right"></i></a>
      </div>
    </div>`).join('');
}

function renderFaq(){
  const el = document.getElementById('faqList');
  el.innerHTML = faqData.map((f,i)=>`
    <div class="faq-item">
      <div class="faq-q" data-index="${i}"><span>${f.q}</span><i class="fa-solid fa-plus"></i></div>
      <div class="faq-a"><p>${f.a}</p></div>
    </div>`).join('');
  el.querySelectorAll('.faq-q').forEach(q=>{
    q.addEventListener('click', ()=>{
      const item = q.parentElement;
      const answer = item.querySelector('.faq-a');
      const isActive = item.classList.contains('active');
      el.querySelectorAll('.faq-item').forEach(fi=>{fi.classList.remove('active'); fi.querySelector('.faq-a').style.maxHeight = null;});
      if(!isActive){ item.classList.add('active'); answer.style.maxHeight = answer.scrollHeight + 'px'; }
    });
  });
}

function renderGallery(filter='all'){
  const el = document.getElementById('masonryGrid');
  const items = filter==='all' ? galleryData : galleryData.filter(g=>g.cat===filter);
  el.innerHTML = items.map((g,i)=>`
    <div class="g-item" data-aos="fade-up" data-aos-delay="${(i%4)*60}" data-full="${g.img.replace('w=500','w=1400')}" data-caption="${g.title}">
      <img loading="lazy" src="${g.img}" alt="${g.title} — Springfield Public School" style="${g.tall? 'aspect-ratio:3/4;object-fit:cover;height:auto;':''}">
      <div class="g-overlay"><i class="fa-solid fa-expand"></i><span>${g.title}</span></div>
    </div>`).join('');
  attachLightbox();
  AOS.refreshHard();
}

let lbImages = [];
let lbIndex = 0;

renderAcademics();
renderFacilities();
renderLife();
renderTestimonials();
renderNews();
renderFaq();
renderGallery();

/* =========================================================
   GALLERY FILTER
   ========================================================= */
document.querySelectorAll('.gallery-filters button').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('.gallery-filters button').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    renderGallery(btn.dataset.filter);
  });
});

/* =========================================================
   LIGHTBOX
   ========================================================= */
function attachLightbox(){
  const items = Array.from(document.querySelectorAll('.g-item'));
  lbImages = items.map(it=>({src:it.dataset.full, caption:it.dataset.caption}));
  items.forEach((it,i)=>{
    it.addEventListener('click', ()=>openLightbox(i));
  });
}
function openLightbox(i){
  lbIndex = i;
  const lb = document.getElementById('lightbox');
  const img = lb.querySelector('img');
  img.src = lbImages[i].src;
  img.alt = lbImages[i].caption;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox(){
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}
document.querySelector('.lb-close').addEventListener('click', closeLightbox);
document.getElementById('lightbox').addEventListener('click', (e)=>{ if(e.target.id==='lightbox') closeLightbox(); });
document.querySelector('.lb-next').addEventListener('click', ()=>{ lbIndex=(lbIndex+1)%lbImages.length; openLightbox(lbIndex); });
document.querySelector('.lb-prev').addEventListener('click', ()=>{ lbIndex=(lbIndex-1+lbImages.length)%lbImages.length; openLightbox(lbIndex); });
document.addEventListener('keydown', (e)=>{
  if(!document.getElementById('lightbox').classList.contains('open')) return;
  if(e.key==='Escape') closeLightbox();
  if(e.key==='ArrowRight') document.querySelector('.lb-next').click();
  if(e.key==='ArrowLeft') document.querySelector('.lb-prev').click();
});

/* =========================================================
   ABOUT TABS
   ========================================================= */
document.querySelectorAll('.about-tabs button').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('.about-tabs button').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.about-panel').forEach(p=>p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

/* =========================================================
   NAVBAR: shrink on scroll + mobile menu + scroll progress + back-to-top
   ========================================================= */
const header = document.getElementById('header');
const backToTop = document.getElementById('back-to-top');
const progressBar = document.getElementById('scroll-progress');

window.addEventListener('scroll', ()=>{
  const y = window.scrollY;
  header.classList.toggle('glass', y > 60);
  backToTop.classList.toggle('show', y > 500);
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = (docHeight>0 ? (y/docHeight)*100 : 0) + '%';
}, {passive:true});

backToTop.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', ()=>{
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', navLinks.classList.contains('open'));
});
navLinks.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=>{
  hamburger.classList.remove('active'); navLinks.classList.remove('open');
}));

/* =========================================================
   BUTTON RIPPLE EFFECT
   ========================================================= */
document.querySelectorAll('.ripple-btn').forEach(btn=>{
  btn.addEventListener('click', function(e){
    const rect = this.getBoundingClientRect();
    const ripple = document.createElement('span');
    const size = Math.max(rect.width, rect.height);
    ripple.className = 'ripple';
    ripple.style.width = ripple.style.height = size+'px';
    ripple.style.left = (e.clientX - rect.left - size/2)+'px';
    ripple.style.top = (e.clientY - rect.top - size/2)+'px';
    this.appendChild(ripple);
    setTimeout(()=>ripple.remove(), 650);
  });
});

/* =========================================================
   TYPING ANIMATION FOR HERO SUBTITLE
   ========================================================= */
const subtitleText = "Providing quality education, innovation, discipline, and holistic development for every student.";
const subtitleEl = document.getElementById('typedSubtitle');
let typeI = 0;
function typeSubtitle(){
  if(typeI <= subtitleText.length){
    subtitleEl.textContent = subtitleText.slice(0, typeI);
    typeI++;
    setTimeout(typeSubtitle, 18);
  }
}

/* =========================================================
   MOUSE PARALLAX ON HERO
   ========================================================= */
const heroBg = document.getElementById('heroBg');
document.querySelector('.hero').addEventListener('mousemove', (e)=>{
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  heroBg.style.transform = `scale(1.08) translate(${x}px, ${y}px)`;
});

/* =========================================================
   COUNTUP ON SCROLL INTO VIEW
   ========================================================= */
const countEls = document.querySelectorAll('.countup');
const countObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const el = entry.target;
      const target = parseFloat(el.dataset.target);
      if(window.countUp && window.countUp.CountUp){
        const cu = new window.countUp.CountUp(el, target, {duration:2.2});
        if(!cu.error) cu.start();
      } else {
        let cur = 0;
        const step = target/60;
        const iv = setInterval(()=>{ cur+=step; if(cur>=target){cur=target; clearInterval(iv);} el.textContent = Math.round(cur); }, 30);
      }
      countObserver.unobserve(el);
    }
  });
}, {threshold:0.5});
countEls.forEach(el=>countObserver.observe(el));

/* =========================================================
   CONTACT FORM (front-end only demo submission)
   ========================================================= */
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const btn = this.querySelector('.submit-btn');
  const original = btn.innerHTML;
  btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
  btn.disabled = true;
  setTimeout(()=>{
    document.getElementById('formSuccess').classList.add('show');
    btn.innerHTML = original;
    btn.disabled = false;
    this.reset();
    setTimeout(()=> document.getElementById('formSuccess').classList.remove('show'), 5000);
  }, 1100);
});
document.getElementById('newsletterForm').addEventListener('submit', function(e){
  e.preventDefault();
  const input = this.querySelector('input');
  input.placeholder = 'Subscribed! Thank you.';
  input.value = '';
});

/* =========================================================
   INIT: preloader, AOS, GSAP hero, footer year
   ========================================================= */
document.getElementById('year').textContent = new Date().getFullYear();

window.addEventListener('load', ()=>{
  document.getElementById('preloader').classList.add('hidden');
  typeSubtitle();

  AOS.init({ duration:800, easing:'ease-out-cubic', once:true, offset:60 });

  if(window.gsap){
    gsap.timeline()
      .from('.hero .eyebrow', {y:24, opacity:0, duration:0.7, ease:'power3.out'})
      .from('.hero h1', {y:34, opacity:0, duration:0.8, ease:'power3.out'}, '-=0.45')
      .from('.hero-actions .btn', {y:24, opacity:0, duration:0.6, stagger:0.15, ease:'power3.out'}, '-=0.4')
      .from('.hero-stats .stat', {y:20, opacity:0, duration:0.6, stagger:0.1, ease:'power3.out'}, '-=0.3')
      .from('.hero-shapes span', {scale:0, opacity:0, duration:0.8, stagger:0.15, ease:'back.out(1.6)'}, '-=0.6');
  }
});