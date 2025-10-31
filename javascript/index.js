document.addEventListener('DOMContentLoaded',()=>{const hamburgerButton=document.getElementById('hamburger-button');const mobileMenu=document.getElementById('mobile-menu');if(hamburgerButton&&mobileMenu){hamburgerButton.addEventListener('click',()=>{mobileMenu.classList.toggle('hidden')})}
const darkModeToggle=document.getElementById('dark-mode-toggle');const sunIcon=document.getElementById('sun-icon');const moonIcon=document.getElementById('moon-icon');const rootHtml=document.documentElement;if(darkModeToggle&&sunIcon&&moonIcon){const applyTheme=(theme)=>{if(theme==='dark'){rootHtml.classList.add('dark');sunIcon.classList.add('hidden');moonIcon.classList.remove('hidden');localStorage.setItem('theme','dark')}else{rootHtml.classList.remove('dark');sunIcon.classList.remove('hidden');moonIcon.classList.add('hidden');localStorage.setItem('theme','light')}};const savedTheme=localStorage.getItem('theme');const prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;if(savedTheme==='dark'||(!savedTheme&&prefersDark)){applyTheme('dark')}else{applyTheme('light')}
darkModeToggle.addEventListener('click',()=>{const currentTheme=rootHtml.classList.contains('dark')?'light':'dark';applyTheme(currentTheme)})}
console.log("index.js carregado com sucesso (com menu e modo escuro).")})

<script>
        const toggleButton = document.getElementById('dark-toggle');
        const body = document.body;
        const hamburgerButton = document.getElementById('hamburger-button');
        const mobileMenu = document.getElementById('mobile-menu');

        // Carrega preferência salva
        if (localStorage.getItem('theme') === 'dark') {
            body.classList.add('dark');
            toggleButton.textContent = '☀️';
        }

        toggleButton.addEventListener('click', () => {
            body.classList.toggle('dark');
            const isDark = body.classList.contains('dark');
            toggleButton.textContent = isDark ? '☀️' : '🌙';
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });

        hamburgerButton.addEventListener('click', () => {
            const isExpanded = hamburgerButton.getAttribute('aria-expanded') === 'true';
            hamburgerButton.setAttribute('aria-expanded', !isExpanded);
            mobileMenu.classList.toggle('hidden');
        });
    </script>

    <script>
        const toggleButton = document.getElementById('dark-toggle');
        const body = document.body;

        if (localStorage.getItem('theme') === 'dark') {
            body.classList.add('dark');
            toggleButton.textContent = '☀️';
        }

        toggleButton.addEventListener('click', () => {
            body.classList.toggle('dark');
            const isDark = body.classList.contains('dark');
            toggleButton.textContent = isDark ? '☀️' : '🌙';
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    </script>

    