const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

const filterButtons = document.querySelectorAll('.filter-btn');
const menuItems = document.querySelectorAll('.menu-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const category = button.dataset.category;

        menuItems.forEach(item => {
            if (category === 'all' || item.dataset.category === category) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 10);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('click', () => {
    document.querySelector('#menu').scrollIntoView({ behavior: 'smooth' });
});

const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

menuItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'opacity 0.6s, transform 0.6s';
    observer.observe(item);
});

const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'scale(0.8)';
    item.style.transition = 'opacity 0.6s, transform 0.6s';
    observer.observe(item);
});

const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const inputs = form.querySelectorAll('input, textarea');
    
    form.querySelector('.submit-btn').textContent = 'Отправлено!';
    form.querySelector('.submit-btn').style.background = '#4caf50';
    
    setTimeout(() => {
        form.reset();
        form.querySelector('.submit-btn').textContent = 'Отправить';
        form.querySelector('.submit-btn').style.background = '';
    }, 2000);
});

let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

header.style.transition = 'transform 0.3s';

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

const menuItemCards = document.querySelectorAll('.menu-item');
menuItemCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

const galleryItemCards = document.querySelectorAll('.gallery-item');
const galleryImages = [
    'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=500',
    'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=500',
    'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=500',
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500',
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500',
    'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=500'
];
galleryItemCards.forEach((item, index) => {
    item.style.backgroundImage = `url('${galleryImages[index]}')`;
});

const menuItemImages = document.querySelectorAll('.menu-item-image');
const menuImages = [
    'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=500',
    'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500',
    'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500',
    'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500',
    'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=500',
    'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500',
    'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500',
    'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500'
];
menuItemImages.forEach((image, index) => {
    image.style.backgroundImage = `url('${menuImages[index]}')`;
});