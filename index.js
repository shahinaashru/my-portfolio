const words = [
        "Frontend Developer",
        "Backend Developer",
        "Web Designer",
        "Freelancer",
      ];
      let i = 0;
      let j = 0;
      let currentWord = "";
      let isDeleting = false;
      const typingSpeed = 150;
      const erasingSpeed = 100;
      const delayBetweenWords = 1000;
      const typingElement = document.getElementById("typing");

      function type() {
        if (i >= words.length) i = 0;
        currentWord = words[i];

        if (!isDeleting) {
          typingElement.textContent = currentWord.substring(0, j + 1);
          j++;
          if (j === currentWord.length) {
            isDeleting = true;
            setTimeout(type, delayBetweenWords);
            return;
          }
        } else {
          typingElement.textContent = currentWord.substring(0, j - 1);
          j--;
          if (j === 0) {
            isDeleting = false;
            i++;
          }
        }
        setTimeout(type, isDeleting ? erasingSpeed : typingSpeed);
      }

      type();
    //   project
const filterButtons = document.querySelectorAll('.filter-buttons button');
const projectItems = document.querySelectorAll('.project-item');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // remove active from all
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');
    projectItems.forEach(item => {
      if (filter === 'all' || item.classList.contains(filter)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
// scroll effect
const scrollElements = document.querySelectorAll('.scroll-left, .scroll-right, .scroll-top, .scroll-zoom');

function elementInView(el, offset = 0) {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop <= (window.innerHeight - offset);
}

function displayScrollElement() {
  scrollElements.forEach(el => {
    if (elementInView(el, 100)) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', displayScrollElement);
window.addEventListener('load', displayScrollElement);

// header scroll
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { // adjust scroll distance
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

