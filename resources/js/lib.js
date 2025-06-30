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

        
// Search functionality
        const searchInput = document.getElementById('searchInput');
        const programCards = document.querySelectorAll('[data-program]');
        
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            programCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('p').textContent.toLowerCase();
                const company = card.querySelector('.company-badge').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || description.includes(searchTerm) || company.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
        
        // Category filter
        function filterCategory(category) {
            const sections = document.querySelectorAll('.category-section');
            const buttons = document.querySelectorAll('.category-filter');
            
            // Update active button
            buttons.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            
            if (category === 'all') {
                sections.forEach(section => section.style.display = 'block');
            } else {
                sections.forEach(section => {
                    if (section.dataset.category === category) {
                        section.style.display = 'block';
                    } else {
                        section.style.display = 'none';
                    }
                });
            }
        }
        
        // Copy code functionality
        function copyCode(button) {
            const codeBlock = button.nextElementSibling;
            const text = codeBlock.textContent;
            
            navigator.clipboard.writeText(text).then(() => {
                const originalText = button.textContent;
                button.textContent = 'Copiado!';
                button.style.background = '#10B981';
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.background = '#ff9100';
                }, 2000);
            });
        }
        
        // Animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);
        
        // Observe all program cards
        programCards.forEach(card => {
            observer.observe(card);
        });