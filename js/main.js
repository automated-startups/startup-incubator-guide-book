/* Main JavaScript file for Startup Incubator Guide Website */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Back to top button
    const backToTopBtn = document.querySelector('.back-to-top');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
        
        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            }
        });
    });
    
    // Search functionality
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    
    if (searchInput && searchResults) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase().trim();
            
            if (query.length < 2) {
                searchResults.innerHTML = '';
                searchResults.style.display = 'none';
                return;
            }
            
            // Simple search through page content
            const contentElements = document.querySelectorAll('main h2, main h3, main p');
            let results = [];
            
            contentElements.forEach(element => {
                const text = element.textContent.toLowerCase();
                if (text.includes(query)) {
                    let elementType = element.tagName.toLowerCase();
                    let sectionTitle = '';
                    
                    // Find the closest section title
                    if (elementType === 'h3' || elementType === 'p') {
                        let currentElement = element;
                        while (currentElement) {
                            if (currentElement.tagName === 'H2') {
                                sectionTitle = currentElement.textContent;
                                break;
                            }
                            currentElement = currentElement.previousElementSibling;
                        }
                    }
                    
                    // Create a result object
                    results.push({
                        title: element.textContent,
                        type: elementType,
                        section: sectionTitle,
                        element: element
                    });
                }
            });
            
            // Display results
            if (results.length > 0) {
                searchResults.innerHTML = '';
                results.slice(0, 5).forEach(result => {
                    const resultItem = document.createElement('div');
                    resultItem.className = 'search-result-item';
                    
                    let resultTitle = result.title;
                    if (resultTitle.length > 50) {
                        resultTitle = resultTitle.substring(0, 50) + '...';
                    }
                    
                    resultItem.innerHTML = `
                        <h4>${resultTitle}</h4>
                        ${result.section ? `<p>In: ${result.section}</p>` : ''}
                    `;
                    
                    resultItem.addEventListener('click', function() {
                        result.element.scrollIntoView({
                            behavior: 'smooth'
                        });
                        searchResults.style.display = 'none';
                        searchInput.value = '';
                    });
                    
                    searchResults.appendChild(resultItem);
                });
                
                searchResults.style.display = 'block';
            } else {
                searchResults.innerHTML = '<div class="search-result-item"><p>No results found</p></div>';
                searchResults.style.display = 'block';
            }
        });
        
        // Close search results when clicking outside
        document.addEventListener('click', function(e) {
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                searchResults.style.display = 'none';
            }
        });
    }
    
    // Accordion functionality for mobile view
    const accordionToggles = document.querySelectorAll('.accordion-toggle');
    
    if (accordionToggles.length > 0) {
        accordionToggles.forEach(toggle => {
            toggle.addEventListener('click', function() {
                this.classList.toggle('active');
                const content = this.nextElementSibling;
                
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + 'px';
                }
            });
        });
    }
    
    // Initialize any interactive elements
    initializeInteractiveElements();
});

// Function to initialize interactive elements
function initializeInteractiveElements() {
    // Tabs functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    
    if (tabButtons.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                const tabContainer = this.closest('.tabs-container');
                
                // Remove active class from all buttons and content
                tabContainer.querySelectorAll('.tab-button').forEach(btn => {
                    btn.classList.remove('active');
                });
                
                tabContainer.querySelectorAll('.tab-content').forEach(content => {
                    content.classList.remove('active');
                });
                
                // Add active class to current button and content
                this.classList.add('active');
                document.getElementById(tabId).classList.add('active');
            });
        });
        
        // Activate first tab by default
        document.querySelectorAll('.tabs-container').forEach(container => {
            const firstButton = container.querySelector('.tab-button');
            if (firstButton) {
                firstButton.click();
            }
        });
    }
    
    // Tooltip functionality
    const tooltips = document.querySelectorAll('[data-tooltip]');
    
    if (tooltips.length > 0) {
        tooltips.forEach(tooltip => {
            tooltip.addEventListener('mouseenter', function() {
                const tooltipText = this.getAttribute('data-tooltip');
                const tooltipElement = document.createElement('div');
                tooltipElement.className = 'tooltip';
                tooltipElement.textContent = tooltipText;
                
                document.body.appendChild(tooltipElement);
                
                const rect = this.getBoundingClientRect();
                tooltipElement.style.top = rect.top - tooltipElement.offsetHeight - 10 + 'px';
                tooltipElement.style.left = rect.left + (rect.width / 2) - (tooltipElement.offsetWidth / 2) + 'px';
                
                tooltipElement.classList.add('visible');
                
                this.addEventListener('mouseleave', function() {
                    tooltipElement.remove();
                });
            });
        });
    }
}
