// Menunggu sampai semua konten HTML selesai dimuat
document.addEventListener('DOMContentLoaded', () => {

    // ======== FUNGSI NAVIGASI UTAMA (GANTI HALAMAN) ========
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Mencegah link pindah halaman (default)

            const targetId = link.getAttribute('data-target');

            // 1. Hapus kelas 'active' dari semua link dan section
            navLinks.forEach(nav => nav.classList.remove('active'));
            contentSections.forEach(section => section.classList.remove('active'));

            // 2. Tambah kelas 'active' ke link yang diklik dan section target
            link.classList.add('active');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // ======== FUNGSI TAB (JADWAL PELAJARAN) ========
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTabId = button.getAttribute('data-tab');

            // 1. Hapus 'active' dari semua tombol dan konten tab jadwal
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // 2. Tambah 'active' ke tombol yang diklik dan konten targetnya
            button.classList.add('active');
            document.getElementById(targetTabId).classList.add('active');
        });
    });

    // ======== FUNGSI TAB (JADWAL PIKET) ========
    // (Kode ini terpisah agar tidak bentrok dengan tab jadwal)
    const piketTabButtons = document.querySelectorAll('.tab-btn-piket');
    const piketTabContents = document.querySelectorAll('.tab-content-piket');

    piketTabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTabId = button.getAttribute('data-tab');

            // 1. Hapus 'active' dari semua tombol dan konten tab piket
            piketTabButtons.forEach(btn => btn.classList.remove('active'));
            piketTabContents.forEach(content => content.classList.remove('active'));

            // 2. Tambah 'active' ke tombol yang diklik dan konten targetnya
            button.classList.add('active');
            document.getElementById(targetTabId).classList.add('active');
        });
    });

});
