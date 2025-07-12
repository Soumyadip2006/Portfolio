
document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed('#element', {
          strings: ['Web Developer', 'App Developer'],
          typeSpeed: 120,
        });

    const resumeButtons = document.querySelectorAll('.resume-btn');

    resumeButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
        
            const resumeDetails = document.querySelectorAll('.resume-details');

            resumeButtons.forEach(button => {
                button.classList.remove('active');
            });
            button.classList.add('active');

            resumeDetails.forEach(details => {
                details.classList.remove('active');
            });
            resumeDetails[index].classList.add('active');
            console.log("Buttons found:", resumeButtons.length);
            console.log("Resume details found:", document.querySelectorAll('.resume-details').length);
        });
    });

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav ul li a');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';

        sections.forEach(sec => {
            const sectionTop = sec.offsetTop - 120; // Adjust for fixed nav height
            const sectionHeight = sec.offsetHeight;
            const sectionBottom = sectionTop + sectionHeight;

            if(pageYOffset >= sectionTop && pageYOffset < sectionBottom) {
                currentSectionId = sec.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href') === '#' + currentSectionId) {
                link.classList.add('active');
            }
        });
    });
});