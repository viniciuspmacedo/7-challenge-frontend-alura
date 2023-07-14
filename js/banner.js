const banner = document.querySelector('#banner');
const slides = banner.querySelectorAll('.slide');
const indicatorsContainer = banner.querySelector('.carousel-indicators')
const nextControl = document.querySelector('.next');
const previousControl = document.querySelector('.previous');

let currentSlide = 0;
const slideInterval = setInterval(nextSlide, 4000)

/* Cria os indicadores de navegação */
for (let i = 0; i < slides.length; i++) {
    const indicator = document.createElement('span');
    indicator.classList.add('indicator');
    indicator.setAttribute('onclick', 'goToSlide(' + i + ')');
    indicatorsContainer.appendChild(indicator);
}

// Adiciona a classe 'active' ao indicador do slide atual
const indicators = indicatorsContainer.getElementsByClassName('indicator');
indicators[currentSlide].classList.add('active');

/* inicia o banner com a primeira imagem carregada */
slides[currentSlide].style.display = 'block'

// Função para exibir o próximo slide
function nextSlide() {
    let nextSlideIndex = (currentSlide + 1) % slides.length;
    goToSlide(nextSlideIndex);
}

// Função para exibir o slide anterior
function previousSlide() {
    let previousSlideIndex = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(previousSlideIndex);
}

// Função para exibir um slide específico
function goToSlide(index) {
    // Oculta o slide atual
    slides[currentSlide].style.display = 'none';
    indicators[currentSlide].classList.remove('active');

    // Define o novo slide como atual
    currentSlide = index;

    // Exibe o novo slide
    slides[currentSlide].style.display = 'block';
    indicators[currentSlide].classList.add('active');
}

nextControl.setAttribute('onclick', 'nextSlide()')
previousControl.setAttribute('onclick', 'previousSlide()')
