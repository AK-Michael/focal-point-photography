// Form Validation
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Form validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
                // Form submission message
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
});

// Gallery Image Modal
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            const caption = this.querySelector('.gallery-caption').textContent;
            
            // Modal
            const modal = document.createElement('div');
            modal.className = 'modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <img src="${imgSrc}" alt="${caption}">
                    <p>${caption}</p>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            // Modal Close
            const closeBtn = modal.querySelector('.close');
            closeBtn.onclick = function() {
                modal.remove();
            };
            
            modal.onclick = function(e) {
                if (e.target === modal) {
                    modal.remove();
                }
            };
        });
    });
});

// Navigation Links Scrolling
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Modal CSSS
const style = document.createElement('style');
style.textContent = `
    .modal {
        display: block;
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.9);
    }
    
    .modal-content {
        margin: auto;
        display: block;
        max-width: 90%;
        max-height: 90vh;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }
    
    .modal-content img {
        max-width: 100%;
        max-height: 80vh;
        object-fit: contain;
    }
    
    .modal-content p {
        color: white;
        text-align: center;
        margin-top: 1rem;
    }
    
    .close {
        position: absolute;
        right: 25px;
        top: 10px;
        color: #f1f1f1;
        font-size: 35px;
        font-weight: bold;
        cursor: pointer;
    }
`;
document.head.appendChild(style); 