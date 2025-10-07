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