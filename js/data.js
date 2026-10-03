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
  photo:'',

  /* LINK PORTOFOLIO LENGKAP: ganti [YOUR URL] dengan link Anda. Contoh: 'https://portofolio-saya.com' */
  portfolio:'[YOUR URL]',

  /* LINK DOWNLOAD CV (sudah terisi) */
  cv:'https://canva.link/scmr44q46y5uc4i',

  /* SOSIAL MEDIA: ganti [YOUR URL] dengan link. Mau hapus? hapus barisnya.
     Mau tambah? salin satu baris, ubah nama dan link. */
  links:{
    LinkedIn:'https://www.linkedin.com/in/fatkhulbarrii/',
    GitHub:'https://github.com/FatkhulB',
    WhatsApp:'https://wa.me/6285198323402',
    Instagram:'[YOUR URL]',
    Kaggle:'[YOUR URL]'
  }
};

/* PENGALAMAN (dari CV). Tambah/ubah sesuai kebutuhan. */
const EXP=[
 {date:'September 2025 – November 2025',org:'ITS – EA Tournament',role:'Creative Media Staff',points:['Providing an organization with a visual identity through a logo.','Creating posters and banners for event visualization and branding.','Documenting the organization’s events through photos and videos.']},
 {date:'June 2025 – August 2025',org:'Neuva Genesis',role:'Event Staff',points:['Master of Ceremony.','Helping to compile technical guidelines and event requirements.','Assisting in compiling the master of ceremonies script.']},
 {date:'February 2025 – September 2025',org:'Zenitron (Forda Tuban)',role:'Creative Media Staff',points:['Managing and disseminating information through creative content.','Preparing infographics for publication purposes.','Building the Zenitron brand through creative content.']},
 {date:'October 2024 – February 2025',org:'Ini Lho ITS! 2025 x Forda Tuban',role:'IT Staff',points:['Planning and maintaining equipment for events.','Compiling a list of required equipment and ensuring its availability.','Checking systems and servers, maintaining a stable network for the venue.']}
];

/* SERTIFIKAT (8 slot). Gambar: simpan sebagai assets/certs/1.jpg ... 8.jpg sesuai urutan (tanpa edit kode).
   Slot kosong: ganti teks [YOUR ...]. link = link kredensial (kosongkan jika tidak ada). */
const CERT=[
 {title:'Belajar Dasar Data Science',issuer:'Dicoding Indonesia',year:'2026',tag:'data',image:'',link:''},
 {title:'Belajar Dasar Structured Query Language (SQL)',issuer:'Dicoding Indonesia',year:'2026',tag:'sql',image:'',link:''},
 {title:'Memulai Pemrograman dengan Python',issuer:'Dicoding Indonesia',year:'2026',tag:'python',image:'',link:''},
 {title:'Belajar Strategi Pengembangan Diri',issuer:'Dicoding Indonesia',year:'2026',tag:'soft',image:'',link:''},
 {title:'Introduction to Financial Literacy',issuer:'Dicoding Indonesia',year:'2026',tag:'finance',image:'',link:''},
 {title:'[YOUR CERTIFICATE 6 TITLE]',issuer:'[YOUR ISSUER]',year:'[YEAR]',tag:'other',image:'',link:''},
 {title:'[YOUR CERTIFICATE 7 TITLE]',issuer:'[YOUR ISSUER]',year:'[YEAR]',tag:'other',image:'',link:''},
 {title:'[YOUR CERTIFICATE 8 TITLE]',issuer:'[YOUR ISSUER]',year:'[YEAR]',tag:'other',image:'',link:''}
];

/* PROYEK. Ganti semua [YOUR ...]. Untuk tiap proyek:
   image = kosongkan, lalu simpan gambar sebagai assets/projects/1.jpg, 2.jpg, 3.jpg (sesuai urutan)
   link  = link proyek (GitHub / dashboard / notebook). Kosong = buka halaman template.
   tags  = kata kunci filter: sql python excel dashboard explore academic personal */
const P=[
 {title:'[YOUR PROJECT 1 TITLE]',type:'[YOUR CATEGORY]',year:'[YOUR YEAR]',tools:'[YOUR TOOLS]',desc:'[YOUR DESCRIPTION: pertanyaan, data, dan hasil singkat]',tags:'sql academic',image:'',link:''},
 {title:'[YOUR PROJECT 2 TITLE]',type:'[YOUR CATEGORY]',year:'[YOUR YEAR]',tools:'[YOUR TOOLS]',desc:'[YOUR DESCRIPTION]',tags:'python explore',image:'',link:''},
 {title:'[YOUR PROJECT 3 TITLE]',type:'[YOUR CATEGORY]',year:'[YOUR YEAR]',tools:'[YOUR TOOLS]',desc:'[YOUR DESCRIPTION]',tags:'excel personal',image:'',link:''}
];

/* ---- Bagian di bawah ini jarang perlu diubah ---- */
const MQ=['SQL','PYTHON','JAVA','EXCEL','GOOGLE SHEETS','FIGMA','CANVA','DATA SCIENCE','MATHEMATICS','ITS'];
const FOCUS=[['SQL & Database Basics','SQL'],['Python Programming','Python'],['Mathematical & Quantitative Reasoning','Mathematics'],['Spreadsheet Analysis','Excel, Google Sheets'],['Visual Design & Content','Figma, Canva'],['Event & Team Coordination','Experience']];
const PROC=[['Define','Clarify the question, audience, and success criteria.'],['Collect','Gather and inspect the available data.'],['Clean','Handle missing values, duplicates, and inconsistencies.'],['Analyze','Explore patterns and test assumptions.'],['Communicate','Turn findings into clear visuals and recommendations.']];
const PF=[['All Projects','all'],['SQL','sql'],['Python','python'],['Excel','excel'],['Dashboard','dashboard'],['Exploratory','explore'],['Academic','academic'],['Personal','personal']];
const CF=[['All','all'],['Data Science','data'],['SQL','sql'],['Python','python'],['Soft Skills','soft'],['Finance','finance'],['Other','other']];
