// Global Interactivity and Animations
document.addEventListener('DOMContentLoaded', () => {
    // 1. Language Toggle & Placeholder Translation Helper
    const updatePlaceholders = () => {
        const isEn = document.documentElement.lang === 'en';
        document.querySelectorAll('[data-placeholder-ar]').forEach(input => {
            const arVal = input.getAttribute('data-placeholder-ar');
            const enVal = input.getAttribute('data-placeholder-en');
            input.placeholder = isEn ? enVal : arVal;
        });
    };

    // Initialize placeholders
    updatePlaceholders();

    // Listen for language change event to update placeholders dynamically
    window.addEventListener('sync-lang-changed', updatePlaceholders);

    // 2. In-Website Message Modal Helper Function
    window.showInWebsiteMessage = (title, text, type = 'success') => {
        const modal = document.getElementById('inwebsite-message-modal');
        const titleEl = document.getElementById('msg-modal-title');
        const textEl = document.getElementById('msg-modal-text');
        const iconEl = document.getElementById('msg-modal-icon');
        const iconContainer = document.getElementById('msg-modal-icon-container');

        if (modal && titleEl && textEl && iconEl && iconContainer) {
            titleEl.textContent = title;
            textEl.innerHTML = text.replace(/\n/g, '<br>');
            
            if (type === 'error') {
                iconEl.textContent = 'warning';
                iconContainer.className = "w-16 h-16 rounded-full flex items-center justify-center bg-error-container text-error mb-2";
            } else {
                iconEl.textContent = 'check_circle';
                iconContainer.className = "w-16 h-16 rounded-full flex items-center justify-center bg-secondary/10 text-secondary mb-2";
            }
            
            modal.showModal();
        } else {
            alert(`${title}\n\n${text}`);
        }
    };

    // 3. Smooth scroll for anchor links pointing to sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').slice(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 4. Handle consultation form validation and submission feedback
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const isAr = document.documentElement.lang === 'ar';
            
            // Gather input fields using unique IDs
            const fullName = document.getElementById('form-fullname')?.value.trim();
            const email = document.getElementById('form-email')?.value.trim();
            const phone = document.getElementById('form-phone')?.value.trim();
            const service = document.getElementById('form-service')?.value;
            const message = document.getElementById('form-message')?.value.trim();

            if (!fullName || !email || !phone || !service || !message) {
                showInWebsiteMessage(
                    isAr ? 'تنبيه' : 'Warning', 
                    isAr ? 'الرجاء ملء جميع الحقول المطلوبة المميزة بعلامة (*).' : 'Please fill in all required fields marked with (*).', 
                    'error'
                );
                return;
            }

            // Mock submission success (since it's a static site)
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnContent = submitBtn.innerHTML;
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = isAr ? `
                <span>جاري إرسال الطلب...</span>
                <span class="material-symbols-outlined animate-spin text-sm">sync</span>
            ` : `
                <span>Sending...</span>
                <span class="material-symbols-outlined animate-spin text-sm">sync</span>
            `;

            setTimeout(() => {
                showInWebsiteMessage(
                    isAr ? 'تم الإرسال بنجاح' : 'Sent Successfully',
                    isAr ? 'شكرًا لتواصلك معنا! تم إرسال طلب الاستشارة الخاص بك بنجاح، وسيتصل بك أحد خبرائنا قريبًا.' : 'Thank you for reaching out! Your consultation request has been successfully sent. One of our experts will contact you shortly.',
                    'success'
                );
                
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnContent;
            }, 1200);
        });
    }

    // 5. Scroll Reveal Interactions
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
