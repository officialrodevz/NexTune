document.addEventListener('DOMContentLoaded', () => {
    // Initialize particles with improved coverage
    particlesJS('particles', {
      particles: {
        number: {
          value: 100, 
          density: {
            enable: true,
            value_area: 1000 
          }
        },
        color: {
          value: '#7289d9'
        },
        shape: {
          type: 'circle'
        },
        opacity: {
          value: 0.5,
          random: true
        },
        size: {
          value: 3,
          random: true
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#7289d9',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 1.5, 
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'bounce' 
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'grab'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1
            }
          }
        }
      },
      retina_detect: true
    });
  
    // Smooth scrolling
    document.querySelectorAll('.nav-link').forEach(link => {
      if (link.getAttribute('href').startsWith('#')) {
        link.addEventListener('click', e => {
          e.preventDefault();
          const targetId = link.getAttribute('href').substring(1);
          document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
          });
        });
      }
    });
  
    // Clipboard functionality
    document.querySelectorAll('.command-item').forEach(item => {
      item.addEventListener('click', async () => {
        const command = item.dataset.command;
        try {
          await navigator.clipboard.writeText(command);
          item.classList.add('copied');
          setTimeout(() => item.classList.remove('copied'), 1000);
        } catch (err) {
          console.error('Failed to copy:', err);
        }
      });
    });
  });