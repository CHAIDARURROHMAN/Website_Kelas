// TIDAK ADA PERUBAHAN - KODE INI MASIH BERFUNGSI
document.addEventListener('DOMContentLoaded', () => {

    // ======== FUNGSI NAVIGASI UTAMA (GANTI HALAMAN) ========
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); 

            const targetId = link.getAttribute('data-target');

            navLinks.forEach(nav => nav.classList.remove('active'));
            contentSections.forEach(section => section.classList.remove('active'));

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

            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            button.classList.add('active');
            document.getElementById(targetTabId).classList.add('active');
        });
    });

    // ======== FUNGSI TAB (JADWAL PIKET) ========
    const piketTabButtons = document.querySelectorAll('.tab-btn-piket');
    const piketTabContents = document.querySelectorAll('.tab-content-piket');

    piketTabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTabId = button.getAttribute('data-tab');

            piketTabButtons.forEach(btn => btn.classList.remove('active'));
            piketTabContents.forEach(content => content.classList.remove('active'));

            button.classList.add('active');
            document.getElementById(targetTabId).classList.add('active');
        });
    });

});
