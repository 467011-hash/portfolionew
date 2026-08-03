// ==========================================================================
// Portfolio Interactive Scripts - Natthawat Somphanratphan
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. ระบบกรองผลงาน (Filter Cards) ---
    const filterButtons = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // เปลี่ยนสถานะปุ่มที่ถูกเลือก (Active Class)
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const filterValue = button.getAttribute("data-filter");

            // ซ่อน/แสดง การ์ดตามหมวดหมู่
            cards.forEach(card => {
                const category = card.getAttribute("data-category");
                
                if (filterValue === "all" || category === filterValue) {
                    card.style.display = "block";
                    card.style.animation = "fadeIn 0.4s ease forwards";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

    // --- 2. ปุ่มเลื่อนกลับขึ้นด้านบน (Back to Top Button) ---
    const backToTopBtn = document.getElementById("backToTop");

    if (backToTopBtn) {
        // แสดง/ซ่อน ปุ่มตามการเลื่อนหน้าจอ
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add("show");
            } else {
                backToTopBtn.classList.remove("show");
            }
        });

        // เลื่อนขึ้นด้านบนแบบนุ่มนวลเมื่อกดปุ่ม
        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // --- 3. แฟลชการ์ดเมื่อคลิก (Click Effect) ---
    cards.forEach(card => {
        card.addEventListener("click", () => {
            card.style.transform = "scale(0.98)";
            setTimeout(() => {
                card.style.transform = "";
            }, 150);
        });
    });

});
