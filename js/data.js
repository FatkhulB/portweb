/* =====================================================================
   DATA.JS  -  SATU-SATUNYA FILE YANG PERLU ANDA EDIT
   Cari tulisan [YOUR ...] atau '' (kosong), lalu isi di antara tanda kutip.
   Simpan file, lalu refresh browser.
   ===================================================================== */

const C={
  name:'Fatkhul Barri',
  email:'fatkhulbarri15@gmail.com',
  location:'Surabaya, East Java, Indonesia',

  /* FOTO: cukup simpan foto Anda sebagai assets/foto.jpg (tanpa edit apa pun). Nama lain? tulis di sini, mis. 'assets/saya.png' */
  photo:'assets/foto.jpg',

  /* LINK PORTOFOLIO LENGKAP: ganti [YOUR URL] dengan link Anda. Contoh: 'https://portofolio-saya.com' */
  portfolio:'https://canva.link/33pg7e130rqlvob',

  /* LINK DOWNLOAD CV: file PDF ada di assets/ */
  cv:'assets/cv-fatkhul-barri.pdf',

  /* SOSIAL MEDIA: ganti [YOUR URL] dengan link. Mau hapus? hapus barisnya.
     Mau tambah? salin satu baris, ubah nama dan link. */
  links:{
    LinkedIn:'https://www.linkedin.com/in/fatkhulbarrii/',
    GitHub:'https://github.com/FatkhulB',
    WhatsApp:'https://wa.me/6285198323402',
    Instagram:'https://www.instagram.com/flbarri',
    Kaggle:'https://www.kaggle.com/flbarri'
  }
};

/* PENGALAMAN (dari CV). Tambah/ubah sesuai kebutuhan. */
const EXP=[
 {date:'September 2025 – November 2025',org:'ITS – EA Tournament',role:'Creative Media Staff',points:['Providing an organization with a visual identity through a logo.','Creating posters and banners for event visualization and branding.','Documenting the organization’s events through photos and videos.']},
 {date:'June 2025 – August 2025',org:'Neuva Genesis',role:'Event Staff',points:['Master of Ceremony.','Helping to compile technical guidelines and event requirements.','Assisting in compiling the master of ceremonies script.']},
 {date:'February 2025 – September 2025',org:'Zenitron (Forda Tuban)',role:'Creative Media Staff',points:['Managing and disseminating information through creative content.','Preparing infographics for publication purposes.','Building the Zenitron brand through creative content.']},
 {date:'October 2024 – February 2025',org:'Ini Lho ITS! 2025 x Forda Tuban',role:'IT Staff',points:['Planning and maintaining equipment for events.','Compiling a list of required equipment and ensuring its availability.','Checking systems and servers, maintaining a stable network for the venue.']}
];

/* SERTIFIKAT. Gambar: simpan sebagai assets/certs/1.jpg ... sesuai urutan (tanpa edit kode).
   link = link kredensial (kosongkan jika tidak ada). */
const CERT=[
 {title:'Belajar Dasar Data Science',issuer:'Dicoding Indonesia',year:'2026',tag:'data',image:'',link:'https://dicoding.com/certificates/KEXLQRVKRPG2'},
 {title:'Belajar Dasar Structured Query Language (SQL)',issuer:'Dicoding Indonesia',year:'2026',tag:'sql',image:'',link:'https://dicoding.com/certificates/98XW0M9M0XM3'},
 {title:'Memulai Pemrograman dengan Python',issuer:'Dicoding Indonesia',year:'2026',tag:'python',image:'',link:'https://dicoding.com/certificates/KEXLQRK5RPG2'},
 {title:'Belajar Strategi Pengembangan Diri',issuer:'Dicoding Indonesia',year:'2026',tag:'soft',image:'',link:'https://dicoding.com/certificates/QLZ99LJL9Z5D'},
 {title:'Introduction to Financial Literacy',issuer:'Dicoding Indonesia',year:'2026',tag:'finance',image:'',link:'https://dicoding.com/certificates/KEXLQKOVYPG2'}
];

/* PROYEK. Ganti semua [YOUR ...]. Untuk tiap proyek:
   image = kosongkan, lalu simpan gambar sebagai assets/projects/1.jpg, 2.jpg, 3.jpg (sesuai urutan)
   link  = link proyek (GitHub / dashboard / notebook). Kosong = buka halaman template.
   tags  = kata kunci filter: sql python excel dashboard explore academic personal */
const P=[
 {title:'CREATIVE DESIGN PROJECT',type:'Design Project',year:'2025',tools:'Canva, Figma',desc:'A collection of my creative design work defined by bold compositions, dynamic layouts, strong typography, and vibrant color palettes. My signature style blends energetic visuals with clean structure to create eye-catching banners, key visuals, and promotional assets that engage audiences.',tags:'design personal explore',image:'assets/projects/1.jpg',link:'https://canva.link/cng1zsi4jsuyj54'},
 {title:'SNAKE GAME',type:'Game',year:'2025',tools:'HTML, CSS, JavaScript',desc:'A classic snake-eats-fruit game with a fresh twist. Customize snake skins, maps, and fruits, chase best scores saved locally, and enjoy vibrant eat animations with smooth responsive controls.',tags:'game',image:'assets/projects/2.jpg',link:'https://github.com/aleyya06/SnakeGame'},
 {title:'COMING SOON',type:'New Project',year:'2026',tools:'Stay tuned',desc:'Something exciting is in the works. A new project is being crafted and will drop here soon — stay tuned.',tags:'coming',image:'',link:''},
 {title:'COMING SOON',type:'New Project',year:'2026',tools:'Stay tuned',desc:'Another idea is taking shape behind the scenes. Fresh work is on the way — check back soon for the reveal.',tags:'coming',image:'',link:''}
];

/* ---- Bagian di bawah ini jarang perlu diubah ---- */
const MQ=['SQL','PYTHON','JAVA','EXCEL','GOOGLE SHEETS','FIGMA','CANVA','DATA SCIENCE','MATHEMATICS','ITS'];
const FOCUS=[['SQL & Database Basics','SQL'],['Python Programming','Python'],['Mathematical & Quantitative Reasoning','Mathematics'],['Spreadsheet Analysis','Excel, Google Sheets'],['Visual Design & Content','Figma, Canva'],['Event & Team Coordination','Experience']];
const PROC=[['Define','Clarify the question, audience, and success criteria.'],['Collect','Gather and inspect the available data.'],['Clean','Handle missing values, duplicates, and inconsistencies.'],['Analyze','Explore patterns and test assumptions.'],['Communicate','Turn findings into clear visuals and recommendations.']];
const PF=[['All Projects','all'],['Design','design'],['Game','game'],['SQL','sql'],['Python','python'],['Excel','excel'],['Dashboard','dashboard']];
const CF=[['All','all'],['Data Science','data'],['SQL','sql'],['Python','python'],['Soft Skills','soft'],['Finance','finance'],['Other','other']];
