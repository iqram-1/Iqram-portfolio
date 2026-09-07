document.querySelector('#year').textContent = new Date().getFullYear();

const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');
menu.addEventListener('click', () => { const isOpen = navigation.classList.toggle('open'); menu.setAttribute('aria-expanded', String(isOpen)); menu.firstChild.textContent = isOpen ? 'Close ' : 'Menu '; });
navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { navigation.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.firstChild.textContent = 'Menu '; }));

const groups = [
  { id:'scitech', label:'Sci-Tech Fair 2024', title:'Osikani Farming Solution & awards', description:'The award-winning prototype, the team, and the Sci-Tech Fair 2024 celebration.', certificate:true },
  { id:'hub', label:'Smart Power Hub', title:'Concept to working prototype', description:'A CAD-led, ESP32-enabled extension-board project developed from my original proposal with my group.' },
  { id:'cad', label:'CAD & mechanical models', title:'Designed to come together', description:'Fusion 360 studies of parts, assemblies, and mechanical connections.' },
  { id:'electronics', label:'Basic electronics', title:'Systems, signals & control', description:'Final-semester group work, classwork, and assignments documenting circuit design and control.' },
  { id:'journey', label:'Innovation journey', title:'Learning, making & community', description:'Personal, club, robotics, and team moments from the wider engineering journey.' },
  { id:'workshop', label:'Workshop experience', title:'Learning in the field', description:'Workshop-day recordings from first year at the University of Energy and Natural Resources.' },
  { id:'videos', label:'Project video archive', title:'Recorded project moments', description:'Additional project documentation retained as muted video.' }
];

const mediaItems = [
  {number:1, group:'scitech', file:'072f9fb8b9e417535567a771e48e0c5f.webp', type:'image', title:'Osikani Farming Solution prototype', caption:'The Osikani Farming Solution — the prototype we built to win at the Sci-Tech Fair 2024.'},
  {number:2, group:'scitech', file:'311176_5997d21fe57349bd8c340db373ae2f78~mv2.jpeg', type:'image', title:'Sci-Tech Fair 2024 award win', caption:'Sci-Tech Fair 2024 award photographs: our team celebrating the awards we won.'},
  {number:17, group:'scitech', file:'IMG-20250930-WA0003.jpg', type:'image', title:'Sci-Tech Fair award day', caption:'A moment from the Sci-Tech Fair 2024 award day with fellow student innovators.'},
  {number:18, group:'scitech', file:'IMG-20250930-WA0004.jpg', type:'image', title:'Sci-Tech Fair recognition', caption:'The award-winning team with mentors and organisers at the Sci-Tech Fair 2024.'},
  {number:3, group:'hub', file:'63093f77-c0f2-4322-8a69-64416ff795e3.jpg', type:'image', title:'Smart Power Hub prototype', caption:'A working ESP32 smart extension-board prototype with safety sensing, Wi-Fi control, scheduling, and power monitoring.'},
  {number:10, group:'hub', file:'IMG_1968.JPG', type:'image', title:'Smart Power Hub CAD concept', caption:'Fusion 360 CAD concept for the Smart Power Hub, showing the enclosure, ports, and control layout.'},
  {number:4, group:'cad', file:"ABUBAKAR_UEB1216725_MECHANICAL'A'_ASSEMBLY_ (IQRAM HUB) - Autodesk Fusion (Education License)  07_09_2026 02_34_55.png", type:'image', title:'Mechanical assembly — angled view', caption:'Fusion 360 view of a mechanical assembly, showing the base, body, fasteners, and moving features.'},
  {number:5, group:'cad', file:"ABUBAKAR_UEB1216725_MECHANICAL'A'_ASSEMBLY_ (IQRAM HUB) - Autodesk Fusion (Education License)  07_09_2026 02_34_56.png", type:'image', title:'Mechanical assembly — front view', caption:'A second Fusion 360 view documenting the front face, opening, and mounting details of the assembly.'},
  {number:19, group:'cad', file:"IQRAM ABUBAKAR-UEB1216725_ (IQRAM HUB) - Autodesk Fusion (Education License)  07_09_2026 02_35_41.png", type:'image', title:'Hub assembly — coupling view', caption:'Fusion 360 assembly study of a hub-and-flange component with bolts, shaft, and circular plates.'},
  {number:20, group:'cad', file:"IQRAM ABUBAKAR-UEB1216725_ (IQRAM HUB) - Autodesk Fusion (Education License)  07_09_2026 02_36_32.png", type:'image', title:'Hub assembly — shaft view', caption:'Extended assembly view showing paired end plates, the central shaft, and the connection sequence.'},
  {number:13, group:'electronics', file:'IMG_2235.jpg', type:'image', title:'Combined circuit layout', caption:'Final-semester group project: a combined circuit build based on laboratory work. I led the group and created the circuit schematics.'},
  {number:15, group:'electronics', file:'IMG_2332.jpg', type:'image', title:'Motor driver lab schematic', caption:'L293D forward and reverse DC motor driver schematic from laboratory classwork, with control switches and LED status outputs.'},
  {number:6, group:'journey', file:'IMG_1048.jpg', type:'image', title:'Portrait of Iqram Abubakar', caption:'Iqram Abubakar — mechanical engineering student, builder, and project designer.'},
  {number:8, group:'journey', file:'IMG_1306.jpg', type:'image', title:'P.O. Lumumba Innovation Club Day reopening', caption:'P.O. Lumumba Innovation Club Day reopening.'},
  {number:9, group:'journey', file:'IMG_1322.jpg', type:'image', title:'Robotics prototype session', caption:'Hands-on work with a robotics prototype during a practical demonstration session.'},
  {number:16, group:'journey', file:'IMG-20250923-WA0150.jpg', type:'image', title:'Auto mechanics practical — final day', caption:'A group photo taken after our final auto mechanics practical at senior high school, following workshop work as auto mechanics students.'},
  {number:21, group:'workshop', file:'65946BAB-EE69-46EC-BABB-BEADE3915259 (1).mp4', type:'video', title:'Sunyani Magazine workshop day', caption:'Our workshop day during my first year at the University of Energy and Natural Resources — the first workshop visit we made at Sunyani Magazine.'},
  {number:23, group:'workshop', file:'FB046664-9BEE-4E85-AF77-B67FFEAE6919.mp4', type:'video', title:'Mechanical workshop practical', caption:'A hands-on mechanical workshop practical, documenting a wheel-removal exercise.'},
  {number:26, group:'videos', file:'VID-20251027-WA0008.mp4', type:'video', title:'Mechanical workshop practice — October 2025', caption:'Me working as a mechanic at the workshop in October 2025.'}
];

const frameFor = (item) => {
  const source = `assets/archive/${encodeURIComponent(item.file)}`;
  const content = item.type === 'video'
    ? `<video controls muted playsinline preload="metadata" aria-label="${item.title}"><source src="${source}">Your browser cannot play this video. <a href="${source}">Open the original video</a>.</video><span class="muted-note">Muted</span>`
    : `<img src="${source}" alt="${item.caption}" loading="lazy" onerror="this.hidden=true;this.nextElementSibling.style.display='grid'"><div class="media-fallback" style="display:none">This original HEIC image is included in the archive.<br><a href="${source}">Open the full image</a></div>`;
  return `<figure class="media-card reveal"><div class="media-frame">${content}<span class="media-kind">${String(item.number).padStart(2, '0')} / ${item.type === 'video' ? 'video' : 'photo'}</span></div><figcaption><h3>${item.title}</h3><p>${item.caption}</p></figcaption></figure>`;
};

document.querySelector('#media-gallery').innerHTML = groups.map((group) => {
  const items = mediaItems.filter((item) => item.group === group.id);
  const certificate = group.certificate ? `<aside class="certificate-slot"><span class="media-kind">Reserved space</span><div><h4>Sci-Tech Fair 2024 certificate</h4><p>Certificate scan to be added here when the soft copy is available.</p></div></aside>` : '';
  const clubCertificate = `<aside class="certificate-slot club-certificate"><span class="media-kind">Reserved space</span><div><h4>P.O. Lumumba Innovation Club certificate</h4><p>Active-member certificate to be added here after the scan is available.</p></div></aside>`;
  const cards = items.map((item) => `${frameFor(item)}${group.id === 'journey' && item.number === 8 ? clubCertificate : ''}`).join('');
  return `<section class="archive-group"><div class="archive-group-heading"><div><p class="eyebrow">${group.label}</p><h3>${group.title}</h3></div><p>${group.description}</p></div><div class="group-gallery">${cards}${certificate}</div></section>`;
}).join('');

document.querySelectorAll('video').forEach((video) => {
  video.muted = true;
  video.addEventListener('volumechange', () => { if (!video.muted) video.muted = true; });
});

const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }); }, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
