function toggleMobileMenu() {
            const menu = document.getElementById('mobileMenu');
            menu.classList.toggle('active');
        }

        // Fechar menu mobile ao redimensionar para desktop
        window.addEventListener('resize', function() {
            if (window.innerWidth >= 768) {
                document.getElementById('mobileMenu').classList.remove('active');
            }
        });