// Global Interactivity and Animations
document.addEventListener('DOMContentLoaded', () => {
    // Helper: get current language
    const getLang = () => localStorage.getItem('sync-lang') || 'ar';

    // 1. In-Website Message Modal Helper Function
    window.showInWebsiteMessage = (titleAr, titleEn, textAr, textEn, type = 'success') => {
        const modal = document.getElementById('inwebsite-message-modal');
        const titleEl = document.getElementById('msg-modal-title');
        const textEl = document.getElementById('msg-modal-text');
        const iconEl = document.getElementById('msg-modal-icon');
        const iconContainer = document.getElementById('msg-modal-icon-container');
        const lang = getLang();

        if (modal && titleEl && textEl && iconEl && iconContainer) {
            titleEl.textContent = lang === 'ar' ? titleAr : titleEn;
            const text = lang === 'ar' ? textAr : textEn;
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
            const title = lang === 'ar' ? titleAr : titleEn;
            const text = lang === 'ar' ? textAr : textEn;
            alert(`${title}\n\n${text}`);
        }
    };

    // 2. Smooth scroll for anchor links pointing to sections
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

    // 3. Handle consultation form validation and submission feedback
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Gather input fields
            const inputs = contactForm.querySelectorAll('input, select, textarea');
            let allFilled = true;
            inputs.forEach(input => {
                if (input.hasAttribute('required') && !input.value.trim()) {
                    allFilled = false;
                }
            });

            if (!allFilled) {
                showInWebsiteMessage(
                    'تنبيه',
                    'Warning',
                    'الرجاء ملء جميع الحقول المطلوبة المميزة بعلامة (*).',
                    'Please fill in all required fields marked with (*).',
                    'error'
                );
                return;
            }

            // Mock submission success (static site)
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnContent = submitBtn.innerHTML;
            
            submitBtn.disabled = true;
            const lang = getLang();
            submitBtn.innerHTML = `
                <span>${lang === 'ar' ? 'جاري إرسال الطلب...' : 'Sending...'}</span>
                <span class="material-symbols-outlined animate-spin text-sm">sync</span>
            `;

            setTimeout(() => {
                showInWebsiteMessage(
                    'تم الإرسال بنجاح',
                    'Sent Successfully',
                    'شكرًا لتواصلك معنا! تم إرسال طلب الاستشارة الخاص بك بنجاح، وسيتصل بك أحد خبرائنا قريبًا.',
                    'Thank you for reaching out! Your consultation request has been successfully sent. One of our experts will contact you shortly.',
                    'success'
                );
                
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnContent;
            }, 1200);
        });
    }

    // 4. Scroll Reveal Interactions
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
