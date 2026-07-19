// scroll-top.js - универсальный скрипт для стрелки вверх

// Создаем элемент стрелки если его нет
if (!document.getElementById('scrollTop')) {
    const scrollTopBtn = document.createElement('a');
    scrollTopBtn.id = 'scrollTop';
    scrollTopBtn.className = 'scroll-top';
    scrollTopBtn.href = '#';
    scrollTopBtn.setAttribute('aria-label', 'Przewiń do góry');
    scrollTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    document.body.appendChild(scrollTopBtn);
    
    // Добавляем стили если их нет
    if (!document.querySelector('style[data-scroll-top]')) {
        const style = document.createElement('style');
        style.setAttribute('data-scroll-top', 'true');
        style.textContent = `
            .scroll-top {
                position: fixed;
                bottom: 30px;
                right: 30px;
                width: 50px;
                height: 50px;
                background: #4CAF50;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 1.5rem;
                text-decoration: none;
                box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
                z-index: 9999;
                cursor: pointer;
            }
            .scroll-top.visible {
                opacity: 1;
                visibility: visible;
            }
            .scroll-top:hover {
                background: #3d8b40;
                transform: translateY(-5px);
                box-shadow: 0 8px 20px rgba(0,0,0,0.3);
            }
            @media (max-width: 768px) {
                .scroll-top {
                    bottom: 20px;
                    right: 20px;
                    width: 45px;
                    height: 45px;
                    font-size: 1.3rem;
                }
            }
            @media (max-width: 480px) {
                .scroll-top {
                    bottom: 15px;
                    right: 15px;
                    width: 40px;
                    height: 40px;
                    font-size: 1.2rem;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Логика работы стрелки
    const btn = document.getElementById('scrollTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });
    
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
