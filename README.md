# Panduan Mengisi Portofolio

Buka folder ini di VS Code > klik kanan `index.html` > **Open with Live Server**.

## Cara termudah: cukup taruh file dengan nama yang tepat (tanpa edit kode)
| Isi | Simpan sebagai |
|---|---|
| Foto diri | `assets/foto.jpg` |
| Gambar sertifikat 1 sampai 8 | `assets/certs/1.jpg` ... `assets/certs/8.jpg` (urut sesuai daftar) |
| Gambar proyek 1 sampai 3 | `assets/projects/1.jpg` ... `3.jpg` |

Kotak `[YOUR ...]` otomatis berubah jadi gambar begitu file ada. Setiap kotak kosong menampilkan nama file yang harus dipakai.

## Yang diketik di `js/data.js` (cari `[YOUR ...]`)
- `portfolio`: link portofolio lengkap (ganti `[YOUR URL]`)
- `links`: Instagram, Kaggle, dll (ganti `[YOUR URL]`; salin satu baris untuk menambah)
- `CERT`: judul, penerbit, tahun, dan `link` kredensial untuk slot 6 sampai 8 (dan link untuk slot 1 sampai 5)
- `P`: judul, deskripsi, tools, `link` proyek

Teks lain bertanda `[YOUR ...]` (cerita singkat, minat, tujuan karier) ada di `index.html`: tekan Ctrl+F, cari `[YOUR`.
