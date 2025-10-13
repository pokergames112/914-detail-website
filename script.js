document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA DE ROLAGEM SUAVE E LINKS INTERNOS ---
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // Verifica se o link não é um link de contato direto (como o WhatsApp)
            if (!this.getAttribute('href').startsWith('#')) {
                return; 
            }
            
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Rola suavemente para o elemento
                window.scrollTo({
                    // -100 para compensar o header fixo, garantindo que o topo da seção apareça
                    top: targetElement.offsetTop - 100, 
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // --- LÓGICA DO HEADER INTELIGENTE (SMART HEADER) ---
    let lastScrollTop = 0; // Armazena a última posição de rolagem
    const header = document.querySelector('.header'); // Seleciona o seu elemento header

    window.addEventListener('scroll', () => {
        let currentScroll = window.scrollY || document.documentElement.scrollTop;

        // Se a rolagem atual for 80px maior que zero (para ignorar o topo)
        if (currentScroll > 80) {
            // Rolar para baixo
            if (currentScroll > lastScrollTop) {
                // Adiciona a classe 'hidden' para deslizar para cima (esconder)
                header.classList.add('hidden');
            } 
            // Rolar para cima
            else if (currentScroll < lastScrollTop) {
                // Remove a classe 'hidden' para deslizar para baixo (mostrar)
                header.classList.remove('hidden');
            }
        } else {
            // Se estiver no topo da página, garante que está visível
            header.classList.remove('hidden');
        }

        // Atualiza a última posição de rolagem
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }, false); 
    
    // --- LÓGICA DO BOTÃO VOLTAR AO TOPO ---
    const scrollBtn = document.getElementById('scrollToTopBtn');

    // 1. Mostrar/Esconder o botão ao rolar a página
    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    });

    // 2. Função de rolagem suave ao clicar
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // --- INICIALIZAÇÃO DO CARROSSEL SWIPER ---
    // A biblioteca Swiper já deve ter sido carregada no seu HTML
    new Swiper(".mySwiper", {
        // --- PROPRIEDADES PARA ROLAGEM RÁPIDA E CONTÍNUA ---
        loop: true, // Garante a rolagem infinita
        autoplay: {
            delay: 1500, // Rolagem mais rápida a cada 1.5 segundos
            disableOnInteraction: false, // Continua o autoplay mesmo se o usuário interagir
        },
        speed: 1000, // 1 segundo de transição para o movimento ser suave
        // ---------------------------------------------------
        
        // Configuração de Layout
        slidesPerView: 2, 
        slidesPerColumn: 2, 
        spaceBetween: 20, 

        // Paginação (os pontinhos)
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        // Navegação (as setas)
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        
        // Responsividade
        breakpoints: {
            // Mobile (tela < 768px)
            320: {
                slidesPerView: 1, 
                slidesPerColumn: 1, 
                spaceBetween: 15,
            },
            // Tablet (tela >= 768px)
            768: {
                slidesPerView: 2, 
                slidesPerColumn: 2, 
                spaceBetween: 20,
            },
            // Desktop (tela >= 1024px)
            1024: {
                slidesPerView: 5, 
                slidesPerColumn: 2,
                spaceBetween: 30,
            },
        },
    });
});