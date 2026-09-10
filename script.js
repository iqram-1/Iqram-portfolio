const yearElement = document.querySelector('#year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');

if (menu && navigation) {
  const toggleLabel = menu.querySelector('span');

  menu.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(isOpen));
    if (toggleLabel) {
      toggleLabel.textContent = isOpen ? 'Close' : 'Menu';
    }
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navigation.classList.remove('open');
      menu.setAttribute('aria-expanded', 'false');
      if (toggleLabel) {
        toggleLabel.textContent = 'Menu';
      }
    });
  });
}

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
  const source = item.url || `assets/archive/${encodeURIComponent(item.file)}`;
  const content = item.type === 'video'
    ? `<video controls muted playsinline preload="none" aria-label="${item.title}" onerror="this.style.display='none'; this.parentElement.querySelector('.media-fallback').style.display='grid';"><source src="${source}">Your browser cannot play this video. <a href="${source}">Open the original video</a>.</video><span class="muted-note">Muted</span>`
    : `<img src="${source}" alt="${item.caption}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';"><div class="media-fallback" style="display:none">This original media item is unavailable in the archive right now.<br><a href="${source}">Open the full image</a></div>`;
  return `<figure class="media-card"><div class="media-frame">${content}<span class="media-kind">${String(item.number).padStart(2, '0')} / ${item.type === 'video' ? 'video' : 'photo'}</span></div><figcaption><h3>${item.title}</h3><p>${item.caption}</p></figcaption></figure>`;
};

const mediaGallery = document.querySelector('#media-gallery');
const archiveSummary = document.querySelector('#archive-summary');
const updateArchiveSummary = (items) => {
  if (!archiveSummary) return;
  const photoCount = items.filter((item) => item.type !== 'video').length;
  const videoCount = items.filter((item) => item.type === 'video').length;
  archiveSummary.innerHTML = `<span>${photoCount} ${photoCount === 1 ? 'photograph' : 'photographs'}</span><span>${videoCount} muted ${videoCount === 1 ? 'video' : 'videos'}</span><span>Arranged by story</span>`;
};
const renderMediaGallery = (items) => {
  if (!mediaGallery) return;
  updateArchiveSummary(items);
  mediaGallery.innerHTML = groups.map((group) => {
    const groupItems = items.filter((item) => item.group === group.id);
    const certificate = group.certificate ? `<aside class="certificate-slot"><span class="media-kind">Reserved space</span><div><h4>Sci-Tech Fair 2024 certificate</h4><p>Certificate scan to be added here when the soft copy is available.</p></div></aside>` : '';
    const clubCertificate = `<aside class="certificate-slot club-certificate"><span class="media-kind">Reserved space</span><div><h4>P.O. Lumumba Innovation Club certificate</h4><p>Active-member certificate to be added here after the scan is available.</p></div></aside>`;
    const cards = groupItems.map((item) => `${frameFor(item)}${group.id === 'journey' && item.number === 8 ? clubCertificate : ''}`).join('');
    return `<section class="archive-group"><div class="archive-group-heading"><div><p class="eyebrow">${group.label}</p><h3>${group.title}</h3></div><p>${group.description}</p></div><div class="group-gallery">${cards}${certificate}</div></section>`;
  }).join('');
};

if (mediaGallery) {
  renderMediaGallery(mediaItems);
  const publicConfig = window.PORTFOLIO_CONFIG || {};
  if (publicConfig.supabaseUrl && publicConfig.supabaseAnonKey) {
    fetch(`${publicConfig.supabaseUrl}/rest/v1/media_assets?select=*&visible=eq.true&order=sort_order.asc,number.asc`, {
      headers: { apikey: publicConfig.supabaseAnonKey, Authorization: `Bearer ${publicConfig.supabaseAnonKey}` }
    })
      .then((response) => response.ok ? response.json() : [])
      .then((managedMedia) => {
        if (!managedMedia.length) return;
        const managedItems = managedMedia.map((item) => ({
          number: item.number,
          group: item.group_id,
          file: item.source_path || '',
          url: item.media_url || '',
          type: item.media_type || 'image',
          title: item.title,
          caption: item.caption
        }));
        renderMediaGallery(managedItems);
      })
      .catch((error) => {
        console.warn('The managed archive could not be loaded; showing the local archive instead.', error);
      });
  }
}

document.querySelectorAll('video').forEach((video) => {
  video.muted = true;
  video.addEventListener('volumechange', () => { if (!video.muted) video.muted = true; });
});

const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && revealElements.length) {
  const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }); }, { threshold: 0.08 });
  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('visible'));
}

const POSTS_KEY = 'iqram-portfolio-posts';

const getLocalPosts = () => {
  try {
    const saved = JSON.parse(localStorage.getItem(POSTS_KEY) || '[]');
    return Array.isArray(saved) ? saved : [];
  } catch (error) {
    return [];
  }
};

const getPosts = async () => {
  const config = window.PORTFOLIO_CONFIG || {};
  if (!config.supabaseUrl || !config.supabaseAnonKey) return getLocalPosts();

  try {
    const response = await fetch(`${config.supabaseUrl}/rest/v1/posts?select=*&published=eq.true&order=date.desc`, {
      headers: {
        apikey: config.supabaseAnonKey,
        Authorization: `Bearer ${config.supabaseAnonKey}`
      }
    });
    if (!response.ok) throw new Error('Unable to load updates');
    return await response.json();
  } catch (error) {
    console.warn('The latest updates could not be loaded; showing local updates instead.', error);
    return getLocalPosts();
  }
};

const renderPosts = async () => {
  const grid = document.querySelector('#updates-grid');
  if (!grid) return;

  const posts = await getPosts();

  if (!posts.length) {
    grid.innerHTML = '<article class="update-card reveal"><div class="update-card-content"><span class="eyebrow">No post yet</span><h3>Start publishing updates</h3><p>Open the admin page to create your first portfolio update.</p></div></article>';
    return;
  }

  grid.innerHTML = posts.map((post) => `
    <article class="update-card reveal">
      ${post.image_url || post.image ? `
        <div class="update-card-media">
          <img src="${post.image_url || post.image}" alt="${post.title}" loading="lazy" onerror="this.style.display='none'; this.parentElement.querySelector('.update-card-fallback').style.display='grid';" />
          <div class="update-card-fallback" style="display:none">Media unavailable<br><span>Update image missing</span></div>
        </div>
      ` : ''}
      <div class="update-card-content">
        <span class="eyebrow">${post.category || 'Update'} · ${post.date || 'Latest'}</span>
        <h3>${post.title}</h3>
        <p>${post.caption}</p>
      </div>
    </article>
  `).join('');

  const newRevealItems = grid.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && newRevealItems.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    newRevealItems.forEach((element) => observer.observe(element));
  } else {
    newRevealItems.forEach((element) => element.classList.add('visible'));
  }
};

renderPosts();

const whatsappPath = document.querySelector('.whatsapp-logo path + path');
if (whatsappPath) {
  whatsappPath.setAttribute('d', 'M20.52 3.4A10.76 10.76 0 0 0 12.1 1a10.79 10.79 0 0 0-9.38 16.32L1.3 23l5.9-1.55a10.77 10.77 0 0 0 16.1-9.05h-.02ZM12.2 18.9c-1.45 0-2.88-.39-4.13-1.13l-.3-.18-3.5.92.94-3.42-.19-.35A7.74 7.74 0 0 1 12.24 4.3a7.72 7.72 0 0 1 7.7 7.7 7.7 7.7 0 0 1-7.74 7.9Zm4.27-5.77c-.24-.12-1.42-.7-1.64-.78-.21-.08-.36-.12-.52.12-.15.24-.6.78-.74.94-.13.15-.27.17-.5.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.52-1.25-.71-1.7-.19-.45-.39-.39-.52-.39h-.45c-.15 0-.4.06-.6.3-.21.24-.8.79-.8 1.93 0 1.14.82 2.24.94 2.39.12.15 1.62 2.47 3.93 3.46.55.24.98.38 1.32.49.55.18 1.05.16 1.45.1.44-.07 1.42-.58 1.62-1.14.2-.56.2-1.05.14-1.14-.06-.09-.22-.15-.46-.28Z');
}

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (!prefersReducedMotion.matches && window.matchMedia('(pointer: fine)').matches) {
  const cursorDot = document.createElement('div');
  const cursorRing = document.createElement('div');
  cursorDot.className = 'cursor-dot';
  cursorRing.className = 'cursor-ring';
  document.body.appendChild(cursorDot);
  document.body.appendChild(cursorRing);
  document.body.classList.add('cursor-enabled');

  const updateCursor = (event) => {
    cursorDot.style.left = `${event.clientX}px`;
    cursorDot.style.top = `${event.clientY}px`;
    cursorRing.style.left = `${event.clientX}px`;
    cursorRing.style.top = `${event.clientY}px`;
  };

  document.addEventListener('pointermove', updateCursor);

  document.querySelectorAll('a, button, .project, .contact-card, .round-link').forEach((control) => {
    control.addEventListener('pointerenter', () => cursorRing.classList.add('active'));
    control.addEventListener('pointerleave', () => cursorRing.classList.remove('active'));
  });

  document.querySelectorAll('.project').forEach((projectCard) => {
    projectCard.addEventListener('pointermove', (event) => {
      const rect = projectCard.getBoundingClientRect();
      const offsetX = (event.clientX - rect.left) / rect.width;
      const offsetY = (event.clientY - rect.top) / rect.height;
      const rotateY = (offsetX - 0.5) * 10;
      const rotateX = (0.5 - offsetY) * 10;
      projectCard.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    projectCard.addEventListener('pointerleave', () => {
      projectCard.style.transform = '';
    });
  });
}
