document.addEventListener('DOMContentLoaded', () => {
    // Adiciona evento de click para todos os links internos que usam #
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Rola suavemente para o elemento
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // -70 para compensar o header fixo
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Opcional: Adicionar uma classe ao header quando o usuário rolar
    const header = document.querySelector('.nav-bar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    // [Seu código de rolagem suave dos links internos já está aqui]

    const scrollBtn = document.getElementById('scrollToTopBtn');

    // 1. Mostrar/Esconder o botão ao rolar a página
    window.addEventListener('scroll', () => {
        // Se a posição da rolagem for maior que 300px (após o Hero)
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
            behavior: 'smooth' // Rola suavemente até o topo
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // [Seu código de rolagem suave dos links internos já está aqui]

    // ... (restante do seu código existente)

    // --- Lógica do Header Inteligente (Smart Header) ---
    let lastScrollTop = 0; // Armazena a última posição de rolagem
    const header = document.querySelector('.header'); // Seleciona o seu elemento header
    const headerHeight = header.offsetHeight; // Obtém a altura do header

    window.addEventListener('scroll', () => {
        let currentScroll = window.scrollY || document.documentElement.scrollTop;

        // Se a rolagem atual for 50px maior que zero (para ignorar o topo)
        if (currentScroll > 50) {
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
            // Se estiver no topo da página (menos de 50px de rolagem), garante que está visível
            header.classList.remove('hidden');
        }

        // Atualiza a última posição de rolagem para o próximo ciclo
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Garante que não é negativo
    }, false); 
    // Fim da Lógica do Header Inteligente

    // ... (restante do seu código existente, como o botão "Voltar ao Topo")
});