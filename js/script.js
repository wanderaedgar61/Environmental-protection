// Function to show/hide sections
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('show');
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('show');
        // Scroll to the section
        selectedSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Event listener for keyboard navigation
document.addEventListener('DOMContentLoaded', function() {
    console.log('Environmental Protection Website Loaded');
    
    // Show home section by default
    showSection('home');

    // Add keyboard navigation (1-5 keys for navigation)
    document.addEventListener('keydown', function(event) {
        const sections = ['home', 'awareness', 'data', 'actions', 'about'];
        const key = event.key;
        
        if (key >= '1' && key <= '5') {
            const index = parseInt(key) - 1;
            if (sections[index]) {
                showSection(sections[index]);
            }
        }
    });

    // Add scroll animation for elements
    addScrollAnimations();

    // Initialize interactive stats counter
    initStatsCounter();
});

// Add smooth scroll animation to elements on view
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add CSS animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);

    // Observe all cards and items
    document.querySelectorAll('.issue-card, .stat-box, .action-item').forEach(el => {
        observer.observe(el);
    });
}

// Stats counter animation
function initStatsCounter() {
    const statBoxes = document.querySelectorAll('.stat-box h3');
    
    const stats = [
        { target: 42, symbol: '%' },
        { target: 5, symbol: ' Trillion' },
        { target: 1, symbol: '°C' },
        { target: 1, symbol: ' Million' }
    ];

    let observed = false;

    const statsObserver = new IntersectionObserver(function(entries) {
        if (entries[0].isIntersecting && !observed) {
            observed = true;
            
            statBoxes.forEach((box, index) => {
                if (stats[index]) {
                    animateStatCounter(box, 0, stats[index].target, stats[index].symbol);
                }
            });
        }
    }, { threshold: 0.5 });

    // Find the stats section and observe it
    const dataSection = document.getElementById('data');
    if (dataSection) {
        statsObserver.observe(dataSection);
    }
}

// Animate number counter
function animateStatCounter(element, start, end, symbol) {
    const duration = 2000; // 2 seconds
    const startTime = Date.now();
    
    function update() {
        const elapsed = Date.now() - startTime;
        const progress = elapsed / duration;
        
        if (progress < 1) {
            const current = Math.floor(start + (end - start) * progress);
            element.textContent = current + symbol;
            requestAnimationFrame(update);
        } else {
            element.textContent = end + symbol;
        }
    }
    
    update();
}

// Smooth scroll for anchor links (if added in future)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

function checkAnswer(answer) {
  let result = document.getElementById("quiz-result");
  if (answer === "cutting") {
    result.textContent = "Correct! Cutting trees causes deforestation";
    result.style.color = "blue";
  } else {
    result.textContent = "Correct answer is cutting trees";
    result.style.color = "red";
  }
}

function resetQuiz() {
  let result = document.getElementById("quiz-result");
  result.textContent = "";
}

// Add interactive features
window.addEventListener('load', function() {
    console.log('All resources loaded');
    improvedAccessibility();
});

// Accessibility improvements
function improvedAccessibility() {
    document.querySelectorAll('.menu button').forEach(button => {
        button.setAttribute('role', 'button');
        button.setAttribute('tabindex', '0');
    });

    const style = document.createElement('style');
    style.textContent = `
        button:focus,
        a:focus {
            outline: 2px solid #4caf50;
            outline-offset: 2px;
        }
    `;
    document.head.appendChild(style);
}

// Navbar scroll direction with fade
const navbar = document.getElementById('navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScrollTop) {
    // Scrolling down → hide
    navbar.classList.add('hidden');
  } else {
    // Scrolling up → show
    navbar.classList.remove('hidden');
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});