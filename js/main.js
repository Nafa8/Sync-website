// Global Interactivity and Animations
document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth scroll for anchor links pointing to sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').slice(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Smooth scroll to the target section
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 2. Handle consultation form validation and submission feedback
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Gather input fields
            const fullName = contactForm.querySelector('input[type="text"]')?.value.trim();
            const companyName = contactForm.querySelectorAll('input[type="text"]')[1]?.value.trim();
            const email = contactForm.querySelector('input[type="email"]')?.value.trim();
            const phone = contactForm.querySelector('input[type="tel"]')?.value.trim();
            const service = contactForm.querySelector('select')?.value;
            const message = contactForm.querySelector('textarea')?.value.trim();

            if (!fullName || !email || !phone || !service) {
                alert('الرجاء ملء الحقول الأساسية (الاسم، البريد الإلكتروني، رقم الهاتف، والخدمة المطلوبة) / Please fill in all required fields.');
                return;
            }

            // Mock submission success (since it's a static site)
            // Creating a modern and sleek success prompt
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnContent = submitBtn.innerHTML;
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = `
                <span>جاري إرسال الطلب... / Sending...</span>
                <span class="material-symbols-outlined animate-spin">sync</span>
            `;

            setTimeout(() => {
                // Success message
                alert('شكرًا لتواصلك معنا! تم إرسال طلب الاستشارة الخاص بك بنجاح، وسيتصل بك أحد خبرائنا قريبًا.\n\nThank you for reaching out! Your consultation request has been successfully sent. One of our experts will contact you shortly.');
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnContent;
            }, 1200);
        });
    }

    // 3. Scroll-to-top feature or animations on scroll can go here
    const revealOnScroll = () => {
        const reveals = document.querySelectorAll('.group, .bg-surface, .p-8');
        const windowHeight = window.innerHeight;
        
        reveals.forEach(reveal => {
            const elementTop = reveal.getBoundingClientRect().top;
            const elementVisible = 100;
            
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // trigger once on load
});
