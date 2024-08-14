

/**
 * Init typed.js
 */
const selectTyped = document.querySelector('.typed');
if (selectTyped) {
  let typed_strings = selectTyped.getAttribute('data-typed-items');
  typed_strings = typed_strings.split(',');
  new Typed('.typed', {
    strings: typed_strings,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000
  });
}



function setActiveClass() {
  const sections = document.querySelectorAll('section');
  const navLi = document.querySelectorAll('.left .pages li a');

  let current;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute('id');
    }
  });

  navLi.forEach(li => {
    li.classList.remove('active');
    if (li.getAttribute('href').includes(current)) {
      li.classList.add('active');
    }
  });
}


document.addEventListener('DOMContentLoaded', function () {
  window.scrollTo(0, 0);
});


document.addEventListener('scroll', setActiveClass);


const workCardsData = [
  {
    filter: 'filter-app',
    imgSrc: './Images/work8.jpg',
    title: 'Social Media App',
    description: 'The App connects you to the talented people around the world',
    link: '#'
  },
  {
    filter: 'filter-product',
    imgSrc: './Images/work9.jpg',
    title: 'Music App',
    description: 'Stream and enjoy your favorite music from around the world',
    link: '#'
  },
  {
    filter: 'filter-branding',
    imgSrc: './Images/work10.jpg',
    title: 'Online Shopping App',
    description: 'A seamless shopping experience with the best deals and offers',
    link: '#'
  },
  {
    filter: 'filter-app',
    imgSrc: './Images/work4.jpg',
    title: 'Fitness Tracker App',
    description: 'Track your workouts and progress with this comprehensive fitness app',
    link: '#'
  },
  {
    filter: 'filter-product',
    imgSrc: './Images/work5.jpg',
    title: 'Recipe Finder App',
    description: 'Discover and share recipes from around the world',
    link: '#'
  },
  {
    filter: 'filter-branding',
    imgSrc: './Images/work6.jpg',
    title: 'Travel Planner App',
    description: 'Plan your trips and adventures with ease',
    link: '#'
  },
  {
    filter: 'filter-books',
    imgSrc: './Images/work7.jpg',
    title: 'News Aggregator App',
    description: 'Stay updated with the latest news from multiple sources',
    link: '#'
  },
  {
    filter: 'filter-app',
    imgSrc: './Images/work8.jpg',
    title: 'Language Learning App',
    description: 'Learn new languages with interactive lessons and practice',
    link: '#'
  },
  {
    filter: 'filter-product',
    imgSrc: './Images/work9.jpg',
    title: 'E-Book Reader App',
    description: 'Read and organize your e-books in a user-friendly interface',
    link: '#'
  },
  {
    filter: 'filter-branding',
    imgSrc: './Images/work10.jpg',
    title: 'Weather Forecast App',
    description: 'Get accurate and up-to-date weather forecasts for your location',
    link: '#'
  }
];

const workListContainer = document.getElementById('work-list');

workCardsData.forEach(card => {
  const workElement = document.createElement('div');
  workElement.className = 'work';
  workElement.classList.add(card.filter);
  workElement.innerHTML = `
        <img src="${card.imgSrc}" alt="${card.title}">
        <div class="layer">
          <h3>${card.title}</h3>
          <p>${card.description}</p>
          <a href="${card.link}"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
        </div>

    `;
  workListContainer.appendChild(workElement);
});


var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (link of tablinks) {
    link.classList.remove('active-link')
  }
  for (contents of tabcontents) {
    contents.classList.remove('active-tab')
  }
  event.currentTarget.classList.add('active-link')
  document.getElementById(tabname).classList.add('active-tab')
}


function toggleTopic(id) {
  const content = document.getElementById(id);
  const icon = content.previousElementSibling.querySelector('i');

  if (content.style.display === "block") {
    content.style.display = "none";
    icon.className = "fa fa-chevron-down";
  } else {
    content.style.display = "block";
    icon.className = "fa fa-chevron-up";
  }
}


function toggleMenu() {
  var menu = document.querySelector('.left');
  menu.classList.toggle('open');
}
