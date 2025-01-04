// Kiểm tra và đảm bảo OwlCarousel hoạt động đúng
$(document).ready(function () {$('#slide').owlCarousel
({
loop: true, // Cho phép lặp lại
items: 1, // Chỉ xuất hiện 1 ảnh
smartSpeed: 1000, // Tốc độ thay đổi ảnh
autoplay: true, // Cho phép tự động chạy
autoplayTimeout: 20000, // Thời gian chờ khi chuyển ảnh
nav: true, // Hiển thị nút điều hướng
dots: false, // Không hiển thị dots
    });

    // Toggle hiển thị/ẩn nội dung
    $(".toggle-trigger").click(function () {
        var target = $(this).data("toggle");
        $("#" + target).slideToggle(); // Hiển thị/ẩn phần nội dung
    });

    // Điều khiển hiển thị các phần theo radio button
    const radios = document.querySelectorAll('.toggle_option');
    const sections = document.querySelectorAll('.image_section');

    radios.forEach(radio => {
        radio.addEventListener('change', () => {
            sections.forEach(section => {
                section.style.display = 'none'; // Ẩn tất cả các section
            });
            const activeSection = document.querySelector(`#${radio.id}_images`);
            if (activeSection) {
                activeSection.style.display = 'block'; // Hiển thị phần đã chọn
            }
        });
    });

    // Khởi tạo Typed.js để tạo hiệu ứng gõ chữ
    var typed = new Typed('.element', {
        strings: ["Web Designer.", "Code Developer.", "Apps Designer.", "3D Animation"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });

    // Khởi tạo AOS.js cho hiệu ứng cuộn
    AOS.init();

    // Lazy load video khi video vào viewport
    const videos = document.querySelectorAll('.lazy-video');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const video = entry.target;
                if (video.tagName === 'VIDEO') {
                    video.play().catch(error => console.error('Video play error:', error));
                }
                observer.unobserve(video); // Dừng quan sát sau khi phát video
            }
        });
    }, {
        threshold: 0.5 // Video phải hiển thị ít nhất 50% mới kích hoạt
    });

    videos.forEach(video => observer.observe(video));
});
