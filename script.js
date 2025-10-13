document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA DE ROLAGEM SUAVE E LINKS INTERNOS ---
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // Permite que links de WhatsApp passem direto
            if (!this.getAttribute('href').startsWith('#')) {
                return; 
            }
            
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Rola suavemente para o elemento, compensando o header fixo
                window.scrollTo({
                    top: targetElement.offsetTop - 100, 
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // --- LÓGICA DO HEADER INTELIGENTE (SMART HEADER) ---
    let lastScrollTop = 0;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        let currentScroll = window.scrollY || document.documentElement.scrollTop;

        if (currentScroll > 80) {
            // Rolar para baixo
            if (currentScroll > lastScrollTop) {
                header.classList.add('hidden');
            } 
            // Rolar para cima
            else if (currentScroll < lastScrollTop) {
                header.classList.remove('hidden');
            }
        } else {
            header.classList.remove('hidden');
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }, false); 
    
    // --- LÓGICA DO BOTÃO VOLTAR AO TOPO ---
    const scrollBtn = document.getElementById('scrollToTopBtn');

    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // --- 1. INICIALIZAÇÃO DO CARROSSEL DE SERVIÇOS ---
    new Swiper(".mySwiper", {
        // PROPRIEDADES DE MOVIMENTO "VIVO"
        loop: true, 
        autoplay: {
            delay: 1500, 
            disableOnInteraction: false, 
        },
        speed: 1000, 
        // FIM PROPRIEDADES DE MOVIMENTO "VIVO"
        
        slidesPerView: 2, 
        slidesPerColumn: 2, 
        spaceBetween: 20, 

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        
        // Responsividade para Serviços (5 colunas, 2 linhas no desktop)
        breakpoints: {
            320: {
                slidesPerView: 1, 
                slidesPerColumn: 1, 
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 2, 
                slidesPerColumn: 2, 
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 5, 
                slidesPerColumn: 2,
                spaceBetween: 30,
            },
        },
    });


    // --- 2. INICIALIZAÇÃO DO CARROSSEL DE PACOTES EXCLUSIVOS (NOVO) ---
    new Swiper(".mySwiperPacotes", {
        // PROPRIEDADES DE MOVIMENTO "VIVO" (IGUAIS AOS SERVIÇOS)
        loop: true, 
        autoplay: {
            delay: 1500, 
            disableOnInteraction: false, 
        },
        speed: 1000, 
        // FIM PROPRIEDADES DE MOVIMENTO "VIVO"
        
        slidesPerView: 1, 
        slidesPerColumn: 1, 
        spaceBetween: 30, 

        // Paginação e Navegação usam as classes únicas que criamos no HTML
        pagination: {
            el: ".pacotes-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".pacotes-next",
            prevEl: ".pacotes-prev",
        },
        
        // Responsividade para Pacotes (3 colunas, 1 linha no desktop)
        breakpoints: {
            320: {
                slidesPerView: 1, 
                slidesPerColumn: 1, 
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 2, 
                slidesPerColumn: 1, 
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3, // 3 pacotes visíveis por vez no desktop
                slidesPerColumn: 1,
                spaceBetween: 30,
            },
        },
    });
});