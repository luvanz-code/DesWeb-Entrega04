/* === Conteúdo COMPLETO para: javascript/index.js === */

// Espera o documento carregar
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Lógica do Menu Hambúrguer (MANTIDA) ---
    const hamburgerButton = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');

    // Verifica se os elementos do menu existem antes de adicionar o clique
    if (hamburgerButton && mobileMenu) {
        hamburgerButton.addEventListener('click', () => {
            // Alterna (liga/desliga) a classe 'hidden' no menu mobile
            mobileMenu.classList.toggle('hidden');
        });
    }

    // --- INÍCIO DA LÓGICA DO MODO ESCURO (NOVA) ---
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    // Usamos 'document.documentElement' (a tag <html>) para evitar piscar,
    // mas 'document.body' também funciona se preferir.
    const rootHtml = document.documentElement; 

    // Verifica se os elementos do modo escuro existem
    if (darkModeToggle && sunIcon && moonIcon) {
        
        // Função para aplicar o tema (dark ou light)
        const applyTheme = (theme) => {
            if (theme === 'dark') {
                rootHtml.classList.add('dark');
                sunIcon.classList.add('hidden');
                moonIcon.classList.remove('hidden');
                localStorage.setItem('theme', 'dark');
            } else {
                rootHtml.classList.remove('dark');
                sunIcon.classList.remove('hidden');
                moonIcon.classList.add('hidden');
                localStorage.setItem('theme', 'light');
            }
        };

        // 1. Inicialização: Verifica a preferência salva ou do sistema
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        // Define o tema inicial
        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            applyTheme('dark');
        } else {
            applyTheme('light');
        }

        // 2. Evento de clique no botão
        darkModeToggle.addEventListener('click', () => {
            // Verifica qual é o tema ATUAL e inverte
            const currentTheme = rootHtml.classList.contains('dark') ? 'light' : 'dark';
            applyTheme(currentTheme);
        });
    }
    // --- FIM DA LÓGICA DO MODO ESCURO ---

    // Você pode descomentar o alerta se quiser
    // alert("Bem-vindo à Ong Água Limpa para Todos!");

    console.log("index.js carregado com sucesso (com menu e modo escuro).");
});
