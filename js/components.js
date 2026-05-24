document.addEventListener('DOMContentLoaded', () => {
    // 1. Identify current active page
    const getActivePage = () => {
        const path = window.location.pathname;
        if (path.includes('about.html')) return 'about';
        if (path.includes('capabilities.html')) return 'capabilities';
        if (path.includes('pillars.html')) return 'pillars';
        if (path.includes('process.html')) return 'process';
        if (path.includes('contact.html')) return 'contact';
        return 'index';
    };

    const activePage = getActivePage();

    // Utility function to set link classes
    const getLinkClass = (pageName) => {
        const base = "font-label-md text-label-md transition-colors duration-300 py-2 px-1 relative ";
        if (activePage === pageName) {
            return base + "text-secondary font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-secondary";
        }
        return base + "text-on-surface-variant hover:text-primary";
    };

    // 2. Render Header
    const headerElement = document.getElementById('global-header');
    if (headerElement) {
        headerElement.className = "fixed w-full top-0 z-50 bg-surface/85 backdrop-blur-md border-b border-outline-variant/30 flex justify-center items-center px-margin-mobile md:px-margin-desktop h-20 max-w-[1440px] mx-auto left-0 right-0";
        headerElement.innerHTML = `
            <div class="flex items-center justify-between w-full h-full relative" dir="rtl">
                <!-- Right Side: Brand Logo -->
                <a href="index.html" class="flex items-center gap-3">
                    <img src="https://lh3.googleusercontent.com/aida/ADBb0ugXEp-4-joNgCjowYWbiwVaxWqHV6rnSnEvqgyGzYkEQPakvHQlXIXFPkzNoqPBk90DzSVg1JcdZNWd5Ss8v1hJkB0Ye3KtXO-DnYg2-4yxI1ehzMxKMmk7AMCkAWkEaocyNArgzyXiebRenCIxGd5rMTXvQw0akjU4bE8HEIUMR6up6p_F6rhzaO9ei7wC5-UmdPHK0TIwbunXqRYckXToxipecgh9kmWu8Lcr8Sn4_8E3KobGKZJOYA" 
                         alt="Sync Brand Logo" class="h-10 w-10 rounded-lg ambient-shadow-sm border border-outline-variant/20 hover:scale-105 transition-transform duration-200">
                    <span class="font-headline-md text-primary font-bold tracking-wide">سينك | Sync</span>
                </a>

                <!-- Center: Desktop Menu -->
                <div class="hidden md:flex gap-8 items-center">
                    <a class="${getLinkClass('index')}" href="index.html">الرئيسية / Home</a>
                    <a class="${getLinkClass('capabilities')}" href="capabilities.html">القدرات / Capabilities</a>
                    <a class="${getLinkClass('pillars')}" href="pillars.html">الركائز / Pillars</a>
                    <a class="${getLinkClass('process')}" href="process.html">العملية / Process</a>
                    <a class="${getLinkClass('about')}" href="about.html">عن الشركة / About</a>
                </div>

                <!-- Left Side: Header CTA / Hamburger -->
                <div class="flex items-center gap-4">
                    <a href="contact.html" class="hidden md:inline-flex bg-primary text-on-primary hover:bg-secondary hover:text-on-secondary px-6 py-2.5 rounded-full font-label-md text-label-md btn-hover items-center gap-2">
                        طلب استشارة / Contact
                        <span class="material-symbols-outlined text-sm">arrow_outward</span>
                    </a>
                    
                    <!-- Mobile Hamburger Button -->
                    <button id="mobile-menu-toggle" class="md:hidden text-primary p-2 focus:outline-none" aria-label="Toggle menu">
                        <span class="material-symbols-outlined text-3xl">menu</span>
                    </button>
                </div>
            </div>

            <!-- Mobile Drawer Overlay Backdrop -->
            <div id="mobile-drawer-backdrop" class="fixed inset-0 bg-black/40 backdrop-blur-sm z-[99] hidden opacity-0 transition-opacity duration-300"></div>
            
            <!-- Mobile Drawer Sidebar -->
            <div id="mobile-drawer" class="fixed top-0 right-0 h-full w-[80vw] max-w-[360px] bg-surface z-[100] p-6 shadow-2xl flex flex-col justify-between transform translate-x-full transition-transform duration-300" dir="rtl">
                <div>
                    <!-- Drawer Header -->
                    <div class="flex items-center justify-between border-b border-outline-variant/30 pb-4 mb-6">
                        <div class="flex items-center gap-2">
                            <img src="https://lh3.googleusercontent.com/aida/ADBb0ugXEp-4-joNgCjowYWbiwVaxWqHV6rnSnEvqgyGzYkEQPakvHQlXIXFPkzNoqPBk90DzSVg1JcdZNWd5Ss8v1hJkB0Ye3KtXO-DnYg2-4yxI1ehzMxKMmk7AMCkAWkEaocyNArgzyXiebRenCIxGd5rMTXvQw0akjU4bE8HEIUMR6up6p_F6rhzaO9ei7wC5-UmdPHK0TIwbunXqRYckXToxipecgh9kmWu8Lcr8Sn4_8E3KobGKZJOYA" 
                                 alt="Sync Brand Logo" class="h-8 w-8 rounded">
                            <span class="font-headline-md text-primary font-bold text-lg">قائمة سينك</span>
                        </div>
                        <button id="mobile-menu-close" class="text-on-surface-variant hover:text-primary p-1 focus:outline-none">
                            <span class="material-symbols-outlined text-2xl">close</span>
                        </button>
                    </div>

                    <!-- Drawer Links -->
                    <nav class="flex flex-col gap-4">
                        <a class="flex items-center justify-between py-3 px-4 rounded-xl transition-colors ${activePage === 'index' ? 'bg-secondary/10 text-secondary font-medium' : 'text-on-surface hover:bg-surface-container-low'}" href="index.html">
                            <span>الرئيسية / Home</span>
                            <span class="material-symbols-outlined text-sm">chevron_left</span>
                        </a>
                        <a class="flex items-center justify-between py-3 px-4 rounded-xl transition-colors ${activePage === 'capabilities' ? 'bg-secondary/10 text-secondary font-medium' : 'text-on-surface hover:bg-surface-container-low'}" href="capabilities.html">
                            <span>القدرات / Capabilities</span>
                            <span class="material-symbols-outlined text-sm">chevron_left</span>
                        </a>
                        <a class="flex items-center justify-between py-3 px-4 rounded-xl transition-colors ${activePage === 'pillars' ? 'bg-secondary/10 text-secondary font-medium' : 'text-on-surface hover:bg-surface-container-low'}" href="pillars.html">
                            <span>الركائز / Pillars</span>
                            <span class="material-symbols-outlined text-sm">chevron_left</span>
                        </a>
                        <a class="flex items-center justify-between py-3 px-4 rounded-xl transition-colors ${activePage === 'process' ? 'bg-secondary/10 text-secondary font-medium' : 'text-on-surface hover:bg-surface-container-low'}" href="process.html">
                            <span>العملية / Process</span>
                            <span class="material-symbols-outlined text-sm">chevron_left</span>
                        </a>
                        <a class="flex items-center justify-between py-3 px-4 rounded-xl transition-colors ${activePage === 'about' ? 'bg-secondary/10 text-secondary font-medium' : 'text-on-surface hover:bg-surface-container-low'}" href="about.html">
                            <span>عن الشركة / About</span>
                            <span class="material-symbols-outlined text-sm">chevron_left</span>
                        </a>
                    </nav>
                </div>

                <!-- Drawer CTA Footer -->
                <div class="border-t border-outline-variant/30 pt-4">
                    <a href="contact.html" class="w-full bg-primary text-on-primary hover:bg-secondary hover:text-on-secondary py-4 rounded-full font-label-md text-label-md btn-hover flex items-center justify-center gap-2">
                        طلب استشارة / Consultation
                        <span class="material-symbols-outlined text-sm">arrow_outward</span>
                    </a>
                </div>
            </div>
        `;
    }

    // 3. Render Footer
    const footerElement = document.getElementById('global-footer');
    if (footerElement) {
        footerElement.className = "bg-surface-container border-t border-outline-variant/20 shadow-sm mt-auto pt-16 pb-8";
        footerElement.innerHTML = `
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12 px-margin-mobile md:px-margin-desktop pb-12 max-w-[1440px] mx-auto text-center md:text-right" dir="rtl">
                <!-- Column 1: Quick Links -->
                <div class="flex flex-col items-center md:items-start">
                    <h4 class="font-headline-md text-headline-md text-primary mb-6">روابط سريعة / Links</h4>
                    <ul class="flex flex-col gap-4 items-center md:items-start">
                        <li><a class="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors" href="about.html">عن الشركة / ABOUT US</a></li>
                        <li><a class="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors" href="capabilities.html">خدماتنا / SERVICES</a></li>
                        <li><button class="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors cursor-pointer" onclick="document.getElementById('privacy-modal').showModal()">سياسة الخصوصية / PRIVACY POLICY</button></li>
                        <li><button class="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors cursor-pointer" onclick="document.getElementById('terms-modal').showModal()">شروط الخدمة / TERMS OF SERVICE</button></li>
                    </ul>
                </div>

                <!-- Column 2: Contact Info -->
                <div class="flex flex-col items-center md:items-start">
                    <h4 class="font-headline-md text-headline-md text-primary mb-6">معلومات التواصل / Contact</h4>
                    <div class="flex flex-col gap-4 font-body-md text-on-surface-variant items-center md:items-start">
                        <div class="flex items-start gap-3">
                            <span class="material-symbols-outlined text-primary">location_on</span>
                            <div class="text-center md:text-right">
                                <p class="font-semibold text-on-surface">طرابلس ، ليبيا</p>
                                <p dir="ltr" class="text-sm opacity-80">Tripoli, Libya</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-3">
                            <span class="material-symbols-outlined text-primary">mail</span>
                            <a href="mailto:nafaelhadi@gmail.com" class="hover:text-secondary transition-colors" dir="ltr">nafaelhadi@gmail.com</a>
                        </div>
                    </div>
                </div>

                <!-- Column 3: Social Media -->
                <div class="flex flex-col items-center md:items-start">
                    <h4 class="font-headline-md text-headline-md text-primary mb-6">قنوات التواصل الاجتماعي / Social</h4>
                    <div class="flex gap-4 text-on-surface-variant">
                        <a class="w-12 h-12 bg-surface rounded-full flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all duration-200 border border-outline-variant/30 ambient-shadow-sm hover:-translate-y-1" href="#" aria-label="TikTok">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.032 2.612.353 3.746 1.069.103.06.208.124.306.195.038.03.07.063.102.096.513.527.99 1.11 1.418 1.741.026.04.05.08.07.121.11.205.212.413.3.628.014.033.033.066.047.1.397.97.585 2.01.549 3.056-.002.11-.005.22-.012.33-.03.73-.149 1.456-.356 2.154-.067.243-.153.481-.253.714-.01.023-.015.047-.025.07-.113.287-.247.562-.395.83-.023.04-.047.085-.07.126-.143.256-.308.502-.485.736-.07.09-.145.18-.223.265-.19.208-.4.401-.617.581-.173.14-.355.27-.547.387-.411.255-.852.464-1.314.622-.213.072-.432.133-.654.183-.23.052-.462.09-.697.118-.36.044-.725.064-1.092.06H12c-.18.001-.354.006-.529.015-1.127.05-2.228.388-3.193.98-.013.01-.027.02-.04.03-.98.604-1.741 1.47-2.19 2.5a5.3 5.3 0 00-.39 1.45c-.015.11-.025.223-.032.336-.016.27-.016.541 0 .811.008.13.02.26.037.389.043.344.113.684.21 1.015.127.427.314.834.552 1.208.032.052.07.1.107.15.244.33.535.626.864.88.083.064.17.123.26.18.397.246.83.435 1.285.56.037.01.074.02.11.03.488.13 1.012.164 1.517.1 1.24-.157 2.368-.781 3.167-1.753.052-.06.101-.125.148-.19.467-.655.772-1.403.896-2.2.015-.098.026-.197.034-.296.012-.138.017-.278.017-.417V8.84c.32.221.655.421 1.004.598.03.016.062.03.093.045.367.178.745.333 1.132.464.072.025.144.048.217.07.618.188 1.258.283 1.902.283h.142c.42 0 .84-.04 1.253-.12.062-.012.124-.027.185-.042.417-.1.824-.251 1.213-.448.066-.033.132-.07.198-.105.18-.096.353-.203.52-.32.034-.025.068-.05.101-.077.3-.238.577-.504.825-.795.035-.041.069-.084.103-.127.23-.298.432-.616.6-.95.033-.065.064-.131.093-.198.117-.272.213-.554.288-.843.021-.082.039-.165.056-.248.082-.411.123-.83.123-1.25v-.312c0-.31-.023-.62-.069-.926-.01-.06-.02-.122-.032-.183-.06-.301-.15-.597-.268-.881-.02-.047-.042-.093-.065-.14-.145-.303-.32-.591-.52-.863-.035-.047-.07-.093-.108-.139-.236-.282-.505-.536-.8-.758-.035-.027-.07-.053-.106-.079-.27-.197-.563-.365-.87-.502-.036-.016-.072-.03-.11-.045-.327-.13-.668-.223-1.016-.279-.085-.013-.171-.024-.257-.033C21.464 2.115 21.031 2.1 20.6 2.1c-.247 0-.495.01-.741.031-.082.007-.165.016-.247.027-.37.049-.733.133-1.087.25-.09.03-.179.064-.267.1-.334.135-.654.302-.958.497-.087.056-.172.115-.256.176-.283.208-.545.443-.784.7-.03.033-.06.066-.088.1-.19.227-.358.473-.504.731-.018.032-.034.065-.05.097-.13.255-.236.523-.316.8-.01.037-.02.073-.029.11-.08.318-.12.645-.12.973V18.1c-.01.05-.014.101-.014.152 0 .524.237 1.015.632 1.346.04.03.08.06.12.09.28.21.61.34.96.38.05.006.103.01.156.01.325 0 .638-.08.916-.23.053-.03.104-.06.152-.1.352-.284.588-.7.632-1.168.006-.06.01-.122.01-.184V8.4h.6c.15-.001.3-.008.45-.02.08-.007.161-.016.241-.027.315-.042.624-.116.924-.22.07-.024.14-.05.21-.077.294-.114.577-.254.846-.42.062-.039.124-.08.185-.122.253-.178.489-.379.704-.6.03-.031.06-.062.088-.094.205-.23.388-.479.547-.745.03-.05.059-.101.087-.152.146-.264.267-.542.36-.831.025-.078.048-.157.068-.236.082-.32.13-.65.143-.984.004-.12.004-.241 0-.362a5.4 5.4 0 00-.143-.984c-.02-.079-.043-.158-.068-.236a5.5 5.5 0 00-.36-.831 5.6 5.6 0 00-.547-.745c-.029-.032-.058-.063-.088-.094a5.36 5.36 0 00-.704-.6 5.6 5.6 0 00-1.03-.54c-.07-.029-.14-.055-.21-.08-.3-.105-.609-.18-.924-.22a5.8 5.8 0 00-.691-.047h-.6V.02h-.15z"></path></svg>
                        </a>
                        <a class="w-12 h-12 bg-surface rounded-full flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all duration-200 border border-outline-variant/30 ambient-shadow-sm hover:-translate-y-1" href="#" aria-label="Instagram">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path clip-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" fill-rule="evenodd"></path></svg>
                        </a>
                        <a class="w-12 h-12 bg-surface rounded-full flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all duration-200 border border-outline-variant/30 ambient-shadow-sm hover:-translate-y-1" href="#" aria-label="Facebook">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path clip-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fill-rule="evenodd"></path></svg>
                        </a>
                        <a class="w-12 h-12 bg-surface rounded-full flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all duration-200 border border-outline-variant/30 ambient-shadow-sm hover:-translate-y-1" href="#" aria-label="LinkedIn">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path clip-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
            <div class="text-center pt-8 border-t border-outline-variant/20 px-margin-mobile max-w-[1440px] mx-auto">
                <p class="font-label-md text-label-md text-on-surface-variant">
                    © 2026 Sync Operations. All rights reserved. | جميع الحقوق محفوظة لشركة سينك
                </p>
            </div>
        `;
    }

    // 4. Render Modals (Privacy Policy, Terms of Service)
    const modalsElement = document.getElementById('global-modals');
    if (modalsElement) {
        modalsElement.innerHTML = `
            <!-- Privacy Policy Modal -->
            <dialog class="p-8 rounded-2xl bg-surface max-w-2xl w-full mx-auto outline-none border border-outline-variant/30 ambient-shadow-md" id="privacy-modal">
                <div class="flex justify-between items-center mb-6" dir="rtl">
                    <h2 class="font-headline-md text-headline-md text-primary">سياسة الخصوصية / Privacy Policy</h2>
                    <button class="text-on-surface-variant hover:text-primary transition-colors focus:outline-none" onclick="document.getElementById('privacy-modal').close()">
                        <span class="material-symbols-outlined text-2xl">close</span>
                    </button>
                </div>
                <div class="font-body-md text-body-md text-on-surface-variant space-y-4 max-h-[60vh] overflow-y-auto pr-4 text-right" dir="rtl">
                    <p class="font-bold">نحن نقدر خصوصيتك. توضح هذه السياسة كيف نجمع ونستخدم بياناتك:</p>
                    <ul class="list-disc pr-6 space-y-2">
                        <li>نستخدم معلومات الاتصال لتقديم الاستشارات الفنية المطلوبة.</li>
                        <li>لا نشارك معلوماتك الشخصية أو التجارية مع أي طرف ثالث دون موافقتك الصريحة.</li>
                        <li>نطبق أعلى معايير الحماية لضمان أمن قواعد البيانات وقنوات الاتصال.</li>
                    </ul>
                    <p class="text-left font-semibold border-t border-outline-variant/20 pt-4" dir="ltr">We value your privacy. This policy explains how we collect and use your data to maintain professional services.</p>
                </div>
                <div class="mt-8 pt-4 border-t border-outline-variant/20 text-left">
                    <button class="bg-primary text-on-primary px-6 py-2 rounded-full font-label-md text-label-md btn-hover" onclick="document.getElementById('privacy-modal').close()">Close / إغلاق</button>
                </div>
            </dialog>

            <!-- Terms of Service Modal -->
            <dialog class="p-8 rounded-2xl bg-surface max-w-2xl w-full mx-auto outline-none border border-outline-variant/30 ambient-shadow-md" id="terms-modal">
                <div class="flex justify-between items-center mb-6" dir="rtl">
                    <h2 class="font-headline-md text-headline-md text-primary">شروط الخدمة / Terms of Service</h2>
                    <button class="text-on-surface-variant hover:text-primary transition-colors focus:outline-none" onclick="document.getElementById('terms-modal').close()">
                        <span class="material-symbols-outlined text-2xl">close</span>
                    </button>
                </div>
                <div class="font-body-md text-body-md text-on-surface-variant space-y-4 max-h-[60vh] overflow-y-auto pr-4 text-right" dir="rtl">
                    <p class="font-bold">باستخدام خدماتنا، فإنك توافق على الشروط التالية:</p>
                    <ul class="list-disc pr-6 space-y-2">
                        <li>تعتبر الاستشارات المقدمة سرية تماماً ومخصصة لمصلحة مؤسستكم فقط.</li>
                        <li>تخضع جميع عمليات تخصيص ERPNext ودعم الشبكات لاتفاقيات مستوى الخدمة (SLA) المتفق عليها.</li>
                        <li>يتم توفير خدمات الدعم الفني بشكل مستمر بناءً على بنود خطة الاشتراك المختارة.</li>
                    </ul>
                    <p class="text-left font-semibold border-t border-outline-variant/20 pt-4" dir="ltr">By using our services, you agree to the terms outline in our service level agreement (SLA).</p>
                </div>
                <div class="mt-8 pt-4 border-t border-outline-variant/20 text-left">
                    <button class="bg-primary text-on-primary px-6 py-2 rounded-full font-label-md text-label-md btn-hover" onclick="document.getElementById('terms-modal').close()">Close / إغلاق</button>
                </div>
            </dialog>
        `;
    }

    // 5. Hook up Mobile Hamburger Menu Logic
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const closeBtn = document.getElementById('mobile-menu-close');
    const backdrop = document.getElementById('mobile-drawer-backdrop');
    const drawer = document.getElementById('mobile-drawer');

    if (toggleBtn && closeBtn && backdrop && drawer) {
        const openDrawer = () => {
            backdrop.classList.remove('hidden');
            // Give browser a frame to apply transition
            setTimeout(() => {
                backdrop.classList.add('opacity-100');
                drawer.classList.remove('translate-x-full');
                drawer.classList.add('translate-x-0');
            }, 10);
        };

        const closeDrawer = () => {
            backdrop.classList.remove('opacity-100');
            drawer.classList.remove('translate-x-0');
            drawer.classList.add('translate-x-full');
            // Hide backdrop after transition completes
            setTimeout(() => {
                backdrop.classList.add('hidden');
            }, 300);
        };

        toggleBtn.addEventListener('click', openDrawer);
        closeBtn.addEventListener('click', closeDrawer);
        backdrop.addEventListener('click', closeDrawer);
    }
});
