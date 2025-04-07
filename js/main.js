document.addEventListener('DOMContentLoaded', () => {
    try {
        // Dark mode functionality
        const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
        const themeLabels = document.querySelectorAll('.theme-label');
        
        if (toggleSwitch) {
            const currentTheme = localStorage.getItem('theme');

            if (currentTheme) {
                document.documentElement.setAttribute('data-theme', currentTheme);
                if (currentTheme === 'dark') {
                    toggleSwitch.checked = true;
                    updateThemeLabels(true);
                } else {
                    updateThemeLabels(false);
                }
            }

            toggleSwitch.addEventListener('change', function(e) {
                if (e.target.checked) {
                    document.documentElement.setAttribute('data-theme', 'dark');
                    localStorage.setItem('theme', 'dark');
                    updateThemeLabels(true);
                } else {
                    document.documentElement.setAttribute('data-theme', 'light');
                    localStorage.setItem('theme', 'light');
                    updateThemeLabels(false);
                }
            });
        }

        // Function to update theme labels
        function updateThemeLabels(isDark) {
            if (themeLabels.length >= 2) {
                themeLabels[0].textContent = isDark ? 'Light' : 'Light';
                themeLabels[1].textContent = isDark ? 'Dark' : 'Dark';
            }
        }

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    } catch (error) {
        console.error('Error initializing website:', error);
    }
}); 