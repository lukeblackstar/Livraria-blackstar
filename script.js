document.addEventListener('DOMContentLoaded', function() {

    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });

    const booksContainer = document.querySelector('.books-container');
    const prevBtn = document.querySelector('.slider-arrow.prev');
    const nextBtn = document.querySelector('.slider-arrow.next');
    
    prevBtn.addEventListener('click', function() {
        booksContainer.scrollBy({
            left: -300,
            behavior: 'smooth'
        });
    });
    
    nextBtn.addEventListener('click', function() {
        booksContainer.scrollBy({
            left: 300,
            behavior: 'smooth'
        });
    });
    
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    let currentTestimonial = 0;
    
    function showTestimonial(index) {
        testimonials.forEach(testimonial => {
            testimonial.classList.remove('active');
        });
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        testimonials[index].classList.add('active');
        dots[index].classList.add('active');
        currentTestimonial = index;
    }
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            showTestimonial(index);
        });
    });
    
    setInterval(() => {
        let nextIndex = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(nextIndex);
    }, 5000);


function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

const quickViewButtons = document.querySelectorAll('.quick-view');
quickViewButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        openModal(`bookModal${index + 1}`);
    });
});

window.onclick = function(event) {
    const modals = document.querySelectorAll('.book-modal');
    modals.forEach((modal) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

    
    quickViewBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });
    
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    const minusBtn = document.querySelector('.qty-btn.minus');
    const plusBtn = document.querySelector('.qty-btn.plus');
    const qtyInput = document.querySelector('.quantity input');
    
    minusBtn.addEventListener('click', function() {
        let value = parseInt(qtyInput.value);
        if (value > 1) {
            qtyInput.value = value - 1;
        }
    });
    
    plusBtn.addEventListener('click', function() {
        let value = parseInt(qtyInput.value);
        if (value < 10) {
            qtyInput.value = value + 1;
        }
    });
    
    const addToCartBtns = document.querySelectorAll('.add-to-cart, .add-to-cart-modal');
    const cartCount = document.querySelector('.cart-count');
    
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            let currentCount = parseInt(cartCount.textContent);
            cartCount.textContent = currentCount + 1;
            
            btn.textContent = 'Adicionado!';
            btn.style.backgroundColor = '#2ecc71';
            
            setTimeout(() => {
                if (btn.classList.contains('add-to-cart')) {
                    btn.textContent = 'Adicionar ao Carrinho';
                } else {
                    btn.textContent = 'Adicionar ao Carrinho';
                }
                btn.style.backgroundColor = '';
            }, 2000);
        });
    });
    
    const wishlistBtn = document.querySelector('.wishlist-btn');
    
    wishlistBtn.addEventListener('click', function() {
        const heartIcon = wishlistBtn.querySelector('i');
        
        if (heartIcon.classList.contains('far')) {
            heartIcon.classList.remove('far');
            heartIcon.classList.add('fas');
            heartIcon.style.color = '#e74c3c';
        } else {
            heartIcon.classList.remove('fas');
            heartIcon.classList.add('far');
            heartIcon.style.color = '';
        }
    });
    
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show'); 
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    const books = document.querySelectorAll('.hero .book');
    
    books.forEach(book => {
        book.addEventListener('mouseover', function() {
            books.forEach(b => {
                if (b !== book) {
                    b.style.transform = 'scale(0.95) ' + b.style.transform;
                    b.style.opacity = '0.7';
                }
            });
        });
        
        book.addEventListener('mouseout', function() {
            books.forEach(b => {
                b.style.transform = '';
                b.style.opacity = '';
            });
        });
    });
    
    const newsletterForm = document.querySelector('.newsletter-form');
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput.value;
        
        if (email) {

            const formContainer = document.querySelector('.newsletter-content');
            formContainer.innerHTML = `
                <h2>Obrigado por se inscrever!</h2>
                <p>Enviamos um email de confirmação para ${email}. Em breve você receberá nossas novidades.</p>
            `;
        }
    });
    
    window.addEventListener('scroll', function() {
        const hero = document.querySelector('.hero');
        const scrollPosition = window.pageYOffset;
        
        if (scrollPosition < 600) {
            hero.style.backgroundPosition = `50% ${scrollPosition * 0.4}px`;
        }
    });
    
    const categoryCards = document.querySelectorAll('.category-card');
    
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    function animateOnScroll() {
        categoryCards.forEach((card, index) => {
            if (isInViewport(card)) {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 150);
            }
        });
    }
    
    categoryCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
    
    const body = document.body;
    body.classList.add('loading');
    
    setTimeout(() => {
        body.classList.remove('loading');
    }, 500);
});